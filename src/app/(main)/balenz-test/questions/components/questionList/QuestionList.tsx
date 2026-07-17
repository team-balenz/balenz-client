import type { BalenzAnswers, BalenzQuestion, QuestionId } from '../../types/question';
import type { LikertValue } from '../../types/likert';
import QuestionItem from '../questionItem/QuestionItem';

import * as styles from './questionList.css';
import { useEffect, useRef } from 'react';

interface QuestionListPropTypes {
  // 화면에 보여줄 전체 질문 목록
  questions: readonly BalenzQuestion[];

  // 질문 ID를 key로 하는 현재 응답 상태
  answers: BalenzAnswers;

  // 한 문항의 응답이 바뀌면 상위 상태로 전달
  onAnswerChange: (questionId: QuestionId, value: LikertValue) => void;
}

const QuestionList = ({ questions, answers, onAnswerChange }: QuestionListPropTypes) => {
  // question.id 기준으로 실제 DOM 요소를 저장해두고, 나중에 스크롤 대상으로 사용
  const questionRefs = useRef(new Map<QuestionId, HTMLDivElement>());

  // 아직 응답되지 않은 첫 질문의 위치를 찾아서,
  // 그 이전 문항까지만 화면에 보여주도록 범위를 계산
  const firstUnansweredIndex = questions.findIndex(
    (question) => answers[question.id] === undefined,
  );

  // 마지막으로 응답하지 않은 질문까지 포함해서 렌더링
  const visibleQuestions =
    firstUnansweredIndex === -1 ? questions : questions.slice(0, firstUnansweredIndex + 1);

  const visibleQuestionCount = visibleQuestions.length;

  const lastVisibleQuestion = visibleQuestions[visibleQuestionCount - 1];

  // 최초 렌더링에서는 자동 스크롤이 발생하지 않도록 현재 노출 개수를 기준값으로
  const previousVisibleCountRef = useRef(visibleQuestionCount);

  useEffect(() => {
    const previousCount = previousVisibleCountRef.current;

    // 질문이 하나 더 노출된 경우에만 다음 문항 위치로 이동
    const hasNewQuestionAppeared = visibleQuestionCount > previousCount;

    if (hasNewQuestionAppeared && lastVisibleQuestion) {
      const questionElement = questionRefs.current.get(lastVisibleQuestion.id);

      // 사용자의 모션 선호 설정을 확인해, reduce motion이면 즉시 이동
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 렌더링이 끝난 뒤 스크롤을 수행해야 위치 계산이 안정적
      requestAnimationFrame(() => {
        questionElement?.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'center',
        });
      });
    }

    previousVisibleCountRef.current = visibleQuestionCount;
  }, [visibleQuestionCount, lastVisibleQuestion]);

  return (
    <div className={styles.container}>
      {visibleQuestions.map((question) => (
        <div
          key={question.id}
          ref={(element) => {
            // 마운트 시 저장하고, 언마운트되면 제거해서 Map을 최신 상태로 유지
            if (element) {
              questionRefs.current.set(question.id, element);
            } else {
              questionRefs.current.delete(question.id);
            }
          }}
          className={styles.questionWrapper}
        >
          <QuestionItem
            questionId={question.id}
            question={question.content}
            value={answers[question.id]}
            onChange={onAnswerChange}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

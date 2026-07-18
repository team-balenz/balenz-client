import type { BalenzAnswers, BalenzQuestion, QuestionId } from '../../types/question';
import type { LikertValue } from '../../types/likert';
import QuestionItem from '../questionItem/QuestionItem';

import * as styles from './questionList.css';
import { useEffect, useRef } from 'react';

interface QuestionListPropTypes {
  // 화면에 표시할 전체 질문 목록
  questions: readonly BalenzQuestion[];

  // 질문 ID별로 저장된 현재 응답
  answers: BalenzAnswers;

  // 응답 변경 시 질문 ID와 선택값을 상위로 전달
  onAnswerChange: (questionId: QuestionId, value: LikertValue) => void;
}

const QuestionList = ({ questions, answers, onAnswerChange }: QuestionListPropTypes) => {
  const questionRefs = useRef(new Map<QuestionId, HTMLDivElement>());

  const firstUnansweredIndex = questions.findIndex(
    (question) => answers[question.id] === undefined,
  );

  const visibleQuestions =
    firstUnansweredIndex === -1 ? questions : questions.slice(0, firstUnansweredIndex + 1);

  const visibleQuestionCount = visibleQuestions.length;

  const lastVisibleQuestion = visibleQuestions[visibleQuestionCount - 1];

  // 최초 렌더링에서는 자동 스크롤하지 않도록 현재 개수로 초기화
  const previousVisibleCountRef = useRef(visibleQuestionCount);

  useEffect(() => {
    const previousCount = previousVisibleCountRef.current;

    const hasNewQuestionAppeared = visibleQuestionCount > previousCount;

    if (hasNewQuestionAppeared && lastVisibleQuestion) {
      const questionElement = questionRefs.current.get(lastVisibleQuestion.id);

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

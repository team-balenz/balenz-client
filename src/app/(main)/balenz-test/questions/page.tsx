'use client';

import { useState } from 'react';

import QuestionList from './components/questionList/QuestionList';
import type { BalenzAnswers, QuestionId } from './types/question';
import type { LikertValue } from './types/likert';
import * as styles from './page.css';
import { MOCK_QUESTIONS } from '../../../../mocks/data/balenzTest';
import ResultSubmitBar from './components/resultSubmitBar/ResultSubmitBar';

export default function Page() {
  const [responses, setResponses] = useState<BalenzAnswers>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (questionId: QuestionId, value: LikertValue) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const totalCount = MOCK_QUESTIONS.length;

  // 현재 질문 목록에 존재하는 응답만 계산
  const answeredCount = MOCK_QUESTIONS.reduce((count, question) => {
    return responses[question.id] !== undefined ? count + 1 : count;
  }, 0);

  const handleSubmit = async () => {
    if (answeredCount !== totalCount || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      console.log({
        responses,
      });

      // 추후 API 연결
      // await submitBalenzTest({ responses });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.questionListViewport}>
          <div className={styles.likertWidth}>
            <QuestionList
              questions={MOCK_QUESTIONS}
              answers={responses}
              onAnswerChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.submitBarFixed}>
        <div className={styles.submitBarInner}>
          <ResultSubmitBar
            totalCount={totalCount}
            answeredCount={answeredCount}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

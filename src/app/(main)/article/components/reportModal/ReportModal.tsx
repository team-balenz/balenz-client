'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import BaseModal from '@/shared/components/baseModal/BaseModal';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import * as styles from './reportModal.css';
import { REPORT_REASONS, ReportStep } from './constants';

interface ReportModalPropTypes {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReportModal = ({ open, onOpenChange }: ReportModalPropTypes) => {
  const [step, setStep] = useState<ReportStep>('initial');
  const [selectedReason, setSelectedReason] = useState('');
  const [description, setDescription] = useState('');
  const breakpoint = useMediaQuery();

  const isMobile = breakpoint === 'mobile';

  // 모달이 닫히면 상태 리셋
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setStep('initial');
        setSelectedReason('');
        setDescription('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // 완료 모달 3초 후 자동 닫기
  useEffect(() => {
    if (step === 'completed') {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, onOpenChange]);

  const handleSubmit = () => {
    if (!selectedReason) {
      setStep('error');
      return;
    }

    // 제보 제출 로직
    console.log('Report submitted:', { selectedReason, description });
    setStep('completed');
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  if (step === 'completed') {
    return (
      <BaseModal open={open} onOpenChange={onOpenChange}>
        <div className={styles.completedContainer}>
          <h2 className={styles.completedTitle}>소중한 의견 감사합니다.</h2>
          <p className={styles.completedDescription}>
            보내주신 의견을 유의 깊게 검토해{'\n'} 더 균형 잡힌 정보 제공에 반영하겠습니다.
          </p>
          <div className={styles.logoImage}>
            <Image src="/logo/reportmodal_logo.svg" alt="제보 완료" width={305} height={308} />
          </div>
        </div>
      </BaseModal>
    );
  }

  return (
    <BaseModal open={open} onOpenChange={onOpenChange}>
      <div className={styles.container}>
        {/* 제목 섹션 */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>문제 제보하기</h2>
          <p className={styles.description}>
            balenz는 더 정확하고 신뢰할 수 있는 정보를{isMobile ? '\n' : ' '}제공하기 위해 사용자
            의견을 검토합니다.
          </p>
          <div className={styles.divider} />
        </div>

        {/* 문제 선택 섹션 */}
        <div className={styles.selectSection}>
          <div className={styles.labelWrapper}>
            <label className={styles.label}>어떤 문제가 있나요?</label>
            <span className={styles.required}>*</span>
          </div>
          {step === 'error' && (
            <div className={styles.errorMessage}>제보 사유를 필수로 선택해야합니다.</div>
          )}

          <div className={styles.radioGroup}>
            {REPORT_REASONS.map((reason) => (
              <label key={reason.id} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="report_reason"
                  value={reason.id}
                  checked={selectedReason === reason.id}
                  onChange={(e) => {
                    setSelectedReason(e.target.value);
                    if (step === 'error') {
                      setStep('initial');
                    }
                  }}
                  className={styles.radioInput}
                />
                {reason.label}
              </label>
            ))}
          </div>
        </div>

        {/* 추가 설명 섹션 */}
        <div className={styles.additionalSection}>
          <label className={styles.label}>추가로 설명해주세요.</label>
          <textarea
            className={styles.textArea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="문제가 있다면 자세히 알려주세요."
          />
        </div>

        {/* 버튼 그룹 */}
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            취소하기
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            문제 제보하기
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ReportModal;

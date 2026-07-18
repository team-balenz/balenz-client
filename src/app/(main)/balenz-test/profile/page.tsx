'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ROUTES } from '@/shared/constants/route';
import StepHeader from '../profile/components/stepHeader/StepHeader';

import { PROFILE_STEP_TITLE, STEP_HEADER_LABEL } from '../profile/components/stepHeader/constants';
import BirthYearSlider from '../profile/components/birthYearSlider/BirthYearSlider';
import GenderOptionCard from './components/genderOptionCard/GenderOptionCard';
import type { GenderType } from './components/genderOptionCard/types';
import StepNavigation from './components/stepNavigation/StepNavigation';
import type { ProfileStepTypes } from '../profile/types/profileStep';

import * as styles from './page.css';

export default function ProfilePage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<ProfileStepTypes>('birthYear');

  const [selectedBirthYear, setSelectedBirthYear] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<GenderType | null>(null);

  const isBirthYearStep = currentStep === 'birthYear';

  const handlePrevious = () => {
    if (isBirthYearStep) {
      router.push(ROUTES.BALENZ_TEST);
      return;
    }

    setCurrentStep('birthYear');
  };

  const handleNext = () => {
    // TODO: BirthYearSlider 구현 후 출생 연도 선택 여부에 따라 다음 단계로 이동
    // if (isBirthYearStep) {
    //   if (selectedBirthYear === null) return;

    //   setCurrentStep('gender');
    //   return;
    // }

    // TODO: BirthYearSlider 구현 전 임시 처리
    if (isBirthYearStep) {
      setSelectedBirthYear(2026);
      setCurrentStep('gender');
      return;
    }

    if (selectedGender === null) return;

    console.log({
      selectedBirthYear,
      gender: selectedGender,
    });

    router.push('/balenz-test/question');
  };

  const handleSkip = () => {
    if (isBirthYearStep) return;

    console.log({
      selectedBirthYear,
      gender: null, // TODO: API 명세에 맞는 건너뛰기 값으로 변경
    });

    router.push('/balenz-test/question');
  };

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div
          className={`${styles.stepContent} ${
            isBirthYearStep ? styles.birthYearStepContent : styles.genderStepContent
          }`}
        >
          <StepHeader section={STEP_HEADER_LABEL} title={PROFILE_STEP_TITLE[currentStep]} />

          <div className={styles.optionArea}>
            {isBirthYearStep ? (
              <BirthYearSlider value={selectedBirthYear} onChange={setSelectedBirthYear} />
            ) : (
              <GenderOptionCard value={selectedGender} onChange={setSelectedGender} />
            )}
          </div>
        </div>

        <div
          className={isBirthYearStep ? styles.birthYearNavigationArea : styles.genderNavigationArea}
        >
          <StepNavigation
            showPrevious
            showSkip={!isBirthYearStep}
            // TODO: BirthYearSlider 구현 후 출생 연도 선택 여부도 버튼 활성화 조건에 반영
            // isNextDisabled={isBirthYearStep ? selectedBirthYear === null : selectedGender === null}

            // TODO: BirthYearSlider 구현 전 임시 처리
            isNextDisabled={!isBirthYearStep && selectedGender === null}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </div>
      </section>
    </main>
  );
}

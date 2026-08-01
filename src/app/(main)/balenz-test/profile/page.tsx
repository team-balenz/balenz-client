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

  const [selectedBirthYear, setSelectedBirthYear] = useState<number>(2000);
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
    if (isBirthYearStep) {
      setCurrentStep('gender');
      return;
    }

    if (selectedGender === null) return;

    console.log({
      selectedBirthYear,
      gender: selectedGender,
    });

    router.push(ROUTES.BALENZ_TEST_QUESTIONS);
  };

  const handleSkip = () => {
    if (isBirthYearStep) return;

    console.log({
      selectedBirthYear,
      gender: null, // TODO: API 명세에 맞는 건너뛰기 값으로 변경
    });

    router.push(ROUTES.BALENZ_TEST_QUESTIONS);
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
            isNextDisabled={isBirthYearStep ? false : selectedGender === null}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </div>
      </section>
    </main>
  );
}

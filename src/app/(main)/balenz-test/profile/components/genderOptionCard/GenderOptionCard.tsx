'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';
import { useState } from 'react';

import { GENDER_OPTIONS } from './constants';
import type { GenderType } from './types';

import * as styles from './genderOptionCard.css';

interface GenderOptionCardPropTypes {
  value: GenderType | null;
  onChange: (gender: GenderType | null) => void;
}

const GenderOptionCard = ({ value, onChange }: GenderOptionCardPropTypes) => {
  const [hoveredGender, setHoveredGender] = useState<GenderType | null>(null);

  const handleGenderClick = (gender: GenderType) => {
    const nextGender = value === gender ? null : gender;

    onChange(nextGender);
  };

  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>, gender: GenderType) => {
    if (event.pointerType !== 'mouse') return;

    setHoveredGender(gender);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== 'mouse') return;

    setHoveredGender(null);
  };

  return (
    <div className={styles.container} role="radiogroup" aria-label="성별 선택">
      {GENDER_OPTIONS.map(({ value: gender, label, defaultIconPath, selectedIconPath }) => {
        const isSelected = value === gender;
        const isHovered = hoveredGender === gender;
        const isActive = isSelected || isHovered;

        return (
          <button
            key={gender}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={styles.card}
            data-selected={isSelected}
            onPointerEnter={(event) => handlePointerEnter(event, gender)}
            onPointerLeave={handlePointerLeave}
            onClick={() => handleGenderClick(gender)}
          >
            <Image
              src={isActive ? selectedIconPath : defaultIconPath}
              alt={`${label} 아이콘`}
              width={100}
              height={100}
              className={styles.genderIcon}
            />

            <span className={styles.label}>{label}</span>

            {isSelected && (
              <Image
                src="/icons/ic_check_circle.svg"
                alt=""
                width={40}
                height={40}
                className={styles.checkIcon}
                aria-hidden
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default GenderOptionCard;

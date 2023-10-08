import React, { KeyboardEvent, MouseEvent } from 'react';

import { SliderProps } from '@/components/slider/slider.proptypes';
import onKeyDown from '@/components/slider/onKeyDownHandler';

import styles from './slider.module.scss';

export function Slider({ children, ...props }: SliderProps) {
  const onNextButtonSliderClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const sliderItemsContainer = e.currentTarget.previousElementSibling
      ?.firstChild as HTMLDivElement;
    if (sliderItemsContainer.style) sliderItemsContainer.style.left = '-300px';
  };

  const onPrevButtonSliderClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const sliderItemsContainer = e.currentTarget.nextElementSibling
      ?.firstChild as HTMLDivElement;
    if (sliderItemsContainer.style) sliderItemsContainer.style.left = '0px';
  };

  return (
    <div className={styles.slider} {...props}>
      <div
        role='button'
        tabIndex={0}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          onPrevButtonSliderClickHandler(e)
        }
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          onKeyDown(e, onPrevButtonSliderClickHandler)
        }
        className={styles['prev-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
      <div className={styles['slider-items-wrapper']}>
        <div className={styles['slider-items-container']}>{children}</div>
      </div>
      <div
        role='button'
        tabIndex={0}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          onNextButtonSliderClickHandler(e)
        }
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown(e, onNextButtonSliderClickHandler);
        }}
        className={styles['next-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
    </div>
  );
}

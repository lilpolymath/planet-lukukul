/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { cx } from '@/utils/misc';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  onStart?: () => void;
  onFinish?: () => void;
}

export default function TypingAnimation({
  text,
  delay = 0,
  duration = 200,
  className,
  onStart,
  onFinish,
}: TypingAnimationProps) {
  const [i, setI] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDelayed, setIsDelayed] = useState<boolean>(true);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsDelayed(false);
      onStart && onStart();
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay, onStart]);

  useEffect(() => {
    if (isDelayed) return;

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI((prev) => prev + 1);
      } else {
        onFinish && onFinish();
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [duration, i, isDelayed, onFinish]);

  useEffect(() => {
    setDisplayedText('');
    setI(0);
    setIsDelayed(true);
  }, [text]);

  return <p className={cx(className)}>{displayedText}</p>;
}


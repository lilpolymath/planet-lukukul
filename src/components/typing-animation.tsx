import { useEffect, useState, useCallback } from 'react';

import { cx } from '@/utils/misc';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  onStart?: () => void;
  onFinish?: () => void;
}

const DEFAULT_DURATION = 200;

export default function TypingAnimation({
  text,
  delay = 0,
  duration = DEFAULT_DURATION,
  className,
  onStart,
  onFinish,
}: TypingAnimationProps) {
  const [i, setI] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDelayed, setIsDelayed] = useState<boolean>(true);

  const handleStart = useCallback(() => {
    onStart && onStart();
  }, [onStart]);

  const handleFinish = useCallback(() => {
    onFinish && onFinish();
  }, [onFinish]);

  useEffect(() => {
    if (isDelayed) return;

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.substring(0, i + 1));
        setI((prev) => prev + 1);
      } else {
        handleFinish();
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [duration, i, isDelayed, text]);

  useEffect(() => {
    setDisplayedText('');
    setI(0);
    setIsDelayed(true);

    const delayTimeout = setTimeout(() => {
      setIsDelayed(false);
      handleStart();
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text]);

  return <p className={cx(className)}>{displayedText}</p>;
}


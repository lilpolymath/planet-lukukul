import { cx } from '@/utils/misc';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  onStart?: () => void;
  onFinish?: () => void;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  onStart,
  onFinish,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    onStart && onStart();

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI((prev) => prev + 1);
      } else {
        onFinish && onFinish();
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  useEffect(() => {
    setDisplayedText('');
    setI(0);
  }, [text]);

  return <p className={cx(className)}>{displayedText}</p>;
}


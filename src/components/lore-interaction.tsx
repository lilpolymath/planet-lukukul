import React, { useEffect, useState } from 'react';
import { stagger, useAnimate } from 'framer-motion';

import { cx } from '@/utils/misc';
import storyData from '../utils/story.json';
import TypingAnimation from './typing-animation';
import check from '../assets/svg/check.svg';

type Choice = {
  text: string;
  next: string;
};

type StoryNode = {
  text: string;
  choices?: Choice[];
};

type TypingAnimationState = 'idle' | 'typing' | 'done';

const LoreInteraction: React.FC = () => {
  const [currentNodeKey, setCurrentNodeKey] = useState<string>('intro');
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  const [scope, animate] = useAnimate();
  const [status, setStatus] = useState<TypingAnimationState>('idle');

  useEffect(() => {
    if (status === 'typing') {
      const sequence = [
        ['.lore__text__node', { opacity: 1 }, { duration: 0.0001 }],
      ];

      animate(sequence as any);
    }

    if (status === 'done') {
      const sequence = [
        ['label', { opacity: 1, y: 0 }, { duration: 1, delay: stagger(0.1) }],
        [
          '.lore__text__node',
          { opacity: 1 },
          { duration: 1, delay: stagger(0.1) },
        ],
      ];

      animate(sequence as any);
    } else {
      const sequence = [
        ['label', { opacity: 0, y: '50%' }, { duration: 0.0001 }],
      ];

      animate(sequence as any);
    }
  }, [status]);

  const handleChoice = (nextKey: string) => {
    setCurrentNodeKey(nextKey);
    setSelectedChoice(null);
    setStatus('idle');
  };

  const currentNode: StoryNode = (storyData as any)[currentNodeKey];

  return (
    <section className='lore__container' ref={scope}>
      <div className='lore__image'>image here</div>
      <form className='lore__content'>
        <div className='lore__text'>
          <TypingAnimation
            text={currentNode.text}
            duration={40}
            onStart={() => setStatus('typing')}
            onFinish={() => setStatus('done')}
            className='lore__text__node'
          />
        </div>

        <div className='lore__options'>
          {currentNode.choices.map((choice, index) => (
            <div className='lore__options__node__container' key={index}>
              {selectedChoice === choice && (
                <div className='lore__options__node__check'>
                  <img src={check.src} alt='check' />
                </div>
              )}
              <label
                htmlFor={choice.next}
                className={cx(
                  'lore__options__node',
                  selectedChoice &&
                    selectedChoice === choice &&
                    'lore__options__node--selected'
                )}
                style={{
                  pointerEvents: status === 'done' ? 'auto' : 'none',
                }}
              >
                {choice.text}
              </label>
              <input
                id={choice.next}
                name='choice'
                type='radio'
                checked={selectedChoice === choice}
                onChange={() => setSelectedChoice(choice)}
                value={choice.next}
              />
            </div>
          ))}
        </div>

        {selectedChoice && (
          <button
            type='button'
            className='lore__options__next'
            onClick={() => {
              handleChoice(selectedChoice.next);
            }}
          >
            Next
          </button>
        )}
      </form>
    </section>
  );
};

export default LoreInteraction;


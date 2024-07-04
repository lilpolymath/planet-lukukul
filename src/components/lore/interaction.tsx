/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from 'react';
import { stagger, useAnimate } from 'framer-motion';

import {
  Choice,
  Archetype,
  TypingAnimationState,
  StoryNode,
} from '@/utils/types';

import storyData from '@/utils/story.json';
import archetypeData from '@/utils/archetypes.json';

import LoreOption from './option';
import ArchetypeResult from './archetype-result';
import TypingAnimation from '../typing-animation';

import lore from '@/assets/images/lore/1.jpeg';

const LoreImage: FC = () => (
  <div className='lore__image'>
    <img src={lore.src} alt='' />
  </div>
);

const LoreInteraction: FC = () => {
  const [currentNodeKey, setCurrentNodeKey] = useState<string>('intro');
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [userChoices, setUserChoices] = useState<string[]>([]);
  const [finalArchetype, setFinalArchetype] = useState<Archetype | null>(null);

  const [scope, animate] = useAnimate();
  const [status, setStatus] = useState<TypingAnimationState>('idle');

  const currentNode: StoryNode = (storyData as any)[currentNodeKey];

  const findMatchingArchetype = () => {
    const bestMatch = archetypeData.archetypes.reduce(
      (best: Archetype | null, archetype: Archetype) => {
        const matchScore = archetype.conditions.filter((condition) =>
          userChoices.includes(condition)
        ).length;
        return matchScore > (best ? best.conditions.length : -1)
          ? archetype
          : best;
      },
      null
    );
    setFinalArchetype(bestMatch);
  };

  const handleChoice = (nextKey: string) => {
    setCurrentNodeKey(nextKey);
    setSelectedChoice(null);
    setStatus('idle');
  };

  useEffect(() => {
    const sequence: any =
      status === 'typing'
        ? [['.lore__text__node', { opacity: 1 }, { duration: 0.0001 }]]
        : status === 'done'
        ? [
            [
              'label',
              { opacity: 1, y: 0 },
              { duration: 1, delay: stagger(0.1) },
            ],
            [
              '.lore__text__node',
              { opacity: 1 },
              { duration: 1, delay: stagger(0.1) },
            ],
          ]
        : [['label', { opacity: 0, y: '50%' }, { duration: 0.0001 }]];

    animate(sequence);
  }, [status, animate]);

  return (
    <section className='lore__section' ref={scope}>
      {!finalArchetype ? (
        <>
          <LoreImage />
          <form className='lore__content'>
            <div className='lore__text'>
              <TypingAnimation
                text={currentNode.text}
                duration={40}
                delay={currentNodeKey ? 1000 : 0}
                onStart={() => setStatus('typing')}
                onFinish={() => setStatus('done')}
                className='lore__text__node'
              />
            </div>

            {currentNode.choices && currentNode.choices.length > 0 ? (
              <div className='lore__options'>
                {currentNode.choices.map((choice, index) => (
                  <LoreOption
                    key={index}
                    choice={choice}
                    isSelected={selectedChoice === choice}
                    onSelect={() => setSelectedChoice(choice)}
                    isEnabled={status === 'done'}
                  />
                ))}
              </div>
            ) : (
              status === 'done' && (
                <button
                  type='button'
                  className='lore__options__next'
                  onClick={findMatchingArchetype}
                >
                  Find out your Archetype
                </button>
              )
            )}

            {selectedChoice && selectedChoice.next && (
              <button
                type='button'
                className='lore__options__next'
                onClick={() => {
                  setUserChoices([...userChoices, selectedChoice.next]);
                  handleChoice(selectedChoice.next);
                }}
              >
                Next
              </button>
            )}
          </form>
        </>
      ) : (
        <ArchetypeResult archetype={finalArchetype} />
      )}
    </section>
  );
};

export default LoreInteraction;


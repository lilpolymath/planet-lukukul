import Link from 'next/link';
import { useAnimate } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import { Chapter } from '@/utils/types';
import lore from '@/assets/images/lore/1.jpg';
import chaptersData from '../../utils/chapters.json';

const LoreChapters: FC = () => {
  const [scope, animate] = useAnimate();
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);

  const scrollToRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const currentChapter: Chapter = chaptersData.chapters[
    currentChapterIndex
  ] as Chapter;

  useEffect(() => {
    if (scrollToRef.current) {
      setOffset(scrollToRef.current.getBoundingClientRect().height);
    }
  }, [currentChapterIndex]);

  useEffect(() => {
    const sequence: any = [
      [
        '.story__text',
        {
          opacity: [0, 1],
        },
        {
          duration: 1,
        },
      ],
      [
        '.story__text',
        {
          y: [0, 500 - offset],
        },
        {
          duration: offset / 50,
          delay: 0.25,
        },
      ],
    ];

    offset !== 0 && animate(sequence);
  }, [offset]);

  return (
    <section className='story'>
      <h2 className='lore__title'>{currentChapter.chapterTitle}</h2>
      <div className='lore__container' ref={scope}>
        <div className='lore__image'>
          <img src={lore.src} alt='' />
        </div>
        <div className='lore__content'>
          <div className='story__outline'>
            <div>
              <div className='story__text' ref={scrollToRef}>
                {currentChapter.content.map((item, index) => {
                  if (typeof item === 'string') {
                    return <p key={index}>{item}</p>;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='story__controls'>
        {currentChapterIndex === 0 && (
          <button
            className='join-btn join-btn--purple'
            onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)}
          >
            Go to Part Two
          </button>
        )}

        {currentChapterIndex === 1 && (
          <>
            <button
              className='join-btn join-btn--outline'
              onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)}
            >
              Go to Part One
            </button>

            <Link className='join-btn join-btn--purple' href='/lore/part-three'>
              Go to Part Three
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default LoreChapters;


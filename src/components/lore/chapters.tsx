/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { inView, useAnimate } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import { Chapter } from '@/utils/types';
import { chapterImages } from '@/utils/data';
import chaptersData from '../../utils/chapters.json';

const LoreChapters: FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [scope, animate] = useAnimate();

  const scrollToRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const [activeImage, setActiveImage] = useState<string>(
    chapterImages[0].url.src
  );

  const currentChapter: Chapter = chaptersData.chapters[
    currentChapterIndex
  ] as Chapter;

  useEffect(() => {
    if (scrollToRef.current) {
      setOffset(scrollToRef.current.getBoundingClientRect().height);
    }

    inView(
      '.story__image',
      ({ target }) => {
        const targetElement = target as HTMLElement;
        const artist = targetElement.dataset.artist;

        const img = chapterImages.find((image) => image.artist === artist);

        setActiveImage(img.url.src);
      },
      {
        margin: '0px 100px -50px 0px',
        amount: 1,
      }
    );
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
          <img src={activeImage} alt='' />
        </div>
        <div className='lore__content'>
          <div className='story__outline'>
            <div>
              <div className='story__text' ref={scrollToRef}>
                {currentChapter.content.map((item, index) => {
                  if (typeof item === 'string') {
                    return <p key={index}>{item}</p>;
                  } else if (item.type === 'illustration') {
                    return (
                      <div
                        className='story__image'
                        data-artist={item.description}
                        key={index}
                      >
                        <img src={''} alt='' />
                      </div>
                    );
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


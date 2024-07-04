/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { inView, useAnimate } from 'framer-motion';

import { Chapter } from '@/utils/types';
import { chapterImages } from '@/utils/data';
import chaptersData from '@/utils/chapters.json';

const LoreChapters = () => {
  const offsetRef = useRef(0);
  const scrollToRef = useRef(null);
  const [scope, animate] = useAnimate();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(chapterImages[0].url.src);

  const currentChapter = chaptersData.chapters[currentChapterIndex] as Chapter;

  const updateOffset = useCallback(() => {
    if (scrollToRef.current) {
      offsetRef.current = scrollToRef.current.getBoundingClientRect().height;
    }
  }, []);

  useEffect(() => {
    updateOffset();

    const handleInView = ({ target }) => {
      const artist = target.dataset.artist;
      const img = chapterImages.find((image) => image.artist === artist);
      setActiveImage(img.url.src);
    };

    inView('.story__image', handleInView, {
      margin: '0px 50px -50px 0px',
      amount: 1,
    });

    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [currentChapterIndex, updateOffset]);

  useEffect(() => {
    if (offsetRef.current !== 0) {
      const sequence: any = [
        ['.story__text', { opacity: [0, 1] }, { duration: 1 }],
        [
          '.story__text',
          { y: [0, 500 - offsetRef.current] },
          { duration: offsetRef.current / 50, delay: 0.25 },
        ],
      ];
      animate(sequence);
    }
  }, [currentChapterIndex, animate]);

  const renderContent = () =>
    currentChapter.content.map((item, index) => {
      if (typeof item === 'string') {
        return <p key={index}>{item}</p>;
      } else if (item.type === 'illustration') {
        return (
          <div
            className='story__image'
            data-artist={item.description}
            key={index}
          />
        );
      }
      return null;
    });

  const renderControls = () => {
    if (currentChapterIndex === 0) {
      return (
        <button
          className='join-btn join-btn--purple'
          onClick={() => setCurrentChapterIndex(1)}
        >
          Go to Part Two
        </button>
      );
    } else if (currentChapterIndex === 1) {
      return (
        <>
          <button
            className='join-btn join-btn--outline'
            onClick={() => setCurrentChapterIndex(0)}
          >
            Go to Part One
          </button>
          <Link className='join-btn join-btn--purple' href='/lore/archetype'>
            Go to Part Three
          </Link>
        </>
      );
    }
  };

  return (
    <section className='story'>
      <h2 className='lore__title'>{currentChapter.chapterTitle}</h2>
      <div className='lore__section' ref={scope}>
        <div className='lore__image'>
          <img src={activeImage} alt='' />
        </div>
        <div className='lore__content'>
          <div className='story__outline'>
            <div>
              <div className='story__text' ref={scrollToRef}>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='story__controls'>{renderControls()}</div>
    </section>
  );
};

export default LoreChapters;


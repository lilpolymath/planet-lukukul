/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Meta from '@/components/meta';
import Footer from '@/components/footer';
import Roadmap from '@/components/roadmap';
import Creators from '@/components/creators';
import StoreItem from '@/components/store-item';

import { cx } from '@/utils/misc';
import { tags } from '@/utils/data';

import bg from '@/assets/images/bg.png';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState(Object.keys(tags)[0]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  return (
    <>
      <Meta />
      <div className='home__wrapper'>
        <div
          className='home__bg-image'
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <Nav />
        <Hero />
      </div>
      <Roadmap />
      <section className='store__container is-hidden'>
        <header className='section__header'>
          <h2>Our Store</h2>
          <div className='store__tags'>
            {Object.keys(tags).map((tag) => (
              <button
                key={tag}
                className={cx(
                  'store__tag',
                  tag === selectedTag && 'store__tag--active'
                )}
                onClick={() => handleTagClick(tag)}
              >
                {tags[tag]}
              </button>
            ))}
          </div>
        </header>
        <div className='store__content'>
          {Array.from({ length: 4 }, (_, i) => i).map((i) => (
            <StoreItem key={i} />
          ))}
        </div>

        <Link href='/store' className='join-btn join-btn--black'>
          Explore store
        </Link>
      </section>
      {/* <Creators /> */}
      <Footer />
    </>
  );
}


/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Nav from '@/components/nav';
import Meta from '@/components/meta';
import Footer from '@/components/footer';
import LoreInteraction from '@/components/lore/interaction';

import bg from '@/assets/images/lore/lore.png';

const Lore = () => {
  const [showLore, setShowLore] = useState(false);

  return (
    <>
      <Meta title='Archetype' />
      <div className='lore__wrapper'>
        <Nav />

        {showLore ? (
          <section className='section__container'>
            <LoreInteraction />
          </section>
        ) : (
          <div className='lore__hero'>
            <img src={bg.src} alt='' />

            <section className='section__container'>
              <h2>Find out what planet lukulkul character you are</h2>
              <button
                className='join-btn join-btn--purple'
                onClick={() => setShowLore(true)}
              >
                Next
              </button>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Lore;


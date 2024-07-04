/* eslint-disable @next/next/no-img-element */
import { X } from 'react-feather';
import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import Nav from '@/components/nav';
import Meta from '@/components/meta';
import Footer from '@/components/footer';
import LoreInteraction from '@/components/lore/interaction';

import { wait } from '@/utils/misc';
import bg from '@/assets/images/lore/lore.png';
import Spinner from '@/components/spinner';

const Lore = () => {
  const [showLore, setShowLore] = useState(false);
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    wait().then(() => {
      localStorage.setItem('pl-name', name);
      setIsSubmitting(false);
      setOpen(false);
      setIsWaiting(true);
    });

    wait(2000).then(() => {
      setIsWaiting(false);
      setShowLore(true);
    });
  };

  return (
    <>
      <Meta title='Archetype' />
      <div className='lore__wrapper' ref={containerRef}>
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

              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button className='join-btn join-btn--purple'>
                    {isWaiting ? <Spinner /> : 'Next'}
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal container={containerRef.current}>
                  <Dialog.Overlay className='dialog__overlay' />
                  <Dialog.Content className='dialog__content'>
                    <Dialog.Description className='dialog__description'>
                      Immerse yourself
                    </Dialog.Description>
                    <Dialog.Title className='dialog__title'>
                      Insert your alias?
                    </Dialog.Title>

                    <form className='dialog__form'>
                      <input
                        className='button button--accent'
                        id='name'
                        aria-label='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Type in a cool name'
                        autoComplete='off'
                        required
                      />

                      <button
                        onClick={handleSubmit}
                        className='button button--accent'
                      >
                        {isSubmitting ? <Spinner /> : 'Submit'}
                      </button>
                    </form>

                    <Dialog.Close asChild>
                      <button className='dialog__close' aria-label='Close'>
                        <X />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Lore;


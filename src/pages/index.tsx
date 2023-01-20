/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { Work_Sans } from '@next/font/google';
import Logo from '../assets/logo.svg';
import astro from '../assets/astro.png';
import lilo from '../assets/lilo.png';
import nina from '../assets/nina.png';
import planet from '../assets/planet.png';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import sealed_mouth from '../assets/footer.svg';
import arrow from '../assets/arrow.svg';
import world from '../assets/world.png';

import { roadmap, team, why } from '@/assets/data';
import ParallaxText from '@/components/Parallax';
import { useState } from 'react';

import localFont from '@next/font/local';
import VideoPlayer from '@/components/VideoPlayer';

const tan = localFont({
  src: [
    {
      path: '../assets/fonts/Tan.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const basicsans = localFont({
  src: [
    {
      path: '../assets/fonts/basicsanssf.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex(currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex + 1);
  }

  const currentItem = roadmap[currentIndex];
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === roadmap.length - 1;
  return (
    <>
      <Head>
        <title>Planet Lukukul</title>
        <meta
          name='description'
          content='Escape into a new world. It’s storytelling, community and social innovation.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className='hero__container'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <nav>
          <header className='container'>
            <h1>
              <img src={Logo.src} alt='Planet Lukukul' />
            </h1>
            <ul className='nav__links'>
              <li>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://discord.com/invite/C9Hesz7uUn'
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://www.instagram.com/toplanetlukukul/'
                >
                  Instagram
                </a>
              </li>
              <li className='nav-button'>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://mobile.twitter.com/toplanetlukukul'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </header>
        </nav>

        <section className='hero'>
          <div className='container'>
            <div className='hero__content'>
              <div className='hero__cards'>
                <div className='hero__card hero__card__one'>
                  <div className='hero__img__cover '>
                    <img src={astro.src} className='hero__img' />
                  </div>
                  <div className='hero__card__content'>
                    <h5 className={tan.className}>Francis Ocean</h5>
                  </div>
                </div>
                <div className='hero__card hero__card__two'>
                  <div className='hero__img__cover'>
                    <img src={lilo.src} className='hero__img' />
                  </div>
                  <div className='hero__card__content'>
                    <h5 className={tan.className}>Agent Reespect</h5>
                  </div>
                </div>
                <div className='hero__card hero__card__three'>
                  <div className='hero__img__cover'>
                    <img src={nina.src} className='hero__img' />
                  </div>
                  <div className='hero__card__content'>
                    <h5 className={tan.className}>Kate 674</h5>
                  </div>
                </div>
              </div>

              <h1 className={tan.className}>Escape into a new world</h1>

              <div className='hero__info'>
                <div className='member'>
                  <div className='member__avatar'>
                    <img src={one.src} alt='' />
                    <img src={two.src} alt='' />
                    <img src={three.src} alt='' />
                    <img src={four.src} alt='' />
                    <img src={five.src} alt='' />
                    <img src={six.src} alt='' />
                  </div>
                  <p>
                    <span>218 people</span> in our community.
                  </p>
                  <p>Join us today</p>
                </div>

                <div className='join'>
                  <p>It’s storytelling, community and social innovation.</p>

                  <a
                    href='https://discord.com/invite/C9Hesz7uUn'
                    target={'_blank'}
                    rel='noreferrer'
                    className='join-btn'
                  >
                    Join the Community
                  </a>
                </div>

                <div className='planet'>
                  <img src={planet.src} alt='' />
                  <p>An exterterrstrial experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className='world'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <div className='container'>
          <div
            className='world__view'
            style={{
              backgroundImage: `linear-gradient(#040016, #040016), url(${world.src})`,
            }}
          >
            {/* <div className='filter'></div> */}
            {/* <img src={world.src} alt='' /> */}
          </div>
          <div className='world__story'>
            <div>
              <h2 className={tan.className}>Chapter 1</h2>
            </div>

            <div>
              <h4> ——— Great Silence ———</h4>
              <p>
                On Planet Lukukul, unknown villains have stolen everyone's
                happiness, the people have lost their color and a world that
                used to be so vibrant is now dark.
              </p>
              <p>
                Central Intelligence knows what's wrong; The Great Silence has
                been hidden.
              </p>
              <p>
                The Great Silence is a multi-dimensional being that fills the
                space with light, color and happiness. They call one of their
                most trusted agents to find this being and free it.
              </p>
              <p>
                Agent Reespect knows it won't be easy, but this is not the first
                time Planet Lukukul has had enemies and this is not the first
                time she has had to fight. Her only mission right now is to free
                The Great Silence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className='video__container section'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <div className='container'>
          <header className='video__header'>
            <p className='desc'>You should watch this video</p>
            <h2
              className='title'
              style={{
                fontFamily: tan.style.fontFamily,
              }}
            >
              Great Silence
            </h2>
          </header>

          <div className='video'>
            <VideoPlayer
              source={
                'https://res.cloudinary.com/favourcodes/video/upload/v1674145140/samples/Untitled_1_zxswit.mp4'
              }
            />
          </div>
        </div>

        <ParallaxText baseVelocity={-5}>
          <a
            target='_blank'
            rel='noopener nofollow noreferrer'
            href='https://discord.com/invite/C9Hesz7uUn'
            className='video__join-btn'
          >
            <span className={tan.className}>Join the community</span>{' '}
            <img src={planet.src} alt='' />{' '}
          </a>
        </ParallaxText>
      </section>

      <section
        className='roadmap section'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <h2 className={tan.className}>Roadmap</h2>

        <div className='roadmap__timeline desktop'>
          {roadmap.map((item, index) => (
            <div className='roadmap__card' key={index}>
              <div
                className='roadmap__card__timeline'
                style={{
                  fontFamily: tan.style.fontFamily,
                }}
              >
                <p>{item.timeline}</p>
                <p>2023</p>
              </div>
              <img src={item.icon.src} alt={item.title} />
              <div className='roadmap__card__content'>
                <h4 className={tan.className}>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='roadmap__timeline mobile'>
          <div className='roadmap__card'>
            <div className='roadmap__card__timeline'>
              <p className={tan.className}>{currentItem.timeline}</p>
              <p className={tan.className}>2023</p>
            </div>
            <img src={currentItem.icon.src} alt={currentItem.title} />
            <div className='roadmap__card__content'>
              <h4 className={tan.className}>{currentItem.title}</h4>
              <p>{currentItem.description}</p>
            </div>
          </div>

          <button
            className='button'
            onClick={handlePrevious}
            disabled={isFirstItem}
          >
            <img src={arrow.src} alt='' />
          </button>
          <button className='button' onClick={handleNext} disabled={isLastItem}>
            <img src={arrow.src} alt='' />
          </button>
        </div>
      </section>

      <section
        className='why section'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <div className='container'>
          <header className='why__header'>
            <h3
              className='title'
              style={{
                fontFamily: tan.style.fontFamily,
              }}
            >
              Why we are doing this
            </h3>
            <p className='desc'>
              Our mission is to create a safe haven for non-male
              African/African-Descendant creatives. we do this by prioritising
              artist wellness, and by escalating diverse creative forms.
            </p>
            <p className='desc'>
              We blur the lines in expertise to create well-rounded projects
              that bring the web3 philosophy to life, and continue making our
              intention kind, empathetic and transparent so that everything we
              build stands the test of time.
            </p>
          </header>

          <div className='why__content'>
            <h3
              className='title'
              style={{
                fontFamily: tan.style.fontFamily,
              }}
            >
              What you’ll get
            </h3>
            <div className='why__cards'>
              {why.map((item, index) => (
                <div className='why__card' key={index}>
                  <img src={item.icon.src} alt={item.title} />
                  <div className='why__card__content'>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className='team'
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <div className='container'>
          <header className='team__header'>
            <h3
              className='title'
              style={{
                fontFamily: tan.style.fontFamily,
              }}
            >
              Team
            </h3>
          </header>

          <div className='team__content'>
            {team.map((item, index) => (
              <div className='team__card' key={index}>
                <a
                  href={item.link}
                  className='team__card__link'
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                >
                  {' '}
                </a>
                <img
                  src={item.img.src}
                  className='team__card__img'
                  alt={item.name}
                />
                <div className='team__card__content'>
                  <h5 className={tan.className}>{item.role}</h5>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{
          fontFamily: basicsans.style.fontFamily,
        }}
      >
        <div className='container'>
          <header className='footer__header'>
            <img src={sealed_mouth.src} alt='' />
            <h2 className={tan.className}>Escape to a new world.</h2>
            <a
              href='https://discord.com/invite/C9Hesz7uUn'
              target={'_blank'}
              rel='noreferrer'
              className='join-btn'
            >
              Join the Community
            </a>
          </header>

          <div className='footer__content'>
            <div className='footer__credits'>
              <img src={Logo.src} alt='' />

              <p>
                All rights reserved. <br />
                Designed by Inkan Studios
              </p>
            </div>
            <ul className='footer__links'>
              <li>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://discord.com/invite/C9Hesz7uUn'
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://www.instagram.com/toplanetlukukul/'
                >
                  Instagram
                </a>
              </li>
              <li className='nav-button'>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  href='https://mobile.twitter.com/toplanetlukukul'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

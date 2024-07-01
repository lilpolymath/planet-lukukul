import planet from '../assets/images/saturn.png';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';
import six from '../assets/images/6.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='container'>
        <div className='hero__container'>
          <div className='hero__content'>
            <img src={planet.src} alt='' />
            <h1>Escape into a new world</h1>

            <div className='join'>
              <p>It’s storytelling, community and social innovation.</p>

              <Link href='/lore' className='join-btn join-btn--black'>
                Explore Lore
              </Link>
            </div>
          </div>

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

            {/* <div className='planet'>
              <p>An exterterrstrial experience</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


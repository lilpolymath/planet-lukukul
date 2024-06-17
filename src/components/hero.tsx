import planet from '../assets/images/planet.png';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';
import six from '../assets/images/6.png';

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='container'>
        <div className='hero__container'>
          <div className='hero__content'>
            <h1>Escape into a new world</h1>

            <div className='join'>
              <p>It’s storytelling, community and social innovation.</p>

              <a
                href='https://discord.com/invite/C9Hesz7uUn'
                target={'_blank'}
                rel='noreferrer'
                className='join-btn'
              >
                Explore Lore
              </a>
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

            <div className='planet'>
              <img src={planet.src} alt='' />
              <p>An exterterrstrial experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


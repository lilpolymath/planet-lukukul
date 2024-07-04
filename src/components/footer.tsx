import Logo from '../assets/svg/logo.svg';
import sealed_mouth from '../assets/svg/footer.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <header className='footer__header'>
          <img src={sealed_mouth.src} alt='' loading='lazy' />
          <h2>Escape to a new world.</h2>
          <a
            href='https://discord.com/invite/C9Hesz7uUn'
            target={'_blank'}
            rel='noreferrer'
            className='join-btn join-btn--purple'
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
  );
};

export default Footer;


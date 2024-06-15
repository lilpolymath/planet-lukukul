import Logo from '../assets/svg/logo.svg';

const Nav = () => {
  return (
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
  );
};

export default Nav;

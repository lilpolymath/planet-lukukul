import Link from 'next/link';

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
            <Link href='/lore'>Lore</Link>
          </li>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            <Link href='/Archive'>Archive</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Nav;


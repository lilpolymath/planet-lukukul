/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <header className='container'>
        <Link href='/'>
          <img src={'/logo.svg'} alt='Planet Lukukul' />
        </Link>
        <ul className='nav__links'>
          <li>
            <Link href='/lore'>Lore</Link>
          </li>
          <li>
            <Link href='/store'>Store</Link>
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


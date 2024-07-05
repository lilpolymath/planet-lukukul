/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsOpen(false);
    });
  }, [router.events]);

  return (
    <nav
      style={{
        background: isOpen ? 'var(--background)' : 'transparent',
      }}
    >
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
            <Link href='/events'>Archive</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
        </ul>

        <button
          className={`toggle ${!isOpen ? '' : ' -open'}`}
          onClick={() => toggle()}
        />
        <ul className={`nav-list -mobile ${isOpen ? '-open' : ''}`}>
          <li>
            <Link href='/lore'>Lore</Link>
          </li>
          <li>
            <Link href='/store'>Store</Link>
          </li>
          <li>
            <Link href='/events'>Archive</Link>
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


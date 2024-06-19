import Link from 'next/link';

import eye from '../assets/svg/eye.svg';
import ticket from '../assets/svg/ticket.svg';

const Ticket = () => {
  return (
    <div className='ticket__container'>
      <div className='ticket__image'>
        <span className='ticket__tag'>workshop</span>
      </div>
      <div className='ticket__details'>
        <h4>Event Name</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='ticket__actions'>
          <a
            target='_blank'
            href='https://tix.africa'
            className='button'
            rel='noreferrer'
          >
            get tickets <img src={ticket.src} alt='' />
          </a>
          <Link href={'/tickets/3'} className='button button--accent'>
            read more <img src={eye.src} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ticket;


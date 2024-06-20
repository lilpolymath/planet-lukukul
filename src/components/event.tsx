import Link from 'next/link';

import eye from '../assets/svg/eye.svg';
import ticket from '../assets/svg/ticket.svg';

const Event = () => {
  return (
    <div className='event__container'>
      <div className='event__image'>
        <span className='event__tag'>workshop</span>
      </div>
      <div className='event__details'>
        <h4>Event Name</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='event__actions'>
          <a
            target='_blank'
            href='https://tix.africa'
            className='button'
            rel='noreferrer'
          >
            get tickets <img src={ticket.src} alt='' />
          </a>
          <Link href={'/events/3'} className='button button--accent'>
            read more <img src={eye.src} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;


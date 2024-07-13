/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Layout from '@/components/layout';
import Ticket from '@/assets/svg/TicketIcon';
import { events } from '@/utils/data';
import { slugify } from '@/utils/misc';

export const getStaticProps = (ctx) => {
  const data = events.filter(event => slugify(event.name) === ctx.params.eventId);
  return {
    props: { data: data[0] },
  };
};

export const getStaticPaths = async () => {
  const paths = events.map((event) => ({ params: { eventId: slugify(event.name) } }))
  return {
    paths,
    fallback: false,
  };
};

const Event = ({ data }) => {


  const [mainImage, setMainImage] = useState(1);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const shouldRenderImages = data.images && data.images.length > 2

  return (
    <Layout title='Event'>
      <section className='event-details__container'>
        <div className='event-details__gallery'>
          <div className='event-details__main'>
            <img
              src={data.image.src}
              alt='Main Ticket'
              className='main-image'
            />
          </div>
          <div className='event-details__thumbnails'>
            {shouldRenderImages && data.images.map((image, index) => (
              <button
                key={index}
                className='thumbnail'
                onClick={() => handleThumbnailClick(index + 2)}
              >
                <img
                  src={`https://picsum.photos/id/${index + 2}/200/300`}
                  alt=''
                />
              </button>
            ))}
          </div>
        </div>
        <div className='event-details__content'>
          <h3>{data.name}</h3>
          <p>
            {data.description}
          </p>

          <div className='event-details__meta'>
            <div>
              <h4>Time</h4>
              <p>{data.time}</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>{data.date}</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>{data.location}</p>
            </div>
          </div>
          <a
            target='_blank'
            href='https://tix.africa'
            className='button button--accent-fill'
            rel='noreferrer'
          >
            get tickets <Ticket />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Event;

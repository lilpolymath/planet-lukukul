/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Layout from '@/components/layout';
import Ticket from '@/assets/svg/TicketIcon';

const Event = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
  ];

  const [mainImage, setMainImage] = useState(1);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Layout title='Event'>
      <section className='event-details__container'>
        <div className='event-details__gallery'>
          <div className='event-details__main'>
            <img
              src={`https://picsum.photos/id/${mainImage}/600/400`}
              alt='Main Ticket'
              className='main-image'
            />
          </div>
          <div className='event-details__thumbnails'>
            {images.map((image, index) => (
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
          <h3>Ticket name 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant tellus nec
            tincidunt turpis faucibus mi hendrerit egestas. Eget potenti eros
            dolor tortor imperdiet risus. Sit ut senectus aenean venenatis leo
            nullam at. Dictum scelerisque semper morbi massa neque aliquam
            imperdiet molestie scelerisque. Orci nec nec nulla senectus quis.
            Accumsan integer nisl interdum sed urna consectetur massa.
            Scelerisque mauris pellentesque montes urna pellentesque dui. Orci
            quis bibendum nibh faucibus phasellus sapien amet. Justo imperdiet
            dictum tellus integer bibendum et non. Sollicitudin curabitur
            ultrices vestibulum habitasse sit. Vel lectus etiam vestibulum
            mattis velit massa mattis. Purus amet a sapien vitae libero interdum
            sed pharetra ut. Lectus ultricies urna lectus facilisis egestas.
          </p>

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


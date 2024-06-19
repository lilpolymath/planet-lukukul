import Ticket from '@/assets/svg/TicketIcon';

const TicketDetails = () => {
  return (
    <section className='ticket-details__container'>
      <div className='ticket-details__gallery'>
        <div className='ticket-details__main'></div>
        <div className='ticket-details__thumbnails'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='ticket-details__content'>
        <h3>Ticket name 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Habitant tellus nec tincidunt
          turpis faucibus mi hendrerit egestas. Eget potenti eros dolor tortor
          imperdiet risus. Sit ut senectus aenean venenatis leo nullam at.
          Dictum scelerisque semper morbi massa neque aliquam imperdiet molestie
          scelerisque. Orci nec nec nulla senectus quis. Accumsan integer nisl
          interdum sed urna consectetur massa. Scelerisque mauris pellentesque
          montes urna pellentesque dui. Orci quis bibendum nibh faucibus
          phasellus sapien amet. Justo imperdiet dictum tellus integer bibendum
          et non. Sollicitudin curabitur ultrices vestibulum habitasse sit. Vel
          lectus etiam vestibulum mattis velit massa mattis. Purus amet a sapien
          vitae libero interdum sed pharetra ut. Lectus ultricies urna lectus
          facilisis egestas.
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
  );
};

export default TicketDetails;


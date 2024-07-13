import Event from '@/components/event';
import Layout from '@/components/layout';
import { events } from '@/utils/data';



const Events = () => {
  return (
    <Layout title='Events'>
      <section className='events__container'>
        <header className='section__header'>
          <h2>Get Tickets</h2>
        </header>
        <div className='events__content'>
          {events.map((event, idx) => (
            <Event key={idx} {...event} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;


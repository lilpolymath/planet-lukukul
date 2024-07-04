import Ticket from '@/components/event';
import Layout from '@/components/layout';

const Events = () => {
  return (
    <Layout title='Events'>
      <section className='events__container'>
        <header className='section__header'>
          <h2>Get Tickets</h2>
        </header>
        <div className='events__content'>
          {Array.from({ length: 6 }, (_, i) => i).map((i) => (
            <Ticket key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;


import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Ticket from '@/components/ticket';

export const metadata = {
  title: 'Tickets',
  description: 'Get tickets for the next event',
};

const tickets = () => {
  return (
    <>
      <Nav />
      <section className='tickets__container'>
        <header className='section__header'>
          <h2>Get Tickets</h2>
        </header>
        <div className='tickets__content'>
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default tickets;


import Layout from '@/components/layout';
import StoreItem from '@/components/store-item';

const tickets = () => {
  return (
    <Layout>
      <section className='store__container'>
        <header className='section__header'>
          <h2>Our Store</h2>
        </header>
        <div className='store__content'>
          {Array.from({ length: 6 }, (_, i) => i).map((i) => (
            <StoreItem key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default tickets;


import Layout from '@/components/layout';
import LoreInteraction from '@/components/lore-interaction';

const lore = () => {
  return (
    <Layout>
      <div className='lore__wrapper'>
        <section className='section__container'>
          <LoreInteraction />
        </section>
      </div>
    </Layout>
  );
};

export default lore;


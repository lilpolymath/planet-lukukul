import Nav from '@/components/nav';
import Footer from '@/components/footer';
import LoreInteraction from '@/components/lore/interaction';

const lore = () => {
  return (
    <>
      <div className='lore__wrapper'>
        <Nav />

        <section className='section__container'>
          <LoreInteraction />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default lore;


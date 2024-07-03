import Footer from '@/components/footer';
import LoreChapters from '@/components/lore/chapters';
import LoreInteraction from '@/components/lore/interaction';
import Nav from '@/components/nav';

const lore = () => {
  return (
    <>
      <div className='lore__wrapper'>
        <Nav />

        <section className='section__container'>
          {/* <LoreChapters /> */}
          <LoreInteraction />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default lore;


import Nav from '@/components/nav';
import Footer from '@/components/footer';
import LoreChapters from '@/components/lore/chapters';

const lore = () => {
  return (
    <>
      <div className='lore__wrapper'>
        <Nav />

        <section className='section__container'>
          <LoreChapters />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default lore;


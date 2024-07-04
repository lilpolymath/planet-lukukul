import Nav from '@/components/nav';
import Meta from '@/components/meta';
import Footer from '@/components/footer';
import LoreChapters from '@/components/lore/chapters';

const lore = () => {
  return (
    <>
      <Meta title='Lore' />
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


const Creators = () => {
  return (
    <section className='creators__container'>
      <header className='section__header'>
        <h2>Creators</h2>
      </header>
      <div className='creators__content'>
        {Array.from({ length: 12 }, (_, i) => i).map((i) => (
          <div key={i} className='creator'>
            <div className='creator__image' />
            <div className='creator__info'>
              <h4>Name of Creator</h4>
              <p>Artist</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Creators;


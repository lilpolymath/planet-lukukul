import { ROADMAP } from '@/utils/data';

const Roadmap = () => {
  return (
    <section className='roadmap__container'>
      <div>
        <header className='section__header'>
          <h2>Roadmap</h2>
        </header>
      </div>

      <div className='roadmap'>
        {ROADMAP.map((item, idx) => (
          <div className='roadmap__item' key={idx}>
            <div className='roadmap__item__image'>
              <img src={item.icon.src} alt='' />
            </div>
            <div className='roadmap__item__content'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <p className='roadmap__item__index'>{idx + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;

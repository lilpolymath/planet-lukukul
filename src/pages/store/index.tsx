import { useState } from 'react';

import Layout from '@/components/layout';
import StoreItem from '@/components/store-item';

import { cx } from '@/utils/misc';
import { tags } from '@/utils/data';

const Tickets = () => {
  const [selectedTag, setSelectedTag] = useState(Object.keys(tags)[0]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  console.log('selectedTag', selectedTag);

  const data = () => {};

  return (
    <Layout title='Store'>
      <section className='store__container'>
        <header className='section__header'>
          <h2>Our Store</h2>
          <div className='store__tags'>
            {Object.keys(tags).map((tag) => (
              <button
                key={tag}
                className={cx(
                  'store__tag',
                  tag === selectedTag && 'store__tag--active'
                )}
                onClick={() => handleTagClick(tag)}
              >
                {tags[tag]}
              </button>
            ))}
          </div>
        </header>
        <div className='store__content'>
          {Array.from({ length: 8 }, (_, i) => i).map((i) => (
            <StoreItem key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Tickets;


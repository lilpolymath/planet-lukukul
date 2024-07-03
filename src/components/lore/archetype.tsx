import { FC } from 'react';

import { Archetype } from '@/utils/types';

const ArchetypeResult: FC<{ archetype: Archetype }> = ({ archetype }) => (
  <div className='lore__archetype'>
    <h2 className='lore__archetype__title'>You are {archetype.title}</h2>
    <p className='lore__archetype__text'>{archetype.description}</p>
  </div>
);

export default ArchetypeResult;

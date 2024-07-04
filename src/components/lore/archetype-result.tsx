import { FC } from 'react';

import agent from '@/assets/images/archetypes/agent-reespect.jpeg';
import bouncing from '@/assets/images/archetypes/bouncing-baby-b.jpeg';
import francis from '@/assets/images/archetypes/francis-ocean.jpeg';
import kate from '@/assets/images/archetypes/kate-674.jpeg';
import mr from '@/assets/images/archetypes/mr-hoom.jpeg';

import { Archetype } from '@/utils/types';

const ArchetypeResult: FC<{ archetype: Archetype }> = ({ archetype }) => {
  const getArchetypeImage = (archetype: Archetype): any => {
    switch (archetype.name) {
      case 'Agent Respect':
        return agent;
      case 'Bouncing Baby b':
        return bouncing;
      case 'Francis Ocean':
        return francis;
      case 'Kate 674':
        return kate;
      case 'Mr Hoom':
        return mr;
      default:
        return agent;
    }
  };

  return (
    <>
      <div className='lore__image -show'>
        <img src={getArchetypeImage(archetype).src} alt='' />
      </div>
      <div className='lore__archetype'>
        <h2 className='lore__archetype__title'>
          You are {archetype.name}, {archetype.title}.
        </h2>
        <p className='lore__archetype__text'>{archetype.description}</p>
      </div>
    </>
  );
};

export default ArchetypeResult;


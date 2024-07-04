import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Facebook, Twitter } from 'react-feather';

import mr from '@/assets/images/archetypes/mr-hoom.jpeg';
import kate from '@/assets/images/archetypes/kate-674.jpeg';
import agent from '@/assets/images/archetypes/agent-reespect.jpeg';
import francis from '@/assets/images/archetypes/francis-ocean.jpeg';
import bouncing from '@/assets/images/archetypes/bouncing-baby-b.jpeg';

import reddit from '@/assets/images/reddit.png';

import { Archetype } from '@/utils/types';
import { shareText } from '@/utils/misc';

const ArchetypeResult: FC<{ archetype: Archetype }> = ({ archetype }) => {
  const [ogUrl, setOgUrl] = useState('');
  const router = useRouter();
  const path = router.asPath;

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

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [path]);

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
        <div className='lore__share'>
          <p>Share to:</p>

          <div className='lore__share__icons'>
            <a
              href={shareText({
                platform: 'facebook',
                text: `I am ${archetype.name}, ${archetype.title}. What about you? `,
                url: ogUrl,
              })}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook />
            </a>
            <a
              href={shareText({
                platform: 'twitter',
                text: `I am ${archetype.name}, ${archetype.title}. What about you? `,
                url: ogUrl,
              })}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter />
            </a>
            <a
              href={shareText({
                platform: 'reddit',
                text: `I am ${archetype.name}, ${archetype.title}. What about you? `,
                url: ogUrl,
              })}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={reddit.src} alt='' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchetypeResult;


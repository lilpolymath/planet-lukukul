import React, { useEffect, useMemo, useRef, useState } from 'react';

import chaptersData from '../utils/chapters.json';

type Story = {
  title: string;
  chapters: Chapter[];
};

type Chapter = {
  chapterTitle: string;
  content: (string | Media)[];
};

type Media = {
  type: 'music' | 'illustration';
  description: string;
};

const chapters: Story = {
  title: 'To Planet Lukukul',
  chapters: [
    {
      chapterTitle: 'Heaven & War',
      content: [
        'Once upon a time, in the vast expanse of the heavens, there existed an entity named Mystura, the embodiment of perfect balance and creation itself. Mystura, though formless, desired representations of her essence. With her immense power, she birthed two beings: Raara and Daada.',
        {
          type: 'music',
          description: 'to self by charisse sky',
        },
        {
          type: 'illustration',
          description: 'by jon d',
        },
        'Daada, the seeker of perfection, sort out beauty and goodness, and Raara, the embodiment of perfect evil; its shadow. Mystura hoped they would live harmoniously, integrating their opposing natures. As Raara and Daada ventured through the cosmos, they found that everything naturally gravitated toward Dada for her goodness as instinctively most things run away from their shadow instead of integrating both. This caused animosity between them.',
        'With Raara becoming envious and Dada unaware of the growing discord, eventually, their differences overshadowed Mystura’s intentions, causing them to drift apart and explore the universe separately.',
        'Mystura could only watch as her children struggle within and between themselves because she did not possess a tangible form. With her powers greatly depleted from creating the twins, she decided to raise three guides that would help her children find their way back to each other. Little did Mystura know that this decision was what would trigger the very chain of events she was so desperately trying to avoid...',
        {
          type: 'music',
          description: 'black sheep by ayonete',
        },
      ],
    },
    {
      chapterTitle: 'Echoes of the Vessel',
      content: [
        {
          type: 'music',
          description: 'f you by grl',
        },
        {
          type: 'illustration',
          description: 'by chinasa',
        },
        'Mr Hoom’s disdain for the terrible leaders grew as his fingers brushed over the artifact of untold power, his emotions stirred, unlocking memories of his great-great-grandfather, Mr. Adam, a visionary soul who upon finding this same vessel had used its magic to transform Eden into a haven of futuristic marvels, lead innovations and spark creativity. And even though Hoom was not there himself, the memories felt like his, just like the anger towards the leaders, blinded by fear and skepticism who had killed Mr Adam and have been after his lineage and their well-kept secret.',
        'The guides had arrived on Earth taking the form of humans. They named themselves OJ, MJ and AJ, and Amid their clandestine mission, one of them was going to be touched by the hues of human emotion, fall in love and have a child. A bond forbidden by celestial laws, they all don’t know it yet, but that’s just how destiny works.',
        {
          type: 'music',
          description: 'gold and fire by mide',
        },
        {
          type: 'illustration',
          description: 'by auntyjjc',
        },
        "The guides, shrouded in deceit, sensed a subtle vulnerability in a certain Kate 674 —a talkative woman with curiosity woven into her being. It wasn't long before the guides uncovered the secrets Kate 674 had discovered about the whereabouts of the vessel.",
        'And it also wasn’t long after Mr Hoom put the vessel down in his family’s secret cave that they found it, just as Kate 674 had said they would. The guides left and set course for Lukukul as they were directed.',
        'When he found out the vessel was missing, Mr Hoom was filled with even more anger and maybe even some shame from being the torchbearer who’d lost the torch. How was he going to get revenge for his family without the vessel? What would he tell his followers, the comrades that fight to preserve Mr Adams values and Eden’s heritage? Everyone could tell that something was different. The comrades knew a power had left them. Eden was not the same.',
        'Agent Reespect was one of such people, even before the vessel went missing, she knew Mr Hoom had become less and less present in the affairs of Eden, he had become obsessed and consumed with unlocking the true powers of the vessel.',
        'Prior, Agent Reespect had spent several months working on building a vehicle that had the ability to track the vessel incase Mr Hoom got himself in any trouble. She didn’t work alone, she had Francis Ocean’s expertise and exceptional engineering skills, Kate 674’s research abilities and knowledge, and MJ with his extra resources...and yes, she wondered why she hadn’t seen MJ in the past week.',
        'The crew informed Mr Hoom of their invention and they prepared themselves to get the vessel back, even if that meant going to the ends of the universe.',
        {
          type: 'music',
          description: 'fly me to space by xpace girl',
        },
        {
          type: 'illustration',
          description: 'by 6world',
        },
      ],
    },
  ],
};

const LoreChapters: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);

  const scrollToRef = useRef(null);

  const [offset, setOffset] = useState(0);

  const currentChapter: Chapter = chaptersData.chapters[
    currentChapterIndex
  ] as Chapter;

  // useEffect(() => {
  //   if (scrollToRef.current) {
  //     setOffset(scrollToRef.current.getBoundingClientRect().height);
  //     console.log('offset', offset);
  //   }
  // }, [scrollToRef.current]);

  useMemo(() => {
    if (scrollToRef.current) {
      setOffset(scrollToRef.current.getBoundingClientRect().height);
      console.log('offset', offset);
    }
  }, [scrollToRef.current]);

  return (
    <section className='story'>
      <div className='lore__container'>
        <div className='lore__image'>
          <h1>{chaptersData.title}</h1>
          <h2>{currentChapter.chapterTitle}</h2>
        </div>
        <div className='lore__content'>
          <div className='story__text'>
            <div
              ref={scrollToRef}
              style={
                {
                  '--offset': `-${577 - offset}px`,
                  '--debug': offset,
                } as any
              }
            >
              {currentChapter.content.map((item, index) => {
                if (typeof item === 'string') {
                  return <p key={index}>{item}</p>;
                } else if (item.type === 'music') {
                  return null;
                  // return <p key={index}>[music—{item.description}]</p>;
                } else if (item.type === 'illustration') {
                  return null;
                  // return <p key={index}>[illustration—{item.description}]</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        {currentChapterIndex > 0 && (
          <button
            onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)}
          >
            Previous Chapter
          </button>
        )}
        {currentChapterIndex < chaptersData.chapters.length - 1 && (
          <button
            onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)}
          >
            Next Chapter
          </button>
        )}
      </div>
    </section>
  );
};

export default LoreChapters;


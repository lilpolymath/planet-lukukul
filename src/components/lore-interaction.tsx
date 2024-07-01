import React, { useState } from 'react';
import storyData from '../utils/story.json';

type Choice = {
  text: string;
  next: string;
};

type StoryNode = {
  text: string;
  choices?: Choice[];
};

const LoreInteraction: React.FC = () => {
  const [currentNodeKey, setCurrentNodeKey] = useState<string>('intro');

  const handleChoice = (nextKey: string) => {
    setCurrentNodeKey(nextKey);
  };

  const currentNode: StoryNode = (storyData as any)[currentNodeKey];

  return (
    <div>
      <p>{currentNode.text}</p>
      {currentNode.choices.map((choice, index) => (
        <div key={index}>
          <button onClick={() => handleChoice(choice.next as string)}>
            {choice.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoreInteraction;



export type Choice = {
  text: string;
  next: string;
};

export type StoryNode = {
  text: string;
  choices?: Choice[];
};

export type Archetype = {
  name: string;
  title: string;
  description: string;
  conditions: string[];
};
export type TypingAnimationState = 'idle' | 'typing' | 'done';

export type Story = {
  title: string;
  chapters: Chapter[];
};

export type Chapter = {
  chapterTitle: string;
  content: (string | Media)[];
};

type Media = {
  type: 'music' | 'illustration';
  description: string;
};


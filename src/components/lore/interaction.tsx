/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";

import { Choice, Archetype, StoryNode } from "@/utils/types";

import storyData from "@/lore-data/story.json";
import archetypeData from "@/lore-data/archetypes.json";

import LoreOption from "./option";
import ArchetypeResult from "./archetype-result";

import lore from "@/assets/images/lore/1.jpeg";
import { cx } from "@/utils/misc";

const LoreImage: FC = () => (
  <div className="lore__image">
    <img src={lore.src} alt="" />
  </div>
);

const LoreInteraction: FC = () => {
  const [name, setName] = useState<string>("");
  const [userChoices, setUserChoices] = useState<string[]>([]);
  const [currentNodeKey, setCurrentNodeKey] = useState<string>("intro");
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [finalArchetype, setFinalArchetype] = useState<Archetype | null>(null);

  const [scope, animate] = useAnimate();

  const currentNode: StoryNode = (storyData as any)[currentNodeKey];

  const findMatchingArchetype = () => {
    const bestMatch = archetypeData.archetypes.reduce(
      (best: Archetype | null, archetype: Archetype) => {
        const matchScore = archetype.conditions.filter((condition) =>
          userChoices.includes(condition)
        ).length;
        return matchScore > (best ? best.conditions.length : -1)
          ? archetype
          : best;
      },
      null
    );
    setFinalArchetype(bestMatch);
  };

  const handleChoice = (nextKey: string) => {
    setCurrentNodeKey(nextKey);
    setSelectedChoice(null);
  };

  useEffect(() => {
    setName(localStorage.getItem("pl-name") || "Anonymous");
  }, []);

  useEffect(() => {
    const sequence: any = [
      ["label", { opacity: 0, y: "50%" }, { duration: 0.0001 }],
      [".lore__text__node", { opacity: 1 }, { duration: 0.0001 }],
      [
        "label",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.1),
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      ],
      [
        ".lore__text__node",
        { opacity: 1 },
        {
          duration: 0.5,
          delay: stagger(0.1),
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      ],
    ];

    animate(sequence);
  }, [currentNodeKey]);

  return (
    <section
      className={cx(
        "lore__section",
        finalArchetype && "lore__section--results"
      )}
      ref={scope}
    >
      {!finalArchetype ? (
        <>
          <LoreImage />
          <form className="lore__content">
            <div className="lore__text">
              <p>{currentNode.text.replace(/\[insert name\]/g, name)}</p>
            </div>

            {currentNode.choices && currentNode.choices.length > 0 ? (
              <div className="lore__options">
                {currentNode.choices.map((choice) => (
                  <LoreOption
                    key={JSON.stringify(choice)}
                    choice={choice}
                    isSelected={selectedChoice === choice}
                    onSelect={() => setSelectedChoice(choice)}
                    isEnabled={true}
                  />
                ))}

                <button
                  type="button"
                  className={cx(
                    "lore__options__next",
                    selectedChoice && selectedChoice.next && "-show"
                  )}
                  onClick={() => {
                    setUserChoices([...userChoices, selectedChoice.next]);
                    handleChoice(selectedChoice.next);
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="lore__options__next -show"
                onClick={findMatchingArchetype}
              >
                Find out your Archetype
              </button>
            )}
          </form>
        </>
      ) : (
        <ArchetypeResult archetype={finalArchetype} />
      )}
    </section>
  );
};

export default LoreInteraction;

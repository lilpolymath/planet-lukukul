/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";

import { Chapter } from "@/utils/types";
import { chapterImages } from "@/utils/data";
import chaptersData from "@/lore-data/chapters.json";

const LoreChapters = ({ currentChapterIndex }) => {
  const currentChapter = chaptersData.chapters[currentChapterIndex] as Chapter;

  const renderContent = () => {
    const result = [];

    for (let i = 0; i < currentChapter.content.length; i++) {
      const item = currentChapter.content[i];

      if (typeof item === "string") {
        let combinedText = "";

        while (
          i < currentChapter.content.length &&
          typeof currentChapter.content[i] === "string"
        ) {
          combinedText += `<p>${currentChapter.content[i]}</p>`;
          i++;
        }

        i--;

        result.push(
          <div className="lore__text" key={i}>
            <div dangerouslySetInnerHTML={{ __html: combinedText }} />
          </div>
        );
      } else if (item.type === "illustration") {
        const img = chapterImages.find(
          (image) => image.artist === item.description
        );

        result.push(
          <div key={i} className="lore__image">
            <img src={img.url.src} alt={img.artist} />
          </div>
        );
      }
    }

    return result;
  };

  const renderControls = () => {
    if (currentChapterIndex === 0) {
      return (
        <Link className="join-btn join-btn--purple" href="/lore/part-two">
          Go to Part Two
        </Link>
      );
    } else if (currentChapterIndex === 1) {
      return (
        <>
          <Link className="join-btn join-btn--outline" href="/lore/part-one">
            Go to Part One
          </Link>
          <Link className="join-btn join-btn--purple" href="/lore/archetype">
            Go to Part Three
          </Link>
        </>
      );
    }
  };

  return (
    <section className="story">
      <h2 className="lore__title">{currentChapter.chapterTitle}</h2>
      <div className="lore__section">
        <div className="lore__content">
          <div className="story__outline">{renderContent()}</div>
        </div>
      </div>
      <div className="story__controls">{renderControls()}</div>
    </section>
  );
};

export default LoreChapters;

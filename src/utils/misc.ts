export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const wait = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const buildTweet = ({
  pageUrl,
  tweetContent,
}: {
  tweetContent: string | undefined;
  pageUrl: string;
}) => {
  if (tweetContent !== undefined) {
    const characterTotal = tweetContent.length + pageUrl.length;
    if (characterTotal + 19 < 280) {
      return encodeURIComponent(`"${tweetContent}" – `);
    }
    const amountToTrim = 280 - (pageUrl.length + 19);
    return encodeURIComponent(`"${tweetContent.slice(0, amountToTrim)}…" – `);
  }
  return "";
};

export const buildTwitterTargetLink = (quote: string, pageUrl: string) => {
  const twitterLink = (tweetContent: string) =>
    `https://twitter.com/intent/tweet?text=${tweetContent}&url=${pageUrl}`;
  const tweet = buildTweet({
    pageUrl,
    tweetContent: quote,
  });
  return twitterLink(tweet);
};

type ShareTextProps = {
  text: string;
  url: string;
  platform: "reddit" | "twitter" | "facebook" | "linkedin" | "whatsapp";
};

export const shareText = (props: ShareTextProps): string => {
  let url = "";

  switch (props.platform) {
    case "twitter":
      url = buildTwitterTargetLink(props.text, props.url);
      break;
    case "facebook":
      url =
        "http://www.facebook.com/sharer.php?u=" +
        props.text +
        "&quote=" +
        encodeURIComponent(props.url);
      break;

    case "linkedin":
      url =
        "https://www.linkedin.com/sharing/share-offsite?url=" +
        encodeURIComponent(props.url) +
        "&title=" +
        props.text;
      break;

    case "whatsapp":
      url =
        "https://api.whatsapp.com/send?text=" +
        props.text +
        encodeURIComponent(props.url);
      break;

    case "reddit":
      url =
        "https://www.reddit.com/submit?url=" +
        encodeURIComponent(props.url) +
        "&title=" +
        props.text;
  }

  return url;
};

export const slugify = (text) => {
  return text
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};

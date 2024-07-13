import Link from "next/link";

import { slugify } from "@/utils/misc";

import eye from "@/assets/svg/eye.svg";
import ticket from "@/assets/svg/ticket.svg";

type Props = {
  name: string;
  image: any;
  link: string;
  description: string;
  tag: string;
  location: string;
  date: string;
  time: string;
  thumbnail: any;
};

const Event = (props: Props) => {
  return (
    <div className="event__container">
      <div className="event__image">
        <img src={props.thumbnail.src} alt="" />
      </div>
      <div className="event__details">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div className="event__actions">
          <a
            target="_blank"
            href={props.link}
            className="button"
            rel="noreferrer"
          >
            get tickets <img src={ticket.src} alt="" />
          </a>
          <Link
            href={`/events/${slugify(props.name)}`}
            className="button button--accent"
          >
            read more <img src={eye.src} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;

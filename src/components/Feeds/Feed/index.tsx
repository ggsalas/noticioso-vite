import { useEffect } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { XMLParser } from "fast-xml-parser";
import axios from "axios";
import { json, Link, useParams } from "react-router-dom";

// TODO: fetch feed and render as columns
// save scroll (horizontal) position to remember on come back later
export default function Feed() {
  const feedContent = useLoaderData() as LoaderData;
  const { feedUrl } = useParams();

  const {
    // title,
    // link,
    // desceiption,
    // languae,
    // image,
    item: content,
  } = feedContent.rss.channel;

  // to use in the navigation of the feed and article pages
  useEffect(() => {
    if (content) {
      localStorage.setItem(`feedContent-${feedUrl}`, JSON.stringify(content));
    }
  }, [content, feedUrl]);

  return (
    <div>
      {content
        ? content.map((item) => {
            const {
              title,
              guid,
              link,
              // pubDate, description, author,
            } = item;

            return (
              <Link
                to={`/feeds/${encodeURIComponent(
                  feedUrl as string
                )}/${encodeURIComponent(link)}`}
                key={guid}
              >
                <h3>{title}</h3>
                {/* TODO get only txt and image <div dangerouslySetInnerHTML={{ __html: description }} /> */}
              </Link>
            );
          })
        : "no items"}
    </div>
  );
}

import { LoaderFunctionArgs } from "react-router";
import { XMLParser } from "fast-xml-parser";
import axios from "axios";
import { json } from "react-router-dom";

type LoaderData = Awaited<ReturnType<typeof getFeedContent>>;

export async function getFeedContent(url: string) {
  try {
    const res = await axios.get(url, { responseType: "text" });

    console.log(res);
    const parser = new XMLParser();
    const feed = parser.parse(res.data);

    return feed;
  } catch (error) {
    throw new Error(`Error on get feeds: ${error}`);
  }
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.feedUrl) return;

  const feedContent = await getFeedContent(params.feedUrl);

  return feedContent ? json<LoaderData>(feedContent) : null;
};

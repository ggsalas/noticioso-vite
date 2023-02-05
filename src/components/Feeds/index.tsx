import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import feeds from "./hardcodedFeeds";
import "./index.css";

export default function Feeds() {
  // useGlobalFont();
  const location = useLocation();

  // to use in the navigation of the feed and article pages
  useEffect(() => {
    if (feeds) {
      localStorage.setItem("feeds", JSON.stringify(feeds));
    }
  }, [feeds]);

  return (
    <div className="Feeds">
      {/* <PageLoading /> */}

      <div className="Feeds__list">
        <h2>Feeds</h2>
        {feeds.map((feed) => {
          const to = `/feeds/${encodeURIComponent(feed.url)}`;
          const isActive = location.pathname === to;

          return (
            <Link
              key={feed.url}
              to={to}
              className={
                isActive ? "Feeds_list_item-active" : "Feeds_list_item"
              }
            >
              {feed.name}
            </Link>
          );
        })}
      </div>

      <div className="Feeds__content">
        <Outlet />
      </div>
    </div>
  );
}

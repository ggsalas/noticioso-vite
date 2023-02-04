import { Outlet } from "react-router-dom";

export default function Feeds() {
  return (
    <div>
      <h2>Feeds</h2>
      feed list
      <Outlet />
    </div>
  );
}

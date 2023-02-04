import { Routes, Route, Outlet, Link } from "react-router-dom";
import Feeds from "./components/Feeds";

export default function App() {
  return (
    <Routes>
      <Route path="/feeds" element={<Feeds />}>
        <Route index element={<Home />} />
        <Route path="/feeds/:feedUrl" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/feeds/:feedUrl/:articleUrl" element={<Dashboard />} />
    </Routes>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

import {
  Routes,
  Route,
  Outlet,
  Link,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Feeds from "./components/Feeds";
import Feed from "./components/Feeds/Feed";
import { loader } from "./components/Feeds/Feed/loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/feeds" element={<Feeds />}>
        <Route index element={<About />} />
        <Route path="/feeds/:feedUrl" element={<Feed />} loader={loader} />
      </Route>
      <Route path="/feeds/:feedUrl/:articleUrl" element={<Dashboard />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

function Main() {
  return <Outlet />;
}

function Fallback() {
  return (
    <div>
      <h2>Fallback</h2>
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

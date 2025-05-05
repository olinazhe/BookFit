import Discover from "../pages/Discover";
import Social from "../pages/Social";
import Dashboard from "../pages/Dashboard";

/**
 * TODO: Modify this constant to point to the URL of your backend.
 * It should be of the format "https://<app-name>.fly.dev/api"
 *
 * Most of the time, the name of your app is the name of the folder you're in
 * right now, and the name of your Git repository.
 * For instance, if that name is "my-app", then you should set this to:
 * "https://my-app.fly.dev/api"
 *
 * If you've already deployed your app (using `fly launch` or `fly deploy`),
 * you can find the name by running `flyctl status`, under App > Name.
 */
export const BACKEND_BASE_PATH = "https://bookfit.dev/api";

export const PATHS: {
  link: string;
  label: string;
  element?: JSX.Element;
}[] = [
  {
    link: "/",
    label: "Dashboard",
    element: <Dashboard />,
  },
  {
    link: "/discover",
    label: "Discover",
    element: <Discover />,
  },
  {
    link: "/social",
    label: "Social",
    element: <Social />,
  },
];

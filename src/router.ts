import { RootRoute, Route, Router } from '@tanstack/react-router';
import { IndexLayout } from './layout/IndexLayout';
import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/Home';
import { LeaderBoard } from './pages/LeaderBoard';
import { Play } from './pages/Play';
import { Settings } from './pages/Settings';
import { Store } from './pages/Store';

const rootRoute = new RootRoute({
  component: RootLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'index-layout',
  component: IndexLayout,
});

const homeRoute = new Route({
  getParentRoute: () => indexRoute,
  path: '/',
  component: Home,
});

const storeRoute = new Route({
  getParentRoute: () => indexRoute,
  path: '/store',
  component: Store,
});

const settingsRoute = new Route({
  getParentRoute: () => indexRoute,
  path: '/settings',
  component: Settings,
});

const leaderBoardRoute = new Route({
  getParentRoute: () => indexRoute,
  path: '/leader-board',
  component: LeaderBoard,
});

const playRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/play',
  component: Play,
});

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([homeRoute, storeRoute, settingsRoute, leaderBoardRoute]),
  playRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
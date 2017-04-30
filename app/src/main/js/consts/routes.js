const RootRoutes = {
  auth: '/auth',
  main: '/feeds',
  settings: '/settings',
  profile: '/profile',
};

const Routes = {
  auth: {
    root: RootRoutes.auth,
    login: `${RootRoutes.auth}/login`,
    register: `${RootRoutes.auth}/register`,
    logout: `${RootRoutes.auth}/logout`,
  },
  main: {
    root: RootRoutes.main,
    rants: `${RootRoutes.main}/rants`,
    stories: `${RootRoutes.main}/stories`,
    collabs: `${RootRoutes.main}/collabs`,
    weekly: `${RootRoutes.main}/weekly`,
    settings: RootRoutes.settings,
    profile: RootRoutes.profile,
  },
};

export default Routes;

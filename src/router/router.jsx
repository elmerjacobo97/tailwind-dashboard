import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { BasicStylesPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { path: 'introduction', element: <BasicStylesPage /> },
          // { path: 'typography', element: <TypographyPage /> },
          // { path: 'colors', element: <ColorsPage /> },
          // { path: 'spacing', element: <SpacingPage /> },
          // { path: 'sizing', element: <SizingPage /> },
          // { path: 'background', element: <BackgroundPage /> },
          // { path: 'borders-shadows', element: <BordersShadowsPage /> },
          // { path: 'flexbox-grid', element: <FlexboxGridPage /> },
          // { path: 'transitions-animations', element: <TransitionsAnimationsPage /> },
          // { path: 'responsive-design', element: <ResponsiveDesignPage /> },
          // { path: 'common-components', element: <CommonComponentsPage /> },
          // { path: 'plugins-extensions', element: <PluginsExtensionsPage /> },
          // { path: 'advanced-utilities', element: <AdvancedUtilitiesPage /> },
          // { path: 'state-management', element: <StateManagementPage /> },
          // { path: 'dark-mode', element: <DarkModePage /> },
          // { path: 'customization', element: <CustomizationPage /> },
          // { path: 'practices', element: <PracticesPage /> },
          // { path: 'deploy-optimization', element: <DeployOptimizationPage /> },
        ],
      },
      // {
      //   path: 'auth',
      //   element: <AuthLayout />,
      //   children: [
      //     { path: 'login', element: <LoginPage /> },
      //   ],
      // },
      {
        path: '*',
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
]);

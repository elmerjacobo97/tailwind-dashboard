import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components/sidemenu/SideMenu';

export const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll antialiased bg-slate-200 text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="relative flex h-screen flex-row">
        <SideMenu />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

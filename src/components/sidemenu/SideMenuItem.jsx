import { NavLink } from 'react-router-dom';

export const SideMenuItem = ({ href, Icon, title, subTitle }) => {
  return (
    <NavLink key={href} to={href} className="flex items-center space-x-2 px-6 py-4 hover:bg-slate-500/10 rounded-lg">
      <div>
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </NavLink>
  );
};

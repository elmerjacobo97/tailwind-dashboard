import {
  IoAlbumsOutline,
  IoBrushOutline,
  IoBuildOutline,
  IoCodeSlashOutline,
  IoColorPaletteOutline,
  IoColorWandOutline,
  IoConstructOutline,
  IoExtensionPuzzleOutline,
  IoFlashOutline,
  IoGridOutline,
  IoLayersOutline,
  IoLeafOutline,
  IoPhonePortraitOutline,
  IoResizeOutline,
  IoTextOutline,
} from 'react-icons/io5';

import { SideMenuItem } from './SideMenuItem';

const menuItems = [
  { title: 'Estilos Básicos', subTitle: 'Aplicación de Estilos Básicos', href: '/dashboard/basic-styles', Icon: IoTextOutline },
  { title: 'Tipografía', subTitle: 'Estilos de Tipografía', href: '/dashboard/typography', Icon: IoTextOutline },
  { title: 'Colores', subTitle: 'Aplicación de Colores', href: '/dashboard/colors', Icon: IoColorPaletteOutline },
  { title: 'Espaciado', subTitle: 'Márgenes y Padding', href: '/dashboard/spacing', Icon: IoResizeOutline },
  { title: 'Tamaño', subTitle: 'Utilidades de Tamaño', href: '/dashboard/sizing', Icon: IoAlbumsOutline },
  { title: 'Fondo', subTitle: 'Estilos de Fondo', href: '/dashboard/background', Icon: IoLayersOutline },
  { title: 'Bordes y Sombras', subTitle: 'Aplicación de Bordes y Sombras', href: '/dashboard/borders-shadows', Icon: IoBuildOutline },
  { title: 'Flexbox y Grid', subTitle: 'Utilización de Flexbox y Grid', href: '/dashboard/flexbox-grid', Icon: IoGridOutline },
  { title: 'Transiciones y Animaciones', subTitle: 'Transiciones y Animaciones', href: '/dashboard/transitions-animations', Icon: IoFlashOutline },
  { title: 'Diseño Responsivo', subTitle: 'Diseño Responsivo', href: '/dashboard/responsive-design', Icon: IoPhonePortraitOutline },
  { title: 'Componentes Comunes', subTitle: 'Creación de Componentes Comunes', href: '/dashboard/common-components', Icon: IoConstructOutline },
  { title: 'Plugins y Extensiones', subTitle: 'Uso de Plugins y Extensiones', href: '/dashboard/plugins-extensions', Icon: IoExtensionPuzzleOutline },
  { title: 'Utilidades Avanzadas', subTitle: 'Uso de Utilidades Avanzadas', href: '/dashboard/advanced-utilities', Icon: IoCodeSlashOutline },
  { title: 'Dark Mode', subTitle: 'Implementación de Dark Mode', href: '/dashboard/dark-mode', Icon: IoLeafOutline },
  { title: 'Customización', subTitle: 'Customización Avanzada', href: '/dashboard/customization', Icon: IoColorWandOutline },
  { title: 'Prácticas y Ejemplos', subTitle: 'Proyectos Prácticos', href: '/dashboard/practices', Icon: IoBrushOutline },
];
export const SideMenu = () => {
  return (
    <div id="menu" className="left-0 z-10 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300 w-80">
      <div id="logo" className="px-6 my-4">
        {/* Title */}
        <h1 className="text-lg font-bold text-white md:text-2xl">
          Tailwind
          <span className="text-xs text-blue-500"> CSS</span>.
        </h1>
        <p className="text-sm text-slate-500">
          Una librería de estilos CSS para el diseño de interfaces web, diseñados para ser minimalistas y flexibles.
        </p>
      </div>

      {/*  Profile */}
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm font-bold md:text-base">Elmer Jacobo</span>
        </a>
      </div>

      <nav>
        {menuItems.map((item) => (
          <SideMenuItem key={item.href} {...item} />
        ))}
      </nav>
    </div>
  );
};

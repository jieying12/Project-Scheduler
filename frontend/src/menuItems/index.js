import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

const items = {
  id: 'items',
  title: 'Menu Items',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'my-timetables',
      title: 'My Timetables',
      type: 'item',
      url: '/myTimetables',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'my-modules',
      title: 'My Modules',
      type: 'item',
      url: '/myModules',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'all-modules',
      title: 'All Modules',
      type: 'item',
      url: '/allModules',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
  ]
};

const menuItems = {
  items: [items]
};

export default menuItems;

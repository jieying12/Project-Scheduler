import NavGroup from './NavGroup';
import menuItems from '../../../../menuItems';

const MenuList = () => {

  return <NavGroup key={menuItems.items.id} item={menuItems.items[0]} />;

};

export default MenuList;

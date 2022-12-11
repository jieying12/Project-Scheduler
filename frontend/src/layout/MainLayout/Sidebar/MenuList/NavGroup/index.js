import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { List } from '@mui/material';

import NavItem from '../NavItem';

const NavGroup = ({ item }) => {
  const theme = useTheme();

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    return <NavItem key={menu.id} item={menu} />;
  });

  return (
    <>
      <List>
        {items}
      </List>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;

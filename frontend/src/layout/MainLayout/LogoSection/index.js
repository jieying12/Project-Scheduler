import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';
import Typography from '@mui/material/Typography';

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to="/home">
    <Typography color="primary" variant="h2">Scheduler</Typography>
  </ButtonBase>
);

export default LogoSection;
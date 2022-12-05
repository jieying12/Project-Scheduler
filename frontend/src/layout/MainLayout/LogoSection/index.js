import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to="/">
        Scheduler
    </ButtonBase>
);

export default LogoSection;

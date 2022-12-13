import { Avatar, Box, ButtonBase, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

export default function Availability() {
  const theme = useTheme();

  const handlePrevMonth = () => {

  };

  const handleNextMonth = () => {

  };


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Typography sx={{ color: "#504c6c", width: '100%' }} variant="h2" >
        Availability
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', width: '100%', mt: 5, alignItems: 'center' }}>
        <Typography sx={{ color: "#504c6c", flex: 5 }} variant="h4">
          December, 2022
        </Typography>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', flex: 1 }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: '#f2efff',
              color: '#605ed5',
              '&:hover': {
                background: '#b5a9cc',
                color: '#f8eef4'
              }
            }}
            onClick={handlePrevMonth}
            color="inherit"
          >
            <IconArrowLeft stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', flex: 1 }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: '#f2efff',
              color: '#605ed5',
              '&:hover': {
                background: '#b5a9cc',
                color: '#f8eef4'
              }
            }}
            onClick={handleNextMonth}
            color="inherit"
          >
            <IconArrowRight stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', mt: 2, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', borderRadius: '15px', justifyContent: 'center', alignContent: 'left', flexDirection: 'column', width: '150px', height: '55px', background: 'rgba(36, 32, 244, 0.1)' }}>
          <Typography sx={{ pl: 1, color: "#2420f4" }} variant="h6" >
            From
          </Typography>
          <Typography sx={{ pl: 1, color: "#2420f4" }} variant="h5" >
            13.12.22
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', borderRadius: '15px', justifyContent: 'center', alignContent: 'left', flexDirection: 'column', width: '150px', height: '55px', background: 'rgba(36, 32, 244, 0.1)' }}>
          <Typography sx={{ pl: 1, color: "#2420f4" }} variant="h6" >
            To
          </Typography>
          <Typography sx={{ pl: 1, color: "#2420f4" }} variant="h5" >
            30.12.22
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
import Timetable from '../components/Timetable'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function HomeSection() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box>xs=8</Box>
      </Grid>
      <Grid item xs={9}>
        <Timetable />
      </Grid>
    </Grid>
  )
}
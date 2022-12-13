import Timetable from '../components/Timetable'
import Availability from '../components/Availability'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Home() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Availability />
      </Grid>
      <Grid item xs={9}>
        <Timetable />
      </Grid>
    </Grid>
  )
}
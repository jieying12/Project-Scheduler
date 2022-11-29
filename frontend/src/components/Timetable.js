// import './Timetable.css';
import Box from '@mui/material/Box';

export default function Homepage() {

  return (
    <Box
      sx={{
        maxHeight: 500,
        overflow: 'auto',
        pt: 15
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: 'repeat(11, 1fr)'
        }}
      >
        <Box sx={{ gridColumn: '2 / -1', gridRow: '1 / 2' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Monday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Tuesday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Wednesday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Thursday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Friday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Saturday</Box>
            <Box sx={{ py: '3rem', px: '4rem', borderRadius: '1rem', background: '#D9D9D9' }}>Sunday</Box>
          </Box>
        </Box >

        <Box sx={{ gridColumn: '1 / 2', gridRow: '1 / -1' }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              py: '0',
              px: '1rem'
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>/</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>10:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>11:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>12:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>01:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>02:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>03:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>04:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>05:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>06:00</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', borderRadius: '1rem', background: '#D9D9D9' }}>07:00</Box>
          </Box>
        </Box >

        <Box
          sx={{
            gridColumn: '2 / -1',
            gridRow: '2 / -1',
            display: 'grid',
            gridTemplateColumns: 'subgrid',
            gridTemplateRows: 'repeat(10, 1fr)',
            gap: '1rem'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '1 / span 2',
              gridRow: '1 / 4',
              backgroundColor: '#b5a9cc'
            }}>
            <h2>CS2040</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '1 / 4',
              gridRow: '5 / 7',
              backgroundColor: '#b5a9cc'
            }}>
            <h2>CS2030</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '3 / 4',
              gridRow: '1 / 4',
              backgroundColor: '#e7b4c9'
            }}>
            <h2>IS4228</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '4 / 6',
              gridRow: '1',
              backgroundColor: '#62c3ed'
            }}>
            <h2>IS4151</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '4 / 6',
              gridRow: '3 / 7',
              backgroundColor: '#62c3ed'
            }}>
            <h2>IS3221</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '1 / 4',
              gridRow: '8 / 11',
              backgroundColor: '#b5a9cc'
            }}>
            <h2>IS2103</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '4 / 6',
              gridRow: '9 / 11',
              backgroundColor: '#e7b4c9'
            }}>
            <h2>Additional</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '6 / 8',
              gridRow: '1 / 7',
              backgroundColor: '#d26c63'
            }}>
            <h2>Miscellaneous</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem',
              paddingLeft: '2rem',
              borderRadius: '1.5rem',
              gridColumn: '6 / 8',
              gridRow: '8 / 11',
              backgroundColor: '#d26c63'
            }}>
            <h2>Miscellaneous</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <span>Time: 10-11</span>
              <span>Stage</span>
              <span>Presenter</span>
            </Box>
          </Box>

          <Box sx={{ gridColumn: '1 / 4', gridRow: '4 / 5', backgroundColor: '#f8eef4', alignItems: 'center', padding: '0', borderRadius: '1rem', display: 'flex', justifyContent: 'center' }}>
            BREAK
          </Box>
          <Box sx={{ gridColumn: '4 /6', gridRow: '2 / 3', backgroundColor: '#f8eef4', alignItems: 'center', padding: '0', borderRadius: '1rem', display: 'flex', justifyContent: 'center' }}>
            BREAK
          </Box>
          <Box sx={{ gridColumn: '1 / 8', gridRow: '7 / 8', backgroundColor: '#f8eef4', alignItems: 'center', padding: '0', borderRadius: '1rem', display: 'flex', justifyContent: 'center' }}>
            BREAK
          </Box>
        </Box >
      </Box >
    </Box>
  )
}
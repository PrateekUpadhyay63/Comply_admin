// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import "./reusables.scss"
// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const TableHeader = props => {
  // ** Props
  const { status, requestSearch, handleFilter, value,getTeamList } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4, alignSelf: 'start' ,justifyContent: 'space-around'}}>
        <Box><TextField
          size='small'
          value={value}
          placeholder='Find'
          sx={{ mr: 6, mb: 2 }}
          onChange={e => handleFilter(e.target.value)}
        />

        <FormControl size='small' sx={{ mb: 2 }}>
          <InputLabel id='plan-select'> Select status</InputLabel>
          <Select
            size='small'
            value={status}
            
            id='section'
            label='section'
            labelId='section'
            onChange={requestSearch}
            inputProps={{ placeholder: ' --All-- ' }}
          >
            <MenuItem value=''>--All--</MenuItem>
            <MenuItem value='Home'>Home</MenuItem>
          </Select>
        </FormControl>
        <Button className='btn btn-secondary' variant='contained' onClick={getTeamList}>Search</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TableHeader

import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  display: 'flex', // Enable flexbox
  flexDirection: 'column', // Arrange items in a column
  gap: '16px', 
  
};
function Addevent() {
    const [open, setOpen] = React.useState(false);
    const [alertopen, setalertOpen] = React.useState(false);
    const [formData, setFormData] =React.useState({
      eventName: '',
      eventLocation: '',
      eventOrganizer: '',
      eventType: '',
      fromDate: '',
      toDate: '',
    });


    const handleOpen = () =>{setOpen(true)}

    const handleClose = () =>{setOpen(false);
      setFormData({eventName: '',
      eventLocation: '',
      eventOrganizer: '',
      eventType: '',
      fromDate: '',
      toDate: '',})}


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleShowParticipants = () => {
      setalertOpen(true);
      };

      const handlealertClose = () => {
        setalertOpen(false);
      };

      const handle=()=>{
        if (!formData.eventName || !formData.eventLocation || !formData.eventOrganizer || !formData.eventType || !formData.fromDate || !formData.toDate) {
          alert("Please Fill all the Details");
        }
        else{
        handleClose();handleShowParticipants();}
      }
      
  return (
    <div className='p-5 pt-0'>
        <Box sx={{height:'10rem'}}>
        <Typography variant='h3' >Create An Event,</Typography>
        <Button startIcon={<AddRoundedIcon fontSize='large' />} variant='contained' sx={{position:'relative',left:450,top:30,}} onClick={handleOpen}>Add Event</Button>
        </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl variant="standard">
        <InputLabel htmlFor="Eventname">
          Event Name
        </InputLabel>
        <Input
          value={formData.eventName}
          onChange={handleChange}
          name='eventName'
          id="Eventname"
          startAdornment={
            <InputAdornment position="start">
              <EventNoteRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="Eventlocation">
          Event Location
        </InputLabel>
        <Input
          value={formData.eventLocation}
          onChange={handleChange}
          name='eventLocation'
          id="Eventlocation"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="Eventorganizer">
          Event Organizer
        </InputLabel>
        <Input
          value={formData.eventOrganizer}
          onChange={handleChange}
          id="Eventorganizer"
          name='eventOrganizer'
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="Eventtype">
          Event Type
        </InputLabel>
        <Input
          value={formData.eventType}
          onChange={handleChange}
          id="Eventtype"
          name='eventType'
          startAdornment={
            <InputAdornment position="start">
              <WorkOutlineRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="fromdate">
          From Date
        </InputLabel>
        <Input
          value={formData.fromDate}
          onChange={handleChange}
          id="fromdate"
          type='date'
          name='fromDate'
          startAdornment={
           <InputAdornment position="start"></InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="todate">
          To Date
        </InputLabel>
        <Input
          value={formData.toDate}
          onChange={handleChange}
          id="todate"
          type='date'
          name='toDate'
          startAdornment={
            <InputAdornment position="start"></InputAdornment>
           }
        />
      </FormControl>
          <Button onClick={handle} variant='contained'>Submit</Button>
          <Button onClick={handleClose} variant='contained' >Close</Button>
        </Box>
      </Modal>
      <Divider/>
      <Box sx={{paddingTop:5,}}>
      <Typography variant='h3' >Current  Events,</Typography>
      </Box>
      <Snackbar open={alertopen} autoHideDuration={3000} onClose={handlealertClose} anchorOrigin={{ vertical : 'bottom',horizontal: 'right' }} >
              <Alert severity="success" onClose={handlealertClose}>
                Data Inserted Successfully.
              </Alert>
      </Snackbar>
    </div>
  )
}

export default Addevent
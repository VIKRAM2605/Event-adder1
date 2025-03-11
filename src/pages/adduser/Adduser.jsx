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
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import EmailIcon from '@mui/icons-material/Email';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
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
function Adduser() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] =React.useState({
          eventName: '',
          participantName: '',
          participantEmail: '',
          participantRegisterNo: '',
          participantDeptNo: '',
          participantPhoneNo: '',
        });
    const [alertopen, setalertOpen] = React.useState(false);


    const handleOpen = () => setOpen(true);


    const handleClose = () =>{setOpen(false);
      setFormData({
        eventName: '',
        participantName: '',
        participantEmail: '',
        participantRegisterNo: '',
        participantDeptNo: '',
        participantPhoneNo: '',
      })}

    
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
            if (!formData.eventName || !formData.participantName || !formData.participantEmail || !formData.participantDeptNo || !formData.participantRegisterNo || !formData.participantPhoneNo) {
              alert("Please Fill all the Details");
            }
            else{
            handleClose();handleShowParticipants();}
          }


  return (
    <div className='p-5 pt-0'>
        <Box sx={{height:'10rem'}}>
        <Typography variant='h3' >Add Participant,</Typography>
        <Button startIcon={<AddRoundedIcon fontSize='large' />} variant='contained' sx={{position:'relative',left:400,top:30,}} onClick={handleOpen}>Add Participant</Button>
        </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Participant Participating Event
        </InputLabel>
        <Input
          value={formData.eventName}
          onChange={handleChange}
          name='eventName'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <DashboardRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Participant Name
        </InputLabel>
        <Input
        value={formData.participantName}
        onChange={handleChange}
        name='participantName'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <Input
          value={formData.participantEmail}
          onChange={handleChange}
          name='participantEmail'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Register.No
        </InputLabel>
        <Input
          value={formData.participantRegisterNo}
          onChange={handleChange}
          name='participantRegisterNo'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <NumbersRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Dept.No
        </InputLabel>
        <Input
          value={formData.participantDeptNo}
          onChange={handleChange}
          name='participantDeptNo'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <BusinessRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Phone.No
        </InputLabel>
        <Input
          value={formData.participantPhoneNo}
          onChange={handleChange}
          name='participantPhoneNo'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <ContactPhoneRoundedIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
          <Button onClick={handle} variant='contained'>Submit</Button>
          <Button onClick={handleClose} variant='contained' >Close</Button>
        </Box>
      </Modal>
      <Divider/>
      <Box sx={{paddingTop:5,}}>
      <Typography variant='h3' >Add Participants,</Typography>
      <input style={{position:'relative',left:400,top:30}} className='border-2 p-2 pr-0 w-60 rounded-lg text-white bg-[#1976d2] text-center' type='file' />
      </Box>
      <Snackbar open={alertopen} autoHideDuration={3000} onClose={handlealertClose} anchorOrigin={{ vertical : 'bottom',horizontal: 'right' }} >
                    <Alert severity="success" onClose={handlealertClose}>
                      Participant Added Successfully.
                    </Alert>
            </Snackbar>
    </div>
  )
}

export default Adduser
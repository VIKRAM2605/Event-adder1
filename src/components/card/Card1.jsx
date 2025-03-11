import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material/';
import PersonIcon from '@mui/icons-material/Person';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
export default function ActionAreaCard() {
  const [open, setOpen] = React.useState(false);
  const handleShowParticipants = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        </CardContent>
      </CardActionArea>
      <Box sx={{paddingLeft:2}}>
      <Button  startIcon={<PersonIcon/>} onClick={handleShowParticipants} variant='outlined' color='info' size="small">See Participants</Button>
      </Box>
      <Box sx={{display:'flex',gap:2,padding:2}}>
      <Button startIcon={<EditIcon/>} variant='outlined' color='info' size="small">Edit</Button>
      <Button startIcon={<DeleteIcon/>} variant='outlined' color='error' size="small">Delete</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
        <Alert severity="success" onClose={handleClose}>
          This is a success Alert.
        </Alert>
      </Snackbar>
    </Card>
  );
}

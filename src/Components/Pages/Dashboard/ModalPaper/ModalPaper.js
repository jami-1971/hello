import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import useAuth from '../../../hooks/useAuth'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalPaper = ({open, handleClose, handleOpen, date, user})=> {
  // const {user} = useAuth()
  // const initialInfo ={pora: 'ghumaisi -_-', UsWritings: ''  }
  const [bookingInfo, setBookingInfo] = useState({});

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }
  const handleSubmit = e  =>{
    //collect data
    const likha = {
      ...bookingInfo,
      email : user?.email,
      date : date.toLocaleDateString()
    }
    // console.log(likha)
    // send to the server
    fetch('https://dry-peak-44721.herokuapp.com/likha', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(likha)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      handleClose();
    })

    
    e.preventDefault();
    }
  return (  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit}> 
        <TextField
          disabled
          sx={{width:'60%', mb:1, mt:1}}
          id="outlined-size-small"
          label=""
          rows={4}
          defaultValue={date.toLocaleDateString()}
        /> 
        <TextField
          disabled
          sx={{width:'90%', mb:1}}
          id="outlined-size-small"
          label=""
          rows={4}
          defaultValue={user?.email}
        /> 
        <TextField
          required
          sx={{width:'90%'}}
          id="outlined-required"
          label="ki ki polso bolo ajk"
          name="pora"
          onBlur={handleOnBlur}
          defaultValue=""
          placeholder="pola nibo kintuu...."
        />
          <TextField
          required
          sx={{mt:1, width:'90%'}}
          id="standard-multiline-static"
          label="butuputuuuuuu"
          rows={4}
          color="secondary"
          name="UsWritings"
          onBlur={handleOnBlur}
          defaultValue=""
          placeholder="umm..."
          variant="standard"
        />
        
        <Button sx={{mt: 5, mx:3}} onClick={handleSubmit} variant="contained">tluck</Button>
        </form>
        </Box>
      </Modal>
  );
}
export  default ModalPaper;
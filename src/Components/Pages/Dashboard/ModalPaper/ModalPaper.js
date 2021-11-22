import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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

const ModalPaper = ({open, handleClose, handleOpen, date})=> {
  // const initialInfo ={pora: 'ghumaisi -_-', UsWritings: ''  }
  const [bookingInfo, setBookingInfo] = useState    ({});

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
      date : date.toLocaleString()
    }
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
          sx={{width:'90%', mb:2, mt:1}}
          id="outlined-size-small"
          label=""
          rows={4}
          defaultValue={date.toLocaleString()}
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
          sx={{mt:3, width:'90%'}}
          id="outlined-multiline-static"
          label="butuputuuuuuu"
          rows={4}
          name="UsWritings"
          onBlur={handleOnBlur}
          defaultValue=""
          placeholder="umm..."
        /> <br />
        
        <Button sx={{mt: 5, mx:3}} onClick={handleSubmit} variant="contained">tluck</Button>
        </form>
        </Box>
      </Modal>
  );
}
export  default ModalPaper;
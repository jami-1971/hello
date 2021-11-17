import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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

const ModalPaper = ({open, handleClose, handleOpen})=> {
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
          required
          id="outlined-required"
          label="ki ki polso bolo ajk"
          defaultValue=""
          placeholder="pola nibo kintuu...."
        />

          <TextField
          sx={{mt:3}}
          id="outlined-multiline-static"
          label="butuputuuuuuu"
          rows={4}
          defaultValue=""
          placeholder="umm..."
        />
        </Box>
      </Modal>
  );
}
export  default ModalPaper;
import React from 'react';
import {Container} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlarmIcon from '@mui/icons-material/Alarm'
import IconButton from '@mui/material/IconButton';
import ModalPaper from '../ModalPaper/ModalPaper';
import useAuth from '../../../hooks/useAuth'
import { FaMeh } from 'react-icons/fa';

import './Papers.css'

const Papers = ({date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {user, googleSignIn} =  useAuth();

    return (
       <>
        <Container className="m-5 paper">
           <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          now {date.toLocaleString()}
          <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
        </Typography>
        <Typography  color="text.secondary" variant="h6" component="div">
          la lala lala v<FaMeh />s pa rappa pa
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" >
          wake wake wake <br />
          jami calling !!!
        </Typography>
        <Typography variant="h10" color="text.secondary">
            butuputu
          <br />
          {user.email ? <Button sx={{mt: 5}} onClick={handleOpen} variant="contained" color="success">Aii</Button> : <Button sx={{mt: 5}} onClick={googleSignIn} variant="outlined" color="error">login kolo</Button>}
          
        </Typography>
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
       </Container>
       <ModalPaper 
       date={date}
       open={open}
       handleOpen={handleOpen}
       handleClose={handleClose}
       user={user}
       ></ModalPaper>
       
       </>
    );
};

export default Papers;
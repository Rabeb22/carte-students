import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import './carteinitial.css'


function WithLabelExample(now) {
  
    return <ProgressBar now={now} label={`${now}%`} />;
  }

export const Carteinitial = ({array, date}) => {
    return (
        <Box
      sx={{
        marginLeft:"300px",
        '& > :not(style)': {
          m: 1,
          width: 700,
          height: 400,
        },
      }}
    >
    <Paper elevation={24} >
        <div style={{justifyContent: "center",display: 'flex', flexWrap: 'wrap'}}>
        <div style={{alignItems: "center",marginTop: "50px", width:"350px"}}>
        <div style={{justifyContent:"spaceBetween",display: 'flex', flexWrap: 'wrap',}}>
        <div style={{alignItems:"left"}}>
        <h6>Subscription Date</h6>
        {date.datedebut}
        </div>
        <div style={{marginLeft:"90px"}}>
        <h6>Expiration Date</h6>
        {date.datefin}
        </div>
        </div>
        <br/><br/>
        {array.map(el=>
            <div>
           <h6>{el.theme}</h6>
           
           {WithLabelExample(el.now)}
           </div>
            )} 
            
        </div>
        
        <div>
        <img style={{ height: "250px", width:"250px", borderRadius: "100%", margin: "0px 15px",marginTop: "50px" }} src="https://avatars.githubusercontent.com/u/119300806?v=4" alt=""></img>
        <h3>Rabeb Halouani</h3>
        </div>

        </div>  
        </Paper>
        
        </Box>  
    )

}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Homepage() {
    return (
        <Box sx={{paddingLeft:5,backgroundColor:'#3A3A3A'}}>
             
            <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
            <Typography variant='h3' sx={{color:'#FFF',textTransform: 'uppercase' }}>Games</Typography> 
            <Grid container spacing={1} rows={3} columns={24}>
                <Grid sx={{background:'none'}} item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}>  <img
                                    src="./index.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        objectFit: 'fill'
                                        
                                    }}
                                />
                          </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./index1.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        
                                        }}
                                /></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./index2.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        
                                        
                                    }}
                                /></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./index.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        
                                       
                                    }}
                                /></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./index.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        
                                       
                                    }}
                                /></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./index.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                </Grid>
            </Grid>

        </Box>

            <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
            <Typography variant='h3' sx={{color:'#FFF',textTransform: 'uppercase'}}  >Music</Typography> 
                <Divider/>
                <Grid container spacing={1} rows={3} columns={24}>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song1.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song2.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./song3.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./song4.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song5.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
            <Typography variant='h3' sx={{color:'#FFF',textTransform: 'uppercase'}}  >Store</Typography> 
                <Grid container spacing={1} rows={3} columns={24}>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 }}><img
                                    src="./song1.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'} }}><img
                                    src="./song2.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song3.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song4.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{background:'none',boxShadow: 0 ,'&:hover':{borderBottom: "2px solid #0f0", opacity: '0.5'}}}><img
                                    src="./song5.jpg"
                                    alt="profile"
                                    style={{
                                        height: 150,
                                        width: 150,
                                       
                                    }}
                                /></Item>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}

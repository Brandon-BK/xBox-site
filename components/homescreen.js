import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Homescreen() {
    return (
        <Box sx={{paddingLeft:10}}>
             
            <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
            <Typography variant='h3' sx={{color:'#FFF',textTransform: 'uppercase' }}>Games</Typography> 
            <Grid container spacing={1} rows={3} columns={64}>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>image</Item>
                </Grid>
            </Grid>

        </Box>

            <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
            <Typography variant='h3' sx={{color:'#FFF',textTransform: 'uppercase'}}  >Music</Typography> 
                <Grid container spacing={1} rows={3} columns={64}>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>image</Item>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}

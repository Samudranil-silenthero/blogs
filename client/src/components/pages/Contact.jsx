import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Facebook
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Over 100K followeres. Each post garners about 100K likes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Twitter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Over 100K followeres. Each post garners about 100K likes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/238480/pexels-photo-238480.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Instagram
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Over 100K followeres. Each post garners about 100K likes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/5426400/pexels-photo-5426400.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pinterest
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Over 100K followeres. Each post garners about 100K likes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
    </Grid>
  </Box>

    

     
  );
} 

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Write your Blog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bring out your stories, experiences, ideas and share it with others. Communicate your thoughts with no word limit.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://media.istockphoto.com/photos/business-concept-male-finger-pointing-delete-key-picture-id464515667?b=1&k=20&m=464515667&s=612x612&w=0&h=1q-uh8CFFCFiaQrPWMATsbliTJUh1WCAc9s-WOuF28A="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Edit your Blog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  You can update your blog easily. Add new information to your existing blog whenever needed. Continue from where you left.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/9159387/pexels-photo-9159387.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Read other Blogs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Read and enjoy blogs published by other users on various topics.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
    </Grid>
  </Box>

    

     
  );
} 

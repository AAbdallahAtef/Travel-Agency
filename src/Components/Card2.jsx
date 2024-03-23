import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Rating } from '@mui/material';

export default function Card2() {
  const [value, setValue] = React.useState(5);

  return (
    <Card sx={{ maxWidth: 345,backgroundColor:'#052624' }}>
      <CardHeader sx={{color:'#d2d2d2'}}
        avatar={
          <Avatar alt="Alenay gordan" src="Images/avatar2.png"  aria-label="customer2"/>
        }
        title="Alenay gordan"
      />
      <CardContent>
      <Rating sx={{color:'tomato'}} name="read-only" value={value} readOnly />
        <Typography sx={{textAlign:'justify'}} variant="body2" color="#d2d2d2">
                The travel location deep within the forest provided a serene atmosphere that allowed me to
                fully immerse myself in nature and enjoy my surroundings.
        </Typography>
      </CardContent>
    </Card>
  );
}
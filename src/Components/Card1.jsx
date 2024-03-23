import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function RecipeReviewCard() {
  const [value, setValue] = React.useState(5);

  return (
    <Card sx={{ maxWidth: 345,backgroundColor:'#052624' }}>
      <CardHeader sx={{color:'#d2d2d2'}}
        avatar={
          <Avatar alt="Kathryn Murphy" src="Images/avatar1.png"  aria-label="customer1"/>
        }
        title="Kathryn Murphy"
      />
      <CardContent>
      <Rating sx={{color:'tomato'}} name="read-only" value={value} readOnly />
        <Typography sx={{textAlign:'justify'}} variant="body2" color="#d2d2d2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
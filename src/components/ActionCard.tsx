import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface ActionAreaCardProps {
  imgPath: string;
  title: string;
  description: string;
}

export default function ActionAreaCard({imgPath, title, description}: ActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgPath}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
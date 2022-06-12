import {
  Avatar, Card, CardContent, CardHeader, CardMedia, Typography
} from '@mui/material';


const Blog = ({title, description, imageUrl, userName}) => {
   
  return (
    <div>
         {" "}
         <Card sx={{ 
             width: "40%" , 
             margin: 'auto' , 
             mt:2 , 
             padding: 2, 
             boxShadow: "5px 5px 10px #ccc", 
             ":hover":{
             boxShadow: "10px 10px 20px #ccc"
         }, 
          mb:2
         }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            {userName ? userName.charAt(0): ""}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         <b> {userName} </b> : {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Blog
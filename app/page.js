import { Typography,Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid, Toolbar,Container} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Box } from "@mui/system";
import Link from "next/link";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        mkee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      {/* nave bar */}
      <AppBar position="relative">
        <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">
              Photo MKee
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth="sm" style={{marginTop:'50px'}}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Mkee
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello every one this is a photo album and i'm truing to make this sentence as log as possible so we can see how does it look like on the screen
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <container  sx={{ pt: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card}  xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia sx={{pt: '56.25%'}} image="https://source.unsplash.com/random" title="Image title"/>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">Heading</Typography>
                  <Typography >this is a media card.You can use this section to describe the content</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
            
          </Grid>
        </container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </>
  )
}

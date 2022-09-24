import React from 'react'
import { Button,Card,CardMedia,CardContent,Typography,CardActions,Grid,Container } from "@mui/material";

function Plants ({id , image , nameplant, type, region }) {
  return (
    <div>
                            
                            <div className="container">
                <Container maxWidth="lg" className="mt-5 overflow-y-auto max-h-[35rem] ">
                    <Grid container spacing={2}>
                        
                            <Grid item xs={12} md={4} key={id}>
                                
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={image}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {nameplant}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        ประเภทพืช: {type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        ภูมิภาค: {region}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
        
                    </Grid>
                </Container>

                </div>
    </div>
  )
}

export default Plants

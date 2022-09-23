import axios from "axios"
import { useState, useEffect } from "react"
import { Button,Card,CardMedia,CardContent,Typography,CardActions,Grid,Container } from "@mui/material";


const apiURL = "http://localhost:8050/"

function Introduceplants() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    if (!post) return "no post";

    return (
        <div>
            <div className=" ">
                <p className='flex justify-center text-4xl font-medium mt-5 mb-5'>Introduceplants</p>        
                
                
                
                <div className="container">
                <Container maxWidth="lg" className="mt-5 overflow-y-auto max-h-[35rem] ">
                    <Grid container spacing={2}>
                        {post.map(e => (
                            <Grid item xs={12} md={4} key={e.id}>
                                
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={e.image}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {e.nameplant}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        ประเภทพืช: {e.type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        ภูมิภาค: {e.region}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Container>

                </div>
            </div>
        </div>
    )
}

export default Introduceplants;
import axios from "axios"
import { useState, useEffect } from "react"
import { Button, Card, CardMedia, CardContent, Typography, CardActions, Grid, Container } from "@mui/material";

const apiURL = "http://localhost:8050/"

function Introduceplants() {
    const [post, setPost] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    if (!post) return "no post";

    return (
        <div>
            <div className="grid justify-center">
                <p className='flex justify-center text-4xl font-medium mt-5 mb-5'>Introduceplants</p>
            <div className="flex justify-center">
                <input onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                    type="text" name="" id="" class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Search" required />
                </div>
                
                <div className="container">
                <Container maxWidth="lg" className="mt-5 overflow-y-auto max-h-[35rem] ">
                    <Grid container spacing={2}>
                            {post.filter((e) => {
                                if (searchTerm == "") {
                                    return e
                                } else if (e.nameplant.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return e
                                }
                            }).map(e => {
                                return <Grid item xs={12} md={4} key={e.id}>
                                
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
                        })}
                    
                    </Grid>
                </Container>

                </div>
            </div>
        </div>
    )
}

export default Introduceplants;
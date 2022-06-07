import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CampusFacility = (props) => {

    const { name, description, img } = props.facility;

    return (
        <Grid item xs={4} sm={4} md={4} >

            <Card sx={{ minWidth: 275, border: 2, borderColor: ' #5d4037', borderRadius: 3, boxShadow: 3, boxShadow: "0 3px 6px 9px lightgreen", py: 1 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '90px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div" sx={{ color: '#b71c1c' }}>
                        {name}
                    </Typography>
                    <br></br>
                    <Typography variant="body2" >
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid >
    );
};
export default CampusFacility;
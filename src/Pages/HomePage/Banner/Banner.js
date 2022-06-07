import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../../images/girl-image.png";
import backgroundImg from "../../../images/bg2.jpg";



const bannerBackground = {
    background: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(27, 44, 84 ,0.7)',
    backgroundBlendMode: 'darken, luminosity'
    // width: '100vw',
    // height: '100vh'

}
const style = {
    display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
    width: '100%',
    textAlign: "right",
    orientation: "horizontal"
};



const Banner = () => {
    return (
        <div className="header-section">
            <Box style={bannerBackground} sx={style}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography variant="h3" component="div" sx={{ color: 'white', my: 5, fontWeight: 500 }}>
                            World's Most Popular
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ color: 'black', fontWeight: 500 }}>
                            Online Learning platform
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <img

                            src={bannerImg} alt="girls image is not found"></img>
                    </Grid>

                </Grid>
            </Box >
        </div >
    );
};
export default Banner;
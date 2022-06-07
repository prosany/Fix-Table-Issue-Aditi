import React, { useState } from 'react'
import Faq from '../Faq/Faq';
import faqImg from '../../../images/ss6.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
// import { height } from '@mui/system';

function FaqQuestions() {

    const [faqs, setfaqs] = useState([
        {
            question: "How many programers here?",
            answer: 'around 20',
            open: true
        },
        {
            question: "What are the services do you offer ?",
            answer: 'more then 200',
            open: false
        },
        {
            question: "Are your services beginners friendly?",
            answer: 'Yeah, Definitely.',
            open: false
        },
        {
            question: "what how does it take to upgrade a package?",
            answer: 'Right right',
            open: false
        }
    ]);
    const headderStyle = {
        padding: '25px',
        backgroundColor: ' #33c8bd',
        display: 'flex',
        justifyContent: 'center'

    };
    const imgStyle = {
        width: '200px',
        // margin: '3% auto',
        height: '200px',
        position: 'related',
    };
    const faqsStyle = {
        display: 'flex',
        width: '100%'
    };
    return (
        <div >
            <Container>
                <Box style={faqsStyle}>
                    <Grid container rowSpacing={1} spacing={0} columns={16}>
                        <Grid item xs={8} style={imgStyle}>
                            <img src={faqImg}></img>
                        </Grid>
                        <Grid item xs={8}>
                            <h1 style={headderStyle}>FAQs</h1>
                            {
                                faqs.map((faq, i) => (
                                    <Faq faq={faq} index={i}></Faq>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>





        // <div className='faqs' style={faqsStyle}>
        //     <div>
        //         <img src={faqImg}></img>
        //     </div>
        //     <div>
        //         <h1 style={headderStyle}>FAQs</h1>
        //         {
        //             faqs.map((faq, i) => (
        //                 <Faq faq={faq} index={i}></Faq>
        //             ))
        //         }
        //     </div>

        // </div >
    )
}

export default FaqQuestions
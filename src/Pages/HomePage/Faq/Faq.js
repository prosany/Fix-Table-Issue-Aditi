import React from "react";




const Faq = ({ faq, index }) => {

    const faqStyle = {
        // margin: '15px',
        padding: '15px',
        backgroundColor: 'white',
    };

    const questionStyle = {
        // position: 
    };

    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            style={faqStyle}
        >
            <div className="faq-question" style={questionStyle}>
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>


        </div>
    );
};
export default Faq;


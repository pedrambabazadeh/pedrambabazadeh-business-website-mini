import React from 'react'

const mailtoFunction = () => {
    const email = "info@webinsighter.com";
    const subject = encodeURIComponent("I would like to know more about collaboration");
    const mailtoLink = `mailto:${email}?subject=${subject}`;
    window.location.href = mailtoLink;
}

export default mailtoFunction
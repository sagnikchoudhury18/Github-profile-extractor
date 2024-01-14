import React from "react"
import {Container} from "reactstrap"

const Footer = () => {
    return (
        <Container
            fluid
            tag = "footer"
            className = "text-center bg-success text-white text-uppercase fixed-bottom p-3"
        >
            GitHub Profile App
        </Container>
    )
    
}

export default Footer;
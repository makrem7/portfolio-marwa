import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Education, Experience, Contacts, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Graphic Designer Portfolio | Logo & Brand Identity, UI/UX Design</title>
                <meta name="description" content="Portfolio of Marwa Hammemi, a passionate graphic designer based in Sfax, Tunisia. Specialized in logo & brand identity, social media posts, UI/UX design, and print design. View my creative work and get in touch for your next project." />
                <meta name="keywords" content="Marwa Hammemi, graphic designer, graphic design portfolio, logo design, brand identity, UI design, UX design, print design, social media design, Sfax designer, Tunisia graphic designer" />
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main

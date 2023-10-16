import React from 'react'
import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Container from '@mui/material/Container'

function Services() {
  return (
    <>
      <Head>
        <title>Penceil</title>
        <meta name="description" content="Penceil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className = "page_section">
        <Container>
          <h3>SERVICES</h3>
          <Grid container spacing = {2}>
            <Grid item xs = {3}>
              <p>01</p>
              <h3>GRAPHIC DESIGNING </h3>
              <p>AS ONE OF INDIA'S BEST GRAPHIC DESIGN COMPANIES, WE TRANSFORM IDEAS INTO HIGH-QUALITY, INDUSTRY-LEADING PROJECTS. OUR BANGALORE AGENCY PROVIDES EXCELLENT UI/UX DESIGN THROUGH INNOVATIVE MECHANISMS AND STRONG CLIENT RELATIONSHIPS. WE AIM TO BE YOUR PREMIER LOGO AND VISUAL IDENTITY PARTNER.</p>
            </Grid>
            <Grid item xs = {3}>
              <p>02</p>
              <h3>UX/UI DESIGNING</h3>
              <p>AS A LEADING UI UX DESIGN COMPANY, WE CREATE SCALABLE, SUSTAINABLE, AND FUTURISTIC SOLUTIONS THAT BRING EXTRAORDINARY IDEAS TO LIFE THROUGH EXCELLENT UI UX DESIGN STUDIOS, UX DESIGN BEST PRACTICES, AND A REFINED UX DESIGN PROCESS TO DELIVER THE MOST CREATIVE AND INNOVATIVE FILTERS UI DESIGN.</p>
            </Grid>
            <Grid item xs = {3}>
              <p>03</p>
              <h3>WEB DEVELOPMENT</h3>
              <p>WE HELP YOU TRANSLATE ANY KIND OF DESIGN INTO FUNCTIONAL DIGITAL PRODUCTS SUCH AS WEBSITES, MOBILE APPS OR ENTERPRISE SOLUTIONS. IMPLEMENTING THE BEST COMBINATION OF TECHNOLOGIES (FULL-STACK, MEAN STACK, FLUTTER, NATIVE-OS) FOR YOUR PROJECT.</p>
            </Grid>
            <Grid item xs = {3}>
              <p>04</p>
              <h3>APP DEVELOPMENT</h3>
              <p>WE DEVELOP AND CRAFT YOUR PRODUCT, SO IT CAN BE USED DIRECTLY BY YOUR USERS. HENCE, SEAMLESSLY TRANSLATING DESIGN OUTPUTS INTO TANGIBLE DIGITAL PRODUCTS IN THE REAL WORLD. LEVERAGING THE LATEST TECHNOLOGIES TO DEVELOP ROBUST AND SCALABLE HYBRID AND NATIVE MOBILE APPLICATIONS.</p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Services
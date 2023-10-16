import React from 'react'
import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Image from 'next/image'

function Projects() {
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
          <h3>PROJECTS</h3>
          <Grid container spacing = {2}>
            <Grid item xs = {3}>
              {/* <Image src = "" /> */}
              <div className = "dummy_img"></div>
              <h3>BRANDING</h3>
            </Grid>
            <Grid item xs = {3}>
              {/* <Image src = "" /> */}
              <div className = "dummy_img"></div>
              <h3>Customer Relation Management</h3>
            </Grid>
            <Grid item xs = {3}>
              {/* <Image src = "" /> */}
              <div className = "dummy_img"></div>
              <h3>Point of sale System</h3>
            </Grid>
            <Grid item xs = {3}>
              {/* <Image src = "" /> */}
              <div className = "dummy_img"></div>
              <h3>New Modern Ariana</h3>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Projects
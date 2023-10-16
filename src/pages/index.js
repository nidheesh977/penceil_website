import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button, { ButtonProps } from '@mui/material/Button';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { styled } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#eeeeee"),
  backgroundColor: "#eeeeee",
  '&:hover': {
    backgroundColor: "#ffffff",
  },
}));

export default function Home() {
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
          <Grid container spacing={2} style = {{alignItems: "center"}}>
            <Grid item xs={7}>
              <div>
                <h1>WE ELEVATE BRANDS BY CRAFTING ENGAGING DIGITAL EXPERIENCES.</h1>
                <p>MINAMALISTIC  |  FUTURE DRIVEN  |  SUSTAINABLE SOLUTIONS </p>
                <Link href = "/contact-us">
                  <Button variant='contained' endIcon={<NorthEastIcon />} className = {styles.link_btn}>GET IN TOUCH</Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div>
                <p>SERVICES</p>
                <h3>WE SHAPE THE INNOVATIVE SOLUTION</h3>
                <Link href = "/services">
                  <Button variant='contain'>SEE SERVICES <NorthEastIcon /></Button>
                </Link>
              </div>
              <div>
                <p>PROJECTS</p>
                <h3>INNOVATIVE FULL CYCLE AGENCY</h3>
                <Link href = "/projects">
                  <Button variant='contain'>SEE PROJECTS <NorthEastIcon /></Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

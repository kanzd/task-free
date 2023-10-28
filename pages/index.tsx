import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid } from "../styledcomponents/Grid";
import Sidemenu from '@/components/Sidemenu';
import Main from '@/components/Main';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.homeRoot}>
        <Sidemenu title={"Sportia"}></Sidemenu>
        <Main></Main>
      </div>
    </>
  )
}

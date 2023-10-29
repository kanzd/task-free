import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid } from "../styledcomponents/Grid";
import Sidemenu from '@/components/Sidemenu';
import Main from '@/components/Main';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home')
  }, [])
  return (
    <>
      <div className={styles.homeRoot}>


      </div>

    </>
  )
}

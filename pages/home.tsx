import React, { createContext, useState } from 'react';
import Sidemenu from '@/components/Sidemenu';
import Main from '@/components/Main';
import styles from '@/styles/Home.module.css'

export const RootContext = createContext<any>({});
export default function Home() {
    const [currentOption, setCurrentOption] = useState("option1");
    return (
        <RootContext.Provider value={{ currentOption, setCurrentOption }}>
            <div className={styles.homeRoot}>
                <Sidemenu title={"Sportia"}></Sidemenu>
                <Main></Main>

            </div>
        </RootContext.Provider>
    )
}

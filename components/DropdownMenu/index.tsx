import React, { MouseEventHandler } from 'react';
import Styles from "../../styles/dropdownmenu.module.css";
import Image from 'next/image';
import UpArrow from "../../assets/Frame (5).svg";
import DownArrow from '../../assets/Frame (4) copy 2.svg';

interface DropdownMenuProps {
    title: string;
    leadingIcon: any;
    isActive: boolean;
    children:React.ReactElement[]|React.ReactElement,
    onClick:MouseEventHandler<HTMLDivElement>;
}
interface DropdownMenuListProps{
    leadingIcon:string;
    title:string
}
export function DropdownMenuList({leadingIcon,title}:DropdownMenuListProps){
    return (
        <>
        <div className={Styles.dropdownmenulist}>
        <Image src={leadingIcon} alt={''} height={24} width={24} ></Image>
        <div className={Styles.dropdownmenulistTitle}>
            {title}
        </div>
        </div>
        </>
    );
}
export default function DropdownMenu({ title, leadingIcon, isActive,children,onClick }: DropdownMenuProps) {
    return (
        <div className={Styles.dropdownmenuRoot} onClick={onClick}>
            <div className={Styles.dropdownmenuInner} style={{ backgroundColor: isActive ? "#62208D" : "transparent" }}>
                <div className={Styles.dropdownmenuTitle}>
                    <Image src={leadingIcon} alt={''} height={24} width={24} >

                    </Image>
                    <div className={Styles.dropdownmenuInnerTitle} style={{fontWeight:isActive?"600":"400"}}>
                        {title}
                    </div>
                </div>
                <div className={Styles.dropdownmenuTraling}>
                    <Image src={isActive ? DownArrow : UpArrow} height={20} width={20} alt={''}></Image>
                </div>
            </div>
            {isActive&&<div className={Styles.dropdownmenuList}>
                {children}
            </div>}
            
        </div>
    )
}

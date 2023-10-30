import React, { MouseEventHandler } from 'react';
import Styles from "../../styles/dropdownmenu.module.css";
import Image from 'next/image';
import UpArrow from "../../assets/Frame (5).svg";
import DownArrow from '../../assets/Frame (4) copy 2.svg';
import * as Styled from "./Styled";

interface DropdownMenuProps {
    title: string;
    leadingIcon: any;
    isActive: boolean;
    children: React.ReactElement[] | React.ReactElement,
    onClick: MouseEventHandler<HTMLDivElement>;
}
interface DropdownMenuListProps {
    leadingIcon: string;
    title: string
}
export function DropdownMenuList({ leadingIcon, title }: DropdownMenuListProps) {
    return (
        <>
            <Styled.DropdownMenuList>
                <Image src={leadingIcon} alt={''} height={24} width={24} ></Image>
                <Styled.DropdownMenuListTitle>
                    {title}
                </Styled.DropdownMenuListTitle>
            </Styled.DropdownMenuList>
        </>
    );
}
export default function DropdownMenu({ title, leadingIcon, isActive, children, onClick }: DropdownMenuProps) {
    return (
        <Styled.DropdownMenuRoot onClick={onClick}>
            <Styled.DropdownMenuInner isActive={isActive}>
                <Styled.DropdownMenuTitle>
                    <Image src={leadingIcon} alt={''} height={24} width={24} >

                    </Image>
                    <Styled.DropdownMenuInnerTitle>
                        <div className={Styles.dropdownmenuInnerTitle} style={{ fontWeight: isActive ? "600" : "400" }}>
                            {title}
                        </div>
                    </Styled.DropdownMenuInnerTitle>
                </Styled.DropdownMenuTitle>
                <Styled.DropdownMenuTrailing isActive={isActive}>
                    <Image src={isActive ? DownArrow : UpArrow} height={20} width={20} alt={''}></Image>
                </Styled.DropdownMenuTrailing>
            </Styled.DropdownMenuInner>
            {isActive && <div className={Styles.dropdownmenuList}>
                {children}
            </div>}
        </Styled.DropdownMenuRoot>
    )
}

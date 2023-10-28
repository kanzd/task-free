import React from 'react';
import Barca from "../../assets/image 11.svg";
import Mu from "../../assets/image 13.svg";
import Image from 'next/image';

export default function LiveCard() {
  return (
    <div>
        <div>
        Live Matches 
        </div>
        <div>
        Description about this match
        </div>
        <div>
            <div>
                <Image src={Barca} height={76} width={76} alt=""></Image>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

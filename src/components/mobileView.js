import React from 'react';
import MobileViewStyle from "../styles/MobileViewStyle";
import list from "../assests/list";

import screen1 from "../assests/fold1.png"
import screen2 from "../assests/fold2.webp"
import screen3 from "../assests/fold3.webp"
import screen4 from "../assests/fold4.png"


const MobileView = () =>{

    const screenList = [screen1, screen2, screen3, screen4]


    return(
        <MobileViewStyle>
            <ul>

                {list.map((el,index)=>
                    <li>
                        <h1>{el.head}</h1>

                            <div className={'phone-border'}>
                                <div className={'phone-screen'}>
                                    <div key={index} className={"screen"}>
                                        <img src={screenList[index]} alt={""}/>
                                    </div>
                                </div>
                            </div>

                        <p>{el.para}</p>
                    </li>
                )}
            </ul>
        </MobileViewStyle>
    )

}

export default MobileView;
import React, {useState} from 'react';
import './App.css';
import { Waypoint } from 'react-waypoint';
import Home from "./styles/homeStyle";
// import Phone from "./components/phone";
import ContentStyle from "./styles/contentStyle";
import list from "./assests/list"
import PhoneStyle from "./styles/phoneStyle";
import MobileView from "./components/mobileView";
import screen1 from "./assests/fold1.png"
import screen2 from "./assests/fold2.webp"
import screen3 from "./assests/fold3.webp"
import screen4 from "./assests/fold4.png"




const  App=()=> {

    const screenList = [screen1, screen2, screen3, screen4]

    const [screen, setScreen] = useState(0)

    return (
    <div className="App">
      <Home>
          {/*<Content/>*/}
          <ContentStyle>
              <ul>

                  {list.map((el, index )=>

                      <li key={index} id={`screen_${index}`}>
                          <Waypoint
                              onEnter={()=> {
                                  setScreen(-300 * index);
                                  document.getElementById(`screen_${index}`).style.opacity = "1";
                              }}
                              onLeave={()=>document.getElementById(`screen_${index}`).style.opacity="0"}
                          />
                          <h1>{el.head}</h1>
                          <p>{el.para}</p>
                      </li>
                  )}

                  {/*<li>*/}
                  {/*    <Waypoint*/}
                  {/*        onEnter={()=>setScreen(0)}*/}
                  {/*    />*/}
                  {/*    <h1>*/}
                  {/*        What is Lorem Ipsum*/}
                  {/*    </h1>*/}
                  {/*    <p>*/}
                  {/*        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.*/}
                  {/*    </p>*/}
                  {/*/!*</Waypoint>*!/*/}
                  {/*</li>*/}


                  {/*<li>*/}
                  {/*    <Waypoint*/}
                  {/*        onEnter={()=>setScreen(-300)}*/}
                  {/*   / >*/}
                  {/*    <h1>*/}
                  {/*        Where does it come from*/}
                  {/*    </h1>*/}
                  {/*    /!*</Waypoint>*!/*/}
                  {/*</li>*/}


                  {/*<li>*/}
                  {/*    <Waypoint*/}
                  {/*        onEnter={()=>setScreen(-600)}*/}
                  {/*    />*/}
                  {/*    <h1>*/}
                  {/*        Why do we use it*/}
                  {/*    </h1>*/}
                  {/*    /!*</Waypoint>*!/*/}
                  {/*</li>*/}






              </ul>
          </ContentStyle>
          <PhoneStyle>
              <div className={'phone-border'}>
                  <div className={'phone-screen'}>
                      <ul style={{left:`${screen}px`}}>

                          {screenList.map((el, index )=>

                              <li key={index} className={"screen"}>
                                  <img src={el} alt={""}/>
                              </li>
                          )}
                      </ul>
                  </div>
              </div>
          </PhoneStyle>

          <MobileView/>

      </Home>
    </div>
  );
}

export default App;

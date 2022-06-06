import React from 'react';
import ContentStyle from "../styles/contentStyle";

const list = [
    {
        head : "What is Lorem Ipsum",
        para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        head : "Where does it come from",
        para : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        head : "Why do we use it",
        para : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
]

const Content = () =>{
    return (
        <ContentStyle>
            <ul>
                {list.map((el, index )=> <li key={index}><h1>{el.head}</h1> <p>{el.para}</p></li>)}
            </ul>
        </ContentStyle>
    )
}

export default Content;


import styled from 'styled-components';

const ContentStyle = styled.div`
  @media(max-width: 889px){
    display: none;
  }
  
  height: max-content;
  color: white;
  width: 50%;
  ul{
    li{
      list-style: none;
      text-align: left;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding: 0 100px;
      transition: opacity 0.5s;
      
      h1{
        font-size: 420%;
        margin-bottom: 30px;
        font-family: gilroy-bold, sans-serif;
        letter-spacing: 1px;
      }
      p{
        font-size: 110%;
        letter-spacing: 1px;
      }
    }
  }
  @media(max-width: 992px){
    ul{
      li{
        padding: 0 20px;
        h1{
          font-size: 250%;
        }
      }
    }

  }

`

export default ContentStyle;
import styled from 'styled-components';

const PhoneStyle = styled.div`
  @media(max-width: 889px){
    display: none;
  }
  position: fixed;
  top:15vh;
  left: 60%;
  .phone-border{
    background-color: rgb(33,36,38);
    height: 580px;
    width: 330px;
    box-shadow: rgb(176 176 178 / 16%) 0px -5px 6px 0px inset, rgb(0 0 0 / 24%) 4px 6px 11px 1px inset;
    border-radius: 46px;
    display: flex;
    .phone-screen{
      margin: auto;
      background-color: rgb(39,43,45);
      border-radius: 36px;
      height: 550px;
      width: 300px;
      overflow: hidden;
      position: relative;
      ul{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        list-style: none;
        position: absolute;
        transition: left 0.5s;
        .screen{
          img{
            width: 300px;
            height: 550px;
            border-radius: 36px;
          }
        }
      }
      
    }
  }
`

export default PhoneStyle;
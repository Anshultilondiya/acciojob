import styled from 'styled-components'

const MobileViewStyle = styled.div`
@media(min-width: 890px){
  display: none;
}
  ul {
    list-style: none;
    color: white;

    li {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 80%;
      h1,p{
        text-align: left;
        margin: 50px 0;
        
      }
      h1{
        font-size: 350%;
        
      }
      p {
        font-size: 110%;
        
      }
    }
  }
  
  .phone-border{
    background-color: rgb(33,36,38);
    height: 500px;
    width: 300px;
    box-shadow: rgb(176 176 178 / 16%) 0px -5px 6px 0px inset, rgb(0 0 0 / 24%) 4px 6px 11px 1px inset;
    border-radius: 46px;
    display: flex;
    .phone-screen{
      margin: auto;
      background-color: rgb(39,43,45);
      border-radius: 36px;
      height: 470px;
      width: 270px;
      overflow: hidden;
      position: relative;
        .screen{
          img{
            width: 270px;
            height: 470px;
            border-radius: 36px;
          }
        }
    }
  }
  @media(max-width: 390px){
    .phone-border {
      background-color: rgb(33, 36, 38);
      height: 400px;
      width: 240px;
      .phone-screen{
        margin: auto;
        background-color: rgb(39,43,45);
        border-radius: 36px;
        height: 370px;
        width: 210px;
        overflow: hidden;
        position: relative;
        .screen{
          img{
            width: 210px;
            height: 370px;
            border-radius: 36px;
          }
        }
      }
    }
  }
`


export default MobileViewStyle
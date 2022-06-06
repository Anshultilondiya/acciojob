import styled from 'styled-components';
import bg from "../assests/hero-bg.jpg";

const Home = styled.div`
  height: max-content;
  width: 100%;
  //background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  position: relative;
  background-color: rgb(33, 36, 38);
  padding: 0 100px;
  @media(max-width: 767px){
    padding: 0 50px;
  }
`

export default Home;
import styled, { createGlobalStyle } from "styled-components";
type TPropsWallpaper = {
  url: string,

}


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
`

export const Div = styled.div `
  height: auto;
  min-height: 150vh;
  width: 100%;
  background-color: black;

 
  `
export const Wallpaper = styled.div<TPropsWallpaper> `
  background-image: url(${(props) => props.url}) ;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 5%;
  height: 90vh;
  width: 100%;
  

`

export const P = styled.p`
  font-size: 5rem;
  color: red;
 
  `

export const Caixa = styled.div `
  color: white;
  position: relative;
  top: 65%;
  left: 65%;
  transform: translate(-50%,-50%);
  width: 300px;
  backdrop-filter: blur(2px);
  border-radius: 5%;
  padding: 50px ;
  h3{
   
    font-size: 2.5rem;
  }
`

export const Container = styled.div ` 
color: white;
text-align: center;
h1{
  font-size: 2rem;
  margin-top: 5%;
}

 li{
  font-size: 1.5rem;
  list-style: none;
 }

`

export const Ul = styled.ul `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 3%;
  animation: teste 2s infinite ;
  text-align: center;
  @media (max-width: 728px) {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    }
`
export const ButtonBuy = styled.button `
  cursor: pointer;
  
  color: red;
  font-size: 2.5rem;
  position: fixed;
  transform: translate(-50%);
  left: 50%;
  bottom: 0%;
  width: 80%;
  margin-bottom: 5%;

`
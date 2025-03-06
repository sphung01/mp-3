import Header from "./tagcomponents/Header"
import Navigation from "./tagcomponents/Navigation"
import Main from "./tagcomponents/Main"
import Footer from "./tagcomponents/Footer"
import { styled } from "styled-components"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppPageWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  font-family: 'MyCustomFont';
`;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: lightgreen;

  @media screen and (max-width: 850px){
    flex-direction: column;
  }
`;

function Root() {
  return(
    <AppPageWrap>
        <Header />
        <AppContainer>
            <Navigation />
            <Main />
        </AppContainer>
        <Footer />
    </AppPageWrap>
  );
}

const router = createBrowserRouter([ 
  { path: "*", element: <Root />}
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

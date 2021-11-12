import React from "react";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.style";

export default function App (){
   return <Wrapper> 
    <Container>
        <AppHeader />
        <AppContainer
         left={
          <div>
            Produtos Disponíveis
          </div>}
          middle={
            <div>
                Lista de Compras
            </div>
          }
          right={
              <div>
                Estatisticas
              </div>
          }
        />
    </Container>
   </Wrapper>
}
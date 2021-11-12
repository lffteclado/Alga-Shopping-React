import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.style";

export default function App (){
const [lettuce, setLettuce ] = useState(true)
const [rice, setRice] = useState(false)

   return <Wrapper> 
    <Container>
        <AppHeader />
        <AppContainer
         left={
          <div>
            Produtos Disponíveis
            <Checkbox 
              value={lettuce}
              title="Alface"
              onClick={() => setLettuce(!lettuce)}
            />
            <Checkbox 
              value={rice}
              title="Arroz"
              onClick={() => setRice(!rice)}
            />
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
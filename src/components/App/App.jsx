import React, { useEffect, useState } from "react";
import Checkbox from "../../shared/Checkbox";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.style";

export default function App (){
const [lettuce, setLettuce ] = useState(true)
const [rice, setRice] = useState(false)
const [healthy, setHealthy] = useState(20);

const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

useEffect(() =>{
  setTimeout(() => {
    setHealthy(80)
  }, 5000)
},[])

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

                <LineChart color={colors[0]} title={'Saudável'} percentage={80} />
                <LineChart color={colors[1]} title={'Não tão saudável assim'} percentage={40} />
                <LineChart color={colors[2]} title={'Limpeza'} percentage={20} />
                <LineChart color={colors[3]} title={'Outros'} percentage={10} />
               
              </div>
          }
        />
    </Container>
   </Wrapper>
}
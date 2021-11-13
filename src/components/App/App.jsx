import React, { useState, useEffect } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.style";
import ShoppingList from "../ShoppingList";
import productMock from '../../mocks/products.json'

export default function App (){
const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

const [products, setProducts] = useState(productMock.products)
const [selectedProducts, setSelectedProducts] = useState([])

useEffect(() =>{
  const newSelectedProducts = products
    .filter(product => product.checked)
  setSelectedProducts(newSelectedProducts)
}, [products])

function handleToggle(id){
  const newProduct = products.map(product =>
    product.id === id ? {...product, checked: !product.checked} : product
  )

  setProducts(newProduct)
}

/*useEffect(() =>{
  setTimeout(() => {
    setHealthy(80)
  }, 5000)
},[])*/

   return <Wrapper> 
    <Container>
        <AppHeader />
        <AppContainer
         left={
            <ShoppingList
               title="Produtos Disponíveis"
                 products={products}
                 onToggle={handleToggle}
               />}
          middle={
            <ShoppingList
               title="Sua Lista de Compras" 
               products={selectedProducts}
               onToggle={handleToggle}
               />}
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
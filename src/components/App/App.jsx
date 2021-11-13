import React, { useState, useEffect } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.style";
import ShoppingList from "../ShoppingList";
import productMock from '../../mocks/products.json'
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator/Calculator";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/Products/Products.selectors";

export default function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(selectAllProducts)

  //const [products, setProducts] = useState(productMock.products)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked)
    setSelectedProducts(newSelectedProducts)
  }, [products])

  useEffect(() => {
    const total = selectedProducts
      .map(product => product.price)
      .reduce((a, b) => a + b, 0)
    setTotalPrice(total)
  }, [selectedProducts])

  function handleToggle(id) {
    const newProduct = products.map(product =>
      product.id === id ? { ...product, checked: !product.checked } : product
    )

    //setProducts(newProduct)
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

            <LineChart
              color={colors[0]}
              title={'Saudável'}
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(
                  product => product.tags.includes('healthy')).length
              )} />
            <LineChart
              color={colors[1]}
              title={'Não tão saudável assim'}
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(
                  product => product.tags.includes('junk')).length
              )} />
            <LineChart
              color={colors[2]}
              title={'Limpeza'}
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(
                  product => product.tags.includes('cleaning')).length
              )} />
            <LineChart
              color={colors[3]}
              title={'Outros'}
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(
                  product => product.tags.includes('others')).length
              )} />
            <div style={{ marginTop: 12 }}>
              <h2 style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#00364A'
              }}>
                Previsão de Gastos:
              </h2>
              <div style={{ fontSize: 24 }}>
                {totalPrice.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                })}
              </div>
              <Calculator />
            </div>
          </div>
        }
      />
    </Container>
  </Wrapper>
}
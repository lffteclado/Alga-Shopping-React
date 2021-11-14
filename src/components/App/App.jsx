import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Wrapper } from "./App.style";

import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from '../AppHeader'
import ShoppingList from "../ShoppingList";
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator/Calculator";

import {
        selectAllProducts,
        selectSelectedProductsTotalPrice,
        selectSelectProducts
       } from "../../store/Products/Products.selectors";
import { toggleProduct } from "../../store/Products/Products.actions";

export default function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(selectAllProducts)
  const selectedProducts = useSelector(selectSelectProducts)
  const totalPrice = useSelector(selectSelectedProductsTotalPrice)

  const dispatch = useDispatch();

  /*useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked)
    setSelectedProducts(newSelectedProducts)
  }, [products])*/

  /*useEffect(() => {
    const total = selectedProducts
      .map(product => product.price)
      .reduce((a, b) => a + b, 0)
    setTotalPrice(total)
  }, [selectedProducts])*/

  function handleToggle(id) {
   dispatch(toggleProduct(id))
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
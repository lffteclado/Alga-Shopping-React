import React from "react";
import { Wrapper, Title, Array } from "./ShoppingList.styles";
import Checkbox from '../../shared/Checkbox'
import { useSelector } from "react-redux";
import { selectAllProducts, selectSelectProducts } from "../../store/Products/Products.selectors";

export default function ShoppingList ({ title , onToggle, displayOnlySelected}) {
    const products = useSelector(
        displayOnlySelected
         ? selectSelectProducts
         : selectAllProducts)
    return <Wrapper>
        <Title>
            { title }:
        </Title>
        <Array>            
            {
                products.map((product)=>
                 <Checkbox
                  key={product.id}
                  value={product.checked}
                  title={product.name}
                  onClick={() => onToggle(product.id)}
                   />)
            }
        </Array>
    </Wrapper>
}
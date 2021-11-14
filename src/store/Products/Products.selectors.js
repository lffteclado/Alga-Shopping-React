export const selectAllProducts = state => state.products

export const selectSelectProducts =
    state => state.products.filter(product => product.checked)

export const selectSelectedProductsTotalPrice =
    state => state.products
        .filter(product => product.checked)
        .reduce((a,b) => a + b.price, 0)
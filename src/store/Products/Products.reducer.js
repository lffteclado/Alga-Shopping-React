import productsMock from '../../mocks/products.json'


const reducer = (state = productsMock.products, action) => {
    switch (action.type) {
        case 'TOGGLE_PRODUCT':
        return  state.map(product =>
                    product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product
                )
        default:
            return state
    }
}

export default reducer
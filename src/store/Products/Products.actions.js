export function selectProduct(id) {
    return{
        type: 'SELECT_PRODUCT',
        payload: id
    }
}
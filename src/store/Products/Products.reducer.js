import productsMock from '../../mocks/products.json'


export default (state = productsMock.products, action) =>{
    switch(action.type){
        default:
            return state
    }
}
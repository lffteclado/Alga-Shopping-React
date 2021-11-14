/*Action Creator*/
export function toggleProduct(id) {
    return{
        type: 'TOGGLE_PRODUCT',
        payload: id
    }/*Action (é um obejto retornado do Action Creator)*/
}
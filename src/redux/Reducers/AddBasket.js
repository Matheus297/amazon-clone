export const initialState = {
  basket: [],
  user: null,
}

function AddBasket(state, action){
  console.log(action)
  switch(action.type){
    case 'ADD_TO_BASKET':
      return {state};
     
    case 'REMOVE_FROM_BASKET':
      return {state};
      
    default:
      return state;  
  }
}

export default AddBasket;
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';
import rootReducer from '../redux/rootReducer';

function CakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes)  
  const dispatch = useDispatch();
 
  return (
    <div>
        <h1>Number Of Cakes : {numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy</button>
    </div>
  )
}

// const mapStateToProps =(state)=>{
//     return{
//         numOfCakes : state.numOfCakes
//     }
// }

// const mapDispatchToProps =(dispatch)=>{
//     return{
//         buyCake : () => dispatch(buyCake())
//     }
// }

export default CakeContainer
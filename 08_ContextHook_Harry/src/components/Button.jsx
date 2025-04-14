import React, { useContext } from 'react'

//using the setCount function here so count can be changed with this button also
import Component1 from './Component1'
import { counterContext } from '../context/Context'
function Button() {
    const valueobject = useContext(counterContext)
  return (
    <div>
         <button onClick={(e) => valueobject.setCount(valueobject.count+1)}>
             I am a Button with component 1
             <span><Component1/> </span>
         </button>
     </div>
  )
}

export default Button



//This is prop drilling without context API

// import React from 'react'
// import Component1 from './Component1'

// const Button = ({count}) => {
//   return (
//     <div>
//         <button>
//             I am a Button with component 1
//             <span><Component1 count={count}/> </span>
//         </button>
//     </div>
//   )
// }

// export default Button
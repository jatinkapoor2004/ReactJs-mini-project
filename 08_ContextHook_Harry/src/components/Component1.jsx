import React from 'react'

//Directly Using the count we give to Navbar in innerMost Component1 wala 
import { useContext } from 'react'
import { counterContext } from '../context/Context'

function Component1() {
    const valueobject = useContext(counterContext);
    return (
    <div>
        i am Component1 with count {valueobject.count}
     </div>
  )
}

export default Component1



//This is prop drilling without context API

// import React from 'react'

// const Component1 = ({count}) => {
//   return (
//     <div>
//         i am Component1 with count = {count}
//     </div>
//   )
// }

// export default Component1       
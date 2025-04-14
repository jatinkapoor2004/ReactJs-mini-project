import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <>
     <div>
         Navbar with button 
         <Button/>    
     </div>
     </>
  )
}

export default Navbar







//This is prop drilling without context API

// import React from 'react'
// import Button from './Button'

// function Navbar({count}) {
//   return (
//     <>
//     <div>
//         Navbar with button 
//         <Button count={count}/>    
//     </div>
//     </>
//   )
// }

// export default Navbar



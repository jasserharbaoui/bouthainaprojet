import React  from 'react'
import Navbar from './component/navbar/navbar'
import Admin from './pages/admin/admin.jsx'
// const Messages = await import(`./component/navbar/${Navbar}.json`)

const App = () =>{
  return(
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
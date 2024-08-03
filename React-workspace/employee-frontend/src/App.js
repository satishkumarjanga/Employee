import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hello from './components/Hello'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

function App() {
  return (
    <div>
          <HeaderComponent/>
          <BrowserRouter>
         <div className='container'>
          <Routes>
            <Route exact path='/' element={<Hello/>}/>
            <Route path='/employees' element={<ListEmployeeComponent/>}/>
            <Route path='/add_employee' element={<CreateEmployeeComponent/>}/> 
            <Route path='/update_employee/:id' element={<UpdateEmployeeComponent/>}/>
          </Routes>
         </div>
         </BrowserRouter>
         <FooterComponent/>
           
    </div>
  )
}

export default App

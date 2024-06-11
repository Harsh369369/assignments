import * as React from 'react'
import CardOne from './components/CardOne'
import CardTwo from './components/CardTwo'
import ProfileCard from './components/ProfileCard'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav'
import Item from './components/Item'

function App() {

  return (
    <ChakraProvider>
      <Nav/>
      <Item/>
      </ChakraProvider>
  )
}

export default App

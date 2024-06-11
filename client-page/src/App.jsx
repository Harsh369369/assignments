import * as React from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <ProfileCard/>
      </ChakraProvider>
  )
}

export default App

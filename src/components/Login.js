import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

import React, { useContext } from 'react'
import { Authcontext } from './authContext'
import { login } from '../actions/authAction'

const Login = () => {
  const {user, dispatch }= useContext(Authcontext)
  
  
  const handleLogin=()=>{
dispatch(login("Juan Pa"))
  } 
  
  
  
  
  
  
  
  return (
        <div>
          <Text 
          fontSize="2rem"
          
          >{user.name}</Text >  
          <hr/>
          <Button onClick={handleLogin}variant="outline" colorScheme="blue" type="submit"
          fontSize="20px">login</Button>
        </div>
    )
}

export default Login

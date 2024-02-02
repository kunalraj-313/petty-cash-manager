import React from 'react'
import { Typography ,Box} from '@mui/material'
import '../styles/Navbar.css'
import { useLogout } from 'hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from "hooks/useAuthContext";


export default function Navbar() {

  const {logout} = useLogout()
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <Box className='navbar-container'>
      {
        !user ? (
          <Box style={{marginRight:'20px',cursor:'pointer'}} onClick={()=>navigate('/signup')}>
          <Typography variant='h6' color={'white'}  >
           SIGN UP
          </Typography>
        </Box>
        ) : null
      }
 
      <Box style={{marginRight:'20px',cursor:'pointer'}} onClick={logout}>
      <Typography variant='h6' color={'white'}  >
        LOG OUT
      </Typography>
      </Box>

    </Box>
  )
}

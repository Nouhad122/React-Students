import React from 'react'
import { Button } from 'antd'

function Unauthorized() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>Unauthorized</h1>
      <p style={{fontSize: '1.2rem', color: '#666'}}>You are not authorized to access this page</p>
      <Button type='primary' onClick={() => window.location.href = '/login'}>Login</Button>
    </div>
  )
}

export default Unauthorized

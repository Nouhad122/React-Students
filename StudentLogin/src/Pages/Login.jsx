import React, { useState } from 'react'
import '@ant-design/v5-patch-for-react-19';
import { Form, Input, Button, message } from "antd"
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) =>{
    try{
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, values);
      localStorage.setItem('token', response.data.result);
      navigate('/students');
    }
    catch(error){
      message.error('Invalid email or password');
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <Form
    name="login"
    layout='vertical'
    style={{ 
      maxWidth: 500,
      margin: 'auto',
      marginTop: '8rem',
      border: 'solid 1px var(--blue-color)',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      borderRadius: '10px',
    }}
    onFinish={handleLogin}
    autoComplete="off"
  >
    <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--blue-color)', fontSize: '2rem'}}>Login</h1>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" disabled={loading} style={{ width: '100%', marginTop: '1rem', padding: '.5rem' }}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Login

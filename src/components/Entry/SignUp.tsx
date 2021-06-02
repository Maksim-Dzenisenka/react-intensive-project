import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { User, formLayout, tailLayout } from './common';
import './SignUp.css';
const SignUp: React.FC = (): JSX.Element => {
  const history = useHistory();

  const handleSumbit = (values: User): void => {
    localStorage.setItem('User', JSON.stringify(values));
    history.push('/signin');
  };

  return (
    <Form {...formLayout} size='large' name='SignUp' onFinish={handleSumbit}>
      <h1>SIGN UP</h1>
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;

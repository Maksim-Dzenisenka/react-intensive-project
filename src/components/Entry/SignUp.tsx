import React from 'react';
import { Form, Input, Button } from 'antd';
import User from './UserInterface';
import { formLayout, tailLayout } from './layouts';

const SignUp: React.FC = (): JSX.Element => {
  const handleSumbit = (values: User): void => {
    // console.log(values)
    // console.log('JSON', JSON.stringify(values))
    localStorage.setItem('User', JSON.stringify(values));
  };

  return (
    <Form {...formLayout} size='large' name='SignUp' onFinish={handleSumbit}>
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

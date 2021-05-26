import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { authorization } from './authSlise';
import { User, formLayout, tailLayout } from './common';

const SignUp: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSumbit = (values: User): void => {
    localStorage.setItem('User', JSON.stringify(values));
    dispatch(authorization());
  };
  const history = useHistory();

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
//onClick={() => history.push('/account')}
export default SignUp;

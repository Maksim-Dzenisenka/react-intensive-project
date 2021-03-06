import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { authorization } from './authSlise';
import { User, formLayout, tailLayout } from './common';

const LogIn: React.FC = (): JSX.Element => {
  const [notValid, setNotValid] = useState<boolean | null>(null);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onReset = (): void => {
    setNotValid(false);
    form.resetFields();
  };

  const handleSumbit = (values: User) => {
    const user: User = JSON.parse(localStorage.getItem('User') || '{}');
    const { username: enteredUserName, password: enteredPassword } = values;
    const { username, password } = user;
    if (username !== enteredUserName || password !== enteredPassword) {
      setNotValid(true);
      return;
    }
    dispatch(authorization());
    setNotValid(false);
    history.push('/');
  };

  return (
    <Form
      {...formLayout}
      form={form}
      size='large'
      name='LogIn'
      onFinish={handleSumbit}>
      <h1>LOG IN</h1>
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
      {notValid && (
        <Alert
          message='Login or password is incorrect. If you are new, go to SIGN UP'
          type='error'
        />
      )}
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
        <Button htmlType='button' onClick={onReset} style={{ margin: '20px' }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LogIn;

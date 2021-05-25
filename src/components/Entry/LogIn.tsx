import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import User from './UserInterface';
import { formLayout, tailLayout } from './layouts';

const LogIn: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();
  const [currentUser, setCurrentUser] = useState<User>({
    username: '',
    password: '',
  });

  const onReset = (): void => {
    form.resetFields();
  };

  useEffect(() => {
    // const user: User = JSON.parse(localStorage.getItem('User') || '{}');
    // setCurrentUser(user);
    //console.log('useEffectGetUser', user) //здесь старые данные, предыдущие
  }, []);

  const validateMessages = {
    required: 'Login or password is incorrect!',
  };

  const handleSumbit = (values: User) => {
    console.log('handleSumbit');
    const test: any = localStorage.getItem('User');
    console.log('Значение из local', JSON.parse(test));
    console.log('Значение из формы', values); //при клике приходит правильный объект

    // const { username: enteredUserName, password: enteredPassword } = values;
    // const { username, password } = currentUser;
    // console.log(values)
    // console.log('username', username);
    // console.log('password', password);
    // console.log('enteredUserName', enteredUserName);
    // console.log('enteredPassword', enteredPassword);
    // if (username !== enteredUserName || password !== enteredPassword) {
    //   alert('Wroong');
    // }
    // return console.log('ok', currentUser);
  };

  return (
    <Form
      {...formLayout}
      form={form}
      size='large'
      name='LogIn'
      validateMessages={validateMessages}
      onFinish={handleSumbit}>
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
        <Button htmlType='button' onClick={onReset} style={{ margin: '20px' }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LogIn;

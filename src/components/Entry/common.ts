export interface User {
  username: string;
  password: string;
}
export type auth = { isAuth: boolean };
export const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
export const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

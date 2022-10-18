export interface LoginObj {
  phone: string;
  password: string;
}
export interface LoginResponse {
  isSuccess: boolean;
  message: string;
  token?: any;
}
export interface ForgetPwd {
  otp: string;
  newPassword: string;
}

export interface Registeruser {
  name: string;
  surname: string;
  phoneNumber: string;
  colorId: string;
  password: string;
  dateOfBirth: Date;
  gender: boolean;
}
export interface ResultRegister {
  userId: string;
  isSuccess: boolean;
  message: string;

}
export interface RegisterCode {
  otpCode: string
}

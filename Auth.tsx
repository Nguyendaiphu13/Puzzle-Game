import React, { useState } from 'react';

interface AuthProps {
  mode: 'login' | 'register';
}

const Auth: React.FC<AuthProps> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (email === 'existed@gmail.com') {
      setMessage('Email đã tồn tại');
    } else {
      setStep(2);
    }
  };

  const handleOTP = () => {
    setMessage('Đăng ký thành công');
  };

  const handleLogin = () => {
    setMessage('Chào mừng quay lại');
  };

  return (
    <div>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Mật khẩu" />
      
      {mode === 'register' && step === 1 && (
        <>
          <input placeholder="Tên đăng nhập" />
          <button onClick={handleRegister}>Đăng ký</button>
        </>
      )}

      {mode === 'register' && step === 2 && (
        <>
          <input placeholder="Nhập mã OTP" />
          <button onClick={handleOTP}>Xác nhận OTP</button>
        </>
      )}

      {mode === 'login' && (
        <button onClick={handleLogin}>Đăng nhập</button>
      )}

      {message && <div>{message}</div>}
    </div>
  );
};

export default Auth;
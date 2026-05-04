import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Auth from './Auth';

describe('FR-001 & FR-002: Module Tài khoản', () => {

  it('TC_001: Đăng ký tài khoản thành công', async () => {
    render(<Auth mode="register" />);
    
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Tên đăng nhập/i), { target: { value: 'player1' } });
    fireEvent.change(screen.getByPlaceholderText(/Mật khẩu/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Đăng ký/i }));

    await waitFor(() => screen.getByPlaceholderText(/Nhập mã OTP/i));
    fireEvent.change(screen.getByPlaceholderText(/Nhập mã OTP/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /Xác nhận OTP/i }));

    await waitFor(() => {
      expect(screen.getByText(/Đăng ký thành công/i)).toBeDefined();
    });
  });

  it('TC_002: Đăng ký với Email đã tồn tại', async () => {
    render(<Auth mode="register" />);
    
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'existed@gmail.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Đăng ký/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email đã tồn tại/i)).toBeDefined();
    });
  });

  it('TC_003: Đăng nhập thành công', async () => {
    render(<Auth mode="login" />);
    
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Mật khẩu/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Đăng nhập/i }));

    await waitFor(() => {
      expect(screen.getByText(/Chào mừng quay lại/i)).toBeDefined();
    });
  });

});
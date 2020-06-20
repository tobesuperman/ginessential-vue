import request from '@/utils/request';

// 用户注册
const register = ({ name, telephone, password }) => request.post('/auth/register', { name, telephone, password });

// 用户登录
const login = ({ telephone, password }) => request.post('/auth/login', { telephone, password });

// 获取用户信息
const info = () => request.get('/auth/info');

export default {
  register,
  login,
  info,
};

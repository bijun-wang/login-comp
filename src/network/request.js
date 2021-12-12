import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const request = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.axios拦截器
  request.interceptors.response.use(res=>{return res.data},err=>{})

  //3.发送真正的网络请求
  return request(config)
};

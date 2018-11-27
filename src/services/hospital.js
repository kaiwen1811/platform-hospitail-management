import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryHospitalList() {
  return request('/server/api/manger/doctor/list?limit=10&offset=0');
}

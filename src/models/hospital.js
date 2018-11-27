import { queryHospitalList } from '@/services/hospital';

export default {
  namespace: 'hospital',

  state: {
    hospitalList: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryHospitalList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        hospitalList: [1],
      };
    },
  },
};

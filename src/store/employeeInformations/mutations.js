import * as types from '../../commons/mutationTypes';

const mutations = {
  [types.SET_INFORMATIONS_EMPLOYEES_LIST](state, payload) {
    state.list = payload;
  },
};

export default mutations;

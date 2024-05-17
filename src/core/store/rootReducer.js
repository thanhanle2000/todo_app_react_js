import { CASE_REDUCERS } from "../../untils/constants";

// KHAI BÁO INIT STATE
const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "Hoi Dan IT" },
    { id: 3, name: "Hoi Dan IT voi ERIC" },
  ],
  posts: [],
};

// KHAI BÁO REDUCER
const rootReducer = (state = initState, action) => {
  switch (action?.type) {
    case CASE_REDUCERS?.DELETE_USER:
      let users = state?.users;
      users = users?.filter((item) => item?.id !== action?.payload.id);
      return { ...state, users };
    case CASE_REDUCERS?.CREATE_USER:
      let id = Math.floor(Math.random() * 10000);
      return {
        ...state,
        users: [...state.users, { id: id, name: `random - ${id}` }],
      };
    default:
      return state;
  }
};

export default rootReducer;

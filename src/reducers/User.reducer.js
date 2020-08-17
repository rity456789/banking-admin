const initState = {
  userList: [],
  isLoadingList: false,
  selectedRole: "Employee"
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_USERS_REQUEST":
      return {
        ...state,
        isLoadingList: true,
      };
    case "LOAD_USERS_SUCCESS":
      return {
        ...state,
        userList: action.data,
        isLoadingList: false
      };
    case "LOAD_USERS_FAILURE":
      return {
        ...state,
        isLoadingList: false,
      };
    case "SELECTED_ROLE_CHANGED":
      return {
        ...state,
        selectedRole: action.role,
      };
    default:
      return state;
  }
};

export default UsersReducer;

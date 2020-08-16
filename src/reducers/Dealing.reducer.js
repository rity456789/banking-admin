let today = new Date();
let month = today.getMonth();
if (month < 10) month = "0" + month;
let time = "" + month + today.getFullYear();
// time = "052020";
const initState = {
  isLoadingBanks: false,
  isLoadingDealings: false,
  banks: {},
  selectedBank: "",
  time: time,
  from: today,
  to: today,
  dealings: [],
  total: 0,
};

const DealingReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_BANKS_REQUEST":
      return {
        ...state,
        isLoadingBanks: true,
      };
    case "GET_BANKS_SUCCESS":
      return {
        ...state,
        isLoadingBanks: false,
        banks: action.banks,
      };
    case "GET_BANKS_FAILED":
      return {
        ...state,
        isLoadingBanks: false,
      };
    case "SELECT_BANK":
      return {
        ...state,
        selectedBank: action.selectedBank,
      };
    case "SELECT_TIME":
      return {
        ...state,
        time: action.time,
      };
    case "SELECT_FROM":
      return {
        ...state,
        from: action.from,
      };
    case "SELECT_TO":
      return {
        ...state,
        to: action.to,
      };
    case "GET_DEALINGS_REQUEST":
      return {
        ...state,
        isLoadingDealings: true,
      };
    case "GET_DEALINGS_SUCCESS":
      return {
        ...state,
        isLoadingDealings: false,
        dealings: action.dealings,
        total: action.total,
      };
    case "GET_DEALINGS_FAILED":
      return {
        ...state,
        isLoadingDealings: false,
      };
    default:
      return state;
  }
};

export default DealingReducer;

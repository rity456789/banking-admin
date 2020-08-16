import axios from "../ultis/axios";

function onGetDealingInfo(time, from, to, name) {
  return axios.get(
    "/api/partner-bank/transaction?time=" +
      time +
      "&from=" +
      from +
      "&to=" +
      to +
      "&name=" +
      name
  );
}

function onGetBanks() {
  return axios.get("/api/partner-bank/banks");
}

export { onGetDealingInfo, onGetBanks };

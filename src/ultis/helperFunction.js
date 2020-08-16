export const prettierNumber = (number) => {
  let formetedNumber = Number(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  let splitArray = formetedNumber.split(".");
  if (splitArray.length > 1) {
    formetedNumber = splitArray[0];
  }
  return formetedNumber;
};

export const prettierDate = (date) => {
  date *= 1000;
  let newDate = new Date(date);
  console.log(newDate);
  let month = newDate.getMonth() + 1;
  return newDate.getDate() + "/" + month + "/" + newDate.getFullYear();
};

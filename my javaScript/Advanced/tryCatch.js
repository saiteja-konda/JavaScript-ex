const currencyConverter = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 72;
  } else {
    throw Error("Invalid input");
  }
};

try {
  const myPay = currencyConverter(100);
  console.log(myPay);
} catch (e) {
  console.log(e);
}

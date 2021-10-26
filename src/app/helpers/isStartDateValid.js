module.exports = (startDate) => {
  const dateLimitParsed = '25/12/2018'.split('/').reverse();
  const dateLimit = new Date(
    dateLimitParsed[0], dateLimitParsed[1] - 1, dateLimitParsed[2]
  );

  const startDateParsed = startDate.split('/').reverse();
  const startDateFormated = new Date(
    startDateParsed[0], startDateParsed[1] - 1, startDateParsed[2]
  );

  return startDateFormated > dateLimit;
}

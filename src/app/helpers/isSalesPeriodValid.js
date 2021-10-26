module.exports = ({ startDate, endDate }) => {
  const endDateParsed = endDate.split('/').reverse();
  const endDateFormated = new Date(
    endDateParsed[0], endDateParsed[1] - 1, endDateParsed[2]
  );

  const startDateParsed = startDate.split('/').reverse();
  const startDateFormated = new Date(
    startDateParsed[0], startDateParsed[1] - 1, startDateParsed[2]
  );

  return startDateFormated < endDateFormated;
}

module.exports = (date) => {
  const formatedDate = date.split('/').reverse().join('-');
  return formatedDate;
}

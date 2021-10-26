module.exports = (text) => {
  const regex = /[^a-z0-9+]+/gi;
  const typeValid = (typeof text === 'string');
  const sizevalid = (text.replace(regex, '').length >= 2 && text.replace(regex, '').length <= 255);
  return (typeValid && sizevalid);
}

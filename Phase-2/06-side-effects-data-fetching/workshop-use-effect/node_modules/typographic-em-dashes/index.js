export default (input)=> {
  return input
    .replace(/--/gim, '—')
    .replace(/ — /gim, ' — ');
}

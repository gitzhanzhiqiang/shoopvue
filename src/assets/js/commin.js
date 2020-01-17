var Common = {}
Common.getCookies = (name) => {
  if (this.$Cookies.get(name)) {
    return JSON.parse(Cookies.get(name));
  } else {
    return '';
  }
}
export {
  Common
}

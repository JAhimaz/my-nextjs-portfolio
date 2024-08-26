const getLang = () => {
  // based off the url https://<domain>/<lang>/...
  const lang = window.location.pathname.split('/')[1];
  if (lang === 'zh') return 'zh';
  return 'en';
}

export default getLang
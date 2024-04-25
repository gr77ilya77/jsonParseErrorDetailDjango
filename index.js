function escapeRegExp(string) {
  //  $& means the entire matching string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

// errorDetail= "{'new_email': [ErrorDetail(string='Введите правильный адрес электронной почты.', code='invalid')]}"
function jsonParseErrorDetailDjango(errorDetail, keyString = 'string', keyCode = 'code') {
  let s = '{}';
  const r = [
    { s: `'`, to: `"` },
    { s: '[ErrorDetail(', to: '{' },
    { s: `]`, to: `` },
    // { s: 'ErrorDetail(', to: '{' },
    { s: `)`, to: `}` },
    { s: `=`, to: `:` },
    { s: 'string', to: `"${keyString}"` },
    { s: 'code', to: `"${keyCode}"` },
  ];
  try {
    s = r.reduce((s, v) => replaceAll(s, v.s, v.to), errorDetail);
    console.log(s);
  } catch (error) {
    console.error('jsonParseErrorDetailDjango: ', error);
  } finally {
    return JSON.parse(s);
  }
}

export { jsonParseErrorDetailDjango };

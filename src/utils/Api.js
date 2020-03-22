const Api = (url, method, callback) =>
  fetch(url, { method })
    .then(response => response.json())
    .then(json => callback(json));

const getBrazilData = callback => {
    const url = 'https://cors-anywhere.herokuapp.com/https://gwpre.sina.cn/interface/news/wap/ncp_foreign.d.json?citycode=SCBR0055';
    const method = 'GET';

    return Api(url, method, callback);
}

export default getBrazilData;
const apiTempo = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=ff219003&city_name='
});

export default apiTempo;
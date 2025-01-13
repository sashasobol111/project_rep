const url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';
async function getExchangeRates() {
  try {
    const response = await fetch(url);
    const data = await response.json();
   
    const usdRate = (data.find(rate => rate.Cur_Abbreviation === 'USD').Cur_OfficialRate).toFixed(2);;
    let div = document.createElement('b');
    div.innerHTML = `💱 1 USD: ${usdRate} BYN`;
    document.getElementById('curses').appendChild(div);
  } catch (error) {
    console.error('Ошибка при получении курсов валют:', error);
  }
}
getExchangeRates();
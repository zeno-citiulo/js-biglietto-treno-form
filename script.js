const pricekm = 0.21;
const discountYoung = 20;
const discountSenior = 40;

const btnGenera = document.getElementById('genera')
const btnReset = document.getElementById('reset')

btnGenera.addEventListener('click', handleClickGenera)
btnReset.addEventListener('click', handleClickGenera)

function handleClickGenera(){
  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  const fasciaEta = document.getElementById('fascia-eta').value;

  const prezzo = km * pricekm;
  let prezzoFinale = prezzo;
  let tipoBiglietto = 'Biglietto Standard'

  if(fasciaEta === 'minorenne'){
    prezzoFinale *= 1 - discountYoung/100;
    tipoBiglietto = 'Sconto Junior'
  }else if(fasciaEta === 'over65'){
    prezzoFinale *= 1 - discountSenior/100;
    tipoBiglietto = 'Sconto Serior'
  }
  
  const numCarrozza = getRandomNumber(1,12);
  const codiceCP = getRandomNumber(1000000,10000000);

  console.log(prezzo, prezzoFinale, tipoBiglietto, numCarrozza, codiceCP);

  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta-applicata').innerHTML = tipoBiglietto;
  document.getElementById('carrozza').innerHTML = numCarrozza;
  document.getElementById('codice-cp').innerHTML = codiceCP;
  document.getElementById('costo').innerHTML = '$' + prezzoFinale.toFixed(2);

  document.getElementById('wrapper-biglietto').className = '';
  
}

function handleClickReset(){
  document.getElementById('wrapper-biglietto').className = 'hidden';
  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('fascia-eta').value = '';
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) - min)
}
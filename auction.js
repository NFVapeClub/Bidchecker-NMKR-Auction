const url = "https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1v9r0g0n3jqshfdl932t0ytq3mupgt0cjut6lz9hdfvqse8sthxl7x" 
const fetchDataBtn = document.querySelector('#fetchdata')
const result = document.querySelector('#result')

// gets data from API and sets the content of #result div
const getData = function() {
  result.innerText = 'Loading....'
  fetch(url, {
    headers: {
      project_id: 'mainnetcPkAK17AyBxUI6KtcjY7YEbXEDKyhu6X'
    }})
    .then(res => res.json())
    .then(data => {
      result.innerText = JSON.stringify(data.amount[0].quantity / 1000000)
    })
    .catch(error => console.log(error))
}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener('click', getData)
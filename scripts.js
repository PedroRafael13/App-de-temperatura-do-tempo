const key = "6d2b95d29b885163f4891ab9d63b06e6"

function colocarDadosNaTela(dados){
  console.log(dados)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".clima").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".text").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCity(cidade){

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )
  
  colocarDadosNaTela(dados)
}

function clickAtTheButton (){
    const cidade = document.querySelector(".input").value

    buscarCity(cidade)
}
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
}

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

escreveDadosPlayer (player)
function escreveDadosPlayer (jogador){
  console.log(`A jogadora ${jogador.name} ${jogador.lastName} tem ${jogador.age} anos de idade.`)
}

escreveVezesPlayerEleito  (player)
function escreveVezesPlayerEleito (jogador){
  console.log(`A jogadora ${jogador.name} ${jogador.lastName} foi eleita ${jogador.bestInTheWorld.length} vezes`)
}

escreveMedalhasPlayer (player)
function escreveMedalhasPlayer (jogador){
  console.log(`A jogadora possui ${jogador.medals.golden} medalhas de ouro e ${jogador.medals.silver} fmedalhas de prata`)
}
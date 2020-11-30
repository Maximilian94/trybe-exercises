let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};

info.recorrente = 'Sim'
info2.recorrente = 'Sim'

//Passo 1
console.log(`Iniciando passo 1`)
console.log(``)

console.log(`Bem vinda, ${info.personagem}`)

console.log(`-------------------------------`)


//Passo 2
console.log(`Iniciando passo 2`)
console.log(``)

console.log(info)

console.log(`-------------------------------`)


//Passo 3
console.log(`Iniciando passo 3`)
console.log(``)

for (index in info){
  console.log(index)
}

console.log(`-------------------------------`)


//Passo 4
console.log(`Iniciando passo 4`)
console.log(``)

for (index in info){
  console.log(info[index])
}

console.log(`-------------------------------`)


//Passo 5
console.log(`Iniciando passo 4`)
console.log(``)

for (index in info){
  if (info[index] === "Sim" && info2[index] === "Sim"){
    console.log(`Ambos recorrentes`)
    continue
  }
  console.log(`${info[index]} e ${info2[index]}`)
}

console.log(`-------------------------------`)
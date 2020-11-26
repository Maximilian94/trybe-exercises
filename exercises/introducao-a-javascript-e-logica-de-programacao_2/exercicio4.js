let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumerosArray = 0

for (index in numbers){
  somaNumerosArray += numbers[index]
}

let mediaAritrimetrica = somaNumerosArray/numbers.length

if (mediaAritrimetrica > 20){
  console.log('Valor maior que 20')
  console.log(`O valor foi ${mediaAritrimetrica}`)
} else if (mediaAritrimetrica < 20){
  console.log('Valor menor que 20')
  console.log(`O valor foi ${mediaAritrimetrica}`)
}
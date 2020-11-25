let nota = -1;

if (0 <= nota && nota < 50){
  console.log('Nota F')
} else if (50 <= nota && nota < 60){
  console.log('Nota E')
}else if (60 <= nota && nota < 70){
  console.log('Nota D')
}else if (70 <= nota && nota < 80){
  console.log('Nota C')
}else if (80 <= nota && nota < 90){
  console.log('Nota B')
}else if (90 <= nota && nota < 100){
  console.log('Nota A')
}else {
  console.log('A nota esta acima 100 ou abaixo de 0; portanto, fora do range permitido')
}

/*
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/
var a = 0;

if (a > 0){
  console.log(`O numero ${a} é positivo`)
  return "positive";
} else if (a < 0){
  console.log(`O numero ${a} é negativo`)
  return "negative";
}else if (a == 0){
  console.log(`O numero ${a} é igual a zero`)
  return "zero";
}
var a = 6;
var b = 8;

if (a > b){
  console.log(`O maior numero entre ${a} e ${b} é ${a}`)
  return a;
} else if (b > a){
  console.log(`O maior numero entre ${a} e ${b} é ${b}`)
  return b;
} else if (a == b){
  console(`Os numeros são iguais`)
}
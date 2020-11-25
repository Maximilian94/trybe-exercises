var a = 6;
var b = 8;
var c = 2;

if (a > b && a > c){
  console.log(`O maior numero entre ${a},${b} e ${c} é ${a}`)
  return a;
} else if (b > a && b > c){
  console.log(`O maior numero entre ${a},${b} e ${c} é ${b}`)
  return b;
} else if (c > b && c > a){
  console.log(`O maior numero entre ${a},${b} e ${c} é ${c}`)
  return c;
}

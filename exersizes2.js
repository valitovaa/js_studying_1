//1)минимум

function min(a,b){
  if(a<=b){
    return a;
  }else return b;
}
console.log(min(3,4))

//2)рекурсия

function f(a){
if(a>=0){
  if(a==0){
console.log(`is even`)
}else
if(a==1){
console.log(`is not even`)
}else
return f(a-2)
}else
if(a==-1){
  console.log(`not even`)
}else
if(a==-2){
  console.log(`is even`)
}else
return f(a+2)
}

f(1)
f(2)
f(-1)

//3)подсчёт букв

let a ="bab"[1];
console.log(a)

let count = 0;
function countBs(s,v){
 
  for(let N=0;N<s.length;N++){
    if(s[N]== v){
      count++;
    }
  }
  console.log(count);
}

countBs("asBBBB", "B")
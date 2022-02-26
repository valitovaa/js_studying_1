function triangle(N){
      let x = "#"
      let y = " "
      for(i= 0; i<=N; i++){
          let str = y.repeat(N-i) + x.repeat(i);
          let str2 = str.split('').reverse().join('');
          console.log(str + "#" + str2)
      }
  }
triangle(9)

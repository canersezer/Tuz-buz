console.log('run app.js')
let x = +prompt('bir sayi girin')
for(let i = 1; i <= x; i++){

    if(i%3 === 0 && i%5 === 0 )
    {
        console.log('tuzbuz');
    }
    else if (i% 3 === 0 ){
        console.log('tuz');
    }
    else if (i % 5 === 0){
        console.log('buz');
    }
    else{console.log(i);}
  
}

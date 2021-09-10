function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let minus=a-b;
    return(minus);
}

function div(a,b){
   let div=a/b;
   div=div.toFixed(2);
   return(div);
}

function mult(a,b){
    let multi=a*b;
    return (multi);
}

export {add,mult,div,sub};
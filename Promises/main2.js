let ans = new Promise((res, rej) => {
    let n = Math.floor(Math.random()*10);
    if (n < 5) {
        return res();
    }
    else {
        return rej();
    }
})

ans
    .then(function(){
        console.log("Below");
        
    })
    .catch(function(){
        console.log("Above");
        
    })
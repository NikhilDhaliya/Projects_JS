let ans = new Promise(function(res , rej){
    return res("Ghar jao");
})

let ans2  = ans.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Gate open and close");
    })
})

let ans3 = ans2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Khana khao");
    })
})

ans3.then(function(data){
    console.log(data);
    
})
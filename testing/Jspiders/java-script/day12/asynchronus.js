
// asynchronious program 
function demo(m){
    setTimeout(()=>{
        console.log(m);
    },10000)
}

function message(){
    console.log("message");
}
demo('set time out');
message();
//================================


//promises

function demo1 (m,n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                if(isNaN(m) || isNaN(n)){
                    return reject();
                }
                for(let i=m;i<=n;i++){
                    console.log(i);
                }
                return resolve();
        },3000)
    })
}


function message1(){
    console.log("promis method is executed sucessfyllu");
}
demo1(0,10)
.then(message1())
.catch(()=>console.log("given input is not number"))


function demo2(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(a) || isNaN(b)){
                return reject();
            }
            for (i=a;i<b;i++){
                console.log(i);
            }
            return resolve();
        },4000)
    })
}
demo2(10,20)
.then(()=>{
    console.log("sucessufully printed the values")
})
.catch(()=>{
    console.log("the values have to be numbers only")
})














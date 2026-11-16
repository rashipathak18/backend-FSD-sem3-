//event loop concept
//create one long synchronous function
console.log("Synchronous task");
const f1=()=>{
    console.log("f1");
}
const f2=()=>{
    console.log("f2");
}
const f3=function main(){
    console.log("this event loop");
    setTimeout(f1,50);
    setTimeout(f3,50)
    new Promise((resolve,reject)=>{
        resolve("i am promise1")
    }).then((result)=>{console.log(result);})
    new Promise((resolve,reject)=>{resolve("this is promise2")}).then((res)=>{console.log(res);

    })
}
f2();
main();

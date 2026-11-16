// Synchromous:blocking js and asynchromous:nonblocking js
// we'll use asynchromous js
// console.log("task 3");
// function hello(){
//     console.log("task 2");
// }
// hello();
// console.log("task 1");
// setTimeout(function(){
//     // Isse function 2-3 sec late load ho rha h
// console.log("task4");
// },2000)

// callback:passed as an argument to another function and call
// function hello(n1,n2){
//     console.log("task1");
//     return n1+n2;
// }
// let a=10;
// let b =20;
// console.log(hello(a,b));
// hello(a,b,hi);
// hello(a,b,demo);
// function hi(){
//     console.log("sayhi");
// }
// hi();
// function demo(){
//     console.log("demo");
// }
// demo();

// Assyn /await
// console.log("1");
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// }
// test();
// console.log("5");
//create promises that will print username and password using resolve
//  and if username and password not found
//then it will call reject state and print ERROR......
// let username = "Rashi";
// let password = "12345";

// let login = new Promise(function(resolve, reject) {
//     if (username && password) {
//         resolve("Username: " + username + "\nPassword: " + password);
//     } else {
//         reject("ERROR..... Username or Password not found");
//     }
// });

// login
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.log(error);
// });

// assync function test(){
//     console.log("messages")
// }










////----------priyanshi ne bheja hai -----------------////
//PROMISES FOR ASYNCHRONOUS
// const promiseOne = new Promise((resolve, reject) => {
//     console.log("Promise task 1");
//     resolve("promises passed using resolve");
//     let msg = false;
//     if (!msg) {
//         console.log("message using promises failed");
//     }
//     else {
//         console.log("--------error-------");
//     }
//     setTimeout(() => {      //setTimeout() is also asynch
//         console.log("waited for 2 sec");
//     }, 2000)
// });
// promiseOne.then((result) => {
//     console.log("result");
// }).catch((error) => {
//     console.log(error);
// })

// // Assyn /await
// console.log("1");
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// async function test(){;
// console.log("5");
// }
// test();
// }

// t1=test();
// console.assertlog("5");
// create promises that will prirnt username and password usin and if username and password not found then it will call rehect state and print ERROR...
// new Promise((resolve,reject)=>{
// setTimeout(function(){
// let err=true;
// if(!err){
//     resolve(" user:ABC,password:1233");
// }else{
//     reject("ERROR..:daata fail");
// } 
// },2000);
// });
// Promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//     async function test(){
//         console.log("message:2");
//         fetch()
//     }
//     test()



////--------------ratan ne bheja--------------///
// //promises for asynch is an oject
// //js single threaded
// const promiseOne=new Promise((resolve, reject) => {console.log("Promise task 1");
//     // resolve("Promises passed by using resolve");

// let msg=true;
// if(msg==true){
//     console.log("message using promises failed");
// }
// else{
//     console.log("error...........");
// }
// setTimeout(() => {
//     console.log(resolve());
// },2000)
// });
// promiseOne.then((result) =>{
//     console.log(result);}).catch((error) => {console.log(error);});


// console.log("1");
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// }
// test();
// console.log("5");

//create promises that will print username and password using resolve
//and if username and password not found then it will call 
//reject state and print error
// let username = "Ratan";
// let password = "dattebayo";

// let loginPromise = new Promise((resolve, reject) => {
//     if (username && password) {
//         resolve({
//             username: username,
//             password: password
//         });
//     } else {
//         reject("Error: Username or Password not found.");
//     }
// });

// loginPromise
//     .then((data) => {
//         console.log("Username:", data.username);
//         console.log("Password:", data.password);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
    // async function test() {
    //     console.log("message: 2");
    //     const response = await fetch("./student.json");
    //     const stdn=await response.json();
    //     return stdn;
        
    // }
    // test()
   async function test() {
    console.log("Message : 1 ") ; 
    const response=await fetch("./studentdata.json");
    console.log(response.status );
    const stdn=await response.json();
    return stdn;
    console.log("message : 3");
}
test().then((res)=>{
    console.log(res);
}
)
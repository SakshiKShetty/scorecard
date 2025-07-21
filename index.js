let hi=document.getElementById("score")
let hii=document.getElementById("score1")
 let count=0
let c=0;
function in1(){

 let res=count+1
hi.textContent=res
count=count+1
}
function in2(){
 let res=count+2
hi.textContent=res
count=count+2   
}
function in3(){
     let res=count+3
hi.textContent=res
count=count+3 
}
function inn1(){

 let res=c+1
hii.textContent=res
c=c+1
}
function inn2(){
 let res=c+2
hii.textContent=res
c=c+2   
}
function inn3(){
     let res=c+3
hii.textContent=res
c=c+3 
}
function reset(){
    count=0
    c=0
    hii.textContent=0
    hi.textContent=0
}
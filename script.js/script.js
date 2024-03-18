let happy= document.querySelector(".Happybutton");
let sad= document.querySelector(".Sadbutton");
let hight1= document.querySelector(".hight1")
let hight2=document.querySelector(".hight2")
let submit=document.querySelector(".submit")
let Q1=document.querySelector(".Q1")
let Q2=document.querySelector(".Q2")

happy.addEventListener("click",function(){
    Q1=happy;
});

sad.addEventListener("click",function(){
Q1=sad;
});

hight1.addEventListener("click",function(){
Q2=hight1;
});

hight2.addEventListener("click",function(){
Q2=hight2
});

submit.addEventListener("click",function(){
    let message=document.querySelector(".message")
if(Q1===happy && Q2===hight2) {message.innerHTML="you are the tie shirt!";}
else if (Q1===happy && Q2===hight1){message.innerHTML="you are the rick and morty shirt!";}
else if (Q1===sad && Q2===hight1){message.innerHTML="you are the cool anime shirt!";}
else if (Q1===sad && Q2===hight2){message.innerHTML="you are the spongebob shirt!";}
});

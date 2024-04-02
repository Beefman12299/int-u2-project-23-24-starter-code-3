let happy= document.querySelector(".happybutton");
let sad= document.querySelector(".sadbutton");
let hight1= document.querySelector(".hight1")
let hight2=document.querySelector(".hight2")
let submit=document.querySelector(".submit")
let Q1=document.querySelector(".Q1")
let Q2=document.querySelector(".Q2")

happy.addEventListener("click",function(){
    Q1="happy";
    console.log(Q1);
});

sad.addEventListener("click",function(){
Q1="sad";

});

hight1.addEventListener("click",function(){
Q2="hight1";
});

hight2.addEventListener("click",function(){
Q2="hight2"
});

submit.addEventListener("click",function(){
    let message=document.querySelector(".message")

    if(Q1==="happy" && Q2==="hight2") {message.innerHTML=
    `<h3>you are the tie shirt!</h3>
    <img src="tieshirt.png">` ;}

    else if (Q1==="happy" && Q2==="hight1"){message.innerHTML=
    `<h3>you are the rick and morty shirt!</h3>
    <img src="ricknmorty.png">`;}

else if (Q1==="sad" && Q2==="hight1"){message.innerHTML=
    `<h3>you are the cool anime shirt!</h3>
    <img src="anime.jpg">`;}

    else if (Q1==="sad" && Q2==="hight2"){message.innerHTML=
  `<h3>you are the spongebob shirt!</h3>
  <img src="spongbob.png">`  ;}
});

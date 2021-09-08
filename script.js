
//const add=document.querySelector(".add");
//const rest=document.querySelector(".rest");
//const reduce=document.querySelector(".reduce");
const count=document.querySelector(".count");
const buttons=document.querySelector(".buttons")


buttons.addEventListener("click",(e)=>{
 if(e.target.classList.contains("add")){
    count.innerHTML++;
    setcolor()
 }
 if(e.target.classList.contains("reduce")){

    count.innerHTML--;
    setcolor()
 }
 if(e.target.classList.contains("rest")){
    count.innerHTML=0;
    setcolor()
}
})


function setcolor() {
    if (count.innerHTML>0) {
        count.style.color="yellow"
    }else if (count.innerHTML<0) {
        count.style.color="orangered"
        
    }else {
        count.style.color="#fff"
    }
    
}











// راه اول

//add.addEventListener("click", ()=>{
  //  count.innerHTML++;
  //  });


 //   reduce.addEventListener("click", ()=>{
  //      count.innerHTML--;
  //      });


  //      rest.addEventListener("click", ()=>{
 //           count.innerHTML=0;
 //           });
            


               //راه دوم
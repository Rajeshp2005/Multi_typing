const textList =['Developer.','coder.','student.','Designer.'];
const span=document.querySelector('span');

function autoTyoe(){
  
let textIndex=0;
let index=0;
let skipUpdate =0;
let reverseType=false;
const interval =setInterval(()=>{
 if(skipUpdate){
  skipUpdate--
  return
 }
  if(!reverseType){
    skipUpdate=1;
    span.innerText= span.innerText + textList[textIndex][index];
    index++;
    }
 
    else{
      span.innerText=span.innerText.slice(0,span.innerText.length-1);
      
    }
    if(index===textList[textIndex].length){
      skipUpdate=5;
      index--;
      reverseType=true;}
    if(span.innerText.length===0 && reverseType){
      reverseType=false;
      textIndex++;
      index=0;
    }
    if(textIndex===textList.length){
      textIndex=0;
    }
   
    },80)

}
autoTyoe();
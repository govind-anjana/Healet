const btn=document.querySelectorAll(".btn2");
const dabba2=document.querySelectorAll(".dabba2");


dabba2.forEach((silde)=>{
    let t=0;
    btn[1].addEventListener("click",()=>{   
        if(t<200){
        silde.style.transform=`translateX(-${ t+=100}%)`; 
        // console.log(t);  
    }
    })
    btn[0].addEventListener("click",()=>{
        if(t>0 && t<=300){
        silde.style.transform=`translateX(-${t-=100}%)`
        }
    })
})
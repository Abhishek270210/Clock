const hr=document.querySelector("#hour");
const mn=document.querySelector("#minute");
const sec=document.querySelector("#second");
function run(){
   var d=new Date();
    let htime=d.getHours();
     let mtime=d.getMinutes();
    let stime=d.getSeconds();
   let  hrotation=30*htime + mtime/2;
    let mrotation=6*mtime;
    let srotation=6*stime;
    hr.style.transform = "rotate(" + hrotation + "deg)";
    mn.style.transform = "rotate(" + mrotation + "deg)";
    sec.style.transform = "rotate(" + srotation + "deg)";  
}
var interval=setInterval(run,1000);
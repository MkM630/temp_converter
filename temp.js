var cal=document.getElementById("cel");
var far=document.getElementById("far");

cal.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(4);
    }
    far.value=f;
})


far.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cal.value=c;
})


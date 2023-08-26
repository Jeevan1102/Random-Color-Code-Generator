const Color=()=>{
    const Number=Math.floor(Math.random()*16777215);
    const code="#"+Number.toString(16);
    
    document.body.style.backgroundColor=code;
    let col=document.getElementById("code")
    col.value=code;
}
document.querySelector("button").addEventListener("click",Color);
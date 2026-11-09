let body=document.body;
let btn=document.querySelector('button');
function theme(){
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        btn.innerHTML='<i class="fa-solid fa-sun"></i>'
    }else{
        btn.innerHTML='<i class="fa-solid fa-moon"></i>'

    }
}
var f1=document.querySelector('.login');
var f2=document.querySelector('.signup');
var a=document.querySelector('.logging');
var b=document.querySelector('.sining');

function n1(){
    f1.style.display="block";
    f2.style.display="none";
}
function n2(){
    f2.style.display="block";
    f1.style.display="none";
}  
           
a.addEventListener('submit',function(e){
    if(a.checkValidity===false){
        e.stopPropagation();
    }
    a.classList.add('was-validated');
    e.preventDefault()
});
b.addEventListener('submit',function(e){
    if(b.checkValidity===false){
        e.stopPropagation();
    }
    b.classList.add('was-validated');
    e.preventDefault()
});    
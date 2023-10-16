const hour=document.getElementById('hr');
const minute=document.getElementById('min');
const second=document.getElementById('sec');
const toggle=document.getElementById('toggle');
const body=document.querySelector('body');
const col = document.getElementsByTagName('div');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='rgb(227, 222, 222)';
        body.style.color='black';
        document.getElementById("col").style.boxShadow= '15px 15px 30px grey,-15px -15px 30px white';
        document.getElementById("col2").style.boxShadow= 'inset 15px 15px 30px grey,inset -15px -15px 30px white';
        document.getElementById("col").style.backgroundColor= 'rgb(227, 222, 222)';
        body.style.transition='2s';
        
    }
    else{
        body.style.background='rgb(40, 40, 43)';
        document.getElementById("col").style.backgroundColor= 'rgb(227, 222, 222)';
        document.getElementById("col").style.boxShadow= '15px 15px 30px black,-15px -15px 30px black';

        document.getElementById("col2").style.boxShadow= 'inset 15px 15px 30px grey,inset -15px -15px 30px black';
        body.style.color='white';
        body.style.transition='2s';  
    }
});
setInterval(() =>
{
    let date=new Date();
    let hr=date.getHours()*30;
    let min=date.getMinutes()*6;
    let sec=date.getSeconds()*6;
    hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
    minute.style.transform=`rotateZ(${min}deg)`;
    second.style.transform=`rotateZ(${sec}deg)`;
});

const toggle=document.querySelector('.nav-toggle');
const menu=document.querySelector('.nav-menu');
if(toggle&&menu){
  toggle.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
}
const topBtn=document.querySelector('.to-top');
if(topBtn){
  window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>350));
  topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

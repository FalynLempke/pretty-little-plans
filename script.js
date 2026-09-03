
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if(menu && nav){
  menu.addEventListener('click',()=>{
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    if(!open){
      nav.style.position='absolute'; nav.style.top='78px'; nav.style.left='0'; nav.style.right='0';
      nav.style.background='#fbf7f1'; nav.style.padding='22px 4%'; nav.style.flexDirection='column';
      nav.style.alignItems='flex-start'; nav.style.borderBottom='1px solid #e9dfd6';
    }
  });
}

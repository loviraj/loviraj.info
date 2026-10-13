document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');
  const toggle=document.querySelector('.menu-toggle');
  if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const form=document.querySelector('[data-contact-form]');
  if(form){
    form.addEventListener('submit',e=>{
      const endpoint=form.getAttribute('action')||'';
      if(endpoint.includes('YOUR_FORM_ID')){
        e.preventDefault();
        const msg=document.querySelector('#form-notice');
        if(msg){msg.classList.remove('hidden');msg.textContent='Please replace YOUR_FORM_ID in contact.html with your Formspree form ID before publishing.';}
      }
    });
  }
});

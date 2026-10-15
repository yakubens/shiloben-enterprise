'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const form=document.querySelector('.quote-form');
if(form){
 const get=n=>form.elements.namedItem(n),value=n=>get(n)?.value.trim()||'';
 const panel=form.querySelector('.draft-panel'),error=form.querySelector('.form-error');
 const brand=get('brand'),grade=get('grade');
 function updateGrades(){if(!grade)return;const options=brand.value==='UNICEM'?[['','Choose a grade'],['32.5R','32.5R — confirm stock'],['42.5R','42.5R — ask about availability'],['Not sure','Help me confirm the grade']]:brand.value==='GHACEM'||brand.value==='SAFE CEMENT'?[['','Choose a grade'],['32.5R','32.5R — confirm stock'],['42.5R','42.5R — ask about availability'],['Other grade enquiry','Other grade — discuss with sales']]:brand.value==='KCG CEMENT'?[['32.5R','32.5R — confirm stock']]:brand.value==='Not sure'?[['Not sure','Help me confirm the grade']]:[['','Choose a brand first']];grade.replaceChildren(...options.map(([v,t])=>new Option(t,v)));}
 if(brand){updateGrades();brand.addEventListener('change',updateGrades);const params=new URLSearchParams(location.search),selected=params.get('brand'),selectedGrade=params.get('grade');if(['GHACEM','SAFE CEMENT','UNICEM','KCG CEMENT'].includes(selected)){brand.value=selected;updateGrades();grade.value=Array.from(grade.options).some(option=>option.value===selectedGrade)?selectedGrade:'32.5R';}}
 form.addEventListener('input',()=>{panel.hidden=true;});form.addEventListener('change',()=>{panel.hidden=true;});
 function fail(el,message){if(el)el.setAttribute('aria-invalid','true');error.textContent=message;error.hidden=false;error.focus();}
 form.addEventListener('submit',e=>{
  e.preventDefault();error.hidden=true;panel.hidden=true;form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  for(const el of form.querySelectorAll('[required]')){if(!el.value.trim())return fail(el,'Please complete '+el.closest('label').querySelector('span').textContent.replace(' *','')+'.');if(!el.checkValidity())return fail(el,'Please check '+el.closest('label').querySelector('span').textContent.replace(' *','')+'.');}
  if(!/^\+?[\d\s().-]{7,25}$/.test(value('phone'))||value('phone').replace(/\D/g,'').length<7)return fail(get('phone'),'Enter a valid contact phone number.');
  let lines;
  if(form.dataset.kind==='cement'){
   for(const n of ['paper','sack']){const v=value(n);if(v!==''&&(!Number.isSafeInteger(Number(v))||Number(v)<0))return fail(get(n),'Enter a whole number of bags, zero or greater, for '+n+'.');}
   const paper=Number(value('paper')||0),sack=Number(value('sack')||0);if(paper+sack<=0)return fail(get('paper'),'Enter a positive quantity for Paper, Sack or both.');
   lines=['CEMENT QUOTATION ENQUIRY — SHILOBEN ENTERPRISE','Customer / company: '+value('customer'),'Phone: '+value('phone'),'Brand: '+value('brand'),'Grade enquiry: '+value('grade'),'Paper: '+paper+' bags','Sack: '+sack+' bags','Delivery location: '+value('location'),'Preferred delivery date: '+(value('date')||'Please discuss'),'Offloading: '+value('offloading')];
  }else{lines=['TRUCK HIRE ENQUIRY — SHILOBEN ENTERPRISE','Customer: '+value('customer'),'Phone: '+value('phone'),'Pickup: '+value('pickup'),'Destination: '+value('destination'),'Cargo / service: '+value('cargo'),'Preferred service date: '+value('date'),'Approximate load: '+value('load')+' '+value('unit')];}
  lines.push('Notes: '+(value('notes')||'None'),'Please confirm availability, charges and arrangements. This is an enquiry, not a confirmed order or booking.');
    const message=lines.join('\n\n');form.reset();updateGrades();form.querySelector('.draft-text').value=message;form.querySelector('.whatsapp-draft').href='https://wa.me/233543817111?text='+encodeURIComponent(message);panel.hidden=false;panel.setAttribute('tabindex','-1');panel.focus();
 });
}
  const reviewForm=document.querySelector('#review-form');
  if(reviewForm){
   const panel=reviewForm.querySelector('.draft-panel');
   reviewForm.addEventListener('input',()=>{panel.hidden=true;});
   reviewForm.addEventListener('change',()=>{panel.hidden=true;});
   reviewForm.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(reviewForm),reviewer=String(data.get('reviewer')||'').trim();
    const message=['CUSTOMER REVIEW — SHILOBEN ENTERPRISE','Customer: '+(reviewer||'Not provided'),'Service: '+data.get('service'),'Rating: '+data.get('rating')+'/5','Review: '+String(data.get('review')||'').trim()].join('\n');
    reviewForm.querySelector('.review-whatsapp').href='https://wa.me/233543817111?text='+encodeURIComponent(message);
    panel.hidden=false;panel.setAttribute('tabindex','-1');panel.focus();
   });
  }

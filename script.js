(function initTheme(){const prefersLight=window.matchMedia('(prefers-color-scheme: light)').matches;const saved=localStorage.getItem('theme');if(saved==='light'||(!saved&&prefersLight))document.documentElement.classList.add('light')})();

document.getElementById('themeToggle').addEventListener('click',()=>{document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark')});

const navToggle=document.querySelector('.nav-toggle');const menu=document.getElementById('menu');navToggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open))});

const sections=[...document.querySelectorAll('section[id]')];const navLinks=[...document.querySelectorAll('.menu a[href^="#"]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`))}})},{threshold:.5});sections.forEach(s=>observer.observe(s));

const roles=['Technical Support Specialist','Remote Troubleshooter','Customer Support Pro'];let roleIndex=0,charIndex=0,deleting=false;const typedEl=document.getElementById('typed-role');function typeLoop(){const current=roles[roleIndex];if(!deleting){charIndex++;typedEl.textContent=current.slice(0,charIndex);if(charIndex===current.length){deleting=true;setTimeout(typeLoop,1500);return}}else{charIndex--;typedEl.textContent=current.slice(0,charIndex);if(charIndex===0){deleting=false;roleIndex=(roleIndex+1)%roles.length}}setTimeout(typeLoop,deleting?50:90)}if(typedEl)typeLoop();

const tips=['Always start by asking the user what changed before the issue appeared.','Rebooting clears temporary states—ask if they have tried restarting.','Check basics first: power, cables, Wi‑Fi status, and caps lock.','Replicate the issue step-by-step to isolate the failing component.','Document the exact error message—copy/paste beats paraphrasing.','If it’s intermittent, check logs and recent updates or new installs.','Ask for screenshots or a quick screen share to reduce guesswork.','One change at a time during troubleshooting to avoid confounding factors.'];
const tipEl=document.getElementById('support-tip');const tipBtn=document.getElementById('tipBtn');function newTip(){const next=tips[Math.floor(Math.random()*tips.length)];tipEl.textContent=next}if(tipBtn)tipBtn.addEventListener('click',newTip);

window.handleForm=function(e){e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget).entries());alert(`Thanks, ${data.name}! Your message was captured locally.\n\nEmail: ${data.email}\nMessage: ${data.message.substring(0,200)}…`);e.currentTarget.reset()};

const yearEl=document.getElementById('year');if(yearEl)yearEl.textContent=new Date().getFullYear();

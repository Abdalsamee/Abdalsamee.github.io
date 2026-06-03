/* Abdalsamee Alnajjar — Portfolio
   To send contact-form messages straight to your inbox without leaving the page,
   create a free form at https://formspree.io and paste its endpoint into
   FORMSPREE_ENDPOINT below. If left empty, the form opens the visitor's email app. */
   (function(){
    const root = document.getElementById('aa-root');
    const $ = (s,c)=> (c||root).querySelector(s);
    const $$ = (s,c)=> Array.from((c||root).querySelectorAll(s));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const store = {
      m:{},
      get(k){ try{return localStorage.getItem(k);}catch(e){return this.m[k]??null;} },
      set(k,v){ try{localStorage.setItem(k,v);}catch(e){this.m[k]=v;} }
    };
  
    const roles = {
      en: ["Android Developer","Kotlin Engineer","Jetpack Compose Specialist","Software Engineer"],
      ar: ["مطوّر أندرويد","مهندس Kotlin","متخصص Jetpack Compose","مهندس برمجيات"]
    };
  
    const skills = [
      { icon:'code', titleEn:'Languages', titleAr:'لغات البرمجة', chips:['Kotlin','Java','SQL','JSON'] },
      { icon:'phone', titleEn:'Android', titleAr:'أندرويد', chips:['Jetpack Compose','Android SDK','Android Studio','AAC'] },
      { icon:'layers', titleEn:'Architecture', titleAr:'المعمارية', chips:['MVVM','Clean Architecture','OOP'] },
      { icon:'cloud', titleEn:'Backend & Cloud', titleAr:'الخلفية والسحابة', chips:['Firebase','REST APIs','Retrofit'] },
      { icon:'data', titleEn:'Libraries & Data', titleAr:'المكتبات والبيانات', chips:['Coroutines','Room','ML Kit'] },
      { icon:'git', titleEn:'Tools', titleAr:'الأدوات', chips:['Git & GitHub','Postman','Figma','Unit Testing'] }
    ];
  
    // EDIT: add / replace with your real projects. The first is your capstone.
    const projects = [
      {
        featured:true, flag:'Capstone', titleEn:'SaffiEDU — Smart Learning Platform', titleAr:'صفّي — منصة تعليم ذكية',
        img:'assets/saffiedu.png', ph:'SaffiEDU',
        sumEn:"A unified native Android education platform for students and teachers. I led a 4-person team and engineered a 100% Jetpack Compose UI on MVVM + Clean Architecture, with real-time chat, lesson streaming, automated quizzes, and exportable analytics. Its standout feature: a Smart Monitoring System using Google ML Kit for on-device face detection and gaze tracking to protect exam integrity.",
        sumAr:"منصة تعليمية أندرويد موحّدة للطلاب والمعلمين. قُدت فريقًا من 4 أفراد وبنيت الواجهة بالكامل بـ Jetpack Compose على معمارية MVVM + Clean، مع دردشة فورية وبث للدروس واختبارات مؤتمتة وتحليلات قابلة للتصدير. الميزة الأبرز: نظام مراقبة ذكي باستخدام Google ML Kit لكشف الوجه وتتبع النظر على الجهاز لحماية نزاهة الاختبارات.",
        tech:['Kotlin','Jetpack Compose','MVVM','Firebase','Room','ML Kit','Coroutines'],
        github:'https://github.com/Abdalsamee', demo:''
      },
      {
        flag:'', titleEn:'Native App Project', titleAr:'مشروع تطبيق أصيل',
        img:'assets/project2.png', ph:'Project',
        sumEn:"Replace this with one of your real apps — describe the problem it solves, your role, and the impact. Keep it to 2–3 punchy sentences.",
        sumAr:"استبدل هذا بأحد تطبيقاتك الحقيقية — صِف المشكلة التي يحلّها ودورك وأثره في جملتين أو ثلاث مختصرة.",
        tech:['Kotlin','Jetpack Compose','Firebase'],
        github:'https://github.com/Abdalsamee', demo:''
      },
      {
        flag:'', titleEn:'API-Driven App', titleAr:'تطبيق يعتمد على واجهات برمجية',
        img:'assets/project3.png', ph:'Project',
        sumEn:"Another slot for your work — for example a Retrofit + REST API app. Mention the architecture and any nice technical detail.",
        sumAr:"مساحة أخرى لعملك — مثل تطبيق Retrofit + REST API. اذكر المعمارية وأي تفصيل تقني مميز.",
        tech:['Kotlin','Retrofit','MVVM'],
        github:'https://github.com/Abdalsamee', demo:''
      }
    ];
  
    const timeline = [
      { dateEn:'2022 – Present', dateAr:'2022 – الآن', titleEn:'Independent Android Developer', titleAr:'مطوّر أندرويد مستقل', orgEn:'Freelance · Gaza, Palestine', orgAr:'عمل حر · غزة، فلسطين',
        pEn:'Built and launched multiple native Android apps in Kotlin & Jetpack Compose. Engineered scalable codebases with MVVM and Clean Architecture, integrated RESTful APIs via Retrofit, and collaborated directly with clients from concept to deployment.',
        pAr:'بنيت وأطلقت عدة تطبيقات أندرويد أصيلة بـ Kotlin و Jetpack Compose. صمّمت قواعد كود قابلة للتوسع بـ MVVM و Clean Architecture، ودمجت واجهات RESTful عبر Retrofit، وتعاونت مع العملاء من الفكرة حتى النشر.' },
      { dateEn:'Apr – Oct 2025', dateAr:'أبريل – أكتوبر 2025', titleEn:'Team Leader & Lead Android Developer', titleAr:'قائد فريق ومطوّر أندرويد رئيسي', orgEn:'SaffiEDU — Capstone Project', orgAr:'صفّي — مشروع التخرج',
        pEn:'Led a 4-person team using Agile, architecting an educational platform with Compose, Firebase and an ML Kit-powered smart exam-monitoring system.',
        pAr:'قُدت فريقًا من 4 أفراد بمنهجية Agile، وصممت منصة تعليمية بـ Compose و Firebase ونظام مراقبة اختبارات ذكي مدعوم بـ ML Kit.' },
      { dateEn:'2021 – 2025', dateAr:'2021 – 2025', titleEn:'B.Sc. Mobile Computing & Smart Device Applications', titleAr:'بكالوريوس الحوسبة المتنقلة وتطبيقات الأجهزة الذكية', orgEn:'Islamic University of Gaza', orgAr:'الجامعة الإسلامية – غزة',
        pEn:'Focused on native Android development, software engineering principles, UX/UI for mobile, and cloud-based mobile systems.',
        pAr:'تخصص في تطوير أندرويد الأصيل، ومبادئ هندسة البرمجيات، وتصميم تجربة المستخدم للهواتف، والأنظمة السحابية المتنقلة.' },
      { dateEn:'2023', dateAr:'2023', titleEn:'Android Development Certificate', titleAr:'شهادة تطوير أندرويد', orgEn:'Meta · via Coursera', orgAr:'Meta · عبر Coursera',
        pEn:"Completed Meta's professional Android application development course.",
        pAr:'أكملت دورة Meta الاحترافية في تطوير تطبيقات أندرويد.' }
    ];
  
    const i18n = {
      en: {
        navHome:'Home', navWorld:'World', navAbout:'About', navSkills:'Skills', navProjects:'Projects', navJourney:'Journey', navContact:'Contact',
        status:'Open to opportunities', heroName:'Abdalsamee Alnajjar',
        heroTag:'I build elegant, high-performance native Android apps with Kotlin & Jetpack Compose — from Gaza to the world.',
        ctaWork:'View My Work', ctaContact:'Get in Touch', scroll:'SCROLL',
        wEye:'Get To Know Me', wTitle:'Step into', wTitle2:'my world',
        wSub:"An Android developer's portfolio deserves an Android. Tap around — chat with me, smash some bugs, and find out what makes me tick.",
        cue1:'Ask me anything', cue2:'Beat my high score', tapHint:'Tap an app to explore',
        aboutEye:'About Me', aboutTitle:'Turning ideas into', aboutTitle2:'refined apps',
        aboutBio:"I'm a newly graduated Android Developer from Gaza, Palestine, specializing in Mobile Computing and Smart Device Applications at the Islamic University of Gaza. I build practical, beautiful native apps with Kotlin and Jetpack Compose, backed by solid architecture — MVVM, Clean Architecture, Firebase, REST APIs, and Room. After a hiatus caused by war, I returned with renewed determination and led my graduation team. My goal: to join leading global tech companies and craft apps that create real value.",
        statYears:'Years coding', statTech:'Technologies', statTeam:'Team members led', statCompose:'Compose UI',
        floatAndroid:'Android Engineer', floatGrad:'B.Sc. 2025',
        skillsEye:'My Tech Stack', skillsTitle:'Tools I craft with',
        projEye:'Featured Work', projTitle:'Projects that', projTitle2:'matter',
        fAll:'All', fCompose:'Jetpack Compose', fFirebase:'Firebase', fMl:'ML Kit', pGithub:'Code', pDemo:'Live Demo',
        jEye:'My Journey', jTitle:'Experience & education',
        cEye:'Contact', cTitle:"Let's build", cTitle2:'something great',
        cSub:'Have a project, a role, or just want to connect? My inbox is always open.',
        fName:'Name', fEmail:'Email', fMsg:'Message', fSend:'Send Message',
        cEmail:'Email', cWhats:'WhatsApp', cLinked:'LinkedIn', cGit:'GitHub',
        errReq:'This field is required', errEmail:'Please enter a valid email',
        noteOk:'Thanks! Your message is ready to send from your email app.', noteSending:'Sending…',
        noteSent:"Message sent — I'll get back to you soon!", noteBad:'Something went wrong. Please email me directly.',
        foot:'© '+new Date().getFullYear()+' Abdalsamee Alnajjar. All rights reserved.'
      },
      ar: {
        navHome:'الرئيسية', navWorld:'عالمي', navAbout:'عني', navSkills:'مهاراتي', navProjects:'مشاريعي', navJourney:'مسيرتي', navContact:'تواصل',
        status:'متاح لفرص العمل', heroName:'عبد السميع النجار',
        heroTag:'أبني تطبيقات أندرويد أصيلة أنيقة وعالية الأداء باستخدام Kotlin و Jetpack Compose — من غزة إلى العالم.',
        ctaWork:'استعرض أعمالي', ctaContact:'تواصل معي', scroll:'مرّر',
        wEye:'تعرّف عليّ', wTitle:'ادخل إلى', wTitle2:'عالمي',
        wSub:'بورتفوليو مطوّر أندرويد يستحق هاتف أندرويد. تنقّل بين التطبيقات — دردش معي، اسحق بعض الأخطاء، واكتشف ما يحرّكني.',
        cue1:'اسألني أي شيء', cue2:'تحدَّ نتيجتي', tapHint:'اضغط تطبيقًا لتستكشف',
        aboutEye:'نبذة عني', aboutTitle:'أحوّل الأفكار إلى', aboutTitle2:'تطبيقات متقنة',
        aboutBio:'أنا مطوّر تطبيقات أندرويد حديث التخرج من غزة – فلسطين، متخصص في الحوسبة المتنقلة وتطبيقات الأجهزة الذكية في الجامعة الإسلامية بغزة. أبني تطبيقات عملية وجميلة باستخدام Kotlin و Jetpack Compose، مدعومة بمعمارية متينة — MVVM و Clean Architecture و Firebase و REST APIs و Room. بعد انقطاع بسبب الحرب، عدت بعزيمة متجددة وقُدت فريق مشروع تخرّجي. هدفي: الانضمام إلى كبرى شركات التقنية العالمية وبناء تطبيقات تضيف قيمة حقيقية.',
        statYears:'سنوات برمجة', statTech:'تقنية', statTeam:'أعضاء قُدتهم', statCompose:'واجهة Compose',
        floatAndroid:'مهندس أندرويد', floatGrad:'بكالوريوس 2025',
        skillsEye:'مجموعتي التقنية', skillsTitle:'أدوات أصنع بها',
        projEye:'أعمال مختارة', projTitle:'مشاريع', projTitle2:'ذات أثر',
        fAll:'الكل', fCompose:'Jetpack Compose', fFirebase:'Firebase', fMl:'ML Kit', pGithub:'الكود', pDemo:'عرض مباشر',
        jEye:'مسيرتي', jTitle:'الخبرة والتعليم',
        cEye:'تواصل', cTitle:'لنبنِ معًا', cTitle2:'شيئًا رائعًا',
        cSub:'لديك مشروع أو وظيفة أو ترغب فقط في التواصل؟ بريدي مفتوح دائمًا.',
        fName:'الاسم', fEmail:'البريد الإلكتروني', fMsg:'الرسالة', fSend:'إرسال الرسالة',
        cEmail:'البريد', cWhats:'واتساب', cLinked:'لينكدإن', cGit:'جيت هاب',
        errReq:'هذا الحقل مطلوب', errEmail:'الرجاء إدخال بريد إلكتروني صالح',
        noteOk:'شكرًا! رسالتك جاهزة للإرسال من تطبيق بريدك.', noteSending:'جارٍ الإرسال…',
        noteSent:'تم إرسال الرسالة — سأعود إليك قريبًا!', noteBad:'حدث خطأ ما. راسلني مباشرة من فضلك.',
        foot:'© '+new Date().getFullYear()+' عبد السميع النجار. جميع الحقوق محفوظة.'
      }
    };
  
    const ICONS = {
      code:'<path d="M8 3 4 7l4 4M16 3l4 4-4 4M14 4l-4 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      phone:'<rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M10 18h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      layers:'<path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>',
      cloud:'<path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 6 18h11Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
      data:'<ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" stroke-width="2" fill="none"/>',
      git:'<circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="18" cy="9" r="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M18 12c0 4-6 2-6 6M6 9v6" stroke="currentColor" stroke-width="2" fill="none"/>'
    };
  
    let lang = store.get('aa-lang') || 'en';
    let theme = store.get('aa-theme') || 'dark';
  
    function renderSkills(){
      $('#aa-skills-grid').innerHTML = skills.map((s,i)=>`
        <div class="aa-skill-card aa-reveal" data-tilt data-d="${(i%3)+1}">
          <div class="aa-skill-ico"><svg viewBox="0 0 24 24">${ICONS[s.icon]}</svg></div>
          <h3>${lang==='ar'?s.titleAr:s.titleEn}</h3>
          <div class="aa-chips">${s.chips.map(c=>`<span class="aa-chip">${c}</span>`).join('')}</div>
        </div>`).join('');
    }
    function renderProjects(filter){
      const t = i18n[lang];
      $('#aa-proj-grid').innerHTML = projects.map(p=>{
        const show = !filter || filter==='all' || p.tech.includes(filter);
        const img = `<img src="${p.img}" alt="${lang==='ar'?p.titleAr:p.titleEn}" loading="lazy" onerror="this.outerHTML='<span class=\\'ph\\'>${p.ph}</span>'">`;
        return `<article class="aa-proj aa-reveal ${p.featured?'featured':''}" data-tilt style="${show?'':'display:none'}">
          <div class="aa-proj-media">${img}${p.flag?`<span class="aa-proj-flag">${p.flag}</span>`:''}</div>
          <div class="aa-proj-body">
            <h3>${lang==='ar'?p.titleAr:p.titleEn}</h3>
            <p>${lang==='ar'?p.sumAr:p.sumEn}</p>
            <div class="aa-tech">${p.tech.map(x=>`<span>${x}</span>`).join('')}</div>
            <div class="aa-proj-links">
              <a href="${p.github}" target="_blank" rel="noopener">${t.pGithub} →</a>
              ${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener">${t.pDemo} →</a>`:''}
            </div>
          </div></article>`;
      }).join('');
      initTilt(); observeReveal();
    }
    function renderTimeline(){
      $('#aa-timeline').innerHTML = timeline.map((e,i)=>`
        <div class="aa-tl-item aa-reveal" data-d="${(i%3)+1}">
          <div class="aa-tl-date">${lang==='ar'?e.dateAr:e.dateEn}</div>
          <h3>${lang==='ar'?e.titleAr:e.titleEn}</h3>
          <div class="org">${lang==='ar'?e.orgAr:e.orgEn}</div>
          <p>${lang==='ar'?e.pAr:e.pEn}</p>
        </div>`).join('');
      observeReveal();
    }
  
    function applyText(){
      const t = i18n[lang];
      $$('[data-k]').forEach(el=>{ if(t[el.dataset.k]!==undefined) el.textContent = t[el.dataset.k]; });
      $('#aa-foot').textContent = t.foot;
      $('#aa-langtxt').textContent = lang==='en' ? 'AR' : 'EN';
      root.setAttribute('dir', lang==='ar'?'rtl':'ltr');
      root.setAttribute('lang', lang);
      try{ document.documentElement.lang = lang; document.documentElement.dir = lang==='ar'?'rtl':'ltr'; }catch(e){}
    }
    function setLang(l){ lang=l; store.set('aa-lang',l); applyText(); renderSkills(); renderProjects(currentFilter()); renderTimeline(); renderHome(); startTyping(); observeReveal(); }
    function applyTheme(){ root.setAttribute('data-theme', theme); store.set('aa-theme', theme); try{ document.documentElement.setAttribute('data-theme', theme); }catch(e){} }
    function currentFilter(){ const a=$('#aa-filters .active'); return a?a.dataset.f:'all'; }
  
    let typeTimer;
    function startTyping(){
      clearTimeout(typeTimer);
      const el = $('#aa-typed'); if(!el) return;
      const list = roles[lang]; let ri=0, ci=0, del=false;
      if(reduce){ el.textContent = list[0]; return; }
      (function tick(){
        const w = list[ri];
        el.textContent = del ? w.slice(0,ci--) : w.slice(0,ci++);
        let d = del?45:90;
        if(!del && ci===w.length+1){ d=1400; del=true; ci=w.length; }
        else if(del && ci<0){ del=false; ci=0; ri=(ri+1)%list.length; d=300; }
        typeTimer=setTimeout(tick,d);
      })();
    }
  
    let io;
    function observeReveal(){
      if(reduce){ $$('.aa-reveal').forEach(e=>e.classList.add('vis')); return; }
      io = io || new IntersectionObserver((es)=>es.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('vis'); if(e.target.querySelector && e.target.querySelector('.aa-count')) animCounts(e.target); io.unobserve(e.target); }
      }), {threshold:.15});
      $$('.aa-reveal:not(.vis)').forEach(e=>io.observe(e));
    }
    function animCounts(scope){
      $$('.aa-count', scope).forEach(c=>{
        const to=+c.dataset.to; const dur=1400; const t0=performance.now();
        (function step(now){ const p=Math.min((now-t0)/dur,1); c.textContent=Math.round(p*(2-p)*to); if(p<1) requestAnimationFrame(step); })(t0);
      });
    }
  
    function initTilt(){
      if(reduce || window.matchMedia('(pointer:coarse)').matches) return;
      $$('[data-tilt]').forEach(el=>{
        if(el._tilt) return; el._tilt=true;
        el.addEventListener('mousemove', ev=>{
          const r=el.getBoundingClientRect(); const x=(ev.clientX-r.left)/r.width-.5, y=(ev.clientY-r.top)/r.height-.5;
          el.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-6px)`;
        });
        el.addEventListener('mouseleave', ()=> el.style.transform='');
      });
    }
    function initMagnetic(){
      if(reduce || window.matchMedia('(pointer:coarse)').matches) return;
      $$('[data-magnetic]').forEach(el=>{
        el.addEventListener('mousemove', ev=>{ const r=el.getBoundingClientRect(); el.style.transform=`translate(${(ev.clientX-r.left-r.width/2)*.2}px, ${(ev.clientY-r.top-r.height/2)*.3}px)`; });
        el.addEventListener('mouseleave', ()=> el.style.transform='');
      });
    }
    function initCursor(){
      const c=$('#aa-cursor'); if(reduce){ c.style.display='none'; return; }
      let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
      addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;});
      (function loop(){ cx+=(x-cx)*.18; cy+=(y-cy)*.18; c.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
      root.addEventListener('mouseover',e=>{ if(e.target.closest('a,button,[data-tilt]')) c.classList.add('grow'); });
      root.addEventListener('mouseout',e=>{ if(e.target.closest('a,button,[data-tilt]')) c.classList.remove('grow'); });
    }
    function initCanvas(){
      const cv=$('#aa-canvas'); if(!cv||reduce) return; const ctx=cv.getContext('2d');
      let w,h,pts=[],mx=-999,my=-999, dpr=Math.min(devicePixelRatio||1,2);
      function size(){ const r=cv.parentElement.getBoundingClientRect(); w=r.width; h=r.height; cv.width=w*dpr; cv.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
        const n=Math.min(70, Math.floor(w*h/16000)); pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})); }
      function color(){ return root.getAttribute('data-theme')==='light' ? '20,40,90' : '120,200,230'; }
      function draw(){
        ctx.clearRect(0,0,w,h); const cl=color();
        for(const p of pts){
          p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
          const dx=p.x-mx, dy=p.y-my, dm=Math.hypot(dx,dy);
          if(dm<130){ p.x+=dx/dm*1.4; p.y+=dy/dm*1.4; }
          ctx.beginPath(); ctx.arc(p.x,p.y,1.8,0,7); ctx.fillStyle=`rgba(${cl},.7)`; ctx.fill();
        }
        for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
          const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
          if(d<120){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(${cl},${.14*(1-d/120)})`; ctx.lineWidth=1; ctx.stroke(); }
        }
        requestAnimationFrame(draw);
      }
      size(); addEventListener('resize',size);
      cv.parentElement.addEventListener('mousemove',e=>{ const r=cv.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; });
      cv.parentElement.addEventListener('mouseleave',()=>{ mx=-999; my=-999; });
      draw();
    }
  
    /* ----- Contact form ----- */
    const FORMSPREE_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'
    const MY_EMAIL = 'abd409115011@gmail.com';
    function initForm(){
      const f=$('#aa-form'); if(!f) return; const note=$('#aa-note');
      function err(id,msg){ $('#'+id).classList.add('invalid'); $('#'+id+'-err').textContent=msg; }
      f.addEventListener('submit', async (e)=>{
        e.preventDefault(); const t=i18n[lang];
        const name=$('#aa-name'), email=$('#aa-email'), msg=$('#aa-msg');
        [name,email,msg].forEach(x=>{x.classList.remove('invalid'); $('#'+x.id+'-err').textContent='';});
        note.className='aa-form-note'; let ok=true;
        if(!name.value.trim()){err('aa-name',t.errReq);ok=false;}
        if(!email.value.trim()){err('aa-email',t.errReq);ok=false;}
        else if(!/^\S+@\S+\.\S+$/.test(email.value)){err('aa-email',t.errEmail);ok=false;}
        if(!msg.value.trim()){err('aa-msg',t.errReq);ok=false;}
        if(!ok) return;
        if(FORMSPREE_ENDPOINT){
          note.textContent=t.noteSending; note.classList.add('show','ok');
          try{
            const r=await fetch(FORMSPREE_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
            if(r.ok){ note.textContent=t.noteSent; f.reset(); } else throw new Error();
          }catch(_){ note.textContent=t.noteBad; note.classList.replace('ok','bad'); }
        } else {
          const sub=encodeURIComponent('Portfolio message from '+name.value);
          const body=encodeURIComponent(name.value+' <'+email.value+'>\n\n'+msg.value);
          window.location.href=`mailto:${MY_EMAIL}?subject=${sub}&body=${body}`;
          note.textContent=t.noteOk; note.classList.add('show','ok');
        }
      });
    }
  
    function initNav(){
      const header=$('#aa-header'), burger=$('#aa-burger'), links=$('#aa-navlinks');
      burger.addEventListener('click',()=>{ const o=links.classList.toggle('open'); burger.classList.toggle('open'); burger.setAttribute('aria-expanded',o); });
      $$('#aa-navlinks a').forEach(a=>a.addEventListener('click',()=>{ links.classList.remove('open'); burger.classList.remove('open'); }));
      const secs=$$('main section[id]'), navA=$$('#aa-navlinks a');
      addEventListener('scroll',()=>{
        const sc=scrollY; header.classList.toggle('scrolled', sc>40);
        const doc=document.documentElement; $('#aa-bar').style.width=(sc/(doc.scrollHeight-innerHeight)*100)+'%';
        let cur=''; secs.forEach(s=>{ if(sc>=s.offsetTop-120) cur=s.id; });
        navA.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+cur));
      });
      $$('a[href^="#aa-"]').forEach(a=>a.addEventListener('click',ev=>{
        const tgt=$(a.getAttribute('href')); if(tgt){ ev.preventDefault(); tgt.scrollIntoView({behavior:reduce?'auto':'smooth'}); }
      }));
    }
  
    /* ----- Interactive phone ----- */
    const world = {
      greet:{ en:["Hi, I'm Abdalsamee 👋","Tap an app to explore my world"], ar:["أهلًا، أنا عبد السميع 👋","اضغط تطبيقًا لتستكشف عالمي"] },
      apps:[
        {id:'chat', ic:'💬', en:'Ask Me', ar:'اسألني'},
        {id:'game', ic:'🐞', en:'Bug Smash', ar:'اسحق الخطأ'},
        {id:'notes', ic:'📝', en:'Fun Facts', ar:'حقائق'},
        {id:'dream', ic:'🚀', en:'My Dream', ar:'حلمي'}
      ],
      hello:{ en:"Hey! 👋 I'm Abdalsamee. Tap a question to get to know me.", ar:"أهلًا! 👋 أنا عبد السميع. اضغط سؤالًا لتتعرّف عليّ." },
      qa:[
        {q:{en:"Where are you from?",ar:"من أين أنت؟"}, a:{en:"Gaza, Palestine — a place that taught me resilience. I code from here, for the whole world. 🌍",ar:"من غزة، فلسطين — مكان علّمني الصمود. أبرمج من هنا، للعالم كله. 🌍"}},
        {q:{en:"Why Android?",ar:"لماذا أندرويد؟"}, a:{en:"A phone is the one computer almost everyone carries. Building for it means building for real people, everywhere.",ar:"الهاتف هو الحاسوب الذي يحمله الجميع تقريبًا. التطوير له يعني البناء لأناس حقيقيين في كل مكان."}},
        {q:{en:"What drives you?",ar:"ما الذي يحفّزك؟"}, a:{en:"Turning a blank screen into something people actually use. That moment an idea becomes a working app never gets old.",ar:"تحويل شاشة فارغة إلى شيء يستخدمه الناس فعلًا. لحظة تحوّل الفكرة إلى تطبيق حيّ لا تشيخ أبدًا."}},
        {q:{en:"Your dream job?",ar:"وظيفة أحلامك؟"}, a:{en:"To build at a place like Google or Meta — and create EdTech that gives students everywhere a fair shot. 🚀",ar:"أن أبني في مكان مثل Google أو Meta — وأصنع تقنيات تعليمية تمنح الطلاب في كل مكان فرصة عادلة. 🚀"}},
        {q:{en:"Tell me a fun fact",ar:"أخبرني حقيقة طريفة"}, a:{en:"I led my graduation team of four, and our app watches your eyes during exams using ML Kit. Slightly intimidating, very cool. 👀",ar:"قُدت فريق تخرّجي المكوّن من أربعة، وتطبيقنا يراقب عينيك أثناء الامتحان باستخدام ML Kit. مخيف قليلًا، ورائع جدًا. 👀"}}
      ],
      notes:{
        en:["It all started with a single line of code — and I never stopped.","I think in Kotlin and dream in Jetpack Compose.","Clean architecture is my love language.","From Gaza to the world — distance is just latency.","Led 4 people, shipped 1 ambitious app, learned 100 lessons."],
        ar:["بدأ كل شيء بسطر كود واحد — ولم أتوقف بعدها.","أفكّر بـ Kotlin وأحلم بـ Jetpack Compose.","المعمارية النظيفة هي لغة حبّي.","من غزة إلى العالم — المسافة مجرّد زمن استجابة.","قُدت 4 أشخاص، أطلقت تطبيقًا طموحًا، وتعلّمت 100 درس."]
      },
      dream:{
        title:{en:"The Dream",ar:"الحلم"},
        intro:{en:"I'm chasing a clear goal: to build at a world-class company like Google or Meta, and to create educational tech that gives every student a fair shot — wherever they're born.",ar:"أطارد هدفًا واضحًا: أن أبني في شركة عالمية مثل Google أو Meta، وأن أصنع تقنية تعليمية تمنح كل طالب فرصة عادلة — أينما وُلد."},
        goals:[
          {en:"Join a world-class engineering team",ar:"الانضمام إلى فريق هندسي عالمي"},
          {en:"Ship apps used by millions",ar:"إطلاق تطبيقات يستخدمها الملايين"},
          {en:"Make quality education borderless",ar:"جعل التعليم الجيّد بلا حدود"},
          {en:"Keep learning, every single day",ar:"الاستمرار في التعلّم كل يوم"}
        ]
      },
      game:{
        title:{en:"Bug Smash",ar:"اسحق الخطأ"},
        intro:{en:"Squash as many bugs as you can in 20 seconds. Ready to debug?",ar:"اسحق أكبر عدد من الأخطاء خلال 20 ثانية. مستعد للتصحيح؟"},
        start:{en:"Start",ar:"ابدأ"}, again:{en:"Play again",ar:"العب مجددًا"},
        score:{en:"Score",ar:"النقاط"}, time:{en:"Time",ar:"الوقت"}, best:{en:"Best",ar:"الأفضل"},
        over:{en:"Time's up!",ar:"انتهى الوقت!"}, you:{en:"You smashed",ar:"سحقت"}, bugs:{en:"bugs",ar:"خطأ"}
      }
    };
  
    let gameTimers=[];
    function wBody(){ return document.getElementById('aa-screenbody'); }
    function clearGameTimers(){ gameTimers.forEach(t=>{ clearInterval(t); clearTimeout(t); }); gameTimers=[]; }
    function startClock(){
      const upd=()=>{ const el=document.getElementById('aa-clock'); if(!el) return; const d=new Date(); el.textContent=((d.getHours()%12)||12)+':'+String(d.getMinutes()).padStart(2,'0'); };
      upd(); setInterval(upd,30000);
    }
    function vhead(t){ return `<div class="aa-vhead"><button class="aa-back" id="aa-back" aria-label="Back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button><span class="vt">${t}</span></div>`; }
    function bindBack(){ const b=document.getElementById('aa-back'); if(b) b.onclick=renderHome; }
  
    function renderHome(){
      clearGameTimers(); const g=world.greet[lang]; const b=wBody(); if(!b) return;
      b.innerHTML=`<div class="aa-view"><div class="aa-home">
        <div class="aa-home-greet"><b>${g[0]}</b><span>${g[1]}</span></div>
        ${world.apps.map(a=>`<button class="aa-app" data-app="${a.id}"><span class="ic">${a.ic}</span><span class="nm">${a[lang]}</span></button>`).join('')}
      </div></div>`;
      b.querySelectorAll('[data-app]').forEach(el=>el.onclick=()=>openApp(el.dataset.app));
    }
    function openApp(id){ clearGameTimers(); ({chat:renderChat,game:renderGame,notes:renderNotes,dream:renderDream}[id])(); }
  
    function renderChat(){
      const b=wBody(); const app=world.apps.find(a=>a.id==='chat');
      b.innerHTML=`<div class="aa-view">${vhead(app[lang])}
        <div class="aa-chat" id="aa-chat"><div class="aa-bub bot">${world.hello[lang]}</div></div>
        <div class="aa-chips-wrap">${world.qa.map((x,i)=>`<button class="aa-qchip" data-q="${i}">${x.q[lang]}</button>`).join('')}</div></div>`;
      bindBack();
      const chat=document.getElementById('aa-chat');
      b.querySelectorAll('[data-q]').forEach(el=>el.onclick=()=>{
        const x=world.qa[el.dataset.q];
        const me=document.createElement('div'); me.className='aa-bub me'; me.textContent=x.q[lang]; chat.appendChild(me);
        const bot=document.createElement('div'); bot.className='aa-bub bot'; chat.appendChild(bot); chat.scrollTop=chat.scrollHeight;
        const full=x.a[lang];
        if(reduce){ bot.textContent=full; chat.scrollTop=chat.scrollHeight; return; }
        let i=0; const t=setInterval(()=>{ bot.textContent=full.slice(0,++i); chat.scrollTop=chat.scrollHeight; if(i>=full.length) clearInterval(t); },18); gameTimers.push(t);
      });
    }
    function renderNotes(){
      const b=wBody(); const app=world.apps.find(a=>a.id==='notes'); const list=world.notes[lang]; let i=0;
      b.innerHTML=`<div class="aa-view">${vhead(app[lang])}
        <div class="aa-notes"><div class="aa-note-card" id="aa-note">${list[0]}</div>
        <div class="aa-note-count" id="aa-notecount">1 / ${list.length}</div>
        <button class="aa-btn aa-btn-ghost" id="aa-notenext">${lang==='ar'?'التالي ←':'Next →'}</button></div></div>`;
      bindBack();
      document.getElementById('aa-notenext').onclick=()=>{ i=(i+1)%list.length;
        const c=document.getElementById('aa-note'); c.style.animation='aa-bugin .3s'; c.textContent=list[i];
        setTimeout(()=>{c.style.animation='';},300); document.getElementById('aa-notecount').textContent=(i+1)+' / '+list.length; };
    }
    function renderDream(){
      const b=wBody(); const app=world.apps.find(a=>a.id==='dream'); const d=world.dream;
      b.innerHTML=`<div class="aa-view">${vhead(app[lang])}
        <div class="aa-dream"><span class="em">🚀</span><h4>${d.title[lang]}</h4><p>${d.intro[lang]}</p>
        ${d.goals.map(g=>`<div class="aa-goal"><span class="gk">✓</span>${g[lang]}</div>`).join('')}</div></div>`;
      bindBack();
    }
    function renderGame(){
      const b=wBody(); const G=world.game; const best=+(store.get('aa-bug-best')||0);
      b.innerHTML=`<div class="aa-view">${vhead(G.title[lang])}
        <div class="aa-game">
          <div class="aa-game-bar"><span>${G.score[lang]}: <b id="aa-gs">0</b></span><span>${G.time[lang]}: <b id="aa-gt">20</b></span><span>${G.best[lang]}: <b id="aa-gb">${best}</b></span></div>
          <div class="aa-game-area" id="aa-garea">
            <div class="aa-game-overlay" id="aa-gov"><div style="font-size:2.4rem">🐞</div><h4>${G.title[lang]}</h4><p>${G.intro[lang]}</p><button class="aa-btn aa-btn-primary" id="aa-gstart">${G.start[lang]}</button></div>
          </div></div></div>`;
      bindBack(); document.getElementById('aa-gstart').onclick=playGame;
    }
    function playGame(){
      const G=world.game; const area=document.getElementById('aa-garea'); const ov=document.getElementById('aa-gov');
      let score=0, time=20; ov.style.display='none';
      document.getElementById('aa-gs').textContent='0'; document.getElementById('aa-gt').textContent='20';
      const spawn=setInterval(()=>{
        const bug=document.createElement('div'); bug.className='aa-bug'; bug.textContent='🐞';
        bug.style.left=(5+Math.random()*78)+'%'; bug.style.top=(5+Math.random()*78)+'%';
        bug.onclick=()=>{ score++; const gs=document.getElementById('aa-gs'); if(gs) gs.textContent=score; bug.remove(); };
        area.appendChild(bug); const rm=setTimeout(()=>bug.remove(),950); gameTimers.push(rm);
      },650); gameTimers.push(spawn);
      const tick=setInterval(()=>{ time--; const el=document.getElementById('aa-gt'); if(el) el.textContent=time; if(time<=0) endGame(score); },1000); gameTimers.push(tick);
      function endGame(s){
        clearGameTimers(); area.querySelectorAll('.aa-bug').forEach(x=>x.remove());
        const best=Math.max(s, +(store.get('aa-bug-best')||0)); store.set('aa-bug-best',best);
        const gb=document.getElementById('aa-gb'); if(gb) gb.textContent=best;
        ov.innerHTML=`<div style="font-size:2.4rem">🏆</div><h4>${G.over[lang]}</h4><p>${G.you[lang]} <b style="color:var(--brand-1)">${s}</b> ${G.bugs[lang]}</p><button class="aa-btn aa-btn-primary" id="aa-gstart">${G.again[lang]}</button>`;
        ov.style.display='flex'; document.getElementById('aa-gstart').onclick=playGame;
      }
    }
    function initWorld(){ startClock(); renderHome(); }

    
  
    /* ----- Init ----- */
    applyTheme(); applyText();
    renderSkills(); renderProjects('all'); renderTimeline();
    $('#aa-theme').addEventListener('click',()=>{ theme=theme==='dark'?'light':'dark'; applyTheme(); });
    $('#aa-lang').addEventListener('click',()=> setLang(lang==='en'?'ar':'en'));
    $('#aa-filters').addEventListener('click',e=>{ if(e.target.matches('.aa-filter')){ $('#aa-filters .active').classList.remove('active'); e.target.classList.add('active'); renderProjects(e.target.dataset.f); }});
    initNav(); initForm(); initCanvas(); initCursor(); initMagnetic(); initWorld();
    startTyping(); observeReveal(); initTilt();
  /* =====================================================================
     FIRESTORE CMS BRIDGE
     Loads content from Firestore (saved via admin panel) and re-renders.
     Hardcoded data above acts as instant fallback — site never goes blank.
     
     Paste this ENTIRE block into scripts.js right BEFORE the closing })();
     ===================================================================== */

     function guessIcon(title){
      const t=(title||'').toLowerCase();
      if(t.includes('lang') || t.includes('لغ')) return 'code';
      if(t.includes('android') || t.includes('أندر')) return 'phone';
      if(t.includes('arch') || t.includes('معمار')) return 'layers';
      if(t.includes('backend') || t.includes('cloud') || t.includes('سحاب') || t.includes('خلف')) return 'cloud';
      if(t.includes('librar') || t.includes('data') || t.includes('مكتب') || t.includes('بيان')) return 'data';
      if(t.includes('tool') || t.includes('أدو')) return 'git';
      return 'code';
    }
  
    async function loadCMS(){
      if(!window.db) return;
      const fdb = window.db;
      try{
        const [heroDoc, aboutDoc, skillsDoc, contactDoc, projSnap, tlSnap] = await Promise.all([
          fdb.doc('content/hero').get(),
          fdb.doc('content/about').get(),
          fdb.doc('content/skills').get(),
          fdb.doc('content/contact').get(),
          fdb.collection('projects').orderBy('order').get(),
          fdb.collection('timeline').orderBy('order').get()
        ]);
  
        let changed = false;
  
        /* ---- Hero ---- */
        if(heroDoc.exists){
          const h = heroDoc.data();
          if(h.nameEn){ i18n.en.heroName = h.nameEn; i18n.ar.heroName = h.nameAr || h.nameEn; }
          if(h.tagEn){ i18n.en.heroTag = h.tagEn; i18n.ar.heroTag = h.tagAr || h.tagEn; }
          if(h.rolesEn && h.rolesEn.length) roles.en = h.rolesEn;
          if(h.rolesAr && h.rolesAr.length) roles.ar = h.rolesAr;
          changed = true;
        }
  
        /* ---- About ---- */
        if(aboutDoc.exists){
          const a = aboutDoc.data();
          if(a.bioEn){ i18n.en.aboutBio = a.bioEn; i18n.ar.aboutBio = a.bioAr || a.bioEn; }
          if(a.portraitUrl){
            $$('img[src*="portrait"]').forEach(img => { img.src = a.portraitUrl; });
          }
          changed = true;
        }
  
        /* ---- Skills ---- */
        if(skillsDoc.exists){
          const cats = skillsDoc.data().categories;
          if(cats && cats.length){
            skills.length = 0;
            cats.forEach(c => skills.push({
              icon: guessIcon(c.titleEn),
              titleEn: c.titleEn || '',
              titleAr: c.titleAr || '',
              chips: c.chips || []
            }));
            changed = true;
          }
        }
  
        /* ---- Projects ---- */
        if(!projSnap.empty){
          projects.length = 0;
          projSnap.docs.forEach(d => {
            const p = d.data();
            projects.push({
              featured: !!p.featured,
              flag: p.flag || '',
              titleEn: p.titleEn || '',
              titleAr: p.titleAr || '',
              img: p.imageUrl || '',
              ph: (p.titleEn || 'Project').split(/\s/)[0],
              sumEn: p.sumEn || '',
              sumAr: p.sumAr || '',
              tech: p.tech || [],
              github: p.github || '',
              demo: p.demo || ''
            });
          });
          changed = true;
        }
  
        /* ---- Timeline ---- */
        if(!tlSnap.empty){
          timeline.length = 0;
          tlSnap.docs.forEach(d => {
            const t = d.data();
            timeline.push({
              dateEn: t.dateEn || '', dateAr: t.dateAr || '',
              titleEn: t.titleEn || '', titleAr: t.titleAr || '',
              orgEn: t.orgEn || '', orgAr: t.orgAr || '',
              pEn: t.pEn || '', pAr: t.pAr || ''
            });
          });
          changed = true;
        }
  
        /* ---- Contact links ---- */
        if(contactDoc.exists){
          const c = contactDoc.data();
          if(c.email){
            $$('a[href^="mailto:"]').forEach(el => {
              el.href = 'mailto:' + c.email;
              const v = el.querySelector('.v'); if(v) v.textContent = c.email;
            });
          }
          if(c.whatsapp){
            const num = c.whatsapp.replace(/[^0-9]/g, '');
            $$('a[href*="wa.me"]').forEach(el => {
              el.href = 'https://wa.me/' + num;
              const v = el.querySelector('.v'); if(v) v.textContent = c.whatsapp;
            });
          }
          if(c.linkedin){
            $$('a[href*="linkedin.com"]').forEach(el => { el.href = c.linkedin; });
          }
          if(c.github){
            $$('.aa-contact-link[href*="github.com"]').forEach(el => {
              el.href = c.github;
              const v = el.querySelector('.v'); if(v) v.textContent = c.github.replace('https://','');
            });
          }
        }
  
        /* ---- Re-render everything if data arrived ---- */
        if(changed){
          applyText();
          renderSkills();
          renderProjects(currentFilter());
          renderTimeline();
          startTyping();
          observeReveal();
          initTilt();
        }
  
      }catch(e){
        console.warn('CMS load skipped — using fallback content.', e.message);
      }
    }
  
    // Run after initial render (which already happened above with hardcoded data)
    loadCMS();
  
  
  })();
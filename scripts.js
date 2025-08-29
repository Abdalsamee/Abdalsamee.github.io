/*
--- ANDROID DEVELOPER PORTFOLIO SCRIPTS ---
Author: Abdalsamee Alnajjar
Build Hint: For production, minify this file using a tool like Terser.
`npx terser scripts.js -c -m -o scripts.min.js`
*/

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Application State & Constants
     */
    const appState = {
        theme: localStorage.getItem('theme') || 'light',
        lang: localStorage.getItem('lang') || 'en',
    };

    const i18n = {
        en: {
            // Nav
            navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
            // Hero
            heroHeadline: "Abdalsamee Alnajjar", heroSubtitle: "Software Engineer & Android App Developer", heroCtaProjects: "View My Projects", heroCtaContact: "Contact Me",
            // About
            aboutTitle: "About Me", aboutBio: "I am Abdalsamee Raed Abdalsamee Al-Najjar, an Android Developer from Gaza, Palestine, and a graduating student in Mobile Computing and Smart Device Applications at the Islamic University of Gaza. I am approaching the completion of my degree, with a passion that started from writing my very first line of code and continues to grow with every new challenge. My focus is on building practical applications with modern interfaces and excellent user experiences using Kotlin and Jetpack Compose, along with solid knowledge in Firebase, REST APIs, Room Database, MVVM, and Git. I am steadily working toward my goal of joining leading global tech companies such as Google or Meta, and contributing to the creation of innovative applications that deliver real value to users.",
            aboutCardExp: "Experience", aboutCardExpVal: "3+ Years", aboutCardEdu: "Education", aboutCardEduVal: "B.Sc. in Mobile Computing and Smart Device Applications", aboutCardGoal: "Goal", aboutCardGoalVal: "Innovate in EdTech",
            // Skills
            skillsTitle: "My Tech Stack", skillsDev: "Development", skillsTools: "Tools & Platforms", skillsArch: "Architecture",
            // Projects
            projectsTitle: "Featured Projects", filterAll: "All", filterCompose: "Jetpack Compose", filterFirebase: "Firebase", filterXML: "XML", projectGithub: "GitHub", projectDemo: "Live Demo",
            // Contact
            contactTitle: "Get In Touch", contactSubtitle: "Have a project in mind or just want to connect? Feel free to reach out!",
            formName: "Name", formEmail: "Email", formMessage: "Message", formSubmit: "Send Message",
            formErrorRequired: "This field is required", formErrorEmail: "Please enter a valid email address",
            // Footer
            footerText: `&copy; ${new Date().getFullYear()} Abdalsamee Alnajjar. All Rights Reserved.`, backToTop: "Back to Top", skipToContent: "Skip to main content"
        },
        ar: {
            // Nav
            navHome: "الرئيسية", navAbout: "عني", navSkills: "مهاراتي", navProjects: "مشاريعي", navContact: "تواصل",
            // Hero
            heroHeadline: "عبد السميع النجار", heroSubtitle: "مهندس برمجيات ومطور تطبيقات أندرويد", heroCtaProjects: "عرض المشاريع", heroCtaContact: "تواصل معي",
            // About
            aboutTitle: "عني", aboutBio: "أنا عبد السميع رائد عبد السميع النجار، مطوّر تطبيقات أندرويد من غزة – فلسطين، وطالب خريج في تخصص الحوسبة المتنقلة وتطبيقات الأجهزة الذكية في الجامعة الإسلامية، حيث أقترب من إنهاء دراستي الجامعية. شغفي بالبرمجة بدأ منذ كتابة أول سطر كود ويكبر مع كل مشروع وتجربة جديدة، وأركز على تطوير تطبيقات عملية بواجهات حديثة وتجربة مستخدم مميزة باستخدام Kotlin و Jetpack Compose، مع إلمام بـ Firebase، REST APIs، Room Database، MVVM، وGit. أطمح بخطوات ثابتة للانضمام إلى شركات تقنية عالمية مثل Google أو Meta والمساهمة في تطوير تطبيقات مبتكرة تضيف قيمة حقيقية للمستخدمين.",
            aboutCardExp: "خبرة", aboutCardExpVal: "+3 سنوات", aboutCardEdu: "تعليم", aboutCardEduVal: "بكالوريوس الحوسبة المتنقلة وتطبيقات الأجهزة الذكية", aboutCardGoal: "الهدف", aboutCardGoalVal: "الابتكار في التعليم التقني",
            // Skills
            skillsTitle: "مجموعتي التقنية", skillsDev: "التطوير", skillsTools: "الأدوات والمنصات", skillsArch: "معمارية",
            // Projects
            projectsTitle: "مشاريع مميزة", filterAll: "الكل", filterCompose: "Jetpack Compose", filterFirebase: "Firebase", filterXML: "XML", projectGithub: "GitHub", projectDemo: "عرض مباشر",
            // Contact
            contactTitle: "تواصل معي", contactSubtitle: "هل لديك مشروع في ذهنك أو ترغب فقط في التواصل؟ لا تتردد في الاتصال!",
            formName: "الاسم", formEmail: "البريد الإلكتروني", formMessage: "الرسالة", formSubmit: "إرسال الرسالة",
            formErrorRequired: "هذا الحقل مطلوب", formErrorEmail: "الرجاء إدخال بريد إلكتروني صالح",
            // Footer
            footerText: `&copy; ${new Date().getFullYear()} عبد السميع النجار. جميع الحقوق محفوظة.`, backToTop: "العودة للأعلى", skipToContent: "انتقل إلى المحتوى الرئيسي"
        }
    };

    /**
     * DOM Element Selectors
     */
    const selectors = {
        html: document.documentElement,
        header: document.querySelector('.site-header'),
        themeToggle: document.getElementById('theme-toggle'),
        langToggle: document.getElementById('lang-toggle'),
        hamburgerBtn: document.getElementById('hamburger-btn'),
        navLinks: document.getElementById('nav-links'),
        navLinksItems: document.querySelectorAll('.nav-link'),
        projectGrid: document.getElementById('project-grid'),
        projectFilters: document.getElementById('project-filters'),
        contactForm: document.getElementById('contact-form'),
        revealElements: document.querySelectorAll('.animate-reveal'),
    };

    /**
     * Theme Management
     */
    const applyTheme = () => {
        selectors.html.setAttribute('data-theme', appState.theme);
        localStorage.setItem('theme', appState.theme);
        const themeLabel = appState.theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
        selectors.themeToggle.setAttribute('aria-label', themeLabel);
    };

    const toggleTheme = () => {
        appState.theme = appState.theme === 'light' ? 'dark' : 'light';
        applyTheme();
    };

    /**
     * Language & RTL/LTR Management
     */
    const applyLanguage = () => {
        appState.lang = selectors.html.getAttribute('lang') || 'en';
        const newLang = appState.lang === 'en' ? 'ar' : 'en';
        selectors.html.setAttribute('lang', newLang);
        selectors.html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', newLang);
        appState.lang = newLang;
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            el.innerHTML = i18n[newLang][key] || el.innerHTML;
        });

        selectors.langToggle.querySelector('.lang-indicator').textContent = newLang === 'en' ? 'AR' : 'EN';
        const langLabel = newLang === 'en' ? 'Switch Language to Arabic' : 'Switch Language to English';
        selectors.langToggle.setAttribute('aria-label', langLabel);
        
        // Reload projects to get translated summaries
        loadProjects();
    };

    /**
     * Projects Loading & Filtering
     */
    let allProjects = [];
    const loadProjects = async () => {
        if (!selectors.projectGrid) return;
        try {
            if (allProjects.length === 0) {
                const response = await fetch('data/projects.json');
                if (!response.ok) throw new Error('Network response was not ok');
                allProjects = await response.json();
            }
            renderProjects(allProjects);
            if (selectors.projectFilters) {
                const currentFilter = selectors.projectFilters.querySelector('.active')?.dataset.filter || 'all';
                filterProjects(currentFilter);
            }
        } catch (error) {
            console.error('Failed to load projects:', error);
            selectors.projectGrid.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
        }
    };

    const renderProjects = (projects) => {
        selectors.projectGrid.innerHTML = projects.map(p => `
            <article class="project-card animate-reveal" data-reveal="fade-in">
                <img src="${p.image}" alt="${p.title}" class="project-image" loading="lazy">
                <div class="project-content">
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-summary">${p[`summary_${appState.lang}`] || p.summary_en}</p>
                    <div class="project-tech">
                        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${p.github}" target="_blank" class="btn btn-secondary" data-lang-key="projectGithub">GitHub</a>
                        ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="btn btn-secondary" data-lang-key="projectDemo">Live Demo</a>` : ''}
                    </div>
                </div>
            </article>
        `).join('');
        // Re-observe newly added elements for animations
        initScrollReveal(); 
    };
    
    const filterProjects = (tech) => {
        document.querySelectorAll('.project-card').forEach(card => {
            const index = Array.from(selectors.projectGrid.children).indexOf(card);
            const projectData = allProjects[index];
            if (tech === 'all' || projectData.tech.includes(tech)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    /**
     * Animations & Observers
     */
    const initScrollReveal = () => {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.revealDelay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-reveal').forEach(el => revealObserver.observe(el));
    };
    
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            selectors.header.classList.add('scrolled');
        } else {
            selectors.header.classList.remove('scrolled');
        }
    };

    const handleNavHighlight = () => {
        let currentSection = '';
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - selectors.header.offsetHeight - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        selectors.navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };
    
    /**
     * Form Validation
     */
    const validateForm = () => {
        let isValid = true;
        const inputs = selectors.contactForm.querySelectorAll('[required]');
        
        inputs.forEach(input => {
            const errorEl = document.getElementById(`${input.id}-error`);
            input.classList.remove('invalid');
            errorEl.textContent = '';
            
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('invalid');
                errorEl.textContent = i18n[appState.lang].formErrorRequired;
            } else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
                isValid = false;
                input.classList.add('invalid');
                errorEl.textContent = i18n[appState.lang].formErrorEmail;
            }
        });

        return isValid;
    };


    /**
     * Event Handlers & Bindings
     */
    const bindEvents = () => {
        selectors.themeToggle.addEventListener('click', toggleTheme);
        selectors.langToggle.addEventListener('click', applyLanguage);
        
        selectors.hamburgerBtn.addEventListener('click', () => {
            const isOpen = selectors.navLinks.classList.toggle('open');
            selectors.hamburgerBtn.classList.toggle('open');
            selectors.hamburgerBtn.setAttribute('aria-expanded', isOpen);
        });

        selectors.navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                selectors.navLinks.classList.remove('open');
                selectors.hamburgerBtn.classList.remove('open');
                selectors.hamburgerBtn.setAttribute('aria-expanded', false);
            });
        });

        if (selectors.projectFilters) {
            selectors.projectFilters.addEventListener('click', (e) => {
                if (e.target.matches('.filter-btn')) {
                    selectors.projectFilters.querySelector('.active').classList.remove('active');
                    e.target.classList.add('active');
                    filterProjects(e.target.dataset.filter);
                }
            });
        }
        
        if (selectors.contactForm) {
            selectors.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (validateForm()) {
                    // Placeholder for form submission logic (e.g., using Formspree, Netlify Forms)
                    alert('Form submitted successfully! (This is a placeholder)');
                    selectors.contactForm.reset();
                }
            });
        }
        
        window.addEventListener('scroll', () => {
            handleHeaderScroll();
            handleNavHighlight();
        });
    };

    /**
     * Initialization Function
     */
    const init = () => {
        // Set initial theme and language from state/localStorage
        const initialLang = localStorage.getItem('lang') || 'en';
        selectors.html.setAttribute('lang', initialLang);
        selectors.html.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr');
        appState.lang = initialLang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            el.innerHTML = i18n[initialLang][key] || el.innerHTML;
        });
        selectors.langToggle.querySelector('.lang-indicator').textContent = initialLang === 'en' ? 'AR' : 'EN';
        
        applyTheme();
        bindEvents();
        loadProjects();
        initScrollReveal();
        // Placeholder for particle animation
        // initParticles(); 
    };

    // Run the app
    init();
});
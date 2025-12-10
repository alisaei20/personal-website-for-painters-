// ===== GLOBAL VARIABLES =====
let currentTestimonial = 0;
let testimonialInterval;

// ===== GALLERY DATA =====
    const artworkData = [
        {
            id: 1,
            title: "Ocean Dreams",
            title_fa: "رؤیای اقیانوس",
            category: "Realism",
            image: "asset/img/realism 3.webp",
            description: "A mesmerizing acrylic painting capturing the eternal dance between ocean waves and moonlight.",
            description_fa: "نقاشی اکرلیک مسحورکننده که رقص ابدی موج‌های اقیانوس و نور ماه را به تصویر می‌کشد.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Acrylic on Canvas",
            technique_fa: "اکریلیک روی بوم",
            date: "2024",
            size: "24\" x 36\"",
            price_en: "$1200",
            price_fa: "۱۲٬۰۰۰٬۰۰۰ تومان"
        },
        {
            id: 2,
            title: "Digital Symphony",
            title_fa: "سمفونی دیجیتال",
            category: "digital",
            image: "asset/img/digital-art-.png",
            description: "A vibrant digital illustration exploring the harmony between technology and nature.",
            description_fa: "تصویرسازی دیجیتالی پویا که هماهنگی میان فناوری و طبیعت را می‌کاود.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Digital Illustration",
            technique_fa: "تصویرسازی دیجیتال",
            date: "2024",
            size: "3000 x 4000px",
            price_en: "$900",
            price_fa: "۹٬۰۰۰٬۰۰۰ تومان"
        },
        {
            id: 3,
            title: "Urban Portrait",
            title_fa: "پرتره شهری",
            category: "OilPainting",
            image: "asset/img/oil painting 3.webp",
            description: "An intimate charcoal sketch capturing the essence of urban life and human emotion.",
            description_fa: "طرح زغال صمیمی که جوهرهٔ زندگی شهری و احساسات انسانی را ثبت می‌کند.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Charcoal on Paper",
            technique_fa: "زغال روی کاغذ",
            date: "2024",
            size: "18\" x 24\"",
            price_en: "$750",
            price_fa: "۷٬۵۰۰٬۰۰۰ تومان"
        },
        {
            id: 4,
            title: "Abstract Emotions",
            title_fa: "احساسات انتزاعی",
            category: "Realism",
            image: "asset/img/realism 2.webp",
            description: "A bold abstract painting expressing the complexity of human emotions through color and form.",
            description_fa: "  .نقاشی انتزاعی جسورانه که پیچیدگی احساسات انسانی را با رنگ و فرم بیان می‌کند. ''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Mixed Media on Canvas",
            technique_fa: "ترکیب مواد روی بوم",
            date: "2024",
            size: "30\" x 40\"",
            price_en: "$1350",
            price_fa: "۱۳٬۵۰۰٬۰۰۰ تومان"
        },
        {
            id: 5,
            title: "Cyber Garden",
            title_fa: "باغ سایبری",
            category: "digital",
            image: "asset/img/digital art 2.jpg",
            description: "A futuristic digital artwork blending organic forms with technological elements.",
            description_fa: " هنر دیجیتال آینده‌نگر که فرم‌های ارگانیک را با عناصر تکنولوژیک درهم می‌آمیزد. ''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Digital Art",
            technique_fa: "هنر دیجیتال",
            date: "2023",
            size: "2500 x 3500px",
            price_en: "$1000",
            price_fa: "۱۰٬۰۰۰٬۰۰۰ تومان"
        },
        {
            id: 6,
            title: "Nature's Whisper",
            title_fa: "نجوای طبیعت",
            category: "OilPainting",
            image: "asset/img/oil painting 2.jpg",
            description: "A delicate pencil sketch celebrating the beauty of natural landscapes.",
            description_fa: "طرح ظریف مداد که زیبایی مناظر طبیعی را می‌ستاید.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Graphite on Paper",
            technique_fa: "گرافیت روی کاغذ",
            date: "2023",
            size: "16\" x 20\"",
            price_en: "$600",
            price_fa: "۶٬۰۰۰٬۰۰۰ تومان"
        },
        {
            id: 7,
            title: "Colorful Chaos",
            title_fa: "هرج‌ومرج رنگی",
            category: "Abstract",
            image: "asset/img/abstract.jpg",
            description: "A mixed media piece combining traditional painting with digital elements.",
            description_fa: "اثری با تکنیک ترکیب مواد که نقاشی سنتی را با عناصر دیجیتال پیوند می‌دهد.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Mixed Media",
            technique_fa: "ترکیب مواد",
            date: "2024",
            size: "36\" x 48\"",
            price_en: "$1400",
            price_fa: "۱۴٬۰۰۰٬۰۰۰ تومان"
        },
        {
            id: 8,
            title: "Metropolitan Dreams",
            title_fa: "رویاهای کلان‌شهری",
            category: "digital",
            image: "asset/img/digital art 3.webp",
            description: "A digital painting capturing the energy and vibrancy of city life at night.",
            description_fa: "نقاشی دیجیتال که انرژی و پویایی زندگی شهری در شب را ثبت می‌کند.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Digital Painting",
            technique_fa: "نقاشی دیجیتال",
            date: "2023",
            size: "4000 x 3000px",
            price_en: "$850",
            price_fa: "۸٬۵۰۰٬۰۰۰ تومان"
        },
        {
            id: 9,
            title: "Floral Fantasy",
            title_fa: "خیال گل‌ها",
            category: "Realism",
            image: "asset/img/realism.jpg",
            description: "A watercolor painting celebrating the delicate beauty of spring flowers.",
            description_fa: "نقاشی آبرنگ که زیبایی لطیف گل‌های بهاری را می‌ستاید.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Watercolor on Paper",
            technique_fa: "آبرنگ روی کاغذ",
            date: "2024",
            size: "12\" x 16\"",
            price_en: "$550",
            price_fa: "۵٬۵۰۰٬۰۰۰ تومان"
        },
        {
            id: 10,
            title: "Floral Fantasy",
            title_fa: "خیال گل‌ها",
            category: "Abstract",
            image: "asset/img/abstract 2.webp",
            description: "A watercolor painting celebrating the delicate beauty of spring flowers.",
            description_fa: "نقاشی آبرنگ که زیبایی لطیف گل‌های بهاری را می‌ستاید.''برای بزرگ نمایی تصویر کلیک کنید''",
            technique: "Watercolor on Paper",
            technique_fa: "آبرنگ روی کاغذ",
            date: "2024",
            size: "12\" x 16\"",
            price_en: "$700",
            price_fa: "۷٬۰۰۰٬۰۰۰ تومان"
        }
    ];

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INITIALIZATION =====
function initializeWebsite() {
    setupNavigation();
    setupGallery();
    setupTestimonials();
    setupScrollEffects();
    setupLazyLoading();
    setupAnimations();
    setupI18n();
}

// ===== NAVIGATION FUNCTIONALITY =====
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.querySelector('.nav-close');
    const navLinks = document.querySelectorAll('.nav-link');
    const langMobile = document.getElementById('lang-toggle-mobile');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        const expanded = navToggle.classList.contains('active');
        navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        navMenu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    });

    // Close menu button
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Smooth scrolling for anchor links with eased animation and navbar offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const offsetTop = targetSection.offsetTop - 80; // account for fixed navbar height

            if (prefersReduced) {
                window.scrollTo(0, offsetTop);
                return;
            }

            smoothScrollTo(offsetTop, 650);
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Ensure mobile language toggle looks like other menu buttons
    if (langMobile) {
        langMobile.classList.add('nav-link');
    }
}

// Eased smooth scroll helper
function smoothScrollTo(targetY, duration = 600) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = Math.max(0, targetY) - startY;
    const startTime = performance.now();

    // EaseInOutCubic
    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = ease(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// ===== GALLERY FUNCTIONALITY =====
function setupGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxTechnique = document.getElementById('lightbox-technique');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxPrice = document.getElementById('lightbox-price');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Populate gallery
    populateGallery('all');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            populateGallery(filter);
        });
    });

    // Gallery item click handler
    galleryGrid.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const artworkId = parseInt(galleryItem.getAttribute('data-id'));
            const artwork = artworkData.find(item => item.id === artworkId);
            
            if (artwork) {
                openLightbox(artwork);
            }
        }
    });

    // Lightbox close functionality
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Toggle fullscreen image-only when clicking on the image
    lightboxImage.addEventListener('click', () => {
        const lb = document.getElementById('lightbox');
        if (!lb) return;
        lb.classList.toggle('fullscreen');
    });

    // ESC key to close lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    function populateGallery(filter) {
        galleryGrid.innerHTML = '';
        
        const filteredData = filter === 'all' 
            ? artworkData 
            : artworkData.filter(item => item.category === filter);

        filteredData.forEach(artwork => {
            const galleryItem = createGalleryItem(artwork);
            galleryGrid.appendChild(galleryItem);
        });

        // Add animation to new items
        setTimeout(() => {
            const items = galleryGrid.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 50);
    }

    // Expose gallery refresh for i18n updates
    window.__refreshGallery = function(filter) {
        const f = filter || (document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all');
        populateGallery(f);
    };

    function createGalleryItem(artwork) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-id', artwork.id);
        item.setAttribute('data-category', artwork.category);
        
        const isFa = (document.documentElement.lang === 'fa');
        const title = isFa && artwork.title_fa ? artwork.title_fa : artwork.title;
        const tech = isFa && artwork.technique_fa ? artwork.technique_fa : artwork.technique;
        
        item.innerHTML = `
            <img src="${artwork.image}" alt="${title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${title}</h3>
                <p>${tech}</p>
            </div>
        `;
        
        // Initial state for animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.3s ease';
        
        return item;
    }

    function openLightbox(artwork) {
        const isFa = (document.documentElement.lang === 'fa');
        const title = isFa && artwork.title_fa ? artwork.title_fa : artwork.title;
        const desc = isFa && artwork.description_fa ? artwork.description_fa : artwork.description;
        const tech = isFa && artwork.technique_fa ? artwork.technique_fa : artwork.technique;
        lightboxImage.src = artwork.image;
        lightboxImage.alt = title;
        lightboxImage.setAttribute('data-id', artwork.id); // Fix: Add data-id for keyboard navigation
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = desc;
        const dict = (window.__i18n && window.__i18n.getDict()) || {};
        lightboxTechnique.textContent = `${dict['lightbox.techniqueLabel'] || 'Technique'}: ${tech}`;
        const priceValue = isFa
            ? (artwork.price_fa || (dict['lightbox.contactForPrice'] || 'برای قیمت تماس بگیرید'))
            : (artwork.price_en || (dict['lightbox.contactForPrice'] || 'Contact for price'));
        if (lightboxPrice) {
            lightboxPrice.textContent = `${dict['lightbox.priceLabel'] || 'Price'}: ${priceValue}`;
        }
        lightboxDate.textContent = `Created: ${artwork.date} | Size: ${artwork.size}`;
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Fade in animation
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    }

    // Expose lightbox opener for global keyboard navigation
    window.__openLightbox = openLightbox;

    function closeLightbox() {
        lightbox.classList.remove('fullscreen');
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Clear the data-id when closing
            lightboxImage.removeAttribute('data-id');
        }, 300);
    }
}

// ===== TESTIMONIALS FUNCTIONALITY =====
function setupTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (testimonials.length === 0 || !prevBtn || !nextBtn) return;

    // Initialize first testimonial
    showTestimonial(0);

    // Auto-rotate testimonials
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
        resetTestimonialInterval();
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
        resetTestimonialInterval();
    });

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function resetTestimonialInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Pause testimonials when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(testimonialInterval);
        } else {
            resetTestimonialInterval();
        }
    });
}



// ===== SCROLL EFFECTS =====
function setupScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-title, .about-content, .contact-content, .gallery-preview');
    animateElements.forEach(el => observer.observe(el));

    // Scroll effects handled via CSS background-attachment for performance
}


// ===== LAZY LOADING =====
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== ANIMATIONS =====
function setupAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-10px) scale(1.02);
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);

    // Staggered animation for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===== I18N (EN/FA) =====
function setupI18n() {
    const translations = {
        en: {
            'brand.name': 'Linda Martinez',
            'nav.home': 'Home',
            'nav.gallery': 'Gallery',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'hero.title': 'Where Art Meets <span class="highlight">Imagination</span>',
            'hero.subtitle': 'Professional Painter & Graphic Designer creating visual stories that inspire and captivate',
            'hero.viewGallery': 'View Gallery',
            'hero.aboutMe': 'About Me',
            'featured.title': 'Featured Works',
            'featured.item1.title': 'Ocean Dreams',
            'featured.item1.tech': 'Acrylic on Canvas',
            'featured.item2.title': 'Digital Symphony',
            'featured.item2.tech': 'Digital Illustration',
            'featured.item3.title': 'Urban Portrait',
            'featured.item3.tech': 'Charcoal on Paper',
            'gallery.title': 'Portfolio Gallery',
            'filters.all': 'All',
            'filters.realism': 'Realism',
            'filters.digital': 'Digital Art',
            'filters.oil': 'Oil Painting',
            'filters.abstract': 'Abstract',
            'about.title': 'About the Artist',
            'about.intro': 'Welcome to my creative world where every brushstroke tells a story and every design breathes life into imagination.',
            'about.education': 'Education',
            'about.experience': 'Experience',
            'about.education.hschool': 'Art Vocational High School (Diploma)',
            'about.education.bachelor': 'Bachelor of Arts (Graphic Design)',
            'about.education.master': 'Master of Fine Arts (Visual Arts)',
            'about.experience.text': '15+ years of professional experience in both traditional and digital art, with works featured in galleries across the country and collaborations with major brands.',
            'about.recognition.text': 'Winner of the International Art Excellence Award 2023<br> Featured in Art & Design Magazine\'s "Rising Artists" issue',
            'about.recognition': 'Recognition',
            'about.quote': '"Art is not what you see, but what you make others see. Through my work, I strive to create visual experiences that connect people to emotions they never knew they had."',
            'about.quoteAuthor': '— Linda Martinez',
            'about.certificates': 'Professional Certificates',
            'about.certificates.c1': 'Digital Painting Certificate — SkillUp Academy (2022)',
            'about.certificates.c2': 'Graphic Design Bootcamp — DesignLab (2021)',
            'about.certificates.c3': 'UI/UX Design Intensive — Online Program (2020)',
            'testimonials.title': 'What People Say',
            'testimonials.t1': "Linda's work is simply breathtaking. Her ability to capture emotion through color and form is unmatched. Working with her was an absolute pleasure.",
            'testimonials.t1_name': 'Sarah Mitchell',
            'testimonials.t1_role': 'Gallery Director, Modern Art Gallery',
            'testimonials.t2': "The digital illustrations Linda created for our brand campaign exceeded all expectations. Her creative vision brought our concepts to life in ways we never imagined.",
            'testimonials.t2_name': 'John Davis',
            'testimonials.t2_role': 'Creative Director, Design Studio',
            'testimonials.t3': "As a collector, I've seen many artists' work, but Linda's paintings have a unique quality that speaks directly to the soul. Each piece tells a story.",
            'testimonials.t3_name': 'Emily Liu',
            'testimonials.t3_role': 'Art Collector',
            'contact.title': "Let's Create Together",
            'contact.intro': "Ready to bring your vision to life? I'd love to hear about your project and discuss how we can collaborate to create something extraordinary.",
            'contact.email': 'Email',
            'contact.phone': 'Phone',
            'contact.instagram': 'Instagram',
            'contact.linkedin': 'LinkedIn',

            'lightbox.techniqueLabel': 'Technique',
            'lightbox.createdLabel': 'Created',
            'lightbox.sizeLabel': 'Size',
            'lightbox.priceLabel': 'Price',
            'lightbox.contactForPrice': 'Contact for price'
        },
        fa: {
            'brand.name': 'لیندا مارتینز',
            'nav.home': 'خانه',
            'nav.gallery': 'گالری',
            'nav.about': 'درباره',
            'nav.contact': 'تماس',
            'hero.title': 'جایی که هنر با <span class="highlight">تخیل</span> تلاقی می0F462F',
            'hero.subtitle': 'نقاش و طراح گرافیک؛ خلق داستان532D4727CC بصری الهام282E34 و تاثیرگذار',
            'hero.viewGallery': 'مشاهده گالری',
            'hero.aboutMe': 'درباره من',
            'featured.title': ' آثار منتخب',
            'featured.item1.title': 'رؤیای اقیانوس',
            'featured.item1.tech': 'اکرلیک روی بوم',
            'featured.item2.title': 'سمفونی دیجیتال',
            'featured.item2.tech': 'تصویرسازی دیجیتال',
            'featured.item3.title': 'پرتره شهری',
            'featured.item3.tech': 'زغال روی کاغذ',
            'gallery.title': 'گالری آثار',
            'filters.all': 'همه',
            'filters.realism': 'رئالیسم',
            'filters.digital': 'هنر دیجیتال',
            'filters.oil': ' رنگ روغن',
            'filters.abstract': '抽象',
            'about.title': 'درباره هنرمند',
            'about.education': 'تحصیلات',
            'about.experience': 'تجربه',
            'about.education.hschool': 'هنرستان هنرهای زیبا (دیپلم)',
            'about.education.bachelor': 'کارشناسی طراحی گرافیک (دانشگاه)',
            'about.education.master': 'کارشناسی‌ارشد هنرهای تجسمی (دانشگاه)',
            'about.experience.text': 'بیش از ۱۵ سال تجربه حرفه‌ای در هنر سنتی و دیجیتال، با نمایش آثار در گالری‌های سراسر کشور و همکاری با برندهای مطرح.',
            'about.recognition.text': 'برنده جایزه بین‌المللی برتری هنر۲۰۲۳ معرفی‌شده در شماره «هنرمندان نوظهور» مجله Art & Design',
            'about.recognition': 'افتخارات',
            'about.quote': '"هنر آن چیزی نیست که می28CC46CC2F، بلکه چیزی است که دیگران را به دیدن آن وا می2F2731CC2F. من در آثارم میA483445 تجربه27CC بصری بیافرینم که انسان4727 را به احساساتی پیوند زند که هرگز نمی3446272E2A462F."',
            'about.quoteAuthor': '— لیندا مارتینز',
            'about.certificates': 'مدارک غیر دانشگاهی',
            'about.certificates.c1': 'گواهی دیجیتال پینتینگ — SkillUp (۲۰۲۲)',
            'about.certificates.c2': 'بوت‌کمپ طراحی گرافیک — DesignLab (۲۰۲۱)',
            'about.certificates.c3': 'دوره فشرده UI/UX — آنلاین (۲۰۲۰)',
            'testimonials.title': 'نظر مخاطبان',
            'testimonials.t1': 'کارهای لیندا واقعاً نفسdeAFCC3AACC46CC است. توانایی او در به تصویر کشیدن احساس با رنگ و فرم بیCC46CC46CC46CC46CC46CC46CC46CC46CC نظیر است. همکاری با او کاملاً لذت2FA9CC2F بود.',
            'testimonials.t1_name': 'سارا میچل',
            'testimonials.t1_role': 'مدیر گالری، موزه هنر مدرن',
            'testimonials.t2': 'تصویرسازی cهای دیجیتال لیندا برای کمپین برند ما فراتر از انتظار بود. دید خلاقانه cاش مفاهیم ما را به شکلی که هرگز تصور نمی cکردیم جان بخشید.',
            'testimonials.t2_name': 'جان دیویس',
            'testimonials.t2_role': 'مدیر خلاقیت، استودیو دیزاین',
            'testimonials.t3': 'به cعنوان یک کلکسیونر، آثار بسیاری دیده cام، اما نقاشی cهای لیندا کیفیتی منحصربه cفرد دارد که مستقیماً با روح سخن می cگوید. هر اثر داستانی دارد.',
            'testimonials.t3_name': 'امیلی لیو',
            'testimonials.t3_role': 'کلکسیونر هنر',
            'contact.title': 'بیایید با هم خلق کنیم',
            'contact.intro': 'آماده27CC2F تا به ایده4727CC خود جان بدهید؟ خوشحال می344845 درباره پروژه2A2746 بشنوم و برای خلق چیزی شگفت2746AFCC32 همکاری کنیم.',
            'contact.email': 'ایمیل',
            'contact.phone': 'تلفن',
            'contact.instagram': 'اینستاگرام',
            'contact.linkedin': 'لینکدین',

            'lightbox.techniqueLabel': 'تکنیک',
            'lightbox.createdLabel': 'تاریخ خلق',
            'lightbox.sizeLabel': 'ابعاد',
            'lightbox.priceLabel': 'قیمت',
            'lightbox.contactForPrice': 'برای قیمت تماس بگیرید'
        }
    };

    // Expose translations helper and fix Persian copy with clean overrides
    const faOverrides = {
        'hero.title': 'جایی که هنر با <span class="highlight">تخیل</span> تلاقی می‌کند',
        'hero.subtitle': 'نقاش و طراح گرافیک؛ خلق داستان‌های بصری الهام‌بخش و تأثیرگذار',
        'featured.item1.tech': 'اکریلیک روی بوم',
        'filters.abstract': 'انتزاعی',
        'about.intro': 'به دنیای خلاقانه من خوش آمدید ; من لیندا مارتینز هستم , نقاش و طراح گرافیک از بچگی عاشق بازی با رنگ بودم و الان یک نقاش هستم اینجا جایی است که هر ضربه قلم مو داستانی میگوید و هر طراحی جان بخشی به تخیل است ',
        'about.quote': '«هنر آن چیزی نیست که می‌بینید، بلکه چیزی است که دیگران را به دیدن آن وامی‌دارید. در آثارم می‌کوشم تجربه‌های بصری بیافرینم که آدم‌ها را به احساساتی پیوند دهد که هرگز نمی‌شناختند.»',
        'testimonials.t1': 'کارهای لیندا واقعاً نفس‌گیر است. توانایی او در به تصویر کشیدن احساس با رنگ و فرم بی‌نظیر است. همکاری با او کاملاً لذت‌بخش بود.',
        'testimonials.t1_role': 'مدیر گالری، گالری هنر مدرن',
        'testimonials.t2': 'تصویرسازی‌های دیجیتال لیندا برای کمپین برند ما فراتر از انتظار بود. دید خلاقانه‌اش مفاهیم ما را به شکلی که هرگز تصور نمی‌کردیم جان بخشید.',
        'testimonials.t3': 'به‌عنوان یک کلکسیونر، آثار بسیاری دیده‌ام، اما نقاشی‌های لیندا کیفیتی منحصربه‌فرد دارد که مستقیماً با روح سخن می‌گوید. هر اثر داستانی دارد.',
        'contact.intro': 'آماده‌اید به ایده‌های خود جان بدهید؟ خوشحال می‌شوم دربارهٔ پروژه‌تان بشنوم و برای خلق چیزی شگفت‌انگیز همکاری کنیم.',


        'a11y.skip': 'رفتن به محتوای اصلی'
    };

    // Add new English keys used by form and accessibility
    Object.assign(translations.en, {


        'a11y.skip': 'Skip to main content',
        'footer.copyright': ' Linda Martinez. All rights reserved. | Designed by Ali Saei.'
    });

    if (translations.fa) {
        Object.assign(translations.fa, faOverrides);
        Object.assign(translations.fa, {
            'footer.copyright': '   "Ali.Saei" لیندا مارتینز. کلیه حقوق محفوظ است | طراحی شده توسط '
        });
    }

    // Make i18n accessible to other modules
    window.__i18n = {
        translations,
        getDict: (lang) => (translations[lang || document.documentElement.lang] || translations.en)
    };

    const savedLang = localStorage.getItem('lang') || 'fa';
    applyLanguage(savedLang);

    const toggleBtnDesktop = document.getElementById('lang-toggle');
    const toggleBtnMobile = document.getElementById('lang-toggle-mobile');

    function setToggleLabels(lang) {
        const label = lang === 'en' ? 'FA' : 'EN';
        if (toggleBtnDesktop) toggleBtnDesktop.textContent = label;
        if (toggleBtnMobile) toggleBtnMobile.textContent = label;
    }

    function toggleLanguage() {
        const current = document.documentElement.lang === 'fa' ? 'fa' : 'en';
        const next = current === 'en' ? 'fa' : 'en';
        applyLanguage(next);
        localStorage.setItem('lang', next);
        setToggleLabels(next);
    }

    setToggleLabels(savedLang);
    if (toggleBtnDesktop) toggleBtnDesktop.addEventListener('click', toggleLanguage);
    if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', () => {
        toggleLanguage();
        // Close mobile menu after toggling language
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.en;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const type = el.getAttribute('data-i18n-type');
            const value = dict[key] || translations.en[key] || '';
            if (type === 'html') {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // Update dynamic labels if lightbox is open
        const techniqueEl = document.getElementById('lightbox-technique');
        const dateEl = document.getElementById('lightbox-date');
        const priceEl = document.getElementById('lightbox-price');
        if (techniqueEl && techniqueEl.textContent) {
            const techText = techniqueEl.textContent.split(': ').pop();
            techniqueEl.textContent = `${dict['lightbox.techniqueLabel'] || 'Technique'}: ${techText}`;
        }
        if (dateEl && dateEl.textContent) {
            const parts = dateEl.textContent.split('|');
            if (parts.length === 2) {
                const createdVal = parts[0].split(':').pop().trim();
                const sizeVal = parts[1].split(':').pop().trim();
                dateEl.textContent = `${dict['lightbox.createdLabel'] || 'Created'}: ${createdVal} | ${dict['lightbox.sizeLabel'] || 'Size'}: ${sizeVal}`;
            }
        }
        if (priceEl) {
            const imgEl = document.getElementById('lightbox-image');
            const idStr = imgEl ? imgEl.getAttribute('data-id') : null;
            if (idStr) {
                const aw = artworkData.find(it => it.id === parseInt(idStr));
                if (aw) {
                    const pVal = lang === 'fa'
                        ? (aw.price_fa || (dict['lightbox.contactForPrice'] || 'برای قیمت تماس بگیرید'))
                        : (aw.price_en || (dict['lightbox.contactForPrice'] || 'Contact for price'));
                    priceEl.textContent = `${dict['lightbox.priceLabel'] || 'Price'}: ${pVal}`;
                }
            }
        }

        // Update skip link if present
        const skip = document.querySelector('a.sr-only[data-i18n="a11y.skip"]');
        if (skip) {
            skip.textContent = dict['a11y.skip'] || translations.en['a11y.skip'];
        }

        // Refresh gallery contents so cards reflect current language
        try {
            const activeFilterBtn = document.querySelector('.filter-btn.active');
            const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
            const galleryGrid = document.getElementById('gallery-grid');
            if (galleryGrid) {
                // Reuse populateGallery if available in scope
                if (typeof populateGallery === 'function') {
                    populateGallery(currentFilter);
                } else if (typeof window.__refreshGallery === 'function') {
                    window.__refreshGallery(currentFilter);
                }
            }
        } catch (e) {}
    }
}

// ===== SOCIAL SHARING =====

// ===== PERFORMANCE OPTIMIZATION =====
function optimizePerformance() {
    // Preload critical images
    const criticalImages = [
        'asset/img/sunset-painting-1920-x-1080-wallpaper-sb3w3l5o7vhsrni2.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });

    
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.position = 'absolute';
    skipLink.style.top = '-40px';
    skipLink.style.left = '6px';
    skipLink.style.zIndex = '10000';
    skipLink.style.padding = '8px 16px';
    skipLink.style.background = 'var(--accent-blue)';
    skipLink.style.color = 'white';
    skipLink.style.textDecoration = 'none';
    skipLink.style.borderRadius = '4px';
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }

    // Keyboard navigation for gallery
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.style.display === 'block') {
                e.preventDefault();
                // Navigate through gallery items
                const imgEl = document.getElementById('lightbox-image');
                const currentId = parseInt((imgEl && imgEl.getAttribute('data-id')) || '1');
                const currentIndex = artworkData.findIndex(item => item.id === currentId);
                let newIndex;
                
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : artworkData.length - 1;
                } else {
                    newIndex = currentIndex < artworkData.length - 1 ? currentIndex + 1 : 0;
                }
                
                const artwork = artworkData[newIndex];
                if (typeof window.__openLightbox === 'function') {
                    window.__openLightbox(artwork);
                }
            }
        }
    });
}

// ===== INITIALIZE ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
    optimizePerformance();
    enhanceAccessibility();
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // You could send error reports to a logging service here
});

// ===== SERVICE WORKER REGISTRATION (Optional) =====

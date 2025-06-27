// ヘッダーのスクロール制御
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// スクロールアニメーション
const fadeElements = document.querySelectorAll('.vision-card, .service-card, .about-item');

const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// フォーム送信のデモ処理
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn');
        const originalText = btn.textContent;
        
        btn.textContent = '送信中...';
        btn.disabled = true;
        
        // デモ用の遅延
        setTimeout(() => {
            alert('お問い合わせありがとうございます。\n※これはデモ用の応答です。');
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
} 
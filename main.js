// [1] محرك الأتمتة - جلب المقالات من الـ Admin
async function loadBlogPosts() {
    const grid = document.getElementById('posts-grid');
    // هنا غانزيدو الكود اللي كيقرا ملفات الـ Markdown من بعد
    console.log("Automation active: checking for new posts...");
}

// [2] أداة حساب الميزانية (Budget Tool) - اللي طلبات الذاكرة ديالك
function calculateSplit(total, people) {
    return total / people;
}

// [3] تبديل اللغات وتغيير محتوى الصفحة
function switchLanguage(lang) {
    const translations = {
        'ar': { title: "أهلاً بكم في سيدي موسى", desc: "اكتشف أسرار المحيط" },
        'en': { title: "Welcome to Sidi Moussa", desc: "Discover Ocean Secrets" },
        'fr': { title: "Bienvenue à Sidi Moussa", desc: "Découvrez les secrets" }
        // ... نزيدو الباقي (ES, DE, NL)
    };
    
    if(translations[lang]) {
        document.querySelector('.blog-hero h1').innerText = translations[lang].title;
        document.querySelector('.blog-hero p').innerText = translations[lang].desc;
    }
}

// [4] تشغيل كاع الأدوات ملي الصفحة كتوجد
window.onload = () => {
    loadBlogPosts();
    
    // ربط قائمة اللغات بالسكريبت
    const langSelect = document.getElementById('langSelect');
    if(langSelect) {
        langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));
    }
};

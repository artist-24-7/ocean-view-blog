// [1] محرك الأتمتة - جلب المقالات
async function loadBlogPosts() {
    const grid = document.getElementById('posts-grid');
    console.log("Automation active: Monitoring Ocean View Posts...");
}

// [2] أداة حساب الميزانية
function calculateSplit(total, people) {
    return total / people;
}

// [3] تبديل اللغات (مطور باش يترجم العناوين الكبيرة)
function switchLanguage(lang) {
    const translations = {
        'ar': { title: "أهلاً بكم في سيدي موسى", desc: "اكتشف أسرار المحيط وحضارة دكالة" },
        'en': { title: "Welcome to Sidi Moussa", desc: "Discover Ocean Secrets & Doukkala Culture" },
        'fr': { title: "Bienvenue à Sidi Moussa", desc: "Découvrez les secrets de l'océan" },
        'nl': { title: "Welkom in Sidi Moussa", desc: "Ontdek de geheimen van de oceaan" },
        'es': { title: "Bienvenido a Sidi Moussa", desc: "Descubre los secretos del océano" },
        'de': { title: "Willkommen in Sidi Moussa", desc: "Entdecken Sie die Geheimnisse des Ozeans" }
    };
    
    if(translations[lang]) {
        const heroTitle = document.querySelector('.blog-hero h1');
        const heroDesc = document.querySelector('.blog-hero p');
        if(heroTitle) heroTitle.innerText = translations[lang].title;
        if(heroDesc) heroDesc.innerText = translations[lang].desc;
        
        // حفظ اللغة المختارة
        localStorage.setItem('selectedLang', lang);
    }
}

// [4] تشغيل الأدوات
window.onload = () => {
    loadBlogPosts();
    
    const langSelect = document.getElementById('langSelect');
    if(langSelect) {
        // استرجاع آخر لغة كانت مختارة
        const savedLang = localStorage.getItem('selectedLang') || 'ar';
        langSelect.value = savedLang;
        switchLanguage(savedLang);

        langSelect.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
        });
    }
};

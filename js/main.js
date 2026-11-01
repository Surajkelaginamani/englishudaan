/**
 * English Udaan — Main Controller
 * Handles Bilingual Translation (EN / UR), iOS Coming Soon Modal,
 * Frosted Glass Navbar Transitions, and Smooth GSAP Entrances.
 */

(function () {
  'use strict';

  // =========================================================================
  // BILINGUAL TRANSLATION DICTIONARY (English & Urdu)
  // =========================================================================
  const translations = {
    en: {
      navSubtitle: 'Urdu → English',
      navHome: 'Home',
      navFeatures: 'Features',
      navScreens: 'App Preview',
      navHowItWorks: 'How It Works',
      navAbout: 'About',
      navDownload: 'Download App',
      heroBadge: 'Official Mobile Launch · Urdu to English',
      heroTitle1: 'Your English Journey.',
      heroTitle2: 'Elevated.',
      heroSubtitle: 'Discover a smarter, more engaging way to learn English through Urdu. Build your vocabulary, master pronunciation, practise with interactive lessons, and track your progress — all in one beautifully designed app.',
      ctaGetOn: 'Get it on',
      ctaAndroid: 'Google Play',
      ctaDownloadOn: 'Download on the',
      ctaiOS: 'App Store',
      badgeSoon: 'Soon',
      heroTagline: 'Your journey to confident, fluent English starts right here.',
      metric1: 'Alphabet & Phonetics',
      metric2: 'Words & Meanings',
      metric3: 'Interactive Learning',
      badgeAppTitle: 'English Udaan',
      badgeAppSubtitle: 'Urdu → English',
      floatCardTitle: 'Daily Progress',
      floatCardSub: 'Alphabet · Words · Pictures',
      floatCloudSync: 'Cloud Synced & Ready',
      introBadge: 'Integrated Learning Ecosystem',
      introTitle1: 'Everything you need to',
      introTitle2: 'grow your English.',
      introSubtitle: 'Designed specifically for Urdu speakers, English Udaan bridges the gap between everyday native vocabulary and fluent English speech through a structured, multi-sensory curriculum.',
      mod1Title: 'English Alphabet',
      mod1Desc: 'Letters A to Z with native audio pronunciation, phonetic guide, and letter stroke understanding built from ground up.',
      mod1Pill: 'Letters A to Z & Phonetics',
      mod2Title: 'Learn Words & Vocabulary',
      mod2Desc: 'Curated high-frequency English vocabulary paired with contextual Urdu translations, grammatical roles, and real sentences.',
      mod2Pill: 'Useful words, meanings & examples',
      mod3Title: 'Learn with Pictures',
      mod3Desc: 'Visual mnemonics covering fruits, vegetables, animals, and household objects. Boost recall through visual imagery.',
      mod3Pill: 'Fruits, vegetables & animals',
      mod4Title: 'Sentences & Paragraphs',
      mod4Desc: 'Transition from single words into confident full expressions, conversational dialogues, and structured situational English.',
      mod4Pill: 'Day-to-day conversation flow',
      mod5Title: 'Interactive Practice & Quizzes',
      mod5Desc: 'Reinforce retention with quick quizzes, word-picture matching, spelling tests, and instant answers with explanations.',
      mod5Pill: 'Test your active memory',
      mod6Title: 'Progress & Cloud Sync',
      mod6Desc: 'Track your streak, completed lessons, and word counts. Seamless Google sign-in keeps your progress safe across devices.',
      mod6Pill: 'Never lose a single day\'s study',
      feat1Tag: 'Module 01 · Foundations',
      feat1Title1: 'Master English from the',
      feat1Title2: 'very first letter.',
      feat1Desc: 'Building strong English begins with true phonetics. English Udaan guides Urdu learners through every alphabet character, pairing English sounds with corresponding Urdu phonetic guides for flawless pronunciation.',
      feat1Bullet1: 'Comprehensive A to Z alphabet guide with uppercase and lowercase clarity',
      feat1Bullet2: 'Clear audio pronunciation demonstrating natural mouth and tongue positioning',
      feat1Bullet3: 'Phonetic bridge mapped directly to Urdu vocal equivalents',
      feat2Tag: 'Module 02 · Visual Learning',
      feat2Title1: 'See it. Connect it.',
      feat2Title2: 'Never forget it.',
      feat2Desc: 'Our brains process visual memory 60,000 times faster than raw text. English Udaan pairs everyday items — fruits, vegetables, animals, and surroundings — with rich imagery and dual Urdu-English pronunciation.',
      feat2Bullet1: 'Themed picture categories: food, nature, objects, family, and professions',
      feat2Bullet2: 'High visual retention without mental fatigue or cumbersome rote drilling',
      feat2Bullet3: 'Interactive flashcard tap-to-flip mode for self-testing',
      feat3Tag: 'Module 03 · Application & Fluency',
      feat3Title1: 'From single words to',
      feat3Title2: 'confident conversation.',
      feat3Desc: 'Learn how words combine naturally into sentences and full conversations. Test your knowledge with fun interactive quizzes, earn XP, and sync your study stats effortlessly to the cloud.',
      feat3Bullet1: 'Daily situational sentences for shopping, travel, work, and family',
      feat3Bullet2: 'Smart quizzes with instant correct/incorrect feedback & explanations',
      feat3Bullet3: 'Cloud synchronization that preserves your learning history anywhere',
      previewBadge: 'The Mobile Interface',
      previewTitle1: 'Designed for a distraction-free',
      previewTitle2: 'learning flow.',
      previewSubtitle: 'Experience dark mode elegance built with modern Flutter architecture. Simple navigation tabs let you effortlessly switch between Home, Learn, Practice, Progress, and Profile.',
      flow1Title: 'Start Your Journey',
      flow1Desc: 'Clean welcoming dashboard with inspirational daily study prompts.',
      flow2Title: 'Bite-Sized Lessons',
      flow2Desc: 'Structured cards that take 5 to 10 minutes a day to complete with confidence.',
      flow3Title: 'Visual Pictures',
      flow3Desc: 'Fruits, animals, and objects paired with phonetic sounds and Urdu terms.',
      flow4Title: 'Full Sentences',
      flow4Desc: 'Real world grammar and conversation flow designed for everyday fluency.',
      hiwBadge: 'Simple 3-Step Journey',
      hiwTitle1: 'Your journey starts with',
      hiwTitle2: 'three simple steps.',
      hiwSubtitle: 'Fluency does not require hours of exhausting study. A consistent 10-minute daily habit with English Udaan transforms your speech.',
      step1Title: '1. Get the App',
      step1Desc: 'Download English Udaan on your Android or iOS smartphone. Sign in with Google to enable cloud synchronization instantly.',
      step2Title: '2. Learn & Practise',
      step2Desc: 'Explore alphabet sounds, master everyday vocabulary words, and memorize through rich picture flashcards and interactive quizzes.',
      step3Title: '3. Speak with Pride',
      step3Desc: 'Track your streak, watch your active vocabulary multiply, and speak fluent English in daily life, work, and study with total confidence.',
      ctaBadge: 'Start Today · مفت شروع کریں',
      ctaTitle1: 'Your next chapter starts with',
      ctaTitle2: 'English Udaan.',
      ctaDesc: 'Start building your English skills with English Udaan. Available now for Android, and launching soon for iOS.',
      storeNotice: 'Official store distribution is active. Configurable package download ready.',
      footerBio: 'Empowering Urdu speakers across the world to master English effortlessly. With alphabet phonetics, vocabulary, visual lessons, and cloud synchronization.',
      footerNavTitle: 'Navigation',
      footerLegalTitle: 'Legal & Contact',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      footerRights: 'All rights reserved.',
      footerMadeWith: 'Crafted for Urdu to English Learners',
      modalBadge: 'Coming Soon',
      modalTitle: 'English Udaan for iOS',
      modalDesc: 'We are currently putting the final touches on our Apple App Store release. Get ready for an exceptional, fluid learning experience crafted for iPhone & iPad.',
      modalGotIt: 'Got It / سمجھ گئے'
    },
    ur: {
      navSubtitle: 'اردو سے انگریزی',
      navHome: 'صفحہ اول',
      navFeatures: 'خصوصیات',
      navScreens: 'ایپ کا جائزہ',
      navHowItWorks: 'طریقہ کار',
      navAbout: 'تعارف',
      navDownload: 'ایپ ڈاؤن لوڈ کریں',
      heroBadge: 'باقاعدہ موبائل لانچ · اردو سے انگریزی',
      heroTitle1: 'آپ کا انگریزی کا سفر۔',
      heroTitle2: 'اب ایک نئی پرواز۔',
      heroSubtitle: 'اردو بولنے والوں کے لیے انگریزی سیکھنے کا جدید اور پُراثر طریقہ۔ حروفِ تہجی، نئے الفاظ، تصاویر اور روزمرہ جملوں کی مشق ایک ہی خوبصورت ایپ میں۔',
      ctaGetOn: 'ڈاؤن لوڈ کریں',
      ctaAndroid: 'گوگل پلے',
      ctaDownloadOn: 'دستیاب برائے',
      ctaiOS: 'ایپ اسٹور',
      badgeSoon: 'جلد',
      heroTagline: 'اعتماد کے ساتھ انگریزی بولنے کا سفر آج سے شروع کریں۔',
      metric1: 'حروف تہجی اور تلفظ',
      metric2: 'الفاظ اور معانی',
      metric3: 'انٹرایکٹو اسباق',
      badgeAppTitle: 'انگلش اڑان',
      badgeAppSubtitle: 'اردو سے انگریزی',
      floatCardTitle: 'روزانہ پیش رفت',
      floatCardSub: 'حروف · الفاظ · تصاویر',
      floatCloudSync: 'کلاؤڈ سنک فعال ہے',
      introBadge: 'جامع تعلیمی نظام',
      introTitle1: 'انگریزی میں روانی کے لیے',
      introTitle2: 'ہر بنیادی و اہم سبق۔',
      introSubtitle: 'خاص طور پر اردو بولنے والوں کے لیے تیار کردہ۔ انگریزی الفاظ، جملے اور درست تلفظ سیکھیں اور خود اعتمادی سے بات کریں۔',
      mod1Title: 'انگریزی حروفِ تہجی',
      mod1Desc: 'A سے Z تک تمام حروف، درست صوتی تلفظ اور اردو ترجمانی کے ساتھ مکمل بنیادی رہنمائی۔',
      mod1Pill: 'A تا Z حروف اور صوتی تلفظ',
      mod2Title: 'الفاظ کا ذخیرہ اور معانی',
      mod2Desc: 'روزمرہ استعمال ہونے والے اہم انگریزی الفاظ، ان کے اردو معانی اور عملی جملوں میں استعمال۔',
      mod2Pill: 'مفید الفاظ، معانی اور مثالیں',
      mod3Title: 'تصویروں کے ذریعے سیکھیں',
      mod3Desc: 'پھل، سبزیاں، جانور اور اشیاء تصاویر کی مدد سے دیکھ کر سمجھیں تاکہ ذہن میں دیرپا نقش رہیں۔',
      mod3Pill: 'پھل، سبزیاں، جانور اور اشیاء',
      mod4Title: 'جملے اور پیراگراف کی تشکیل',
      mod4Desc: 'الفاظ سے مکمل جملوں کی طرف پیش رفت۔ روزمرہ مکالمات اور گفتگو کے بہترین نمونے۔',
      mod4Pill: 'روزمرہ گفتگو کے جملے',
      mod5Title: 'مشق اور دلچسپ کوئز',
      mod5Desc: 'فوری کوئز، تصویر و الفاظ کے جوڑ اور خود تشخیصی مشقیں جو آپ کی یادداشت کو مضبوط بنائیں۔',
      mod5Pill: 'اپنی صلاحیت کو آزمائیں',
      mod6Title: 'پیش رفت اور کلاؤڈ سنک',
      mod6Desc: 'مکمل کیے گئے اسباق، الفاظ کی تعداد اور روزانہ کی مسلسل پیش رفت کلاؤڈ پر محفوظ رکھیں۔',
      mod6Pill: 'آپ کا ریکارڈ ہمیشہ محفوظ',
      feat1Tag: 'ماڈیول 01 · بنیاد',
      feat1Title1: 'انگریزی کا آغاز کریں',
      feat1Title2: 'پہلے ہی حرف سے۔',
      feat1Desc: 'درست انگریزی کی بنیاد صحیح تلفظ سے بنتی ہے۔ انگلش اڑان اردو بولنے والوں کو ہر حرف کی اصل آواز اور اردو صوتی مماثلت کے ساتھ سکھاتی ہے۔',
      feat1Bullet1: 'A تا Z تمام حروف کے بڑے اور چھوٹے اشکال کی واضح پہچان',
      feat1Bullet2: 'صاف اور معیاری صوتی تلفظ جو قدرتی ادائیگی کو آسان بنائے',
      feat1Bullet3: 'اردو حروف کے ذریعے انگریزی آوازوں کی بروقت رہنمائی',
      feat2Tag: 'ماڈیول 02 · بصری تعلیم',
      feat2Title1: 'دیکھیں، سمجھیں،',
      feat2Title2: 'اور ہمیشہ یاد رکھیں۔',
      feat2Desc: 'انسانی دماغ تصاویر کو تحریر کے مقابلے میں تیزی سے محفوظ کرتا ہے۔ انگلش اڑان میں تمام اشیاء کو تصاویر اور اردو ترجمے کے ساتھ پیش کیا گیا ہے۔',
      feat2Bullet1: 'موضوعاتی زمرہ جات: خوراک، قدرت، گھریلو اشیاء اور پیشے',
      feat2Bullet2: 'بغیر کسی الجھن یا بوجھ کے خودکار طریقے سے ذہن نشین ہونا',
      feat2Bullet3: 'فلیش کارڈز کے ذریعے فوری خود تشخیصی سہولت',
      feat3Tag: 'ماڈیول 03 · گفتگو اور روانی',
      feat3Title1: 'الفاظ کے ذخیرے سے',
      feat3Title2: 'پراعتماد گفتگو تک۔',
      feat3Desc: 'سیکھیں کہ الفاظ مل کر جملے کیسے بناتے ہیں۔ پرلطف کوئز حل کریں اور اپنی محنت کا ریکارڈ کلاؤڈ پر محفوظ رکھیں۔',
      feat3Bullet1: 'خریداری، سفر، کام اور عام زندگی کے لیے ضروری جملے',
      feat3Bullet2: 'فوری درست/غلط کی نشاندہی اور آسان وضاحت کے ساتھ کوئز',
      feat3Bullet3: 'کلاؤڈ سنک جو آپ کا مطالعہ ہر جگہ برقرار رکھے',
      previewBadge: 'موبائل ایپلیکیشن انٹرفیس',
      previewTitle1: 'مکمل توجہ اور یکسوئی کے ساتھ',
      previewTitle2: 'سیکھنے کا تجربہ۔',
      previewSubtitle: 'جدید ڈارک موڈ میں ڈیزائن کردہ فلوٹر انٹرفیس۔ ہوم، لرن، پریکٹس اور پروگریس میں باآسانی نیویگیشن کریں۔',
      flow1Title: 'سفر کا آغاز',
      flow1Desc: 'خوبصورت ڈیش بورڈ جہاں روزانہ کی تعلیمی ترغیب ملتی ہے۔',
      flow2Title: 'مختصر اور آسان اسباق',
      flow2Desc: 'روزانہ صرف 5 سے 10 منٹ کا وقت دیں اور روانی حاصل کریں۔',
      flow3Title: 'تصویری اسباق',
      flow3Desc: 'پھل، جانور اور اشیاء آواز اور اردو معانی کے ساتھ۔',
      flow4Title: 'مکمل جملے',
      flow4Desc: 'روزمرہ بات چیت کے لیے تیار کردہ حقیقی جملے اور قواعد۔',
      hiwBadge: 'آسان 3 مرحلہ وار سفر',
      hiwTitle1: 'آپ کا سفر شروع ہوتا ہے',
      hiwTitle2: 'تین آسان مراحل سے۔',
      hiwSubtitle: 'انگریزی سیکھنا اب مشکل نہیں۔ روزانہ صرف 10 منٹ انگلش اڑان کو دیں اور اپنی گفتگو میں واضح تبدیلی دیکھیں۔',
      step1Title: '1. ایپ ڈاؤن لوڈ کریں',
      step1Desc: 'اپنے اسمارٹ فون پر انگلش اڑان انسٹال کریں اور گوگل کے ذریعے کلاؤڈ سنک فعال کریں۔',
      step2Title: '2. سیکھیں اور مشق کریں',
      step2Desc: 'حروف تہجی، روزمرہ الفاظ، تصویری کارڈز اور کوئز کے ذریعے مشق کریں۔',
      step3Title: '3. اعتماد سے بات کریں',
      step3Desc: 'اپنی پیش رفت پر نظر رکھیں، الفاظ کا ذخیرہ بڑھائیں اور بغیر کسی جھجک کے انگریزی بولیں۔',
      ctaBadge: 'آج ہی شروع کریں · مفت',
      ctaTitle1: 'آپ کے روشن مستقبل کا آغاز',
      ctaTitle2: 'انگلش اڑان کے ساتھ۔',
      ctaDesc: 'انگلش اڑان کے ساتھ انگریزی میں مہارت حاصل کریں۔ اینڈرائیڈ پر دستیاب ہے، اور آئی او ایس پر جلد آ رہا ہے۔',
      storeNotice: 'سرکاری اسٹور پر پیکیج دستیاب ہے۔ ابھی ڈاؤن لوڈ کریں۔',
      footerBio: 'دنیا بھر میں اردو بولنے والوں کے لیے انگریزی میں مہارت کا سب سے قابلِ اعتماد پلیٹ فارم۔',
      footerNavTitle: 'نیویگیشن',
      footerLegalTitle: 'قانونی و رابطہ',
      footerPrivacy: 'رازداری کی پالیسی',
      footerTerms: 'شرائط و ضوابط',
      footerRights: 'جملہ حقوق محفوظ ہیں۔',
      footerMadeWith: 'اردو سے انگریزی سیکھنے والوں کے لیے تیار کردہ',
      modalBadge: 'جلد آ رہا ہے',
      modalTitle: 'انگلش اڑان برائے آئی او ایس',
      modalDesc: 'ہم ایپل ایپ اسٹور ریلیز پر حتمی کام کر رہے ہیں۔ آئی فون اور آئی پیڈ پر ایک شاندار اور ہموار تعلیمی تجربے کے لیے تیار رہیں۔',
      modalGotIt: 'سمجھ گئے / بند کریں'
    }
  };

  let currentLang = 'en';

  // =========================================================================
  // DOM INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Init Lucide Icons
    refreshIcons();

    // 2. Language Setup
    initLanguage();

    // 3. Navigation Setup
    initNavbar();

    // 4. iOS Modal Popup Setup
    initIOSModal();

    // 5. Scroll Animations
    initAnimations();
  });

  function refreshIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  // =========================================================================
  // LANGUAGE SWITCHING (ENGLISH <-> URDU)
  // =========================================================================
  function initLanguage() {
    const saved = localStorage.getItem('eu_lang');
    if (saved === 'ur' || saved === 'en') {
      currentLang = saved;
    }
    applyLanguage(currentLang);

    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ur' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('eu_lang', currentLang);
      });
    }
  }

  function applyLanguage(lang) {
    const html = document.documentElement;
    const label = document.getElementById('currentLangLabel');

    if (lang === 'ur') {
      html.setAttribute('lang', 'ur');
      html.setAttribute('dir', 'rtl');
      html.classList.add('lang-ur');
      if (label) label.textContent = 'English';
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      html.classList.remove('lang-ur');
      if (label) label.textContent = 'اردو';
    }

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = translations[lang] || translations.en;

    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    refreshIcons();
  }

  // =========================================================================
  // NAVBAR & MOBILE MENU
  // =========================================================================
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileIcon = document.getElementById('mobileMenuIcon');

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile menu toggle
    if (mobileBtn && mobileMenu) {
      let isOpen = false;
      mobileBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
          mobileMenu.classList.remove('hidden');
          mobileIcon.setAttribute('data-lucide', 'x');
        } else {
          mobileMenu.classList.add('hidden');
          mobileIcon.setAttribute('data-lucide', 'menu');
        }
        refreshIcons();
      });

      // Close menu when link clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          isOpen = false;
          mobileMenu.classList.add('hidden');
          mobileIcon.setAttribute('data-lucide', 'menu');
          refreshIcons();
        });
      });
    }
  }

  // =========================================================================
  // IOS COMING SOON POPUP MODAL
  // =========================================================================
  function initIOSModal() {
    const modal = document.getElementById('iosModal');
    const closeBtn = document.getElementById('iosModalClose');
    const gotItBtn = document.getElementById('iosModalGotIt');
    const backdrop = document.getElementById('iosModalBackdrop');
    const triggers = document.querySelectorAll('.ios-download-trigger');

    function openModal() {
      if (!modal) return;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (gotItBtn) gotItBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // GSAP SCROLL & ENTRANCE ANIMATIONS (SAFE & ROCK-SOLID)
  // =========================================================================
  function initAnimations() {
    if (typeof gsap === 'undefined') return;

    try {
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Feature items: animate smoothly when scrolled into view
      const featureItems = document.querySelectorAll('.feature-item');
      featureItems.forEach((item) => {
        gsap.from(item, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
      });

    } catch (err) {
      console.warn('Animation notice:', err);
    }
  }

})();

const CONTACT = { whatsapp: "201069991770", email: "abdelhalem.emad.eg@gmail.com" };

const T = {
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.exp": "Experience", "nav.work": "Work", "nav.contact": "Hire me",
    "hero.status": "Available for freelance & full-time roles",
    "hero.hi": "Hi, I'm", "hero.name": "Abdelhalem Emad",
    "hero.lead": "I design and build mobile apps people love to use — from the first wireframe to the App Store. 4.5+ years shipping production Flutter apps with clean architecture and pixel-perfect UI.",
    "hero.cta1": "Start a project", "hero.cta2": "See my work",
    roles: ["Senior Flutter Developer", "UI/UX Designer", "Mobile Architect", "Tech Mentor"],
    "stat.years": "Years experience", "stat.apps": "Live apps shipped", "stat.workshops": "Workshops delivered", "stat.mentored": "Developers mentored",
    "about.p1": "I'm a Senior Flutter Developer and UI/UX designer from Cairo, promoted from Junior to Middle to Senior within the same organization. I care about both sides of a product: how it feels in the user's hand and how it holds up under the hood.",
    "about.p2": "I specialize in Clean Architecture, BLoC and performance optimization across iOS, Android and Flutter Web. I define architecture standards for my team, run technical training and mentor developers through code reviews. I've shipped 7+ live apps across healthcare, security, enterprise and e-commerce.",
    "about.eduT": "Education", "about.edu": "B.Sc. Information Systems — Faculty of Computers & Information, Mansoura University",
    "about.grad": "Graduated 2023 · Graduation project: fingerprint attendance system (Arduino + Flutter) — Excellent",
    "about.langT": "Languages", "about.lang": "Arabic — Native · English — Professional (B2)",
    "about.locT": "Based in", "about.loc": "Cairo, Egypt · Working remotely worldwide",
    "work.sub": "A selection of apps I've built and shipped. All are live on Google Play and the App Store.",
    live: "Live on stores", gallery: "View screenshots", shots: "screens",
    "contact.title": "Let's work together",
    "contact.big": "Have an app idea or a product that needs a better experience?",
    "contact.sub": "Fill in the brief and choose how to send it — WhatsApp or email. The message will open ready, you just hit send.",
    "f.name": "Your name *", "f.company": "Company (optional)", "f.type": "What do you need?",
    "f.budget": "Estimated budget", "f.timeline": "Timeline",
    "f.details": "Project details *", "f.detailsPh": "Tell me about the idea, target users, key features, links or references…",
    "f.via": "Send via", "f.email": "Email", "f.send": "Send request",
    "f.note": "Nothing is stored on this site — your message goes straight to me.",
    "f.err": "Please add your name and a short project description.",
    types: ["Mobile app (Flutter)", "UI/UX design", "Design + development", "Code review / consulting", "Other"],
    budgets: ["Not sure yet", "< $1,000", "$1,000 – $3,000", "$3,000 – $7,000", "$7,000+"],
    timelines: ["Flexible", "< 1 month", "1 – 3 months", "3+ months"],
    msg: { hello: "Hi Abdelhalem 👋 I have a project request:", name: "Name", company: "Company", type: "Service", budget: "Budget", timeline: "Timeline", details: "Details", subject: "New project request from" },
    toTop: "Back to top ↑",
  },
  ar: {
    "nav.about": "عني", "nav.skills": "المهارات", "nav.exp": "الخبرات", "nav.work": "أعمالي", "nav.contact": "اطلب شغل",
    "hero.status": "متاح للعمل الحر والوظائف بدوام كامل",
    "hero.hi": "أهلاً، أنا", "hero.name": "عبدالحليم عماد",
    "hero.lead": "بصمم وببني تطبيقات موبايل الناس تحب تستخدمها — من أول اسكتش لحد ما التطبيق ينزل على المتجر. أكثر من ٤.٥ سنين خبرة في تطبيقات Flutter حقيقية بمعمارية نظيفة وواجهات دقيقة.",
    "hero.cta1": "ابدأ مشروعك", "hero.cta2": "شوف أعمالي",
    roles: ["مطور Flutter أول", "مصمم واجهات وتجربة مستخدم", "معماري تطبيقات موبايل", "مدرّب ومرشد تقني"],
    "stat.years": "سنين خبرة", "stat.apps": "تطبيقات منشورة", "stat.workshops": "ورش عمل", "stat.mentored": "مطور دربتهم",
    "about.p1": "أنا مطور Flutter أول ومصمم واجهات وتجربة مستخدم من القاهرة، اترقيت من Junior لـ Middle لـ Senior في نفس الشركة. بهتم بالجانبين: إحساس التطبيق في إيد المستخدم، وقوته من جوه.",
    "about.p2": "متخصص في Clean Architecture وBLoC وتحسين الأداء على iOS وAndroid وFlutter Web. بحط معايير المعمارية للفريق، وبقدم تدريبات تقنية، وبتابع المطورين من خلال مراجعة الكود. نشرت أكتر من ٧ تطبيقات في مجالات الصحة والأمن والشركات والتجارة الإلكترونية.",
    "about.eduT": "التعليم", "about.edu": "بكالوريوس نظم المعلومات — كلية الحاسبات والمعلومات، جامعة المنصورة",
    "about.grad": "دفعة ٢٠٢٣ · مشروع التخرج: نظام حضور بالبصمة (Arduino + Flutter) — امتياز",
    "about.langT": "اللغات", "about.lang": "العربية — اللغة الأم · الإنجليزية — مستوى مهني (B2)",
    "about.locT": "المكان", "about.loc": "القاهرة، مصر · متاح للعمل عن بعد من أي مكان",
    "work.sub": "مجموعة من التطبيقات اللي بنيتها ونشرتها. كلها متاحة على Google Play وApp Store.",
    live: "متاح على المتاجر", gallery: "عرض صور التطبيق", shots: "شاشات",
    "contact.title": "يلا نشتغل سوا",
    "contact.big": "عندك فكرة تطبيق أو منتج محتاج تجربة استخدام أحسن؟",
    "contact.sub": "املأ تفاصيل المشروع واختار هتبعتها إزاي — واتساب أو إيميل. الرسالة هتفتح جاهزة وانت بس تدوس إرسال.",
    "f.name": "الاسم *", "f.company": "الشركة (اختياري)", "f.type": "محتاج إيه؟",
    "f.budget": "الميزانية التقريبية", "f.timeline": "المدة المتوقعة",
    "f.details": "تفاصيل المشروع *", "f.detailsPh": "احكيلي عن الفكرة، المستخدمين المستهدفين، أهم المميزات، أي روابط أو أمثلة…",
    "f.via": "إرسال عن طريق", "f.email": "الإيميل", "f.send": "إرسال الطلب",
    "f.note": "الموقع مش بيحفظ أي بيانات — رسالتك بتوصلني مباشرة.",
    "f.err": "من فضلك اكتب اسمك ووصف مختصر للمشروع.",
    types: ["تطبيق موبايل (Flutter)", "تصميم UI/UX", "تصميم + برمجة", "مراجعة كود / استشارة", "حاجة تانية"],
    budgets: ["لسه مش متأكد", "أقل من 1,000$", "1,000$ – 3,000$", "3,000$ – 7,000$", "أكتر من 7,000$"],
    timelines: ["مرنة", "أقل من شهر", "١ – ٣ شهور", "أكتر من ٣ شهور"],
    msg: { hello: "أهلاً عبدالحليم 👋 عندي طلب مشروع:", name: "الاسم", company: "الشركة", type: "الخدمة", budget: "الميزانية", timeline: "المدة", details: "التفاصيل", subject: "طلب مشروع جديد من" },
    toTop: "للأعلى ↑",
  },
};

const ICONS = {
  smartphone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  pen: '<path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/>',
  server: '<rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6L4.6 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.5L14 9V3"/><path d="M7 15h10"/>',
  git: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7"/><path d="M18 10.5a6 6 0 0 1-6 6H8.5"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20M6 15h4"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
};
const icon = (n) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

const SKILLS = [
  { icon: "smartphone", en: "Mobile", ar: "الموبايل", tags: ["Flutter", "Flutter Web", "Dart", "Kotlin", "Swift", "Java", "Android SDK", "iOS SDK"] },
  { icon: "pen", en: "UI/UX Design", ar: "تصميم الواجهات وتجربة المستخدم", tags: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive UI", "Clean UI/UX"] },
  { icon: "layers", en: "Architecture", ar: "المعمارية", tags: ["Clean Architecture", "MVVM", "MVC", "MVP", "SOLID", "Design Patterns", "System Design"] },
  { icon: "refresh", en: "State Management", ar: "إدارة الحالة", tags: ["BLoC", "Cubit", "Riverpod", "Provider"] },
  { icon: "server", en: "Backend & APIs", ar: "الباك إند والـ APIs", tags: ["REST", "GraphQL", "WebSockets", "Firebase", "Django REST"] },
  { icon: "flask", en: "Testing", ar: "الاختبارات", tags: ["Unit", "Widget", "Integration", "TDD"] },
  { icon: "git", en: "DevOps & Delivery", ar: "النشر والتسليم", tags: ["CI/CD", "GitHub Actions", "Docker", "Azure DevOps", "Git", "JIRA", "ASO"] },
  { icon: "card", en: "Integrations", ar: "التكاملات", tags: ["Stripe", "PayPal", "PayTabs", "Google Maps", "Platform Channels", "Push Notifications"] },
  { icon: "zap", en: "Specializations", ar: "تخصصات", tags: ["Performance", "Memory Mgmt", "Offline-First", "AI-assisted dev"] },
];

const EXPERIENCE = [
  { current: true, co: "3i-Vision", date: "Jan 2026 – Present", en: "Senior Flutter Developer", ar: "مطور Flutter أول",
    pts: {
      en: ["Define system-design and architecture standards adopted across all team projects.", "Run technical training on Flutter internals, Clean Architecture, SOLID and Design Patterns — ~30% better code quality.", "Mentor junior and mid-level developers through code reviews — ~25% more consistent sprint delivery.", "Own the full mobile SDLC: estimation, CI/CD, App Store / Play Store deployment and ASO."],
      ar: ["وضع معايير تصميم الأنظمة والمعمارية المعتمدة في كل مشاريع الفريق.", "تقديم تدريبات تقنية في Flutter وClean Architecture وSOLID وDesign Patterns — تحسن جودة الكود حوالي ٣٠٪.", "مراجعة الكود وإرشاد المطورين — زيادة انتظام تسليم السبرنتات حوالي ٢٥٪.", "مسؤول عن دورة حياة التطبيق كاملة: التقدير، CI/CD، النشر على المتاجر وASO."] } },
  { co: "3i-Vision", date: "Jan 2023 – Jan 2026", en: "Middle Flutter Developer", ar: "مطور Flutter متوسط",
    pts: {
      en: ["Delivered 5+ Flutter projects across healthcare, security and enterprise — from architecture to release.", "Built reusable Clean Architecture layers adopted as shared infrastructure across apps.", "Shipped 4+ apps end-to-end to Google Play and the App Store on schedule."],
      ar: ["تسليم أكتر من ٥ مشاريع Flutter في الصحة والأمن والشركات — من المعمارية للنشر.", "بناء طبقات Clean Architecture قابلة لإعادة الاستخدام كبنية مشتركة بين التطبيقات.", "نشر أكتر من ٤ تطبيقات كاملة على Google Play وApp Store في مواعيدها."] } },
  { co: "Blue Desk", date: "Jan 2022 – Jan 2023", en: "Junior Flutter Developer", ar: "مطور Flutter مبتدئ",
    pts: {
      en: ["Built 2+ cross-platform apps in e-commerce and agri-tech.", "Applied clean UI/UX and responsive design principles across all projects."],
      ar: ["بناء أكتر من تطبيقين في التجارة الإلكترونية والتكنولوجيا الزراعية.", "تطبيق مبادئ تصميم الواجهات النظيفة والتصميم المتجاوب في كل المشاريع."] } },
  { co: "GDSC Al-Azhar", date: "Aug 2021 – Jul 2022", en: "Flutter Instructor", ar: "مدرّب Flutter",
    pts: {
      en: ["Designed and ran 10+ Flutter workshops, mentoring 20+ students."],
      ar: ["تصميم وتقديم أكتر من ١٠ ورش Flutter وتدريب أكتر من ٢٠ طالب."] } },
];

const PROJECTS = [
  { name: "Green Care", play: "https://play.google.com/store/apps/details?id=com.alian.code.green_care", ios: "https://apps.apple.com/us/app/green-care-jo/id6754806269", dir: "green-care", shots: ["s1.webp", "s2.webp", "s3.webp"], hue: "#3ddc97", tag: "Healthcare",
    en: "Multi-role healthcare platform: appointment scheduling, medication reminders and real-time doctor–patient chat.",
    ar: "منصة رعاية صحية متعددة الأدوار: حجز مواعيد، تذكير بالأدوية، وتواصل لحظي بين الدكتور والمريض." },
  { name: "Habiba Store + Delivery", play: "https://play.google.com/store/apps/details?id=com.dottech.habiba_store", ios: "https://apps.apple.com/us/app/habiba-store/id6739756646", dir: "habiba", shots: ["s1.webp", "s2.webp", "s3.webp", "s4.webp", "s6.webp"], hue: "#ffc53d", tag: "E-commerce",
    en: "Grocery platform with paired Customer and Delivery apps — orders, auth and real-time notifications.",
    ar: "منصة بقالة بتطبيقين للعميل والمندوب — طلبات، تسجيل دخول، وإشعارات لحظية." },
  { name: "Bareeq X", play: "https://play.google.com/store/apps/details?id=com.maharat_alcode.care_wach_customer_app", ios: "https://apps.apple.com/us/app/bareeq-x/id6758412579", dir: "bareeq-x", shots: ["s1.webp", "s2.webp", "s3.webp", "s4.webp", "s5.webp"], hue: "#4cc9f0", tag: "On-demand",
    en: "On-demand car-cleaning with Customer and Provider apps — booking, subscriptions and add-ons.",
    ar: "خدمة غسيل سيارات عند الطلب بتطبيقين للعميل ومقدم الخدمة — حجز، اشتراكات، وإضافات." },
  { name: "Al Wassel", play: "https://play.google.com/store/apps/details?id=com.elwasset.elwasset_app", ios: "https://apps.apple.com/us/app/al-wasel/id6739424688", dir: "al-wassel", shots: ["s1.webp", "s2.webp", "s3.webp", "s4.webp", "s5.webp"], hue: "#d4ff3a", tag: "Marketplace",
    en: "Buy/sell marketplace with advanced search, secure buyer–seller chat and ad-boosting — zero fees.",
    ar: "سوق بيع وشراء ببحث متقدم، شات آمن بين البائع والمشتري، وترويج للإعلانات — بدون عمولة." },
  { name: "3i-Vision AI Security", dir: "3i-vision", shots: ["s1.webp", "s2.jpg", "s3.jpg", "s4.jpg"], play: "https://play.google.com/store/apps/details?id=com.vision.watcharea", ios: "https://apps.apple.com/eg/app/3i-vision/id6670479729", hue: "#ff7a59", tag: "AI · Security",
    en: "Real-time surveillance with AI license-plate and people detection, heavily optimized for video and memory.",
    ar: "مراقبة لحظية بالذكاء الاصطناعي للتعرف على لوحات السيارات والأشخاص، مع تحسين كبير لأداء الفيديو والذاكرة." },
  { name: "DataMind Agent", dir: "datamind", shots: ["s1.webp", "s2.webp", "s3.webp", "s4.webp"], play: "https://play.google.com/store/apps/details?id=com.datamind.agent", ios: "https://apps.apple.com/eg/app/datamind-agent/id6754242027", hue: "#b388ff", tag: "Productivity",
    en: "Intelligent file manager with keyword-based smart classification and full unit/widget test coverage.",
    ar: "مدير ملفات ذكي بيصنف الملفات تلقائيًا بالكلمات المفتاحية، مع تغطية كاملة بالاختبارات." },
  { name: "Aramco (Internal)", brand: "projects/aramco/app_logo.png", hue: "#5aa9ff", tag: "Enterprise", internal: true,
    en: "Warehouse and lab-management app for Aramco International. Flutter, SQLite, BLoC, MVVM.",
    ar: "تطبيق إدارة مخازن ومعامل لأرامكو الدولية. Flutter وSQLite وBLoC وMVVM." },
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

let lang = store.get("lang") || (navigator.language.startsWith("ar") ? "ar" : "en");

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langBtn").textContent = lang === "ar" ? "EN" : "ع";
  $$("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n]));
  $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t[el.dataset.i18nPh]));

  $("#skillsGrid").innerHTML = SKILLS.map((s, i) => `
    <div class="card skill-card reveal" style="--d:${(i % 3) * 0.08}s">
      <span class="icon">${icon(s.icon)}</span><h3>${s[lang]}</h3>
      <div class="tags">${s.tags.map((x) => `<span>${x}</span>`).join("")}</div>
    </div>`).join("");

  $("#timeline").innerHTML = EXPERIENCE.map((e) => `
    <li class="tl-item reveal ${e.current ? "current" : ""}">
      <div class="tl-head"><h3>${e[lang]} <span class="co">@ ${e.co}</span></h3><span class="tl-date" dir="ltr">${e.date}</span></div>
      <ul>${e.pts[lang].map((p) => `<li>${p}</li>`).join("")}</ul>
    </li>`).join("");

  $("#workGrid").innerHTML = PROJECTS.map((p, i) => `
    <article class="card project reveal" style="--hue:${p.hue};--d:${(i % 3) * 0.08}s">
      ${p.dir ? `<button class="p-visual has-shots" data-project="${i}" aria-label="${t.gallery} — ${p.name}">
        <img class="p-logo" src="projects/${p.dir}/app_logo.webp" alt="" loading="lazy">
        <div class="shots">${p.shots.slice(0, 3).map((x) => `<img src="projects/${p.dir}/${x}" alt="" loading="lazy">`).join("")}</div>
        <span class="p-more mono">${p.shots.length} ${t.shots} ↗</span>
      </button>` : p.brand ? `<div class="p-visual p-brand"><img src="${p.brand}" alt="${p.name} logo" loading="lazy"></div>` : `<div class="p-visual"><div class="phone"><i></i><i></i><i></i><i></i><i></i></div></div>`}
      <div class="p-body">
        <h3>${p.name}</h3><p>${p[lang]}</p>
        <div class="p-meta"><span class="badge">${p.tag}</span>${p.internal ? `<span class="badge">Internal</span>` : `<span class="live">${t.live}</span>`}</div>
        ${p.play ? `<div class="stores">
          <a href="${p.play}" target="_blank" rel="noopener" class="store-btn"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M3.6 2.2 13.4 12l-9.8 9.8a1.5 1.5 0 0 1-.6-1.2V3.4c0-.5.2-.9.6-1.2Zm11.2 11.2 2.4 2.4-11 6.3 8.6-8.7Zm3.7-3.5 2.8 1.6c.9.5.9 1.8 0 2.3l-2.8 1.6-2.7-2.7 2.7-2.8ZM6.2 1.9l11 6.3-2.4 2.4-8.6-8.7Z"/></svg>Google Play</a>
          <a href="${p.ios}" target="_blank" rel="noopener" class="store-btn"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9a5 5 0 0 0-4.2 2.5c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.3 3-2.5a10 10 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.4-4.1ZM13.9 5a4.4 4.4 0 0 0 1-3.2 4.5 4.5 0 0 0-2.9 1.5 4.2 4.2 0 0 0-1.1 3.1c1.1.1 2.2-.5 3-1.4Z"/></svg>App Store</a>
        </div>` : ""}
      </div>
    </article>`).join("");

  const loop = [...SKILLS.flatMap((s) => s.tags)];
  $("#marquee").innerHTML = [...loop, ...loop].map((x) => `<span>${x}</span>`).join("");

  // keep selections stable across language switches (by index)
  const typeIdx = Math.max(0, $$('input[name="type"]').findIndex((r) => r.checked));
  $("#typePills").innerHTML = t.types.map((x, i) => `<label><input type="radio" name="type" value="${i}" ${i === typeIdx ? "checked" : ""}><span>${x}</span></label>`).join("");
  for (const [sel, list] of [["#budgetSel", t.budgets], ["#timelineSel", t.timelines]]) {
    const idx = $(sel).selectedIndex;
    $(sel).innerHTML = list.map((x, i) => `<option value="${i}">${x}</option>`).join("");
    $(sel).selectedIndex = Math.max(0, idx);
  }

  observeReveals();
  startRoles();
}

/* reveal on scroll */
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
function observeReveals() {
  $$(".reveal:not(.in)").forEach((el) => (reduced ? el.classList.add("in") : io.observe(el)));
}

/* rotating role with typing effect */
let roleTimer;
function startRoles() {
  clearTimeout(roleTimer);
  const roles = T[lang].roles, el = $("#roleText");
  let r = 0, c = 0, del = false;
  if (reduced) { el.textContent = roles[0]; return; }
  (function tick() {
    const word = roles[r];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let wait = del ? 35 : 70;
    if (!del && c === word.length) { del = true; wait = 1800; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
    roleTimer = setTimeout(tick, wait);
  })();
}

/* counters */
const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  countIO.unobserve(e.target);
  const el = e.target, to = parseFloat(el.dataset.to), dec = el.dataset.to.includes(".") ? 1 : 0, start = performance.now();
  (function step(now) {
    const p = reduced ? 1 : Math.min(1, (now - start) / 1600);
    el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(dec) + (p === 1 ? el.dataset.suffix : "");
    if (p < 1) requestAnimationFrame(step);
  })(start);
}), { threshold: 0.6 });
$$(".count").forEach((el) => countIO.observe(el));

/* theme */
const savedTheme = store.get("theme");
const theme = savedTheme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
document.documentElement.dataset.theme = theme;
$("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  store.set("theme", next);
});

/* language */
$("#langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  store.set("lang", lang);
  document.body.classList.remove("lang-swap"); void document.body.offsetWidth; document.body.classList.add("lang-swap");
  render();
  $$(".reveal").forEach((el) => el.classList.add("in"));
});

/* mobile menu */
$("#menuBtn").addEventListener("click", (e) => {
  const open = $("#navLinks").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
$$("#navLinks a").forEach((a) => a.addEventListener("click", () => { $("#navLinks").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); }));

/* scroll: nav border, active link, timeline progress */
const sections = $$("main section[id]");
function onScroll() {
  $(".nav").classList.toggle("scrolled", scrollY > 10);
  const mid = scrollY + innerHeight * 0.4;
  let current = "";
  sections.forEach((s) => { if (s.offsetTop <= mid) current = s.id; });
  $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  const tl = $("#timeline"), rect = tl.getBoundingClientRect();
  const prog = Math.min(1, Math.max(0, (innerHeight * 0.7 - rect.top) / rect.height));
  tl.style.setProperty("--progress", prog);
}
addEventListener("scroll", onScroll, { passive: true });

/* pointer effects: glow, photo tilt, card spotlight */
if (!reduced && matchMedia("(pointer: fine)").matches) {
  const glow = $(".cursor-glow"), tilt = $(".tilt");
  addEventListener("pointermove", (e) => {
    glow.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
    const r = tilt.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight) {
      const x = (e.clientX - (r.left + r.width / 2)) / innerWidth, y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      tilt.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    }
    const card = e.target.closest?.(".skill-card");
    if (card) { const b = card.getBoundingClientRect(); card.style.setProperty("--mx", `${e.clientX - b.left}px`); card.style.setProperty("--my", `${e.clientY - b.top}px`); }
  });
  glow.style.left = glow.style.top = "0";
  glow.style.transform = "translate(-999px,-999px)";
}

/* lead form -> WhatsApp / Email */
function buildMessage(f) {
  const t = T[lang], m = t.msg;
  const lines = [
    m.hello, "",
    `• ${m.name}: ${f.name}`,
    f.company ? `• ${m.company}: ${f.company}` : null,
    `• ${m.type}: ${t.types[f.type]}`,
    `• ${m.budget}: ${t.budgets[f.budget]}`,
    `• ${m.timeline}: ${t.timelines[f.timeline]}`,
    "", `${m.details}:`, f.details,
  ].filter((l) => l !== null);
  return lines.join("\n");
}
function sendUrl(f) {
  const text = buildMessage(f);
  if (f.via === "email") {
    const subject = `${T[lang].msg.subject} ${f.name}`;
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

$("#leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget, data = Object.fromEntries(new FormData(form));
  const f = {
    name: (data.name || "").trim(), company: (data.company || "").trim(), details: (data.details || "").trim(),
    type: +data.type || 0, budget: +data.budget || 0, timeline: +data.timeline || 0, via: data.via,
  };
  form.name.classList.toggle("invalid", !f.name);
  form.details.classList.toggle("invalid", !f.details);
  const err = $("#formError");
  if (!f.name || !f.details) { err.textContent = T[lang]["f.err"]; err.hidden = false; return; }
  err.hidden = true;
  if (f.via === "email") location.href = sendUrl(f);
  else window.open(sendUrl(f), "_blank", "noopener");
});
$$("#leadForm input, #leadForm textarea").forEach((el) => el.addEventListener("input", () => el.classList.remove("invalid")));

/* screenshot lightbox */
const lb = $("#lightbox");
let lbProject, lbIndex;
function showShot() {
  const p = PROJECTS[lbProject];
  $("#lbImg").src = `projects/${p.dir}/${p.shots[lbIndex]}`;
  $("#lbImg").alt = `${p.name} — ${lbIndex + 1}`;
  $("#lbTitle").textContent = p.name;
  $("#lbCount").textContent = `${lbIndex + 1} / ${p.shots.length}`;
}
const stepShot = (d) => { const n = PROJECTS[lbProject].shots.length; lbIndex = (lbIndex + d + n) % n; showShot(); };
$("#workGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-project]");
  if (!btn) return;
  lbProject = +btn.dataset.project; lbIndex = 0; showShot(); lb.showModal();
});
$("#lbPrev").addEventListener("click", () => stepShot(-1));
$("#lbNext").addEventListener("click", () => stepShot(1));
$("#lbClose").addEventListener("click", () => lb.close());
lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") stepShot(lang === "ar" ? -1 : 1);
  if (e.key === "ArrowLeft") stepShot(lang === "ar" ? 1 : -1);
});

$("#year").textContent = new Date().getFullYear();
render();
onScroll();

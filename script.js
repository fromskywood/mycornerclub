/* ════════════════════════════════════════════
   MY CORNER — interactivity
   ════════════════════════════════════════════ */

(function () {
  'use strict';

  let currentLang = 'ru';

  // ── Helpers ──────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function nl2br(str) {
    return str.replace(/\n/g, '<br>');
  }

  // ── Language ─────────────────────────────────
  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';

    // Toggle lang buttons
    $$('.lang-ru').forEach(el => el.classList.toggle('active', lang === 'ru'));
    $$('.lang-en').forEach(el => el.classList.toggle('active', lang === 'en'));

    // Fill data-key elements
    $$('[data-key]').forEach(el => {
      const keys = el.dataset.key.split('.');
      let val = CONTENT[lang];
      for (const k of keys) val = val?.[k];
      if (val !== undefined) {
        if (el.tagName === 'A' || el.tagName === 'BUTTON') {
          el.textContent = val;
        } else {
          el.innerHTML = nl2br(String(val));
        }
      }
    });

    // Fill data-lang-ru / data-lang-en elements
    $$('[data-lang-ru]').forEach(el => {
      el.textContent = lang === 'ru' ? el.dataset.langRu : el.dataset.langEn;
    });

    // Toggle privacy popup language blocks
    const privacyRu = $('#privacyRu');
    const privacyEn = $('#privacyEn');
    if (privacyRu) privacyRu.style.display = lang === 'ru' ? '' : 'none';
    if (privacyEn) privacyEn.style.display = lang === 'en' ? '' : 'none';

    // Toggle terms popup language blocks
    const termsRu = $('#termsRu');
    const termsEn = $('#termsEn');
    if (termsRu) termsRu.style.display = lang === 'ru' ? '' : 'none';
    if (termsEn) termsEn.style.display = lang === 'en' ? '' : 'none';

    // Update cookie info modal text on language change
    updateCookieInfoText(lang);

    // Repopulate dynamic sections
    renderInsideGrid();
    renderClubList();
    renderMoreGrid();
    renderSteps();
    renderPricing();
    renderTestimonials();
    renderFounder();
    renderFAQ();
    renderFooter();
    updateLinks();
    processEditorialBody();
  }

  // ── Render: Inside grid ───────────────────────
  function renderInsideGrid() {
    const grid = $('#insideGrid');
    if (!grid) return;
    const items = CONTENT[currentLang].inside.items;
    grid.innerHTML = items.map((item, i) => `
      <div class="inside-card fade-up" role="button" tabindex="0" aria-expanded="false">
        <div class="inside-card-num">0${i + 1}</div>
        <div class="inside-card-title">${item.title}</div>
        <div class="inside-card-detail" aria-hidden="true">
          <p class="inside-card-detail-text">${item.detail}</p>
        </div>
        <div class="card-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
    `).join('');
    observeFadeUp();
    setupInsideCardTap(grid);
  }

  // ── Inside cards: accordion (one open at a time)
  function setupInsideCardTap(grid) {
    grid.addEventListener('click', e => {
      const card = e.target.closest('.inside-card');
      if (!card) return;
      const isExpanded = card.classList.contains('expanded');
      grid.querySelectorAll('.inside-card.expanded').forEach(c => {
        c.classList.remove('expanded');
        c.setAttribute('aria-expanded', 'false');
        c.querySelector('.inside-card-detail').setAttribute('aria-hidden', 'true');
      });
      if (!isExpanded) {
        card.classList.add('expanded');
        card.setAttribute('aria-expanded', 'true');
        card.querySelector('.inside-card-detail').setAttribute('aria-hidden', 'false');
      }
    });
  }

  // ── Render: Club list ─────────────────────────
  function renderClubList() {
    const list = $('#clubList');
    if (!list) return;
    const points = CONTENT[currentLang].clubAbout.points;
    list.innerHTML = points.map(p => `
      <li class="club-item">
        <div class="club-item-bullet">
          <img src="images/logo-mark.png" alt="">
        </div>
        <span class="club-item-text">${p}</span>
        <div class="card-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div>
      </li>
    `).join('');

    list.addEventListener('click', e => {
      if (window.innerWidth > 767) return;
      const item = e.target.closest('.club-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      list.querySelectorAll('.club-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  }

  // ── Render: More than grid ────────────────────
  function renderMoreGrid() {
    const grid = $('#moreGrid');
    if (!grid) return;
    const items = CONTENT[currentLang].moreThan.items;
    grid.innerHTML = items.map(item => `
      <div class="more-card fade-up">
        <div class="more-card-title">${item.title}</div>
        <div class="more-card-text">${item.text}</div>
      </div>
    `).join('');
    observeFadeUp();
  }

  // ── Render: Steps ─────────────────────────────
  function renderSteps() {
    const row = $('#stepsRow');
    if (!row) return;
    const steps = CONTENT[currentLang].howItWorks.steps;
    row.innerHTML = steps.map(s => `
      <div class="step">
        <div class="step-num">${s.num}</div>
        <div>
          <div class="step-title">${s.title}</div>
          <div class="step-text">${s.text}</div>
        </div>
      </div>
    `).join('');
  }

  // ── Render: Pricing ───────────────────────────
  function renderPricing() {
    const c = CONTENT[currentLang].pricing;
    const price = CONTENT.price;
    const period = currentLang === 'ru' ? CONTENT.period_ru : CONTENT.period_en;

    const priceEl  = $('#pricingPrice');
    const periodEl = $('#pricingPeriod');
    const feats    = $('#pricingFeatures');
    const btn      = $('#pricingBtn');

    if (priceEl) priceEl.textContent = price;
    if (periodEl) periodEl.textContent = period;
    if (btn) btn.textContent = c.cta;
    if (feats) {
      feats.innerHTML = c.features.map(f => `
        <li class="pricing-feature">${f}</li>
      `).join('');
    }
  }

  // ── Render: Testimonials ──────────────────────
  let reviewsCarousel = { index: 0, perView: 1, total: 0, extra: [] };

  function renderTestimonials() {
    const c = CONTENT[currentLang].testimonials;
    const track = $('#reviewsTrack');
    const dotsEl = $('#reviewsDots');
    const moreBtn = $('#showMoreReviews');
    const extraEl = $('#reviewsExtra');

    if (!track) return;

    const allItems = c.items;
    const mainItems = allItems;
    const extraItems = [];

    reviewsCarousel.total = mainItems.length;
    reviewsCarousel.index = 0;

    track.innerHTML = mainItems.map(r => renderReviewCard(r)).join('');

    // dots
    if (dotsEl) {
      dotsEl.innerHTML = mainItems.map((_, i) => `
        <button class="dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Отзыв ${i + 1}"></button>
      `).join('');
      dotsEl.addEventListener('click', e => {
        const dot = e.target.closest('.dot');
        if (dot) slideToReview(+dot.dataset.i);
      });
    }

    // extra reviews
    if (extraEl) {
      if (extraItems.length > 0) {
        extraEl.innerHTML = extraItems.map(r => renderReviewCard(r)).join('');
        if (moreBtn) {
          moreBtn.style.display = '';
          moreBtn.textContent = c.showMore;
        }
      } else {
        if (moreBtn) moreBtn.style.display = 'none';
      }
    }

    updateCarouselPerView();
    updateCarouselPosition();
  }

  function renderReviewCard(r) {
    const platformIcon = r.platform === 'instagram'
      ? `<svg class="platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
           <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
           <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
         </svg>`
      : `<svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 8.3l-2 9.5c-.1.7-.5.8-1.1.5l-3-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.6-5c.2-.2-.1-.3-.4-.1l-6.9 4.3-2.9-.9c-.6-.2-.7-.6.1-.9l11.6-4.5c.5-.2 1 .1.8.7z"/>
         </svg>`;

    const handleHtml = r.handle
      ? `<span class="review-handle">${platformIcon}${r.handle}</span>`
      : '';

    return `
      <div class="review-card">
        <div class="review-header">
          <img class="review-avatar" src="${r.avatar}" alt="${r.name}">
          <div class="review-meta">
            <span class="review-name">${r.name}</span>
            ${handleHtml}
          </div>
          <div class="card-chevron review-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div>
        </div>
        <p class="review-text">${r.text.replace(/\n/g, '<br>')}</p>
      </div>
    `;
  }

  function updateCarouselPerView() {
    const w = window.innerWidth;
    reviewsCarousel.perView = w >= 900 ? 3 : w >= 640 ? 2 : 1;
  }

  function slideToReview(idx) {
    const max = reviewsCarousel.total - reviewsCarousel.perView;
    if (idx < 0) idx = max;
    else if (idx > max) idx = 0;
    reviewsCarousel.index = idx;
    updateCarouselPosition();
  }

  function updateCarouselPosition() {
    const track = $('#reviewsTrack');
    if (!track) return;
    const cards = $$('.review-card', track);
    const gap = 20;
    const cardW = cards[0]?.getBoundingClientRect().width || 0;
    const offset = reviewsCarousel.index * (cardW + gap);
    track.style.transform = `translateX(-${offset}px)`;

    $$('.dot').forEach((d, i) => {
      const visible = i >= reviewsCarousel.index && i < reviewsCarousel.index + reviewsCarousel.perView;
      d.classList.toggle('active', visible);
    });
  }

  // ── Render: Founder ───────────────────────────
  function renderFounder() {
    const c = CONTENT[currentLang].founder;
    const handle = $('#founderHandle');
    const instagram = $('#founderInstagram');
    if (handle) {
      handle.textContent = c.handle;
      handle.href = CONTENT.instagramLink;
    }
    if (instagram) {
      instagram.href = CONTENT.instagramLink;
    }
  }

  // ── Render: FAQ ───────────────────────────────
  function renderFAQ() {
    const list = $('#faqList');
    if (!list) return;
    const items = CONTENT[currentLang].faq.items;
    list.innerHTML = items.map((item, i) => `
      <div class="faq-item">
        <button class="faq-question" data-index="${i}">
          <span>${item.q}</span>
          <span class="faq-icon">
            <svg viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">${item.a}</div>
        </div>
      </div>
    `).join('');

    list.addEventListener('click', e => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // close all
      $$('.faq-item.open', list).forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  }

  // ── Render: Footer ────────────────────────────
  function renderFooter() {
    const f = CONTENT[currentLang].footer;
    const priceEl  = $('#footerPrice');
    const periodEl = $('#footerPeriod');
    const buyBtn   = $('#footerBuyBtn');
    if (priceEl)  priceEl.textContent  = CONTENT.price;
    if (periodEl) periodEl.textContent = ' / ' + (currentLang === 'ru' ? CONTENT.period_ru : CONTENT.period_en);
    if (buyBtn)   buyBtn.textContent   = CONTENT[currentLang].nav.buy;

    const copy    = document.querySelector('[data-key="footer.copy"]');
    const privacy = document.querySelector('[data-key="footer.privacy"]');
    const terms   = document.querySelector('[data-key="footer.terms"]');
    const cookies = document.querySelector('[data-key="footer.cookies"]');

    if (copy)    copy.textContent    = f.copy;
    if (privacy) privacy.textContent = f.privacy;
    if (terms)   terms.textContent   = f.terms;
    if (cookies) cookies.textContent = f.cookies;
  }

  // ── Update links ──────────────────────────────
  function updateLinks() {
    const buyLink  = CONTENT.buyLink;
    const demoLink = CONTENT.demoLink;
    const igLink   = CONTENT.instagramLink;
    const tgLink   = CONTENT.telegramLink;

    const ids = {
      '#heroBuyBtn':     buyLink,
      '#pricingBtn':     buyLink,
      '#finalBuyBtn':    buyLink,
      '#footerBuyBtn':   buyLink,
      '#heroDemoBtn':    demoLink,
      '#demoPricingBtn': demoLink,
      '#demoBtn':        demoLink,
      '#finalDemoBtn':   demoLink,
      '#founderInstagram': igLink,
      '#footerInstagram':  igLink,
      '#footerTelegram':   tgLink,
    };
    for (const [id, href] of Object.entries(ids)) {
      const el = $(id);
      if (el) el.href = href;
    }
  }

  // ── About Author inline accordion ────────────
  function setupAboutAccordion() {
    const trigger  = document.querySelector('.about-inline-trigger');
    const overlay  = document.getElementById('authorModal');
    const closeBtn = document.getElementById('authorModalClose');
    if (!trigger || !overlay) return;

    function open()  { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

    trigger.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  // ── Language button setup ─────────────────────
  function setupLangButtons() {
    $$('#langBtn, #langBtnFooter').forEach(btn => {
      btn.addEventListener('click', () => {
        setLang(currentLang === 'ru' ? 'en' : 'ru');
      });
    });
  }

  // ── Header scroll ─────────────────────────────
  function setupHeaderScroll() {
    const header = $('#header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  // ── Mobile menu ───────────────────────────────
  function setupMobileMenu() {
    const burger = $('#burgerBtn');
    const menu   = $('#mobileMenu');
    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    $$('.mobile-nav-link, .mobile-buy', menu).forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  // ── Testimonials carousel controls ───────────
  function setupCarousel() {
    const prev = $('#revPrev');
    const next = $('#revNext');
    const showMore = $('#showMoreReviews');
    const extraEl  = $('#reviewsExtra');

    prev?.addEventListener('click', () => slideToReview(reviewsCarousel.index - 1));
    next?.addEventListener('click', () => slideToReview(reviewsCarousel.index + 1));

    // Touch/swipe
    const track = $('#reviewsTrack');
    if (track) {
      let startX = 0;
      track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) slideToReview(reviewsCarousel.index + (dx < 0 ? 1 : -1));
      }, { passive: true });
    }

    // Mobile tap to expand review card
    if (track) {
      track.addEventListener('click', e => {
        if (window.innerWidth > 767) return;
        const card = e.target.closest('.review-card');
        if (card) card.classList.toggle('open');
      });
    }

    // Show more toggle
    if (showMore && extraEl) {
      showMore.addEventListener('click', () => {
        const isOpen = extraEl.classList.toggle('open');
        const c = CONTENT[currentLang].testimonials;
        showMore.textContent = isOpen ? c.showLess : c.showMore;
      });
    }

    window.addEventListener('resize', () => {
      updateCarouselPerView();
      slideToReview(0);
    }, { passive: true });
  }

  // ── Draw-reveal animation for philosophy PNG ──
  function observeDrawReveal() {
    const wrap = document.querySelector('.editorial-title-wrap');
    if (!wrap) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => wrap.classList.add('draw-revealed'), 1000);
          io.unobserve(wrap);
        }
      });
    }, { threshold: 0.3 });
    io.observe(wrap);
  }

  // ── Reduce paragraph gap in editorial body ────
  function processEditorialBody() {
    const el = document.querySelector('[data-key="editorial.body"]');
    if (!el) return;
    el.innerHTML = el.innerHTML.replace(/<br><br>/gi, '<div class="para-break"></div>');
  }

  // ── Scroll animations (Intersection Observer) ─
  function observeFadeUp() {
    const els = $$('.fade-up:not(.observed)');
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => {
      el.classList.add('observed');
      io.observe(el);
    });
  }

  // ── Preloader ─────────────────────────────────
  function hidePreloader() {
    const pl = $('#preloader');
    if (!pl) return;
    setTimeout(() => {
      pl.classList.add('hidden');
      setTimeout(() => pl.remove(), 700);
    }, 800);
  }

  // ── Smooth scroll ─────────────────────────────
  function setupSmoothScroll() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Magazine cover: seasonal photo slideshow ──
  function setupMagazineCover() {
    const wrap = document.getElementById('coverPhotoWrap');
    const seasonEl = document.getElementById('coverSeasonLabel');
    if (!wrap) return;

    const slides = [
      { src: 'images/Daria2/1.jpg', ru: 'Весна',  en: 'Spring' },
      { src: 'images/Daria2/2.jpg', ru: 'Лето',   en: 'Summer' },
      { src: 'images/Daria2/3.jpg', ru: 'Осень',  en: 'Autumn' },
      { src: 'images/Daria2/4.jpg', ru: 'Зима',   en: 'Winter' },
    ];

    slides.forEach((s, i) => {
      const img = document.createElement('img');
      img.src = s.src;
      img.alt = 'My Corner';
      img.className = 'cover-photo' + (i === 0 ? ' active' : '');
      img.loading = 'lazy';
      wrap.appendChild(img);
    });

    const photos = wrap.querySelectorAll('.cover-photo');
    let current = 0;

    function updateSeason(idx) {
      if (!seasonEl) return;
      const s = slides[idx];
      // Keep data-lang attributes so setLang() updates correctly on language switch
      seasonEl.dataset.langRu = s.ru;
      seasonEl.dataset.langEn = s.en;
      seasonEl.textContent = currentLang === 'en' ? s.en : s.ru;
    }

    updateSeason(0);

    setInterval(() => {
      photos[current].classList.remove('active');
      current = (current + 1) % photos.length;
      photos[current].classList.add('active');
      updateSeason(current);
    }, 6000);
  }

  // ── Legal popups (Privacy + Terms) ───────────
  function setupLegalPopups() {
    [
      { open: 'openPrivacyPopup', overlay: 'privacyPopup', close: 'privacyPopupClose' },
      { open: 'openTermsPopup',   overlay: 'termsPopup',   close: 'termsPopupClose'   },
    ].forEach(({ open, overlay, close }) => {
      const btn     = document.getElementById(open);
      const el      = document.getElementById(overlay);
      const closeEl = document.getElementById(close);
      if (!btn || !el) return;
      const openFn  = () => { el.classList.add('open'); document.body.style.overflow = 'hidden'; };
      const closeFn = () => { el.classList.remove('open'); document.body.style.overflow = ''; };
      btn.addEventListener('click', openFn);
      closeEl?.addEventListener('click', closeFn);
      el.addEventListener('click', e => { if (e.target === el) closeFn(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFn(); });
    });
  }

  // ── Cookie management ─────────────────────────
  //
  // Текущий режим: только технические cookies — согласие не требуется
  // (ст. 122 Codice Privacy IT, руководство Garante).
  // Баннер не показывается; «Управление cookies» открывает инфо-окно.
  //
  // Архитектура для будущего добавления аналитики:
  //   Состояние согласия: 'not-asked' | 'accepted' | 'rejected'
  //   При переходе на не-технические cookies:
  //     — показывать баннер при 'not-asked'
  //     — грузить loadOptionalScripts() ТОЛЬКО при 'accepted'
  //     — закрытие баннера без выбора = 'rejected'
  //     — сайт полностью работает при любом состоянии
  //   Место для CMP (Iubenda / Cookiebot / Klaro): заменить
  //   loadOptionalScripts() на инициализацию выбранного CMP.

  const COOKIE_CONSENT_KEY = 'mc_consent_v1';

  function getConsentState() {
    try {
      const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
      return raw ? JSON.parse(raw).state : 'not-asked';
    } catch { return 'not-asked'; }
  }

  // Заглушка — активировать когда появятся не-технические скрипты
  function loadOptionalScripts() {
    // if (getConsentState() !== 'accepted') return;
    // Пример: gtag, Meta Pixel и др. подключать здесь
  }

  const COOKIE_INFO = {
    ru: 'Этот сайт использует только технические cookies, необходимые для его работы. Аналитические, рекламные и сторонние трекинговые cookies не используются.',
    en: 'This site uses only technical cookies necessary for its operation. No analytics, advertising or third-party tracking cookies are used.',
  };

  function updateCookieInfoText(lang) {
    const el = $('#cookieInfoText');
    if (el) el.textContent = COOKIE_INFO[lang] || COOKIE_INFO.ru;
  }

  function setupCookieBanner() {
    const modal   = $('#cookieInfoModal');
    const closeBtn = $('#cookieInfoClose');
    if (!modal) return;

    // «Управление cookies» в подвале → информационное окно
    $('#openCookieSettings')?.addEventListener('click', () => {
      modal.style.display = '';
      document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.style.display !== 'none') closeModal(); });

    // Инициализация текста на текущем языке
    updateCookieInfoText(currentLang);
  }

  // ── Magazine popup ────────────────────────────
  function setupMagazinePopup() {
    const overlay = document.getElementById('magazinePopup');
    const openBtn = document.getElementById('magazineDetailsBtn');
    const closeBtn = document.getElementById('magazinePopupClose');
    if (!overlay || !openBtn) return;

    function open()  { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

    openBtn.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    // Click on backdrop
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    // ESC key
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    // Auto-close when next section enters viewport
    const nextSection = document.getElementById('about');
    if (nextSection) {
      new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) close();
      }, { threshold: 0.25 }).observe(nextSection);
    }
  }

  // ── Photo Journal carousel (infinite loop) ───
  function setupPhotoJournal() {
    const track = document.getElementById('pjTrack');
    const dotsEl = document.getElementById('pjDots');
    if (!track) return;

    const realGroups = [...track.querySelectorAll('.pj-group')];
    const realTotal = realGroups.length; // 7

    // Clone first and last groups for seamless looping
    const firstClone = realGroups[0].cloneNode(true);
    const lastClone  = realGroups[realTotal - 1].cloneNode(true);
    firstClone.setAttribute('aria-hidden', 'true');
    lastClone.setAttribute('aria-hidden', 'true');
    track.appendChild(firstClone);  // index realTotal + 1
    track.prepend(lastClone);        // index 0

    // current: 1..realTotal are real groups; 0 = clone of last; realTotal+1 = clone of first
    let current = 1;
    let autoTimer = null;

    // Position without animation on init
    track.style.transition = 'none';
    track.style.transform = `translateX(-${current * 100}%)`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      track.style.transition = '';
    }));

    // Dots (7, for real groups only)
    if (dotsEl) {
      dotsEl.innerHTML = Array.from({ length: realTotal }, (_, i) =>
        `<button class="pj-dot${i === 0 ? ' active' : ''}" aria-label="Группа ${i + 1}"></button>`
      ).join('');
      dotsEl.addEventListener('click', e => {
        const dot = e.target.closest('.pj-dot');
        if (!dot) return;
        const dotIdx = [...dotsEl.querySelectorAll('.pj-dot')].indexOf(dot);
        goTo(dotIdx + 1);
        resetAuto();
      });
    }

    function updateDots() {
      if (!dotsEl) return;
      // Map clone positions to real dot index
      let ri = current - 1;
      if (current === 0)             ri = realTotal - 1;
      if (current === realTotal + 1) ri = 0;
      dotsEl.querySelectorAll('.pj-dot').forEach((d, i) =>
        d.classList.toggle('active', i === ri)
      );
    }

    function goTo(idx) {
      current = idx;
      track.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // After slide animation: silently jump from clone to real group
    track.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') return;
      if (current === 0) {
        // Clone of last → jump to real last without animation
        track.style.transition = 'none';
        current = realTotal;
        track.style.transform = `translateX(-${current * 100}%)`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          track.style.transition = '';
        }));
      } else if (current === realTotal + 1) {
        // Clone of first → jump to real first without animation
        track.style.transition = 'none';
        current = 1;
        track.style.transform = `translateX(-${current * 100}%)`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          track.style.transition = '';
        }));
      }
    });

    // Arrow buttons
    document.querySelector('.pj-prev')?.addEventListener('click', () => { prev(); resetAuto(); });
    document.querySelector('.pj-next')?.addEventListener('click', () => { next(); resetAuto(); });

    // Touch swipe
    const wrap = track.closest('.pj-track-wrap');
    if (wrap) {
      let startX = 0;
      wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      wrap.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); resetAuto(); }
      }, { passive: true });
    }

    // Auto-slide every 5s; pause on hover
    function startAuto() { autoTimer = setInterval(next, 5000); }
    function stopAuto()  { clearInterval(autoTimer); }
    function resetAuto() { stopAuto(); startAuto(); }

    const slider = document.querySelector('.pj-slider');
    slider?.addEventListener('mouseenter', stopAuto);
    slider?.addEventListener('mouseleave', startAuto);

    startAuto();
  }

  // ── Dressup animation ─────────────────────────
  function setupDressup() {
    const slot = $('#clubImageSlot');
    if (!slot) return;

    const frames = ['05.png','06.png','12.png','19.png'];

    const wrap = document.createElement('div');
    wrap.className = 'dressup-wrap';

    const img = document.createElement('img');
    img.src = `images/dressup_final_numbered/${frames[0]}`;
    img.alt = '';
    img.className = 'dressup-img';

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'dressup-frame');
    svg.setAttribute('viewBox', '0 0 250 570');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M12,10 C60,4 180,6 240,10 C246,12 248,20 246,100 C244,220 244,390 246,520 C246,548 240,556 202,554 C156,552 78,552 13,552 C6,552 2,542 4,468 C6,340 6,130 12,10 Z');
    path.setAttribute('stroke', '#AD4B27');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);

    wrap.appendChild(img);
    wrap.appendChild(svg);
    slot.appendChild(wrap);

    let current = 0;
    setInterval(() => {
      img.style.opacity = '0';
      setTimeout(() => {
        current = (current + 1) % frames.length;
        img.src = `images/dressup_final_numbered/${frames[current]}`;
        img.style.opacity = '1';
      }, 900);
    }, 3500);
  }

  // ── Init ──────────────────────────────────────
  function init() {
    setLang('ru');
    setupLangButtons();
    setupHeaderScroll();
    setupMobileMenu();
    setupAboutAccordion();
    setupCarousel();
    setupSmoothScroll();
    setupLegalPopups();
    setupCookieBanner();
    setupMagazineCover();
    setupMagazinePopup();
    setupPhotoJournal();
    setupDressup();
    observeDrawReveal();
    observeFadeUp();
    hidePreloader();

    // Observe more elements after DOM settles
    setTimeout(observeFadeUp, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

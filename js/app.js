/* ============================================================
   MAISON LÉORA — logica aplicației (vanilla JS, fără build)
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Date ---------------- */
  const SERVICES = [
    { num: '01', name: 'Tuns & Coafat Semnătură', desc: 'O consultație personalizată, tuns de precizie și un finisaj luxos, adaptate trăsăturilor tale.', duration: '90 MIN', price: 'de la $180' },
    { num: '02', name: 'Balayage Couture', desc: 'Culoare pictată manual, dimensională, pentru o luminozitate naturală, sărutată de soare.', duration: '180 MIN', price: 'de la $320' },
    { num: '03', name: 'Netezire cu Keratină', desc: 'Netezime ca sticla, fără frizz, care durează luni întregi de dimineți fără efort.', duration: '150 MIN', price: 'de la $260' },
    { num: '04', name: 'Coafuri de Mireasă & Eveniment', desc: 'Coafuri editoriale pentru cele mai memorabile momente ale tale, probă inclusă.', duration: '120 MIN', price: 'de la $240' },
    { num: '05', name: 'Ritual de Lux pentru Scalp', desc: 'Un masaj și tratament reparator al scalpului, pentru a hrăni părul de la rădăcină.', duration: '60 MIN', price: 'de la $140' },
    { num: '06', name: 'Luciu & Tratament', desc: 'Un luciu ca oglinda și o reparare profundă a legăturilor pentru strălucire instantanee.', duration: '75 MIN', price: 'de la $160' }
  ];

  const PRODUCTS = [
    { id: 1, brand: 'AURELLE', name: 'Ulei Reparator pentru Păr', cat: 'oils', price: 68, rating: 4.9, img: 'images/product-oil.jpeg', desc: 'Un amestec ușor de uleiuri de camelie și argan care netezește, protejează și adaugă o strălucire luminoasă, ca sticla.' },
    { id: 2, brand: 'MÉLISSE', name: 'Mască Reparatoare de Mătase', cat: 'treatments', price: 54, rating: 4.8, img: 'images/product-mask.jpeg', desc: 'O mască intensivă de cinci minute care reconstruiește legăturile și lasă firele mătăsoase, puternice și profund hrănite.' },
    { id: 3, brand: 'LÉORA', name: 'Ser cu Luciu Champagne', cat: 'styling', price: 72, rating: 5.0, img: 'images/product-serum.jpeg', desc: 'Serul nostru de finisare emblematic, pentru o strălucire fină în nuanțe de șampanie și un aspect fără frizz.' },
    { id: 4, brand: 'VERANO', name: 'Spray de Volum', cat: 'styling', price: 42, rating: 4.7, img: 'images/product-mist.jpeg', desc: 'Un spray ușor care ridică de la rădăcină pentru un volum plin, aerisit și de durată.' },
    { id: 5, brand: 'AURELLE', name: 'Șampon Nutritiv', cat: 'cleanse', price: 46, rating: 4.8, img: 'images/product-shampoo.jpeg', desc: 'Un produs de curățare fără sulfați care purifică delicat, păstrând culoarea și hidratarea.' },
    { id: 6, brand: 'MÉLISSE', name: 'Spray cu Protecție Termică', cat: 'styling', price: 38, rating: 4.6, img: 'images/product-heat.jpeg', desc: 'Protecție termică până la 230°C, cu un finisaj mătăsos, non-gras.' },
    { id: 7, brand: 'LÉORA', name: 'Elixir de Noapte pentru Scalp', cat: 'treatments', price: 88, rating: 4.9, img: 'images/product-elixir.jpeg', desc: 'Un ser de scalp pentru folosire înainte de somn, care echilibrează, calmează și susține creșterea sănătoasă.' },
    { id: 8, brand: 'VERANO', name: 'Spray Texturizant cu Sare de Mare', cat: 'styling', price: 40, rating: 4.7, img: 'images/product-salt.jpeg', desc: 'Textură naturală, ușor răvășită, cu un finisaj mat, ca la plajă.' }
  ];

  const GALLERY = [
    { label: 'COC DE SEARĂ', h: '420px', img: 'images/gallery-1.jpeg' },
    { label: 'ONDULE DE MIREASĂ', h: '300px', img: 'images/gallery-2.jpeg' },
    { label: 'COC CU CRISTALE', h: '360px', img: 'images/gallery-3.jpeg' },
    { label: 'BOB ARĂMIU LUCIOS', h: '420px', img: 'images/gallery-4.jpeg' },
    { label: 'ONDULE HOLLYWOOD', h: '300px', img: 'images/gallery-5.jpeg' },
    { label: 'COAFURĂ VINTAGE', h: '380px', img: 'images/gallery-6.jpeg' },
    { label: 'BUCLE DEFINITE', h: '320px', img: 'images/gallery-7.jpeg' },
    { label: 'COAFAT & STRĂLUCIRE', h: '400px', img: 'images/gallery-8.jpeg' }
  ];

  const TESTIMONIALS = [
    { text: 'Élise mi-a transformat părul în ceva ce nu credeam posibil. Atelierul pare un vis parizian.', name: 'Camille Devereaux', role: 'CLIENTĂ BALAYAGE', photo: 'images/portrait-2.jpeg', stars: '★★★★★' },
    { text: 'Cea mai luxoasă experiență de salon din viața mea. Fiecare detaliu este gândit, fiecare moment este o răsfățare.', name: 'Sofia Marchetti', role: 'CLIENTĂ MIREASĂ', photo: 'images/portrait-1.jpeg', stars: '★★★★★' },
    { text: 'Traversez tot orașul pentru Maison Léora. Munca de culoare este, pur și simplu, la cu totul alt nivel.', name: 'Amara Okafor', role: 'CLIENTĂ COLORARE', photo: 'images/portrait-4.jpeg', stars: '★★★★★' },
    { text: 'La plecare, m-am simțit ca cea mai rafinată versiune a mea. Măiestrie cu adevărat couture.', name: 'Helena Ross', role: 'TUNS SEMNĂTURĂ', photo: 'images/gallery-8.jpeg', stars: '★★★★★' }
  ];

  const INSTAGRAM = ['images/portrait-2.jpeg', 'images/portrait-3.jpeg', 'images/portrait-1.jpeg', 'images/portrait-4.jpeg', 'images/gallery-7.jpeg', 'images/gallery-5.jpeg'];
  const MARQUEE = ['Balayage', 'Culoare Couture', 'Ritualuri cu Keratină', 'Coafuri de Mireasă', 'Terapie pentru Scalp'];
  const CATEGORIES = [['all', 'TOATE'], ['cleanse', 'CURĂȚARE'], ['treatments', 'TRATAMENTE'], ['styling', 'STYLING'], ['oils', 'ULEIURI']];
  const WEEKDAYS = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const TIME_SLOTS = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:00'];
  const UNAVAILABLE = ['12:00', '15:00'];
  const STEP_LABELS = [['1', 'SERVICIU'], ['2', 'DATĂ & ORĂ'], ['3', 'DETALII']];

  /* ---------------- Stare ---------------- */
  const state = {
    page: 'home',
    cart: [],
    wishlist: [],
    cartOpen: false,
    lightbox: null,
    quickView: null,
    testimonial: 0,
    mobileNavOpen: false,
    shopCat: 'all',
    sort: 'featured',
    search: '',
    bStep: 1,
    bService: null,
    bDate: null,
    bTime: null,
    bName: '',
    bEmail: '',
    bPhone: '',
    bNotes: '',
    bDone: false
  };

  /* ---------------- Helpers ---------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const money = (n) => '$' + n;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const prodById = (id) => PRODUCTS.find((p) => p.id === id);
  const wished = (id) => state.wishlist.includes(id);
  const cartCount = () => state.cart.reduce((a, c) => a + c.qty, 0);
  const starStr = (rating) => '★'.repeat(Math.round(rating));

  /* ---------------- Acțiuni coș ---------------- */
  function addToCart(id) {
    const ex = state.cart.find((c) => c.id === id);
    if (ex) ex.qty += 1; else state.cart.push({ id, qty: 1 });
    state.cartOpen = true;
    renderCart(); renderBag();
  }
  function changeQty(id, d) {
    const c = state.cart.find((x) => x.id === id);
    if (c) c.qty = Math.max(1, c.qty + d);
    renderCart(); renderBag();
  }
  function removeItem(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    renderCart(); renderBag();
  }
  function toggleWish(id) {
    state.wishlist = wished(id) ? state.wishlist.filter((x) => x !== id) : [...state.wishlist, id];
    renderFeatured(); renderShop(); renderQuickView();
  }

  /* ---------------- Card produs ---------------- */
  function productCard(p, opts) {
    opts = opts || {};
    const wb = `<button class="wish-btn${wished(p.id) ? ' on' : ''}" data-wish="${p.id}">${wished(p.id) ? '♥' : '♡'}</button>`;
    const qv = opts.quickView ? `<button class="quick-view" data-quickview="${p.id}">VEZI RAPID</button>` : '';
    return `
      <div class="product-card">
        <div class="product-media"${opts.quickView ? ' style="cursor:pointer"' : ''}>
          <img src="${p.img}" alt="${esc(p.name)}"${opts.quickView ? ` data-quickview="${p.id}"` : ''}>
          ${wb}${qv}
        </div>
        <div class="product-body">
          <div class="product-brand">${esc(p.brand)}</div>
          <h3>${esc(p.name)}</h3>
          <div class="product-rating"><span class="product-stars">${starStr(p.rating)}</span><span class="product-rating-num">${p.rating}</span></div>
          <div class="product-foot">
            <span class="product-price">${money(p.price)}</span>
            <button class="add-btn" data-add="${p.id}">ADAUGĂ +</button>
          </div>
        </div>
      </div>`;
  }

  /* ---------------- Randări statice (home) ---------------- */
  function renderMarquee() {
    const set = MARQUEE.map((w) => `<span>${w}</span><span class="sep">✦</span>`).join('');
    $('#marqueeTrack').innerHTML = set + set;
  }
  function renderServices() {
    $('#servicesGrid').innerHTML = SERVICES.map((s) => `
      <div class="reveal service-card">
        <div class="service-num">${s.num}</div>
        <h3>${esc(s.name)}</h3>
        <p class="service-desc">${esc(s.desc)}</p>
        <div class="service-meta"><span class="service-dur">${s.duration}</span><span class="service-price">${esc(s.price)}</span></div>
        <button class="service-reserve" data-reserve="${esc(s.name)}">REZERVĂ</button>
      </div>`).join('');
  }
  function renderGallery() {
    $('#masonry').innerHTML = GALLERY.map((g, i) => `
      <button class="masonry-item" data-lightbox="${i}">
        <div class="frame" style="height:${g.h}"><img src="${g.img}" alt="${esc(g.label)}"></div>
        <div class="masonry-overlay"><span class="view-pill">VEZI</span></div>
      </button>`).join('');
  }
  function renderFeatured() {
    $('#featuredGrid').innerHTML = PRODUCTS.slice(0, 4).map((p) => productCard(p, { quickView: false })).join('');
  }
  function renderInstagram() {
    $('#instaGrid').innerHTML = INSTAGRAM.map((img) => `
      <div class="insta-cell"><img src="${img}" alt="Maison Léora pe Instagram"><div class="ov">◎</div></div>`).join('');
  }

  /* ---------------- Testimoniale ---------------- */
  function renderTestimonial() {
    const t = TESTIMONIALS[state.testimonial];
    $('#testiStage').innerHTML = `
      <div class="testi" key="${state.testimonial}">
        <div class="testi-stars">${t.stars}</div>
        <p class="testi-text">„${esc(t.text)}”</p>
        <div class="testi-author">
          <div class="testi-avatar"><img src="${t.photo}" alt="${esc(t.name)}"></div>
          <div class="testi-meta"><div class="testi-name">${esc(t.name)}</div><div class="testi-role">${t.role}</div></div>
        </div>
      </div>`;
    $('#testiDots').innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="testi-dot${i === state.testimonial ? ' on' : ''}" data-testi="${i}"></button>`).join('');
  }

  /* ---------------- Magazin ---------------- */
  function renderShopCats() {
    $('#shopCats').innerHTML = CATEGORIES.map(([id, label]) =>
      `<button class="cat-pill${state.shopCat === id ? ' active' : ''}" data-cat="${id}">${label}</button>`).join('');
  }
  function filteredProducts() {
    let list = PRODUCTS.slice();
    if (state.shopCat !== 'all') list = list.filter((p) => p.cat === state.shopCat);
    if (state.search.trim()) {
      const q = state.search.toLowerCase();
      list = list.filter((p) => (p.name + ' ' + p.brand).toLowerCase().includes(q));
    }
    if (state.sort === 'low') list.sort((a, b) => a.price - b.price);
    else if (state.sort === 'high') list.sort((a, b) => b.price - a.price);
    else if (state.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }
  function renderShop() {
    renderShopCats();
    const list = filteredProducts();
    $('#resultCount').textContent = list.length + ' produse';
    $('#shopGrid').innerHTML = list.map((p) => productCard(p, { quickView: true })).join('');
    $('#shopGrid').hidden = list.length === 0;
    $('#noResults').hidden = list.length !== 0;
  }

  /* ---------------- Sertar coș ---------------- */
  function renderBag() {
    const count = cartCount();
    const el = $('#bagCount');
    el.hidden = count === 0;
    el.textContent = count;
  }
  function renderCart() {
    const mount = $('#cartMount');
    if (!state.cartOpen) { mount.innerHTML = ''; return; }
    let inner;
    if (state.cart.length === 0) {
      inner = `
        <div class="cart-empty">
          <span class="gem">♢</span>
          <h3>Coșul tău este gol</h3>
          <p>Descoperă esențialele noastre de salon.</p>
          <button data-shop-from-cart>VEZI COLECȚIA</button>
        </div>`;
    } else {
      const items = state.cart.map((c) => {
        const p = prodById(c.id);
        return `
          <div class="cart-item">
            <div class="cart-item-img"><img src="${p.img}" alt="${esc(p.name)}"></div>
            <div class="cart-item-body">
              <div class="cart-item-brand">${esc(p.brand)}</div>
              <div class="cart-item-name">${esc(p.name)}</div>
              <div class="cart-item-foot">
                <div class="qty">
                  <button data-dec="${c.id}">−</button>
                  <span>${c.qty}</span>
                  <button data-inc="${c.id}">+</button>
                </div>
                <span class="cart-line-total">${money(p.price * c.qty)}</span>
              </div>
            </div>
            <button class="cart-item-remove" data-remove="${c.id}">✕</button>
          </div>`;
      }).join('');
      const subtotal = state.cart.reduce((a, c) => a + prodById(c.id).price * c.qty, 0);
      inner = `
        <div class="cart-items">${items}</div>
        <div class="cart-foot">
          <div class="cart-subtotal"><span class="k">Subtotal</span><span class="v">${money(subtotal)}</span></div>
          <p class="note">Transportul și taxele se calculează la finalizare.</p>
          <button class="checkout" data-checkout>FINALIZEAZĂ COMANDA</button>
        </div>`;
    }
    mount.innerHTML = `
      <div class="cart-scrim" data-close-cart></div>
      <div class="cart-drawer">
        <div class="cart-head"><span class="title">Coșul Tău</span><button class="x" data-close-cart>✕</button></div>
        ${inner}
      </div>`;
  }

  /* ---------------- Vizualizare rapidă ---------------- */
  function renderQuickView() {
    const mount = $('#quickViewMount');
    if (state.quickView == null) { mount.innerHTML = ''; return; }
    const p = prodById(state.quickView);
    mount.innerHTML = `
      <div class="qv-scrim" data-close-qv>
        <div class="qv-modal" data-qv-stop>
          <div class="qv-media"><img src="${p.img}" alt="${esc(p.name)}"></div>
          <div class="qv-body">
            <button class="qv-close" data-close-qv>✕</button>
            <div class="qv-brand">${esc(p.brand)}</div>
            <h2>${esc(p.name)}</h2>
            <div class="qv-rating"><span class="stars">${starStr(p.rating)}</span><span class="num">${p.rating} · 240 de recenzii</span></div>
            <p class="qv-desc">${esc(p.desc)}</p>
            <div class="qv-price">${money(p.price)}</div>
            <button class="qv-add" data-qv-add="${p.id}">ADAUGĂ ÎN COȘ</button>
            <button class="qv-wish" data-qv-wish="${p.id}">${wished(p.id) ? '♥ SALVAT' : '♡ ADAUGĂ LA FAVORITE'}</button>
          </div>
        </div>
      </div>`;
  }

  /* ---------------- Lightbox ---------------- */
  function renderLightbox() {
    const mount = $('#lightboxMount');
    if (state.lightbox == null) { mount.innerHTML = ''; return; }
    const g = GALLERY[state.lightbox];
    mount.innerHTML = `
      <div class="lightbox">
        <button class="lb-close" data-close-lb>✕</button>
        <button class="lb-arrow lb-prev" data-lb-prev>‹</button>
        <div class="lb-frame"><img src="${g.img}" alt="${esc(g.label)}"></div>
        <div class="lb-counter">${state.lightbox + 1} / ${GALLERY.length}</div>
        <button class="lb-arrow lb-next" data-lb-next>›</button>
      </div>`;
  }

  /* ---------------- Meniu mobil ---------------- */
  function renderMobileNav() {
    const mount = $('#mobileNavMount');
    if (!state.mobileNavOpen) { mount.innerHTML = ''; return; }
    mount.innerHTML = `
      <div class="scrim" data-close-mobile></div>
      <div class="mobile-drawer">
        <button class="mobile-close" data-close-mobile>✕</button>
        <button class="mobile-link" data-section="services">Servicii</button>
        <button class="mobile-link" data-section="gallery">Galerie</button>
        <button class="mobile-link" data-nav="shop">Magazin</button>
        <button class="mobile-link" data-section="contact">Contact</button>
        <button class="mobile-book" data-nav="booking">REZERVĂ O PROGRAMARE</button>
      </div>`;
  }

  /* ---------------- Rezervare ---------------- */
  function buildCalendar() {
    const year = 2026, month = 6; // Iulie
    const first = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const arr = [];
    for (let i = 0; i < first; i++) arr.push(null);
    for (let d = 1; d <= days; d++) {
      const dow = new Date(year, month, d).getDay();
      arr.push({ d, disabled: dow === 0 || dow === 1 });
    }
    return arr;
  }
  function canProceed() {
    return (state.bStep === 1 && !!state.bService) ||
      (state.bStep === 2 && state.bDate && state.bTime) ||
      (state.bStep === 3 && state.bName.trim() && state.bEmail.trim());
  }
  function summaryDate() { return state.bDate ? (state.bDate + ' Iulie 2026') : '—'; }
  function summaryPrice() { return state.bService ? state.bService.price.replace('de la ', '') : '—'; }

  function renderBooking() {
    const body = $('#bookingBody');
    if (state.bDone) {
      body.innerHTML = `
        <div class="confirm">
          <div class="confirm-ring">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M14 25l7 7 14-15" stroke="#D6B980" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60"/></svg>
          </div>
          <h1>Programarea ta<br>este confirmată</h1>
          <p>O confirmare a fost trimisă la <strong>${esc(state.bEmail)}</strong>.<br>Abia așteptăm să te primim.</p>
          <div class="confirm-card">
            <div class="confirm-row"><span class="k">SERVICIU</span><span class="v">${esc(state.bService ? state.bService.name : '—')}</span></div>
            <div class="confirm-row"><span class="k">DATĂ</span><span class="v">${summaryDate()}</span></div>
            <div class="confirm-row"><span class="k">ORĂ</span><span class="v">${state.bTime || '—'}</span></div>
            <div class="confirm-row"><span class="k">CLIENT</span><span class="v">${esc(state.bName)}</span></div>
          </div>
          <button class="btn btn-dark" style="margin-top:40px" data-nav="home">ÎNAPOI ACASĂ</button>
        </div>`;
      return;
    }

    const stepNum = state.bStep;
    const stepper = STEP_LABELS.map(([num, label], i) => {
      const n = i + 1, done = stepNum > n, cur = stepNum === n;
      const line = i < 2 ? `<div class="step-line${done ? ' done' : ''}"></div>` : '';
      return `
        <div class="step${i < 2 ? ' grow' : ''}">
          <div class="step-col">
            <div class="step-dot${cur || done ? ' active' : ''}">${done ? '✓' : num}</div>
            <span class="step-label${cur ? ' active' : ''}">${label}</span>
          </div>${line}
        </div>`;
    }).join('');

    let stepContent = '';
    if (state.bStep === 1) {
      const rows = SERVICES.map((s) => {
        const active = state.bService && state.bService.name === s.name;
        return `
          <button class="bservice${active ? ' active' : ''}" data-bservice="${esc(s.name)}">
            <div><div class="bservice-name">${esc(s.name)}</div><div class="bservice-dur">${s.duration}</div></div>
            <div class="bservice-right"><span class="bservice-price">${esc(s.price)}</span><span class="bservice-check">${active ? '✓' : ''}</span></div>
          </button>`;
      }).join('');
      stepContent = `
        <h2>Alege un serviciu</h2>
        <p class="sub">Alege tratamentul pe care vrei să-l rezervi.</p>
        <div class="bservices">${rows}</div>`;
    } else if (state.bStep === 2) {
      const cal = buildCalendar();
      const wd = WEEKDAYS.map((w) => `<div class="cal-wd">${w}</div>`).join('');
      const days = cal.map((c) => {
        if (!c) return `<button class="cal-day empty" disabled></button>`;
        const active = state.bDate === c.d;
        const cls = 'cal-day' + (c.disabled ? ' disabled' : '') + (active ? ' active' : '');
        return `<button class="${cls}" ${c.disabled ? 'disabled' : `data-calday="${c.d}"`}>${c.d}</button>`;
      }).join('');
      const slots = TIME_SLOTS.map((t) => {
        const dis = UNAVAILABLE.includes(t), active = state.bTime === t;
        const cls = 'slot' + (dis ? ' disabled' : '') + (active ? ' active' : '');
        return `<button class="${cls}" ${dis ? 'disabled' : `data-slot="${t}"`}>${t}</button>`;
      }).join('');
      stepContent = `
        <h2>Alege data &amp; ora</h2>
        <p class="sub">Iulie 2026</p>
        <div class="cal-grid">${wd}${days}</div>
        <div class="slots-label">ORE DISPONIBILE</div>
        <div class="slots">${slots}</div>`;
    } else {
      stepContent = `
        <h2>Datele tale</h2>
        <p class="sub">Vom trimite confirmarea și mementourile aici.</p>
        <div class="field">
          <label><span class="field-label">NUME COMPLET</span><input data-field="bName" value="${esc(state.bName)}" placeholder="Numele tău"></label>
          <label><span class="field-label">ADRESĂ DE EMAIL</span><input data-field="bEmail" type="email" value="${esc(state.bEmail)}" placeholder="tu@email.com"></label>
          <label><span class="field-label">TELEFON (OPȚIONAL)</span><input data-field="bPhone" value="${esc(state.bPhone)}" placeholder="+40 ..."></label>
          <label><span class="field-label">NOTE (OPȚIONAL)</span><textarea data-field="bNotes" rows="2" placeholder="Ceva ce ar trebui să știm?">${esc(state.bNotes)}</textarea></label>
        </div>`;
    }

    const proceed = canProceed();
    const nextLabel = state.bStep === 3 ? 'CONFIRMĂ REZERVAREA' : 'CONTINUĂ';

    body.innerHTML = `
      <div class="booking-head">
        <p class="eyebrow">REZERVĂRI</p>
        <h1>Rezervă-ți programarea</h1>
      </div>
      <div class="stepper">${stepper}</div>
      <div class="booking-grid">
        <div class="booking-panel">
          ${stepContent}
          <div class="booking-nav">
            <button class="back-btn" data-back ${state.bStep === 1 ? 'disabled' : ''}>← ÎNAPOI</button>
            <button class="next-btn" data-next ${proceed ? '' : 'disabled'}>${nextLabel}</button>
          </div>
        </div>
        <div class="summary">
          <p class="summary-title">REZERVAREA TA</p>
          <div class="summary-row"><span class="k">Serviciu</span><span class="v">${esc(state.bService ? state.bService.name : '—')}</span></div>
          <div class="summary-row"><span class="k">Dată</span><span class="v">${summaryDate()}</span></div>
          <div class="summary-row"><span class="k">Oră</span><span class="v">${state.bTime || '—'}</span></div>
          <div class="summary-total"><span class="k">De la</span><span class="v">${summaryPrice()}</span></div>
          <p class="summary-note">Un avans de 30% îți asigură programarea. Restul se achită în salon.</p>
        </div>
      </div>`;

    // păstrează focusul pe câmpul activ după re-randare
    if (state.bStep === 3 && lastFocusedField) {
      const f = body.querySelector(`[data-field="${lastFocusedField}"]`);
      if (f) { f.focus(); const v = f.value; f.value = ''; f.value = v; }
    }
  }
  let lastFocusedField = null;

  /* ---------------- Navigare ---------------- */
  function setPage(page) {
    state.page = page;
    state.mobileNavOpen = false;
    state.cartOpen = false;
    ['home', 'shop', 'booking'].forEach((p) => {
      $('#screen-' + p).hidden = p !== page;
    });
    if (page === 'shop') renderShop();
    if (page === 'booking') renderBooking();
    renderMobileNav();
    renderCart();
    updateNavChrome();
    document.querySelectorAll('[data-link="shop"]').forEach((b) => b.classList.toggle('active', page === 'shop'));
    $('#stickyBook').style.display = page === 'booking' ? 'none' : '';
    window.scrollTo({ top: 0, behavior: 'auto' });
    updateNavChrome();
  }
  function goSection(name) {
    const scroll = () => {
      const el = document.getElementById(name);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    state.mobileNavOpen = false;
    renderMobileNav();
    if (state.page !== 'home') { setPage('home'); setTimeout(scroll, 120); }
    else scroll();
  }

  /* ---------------- Bară de navigare (la scroll) ---------------- */
  function updateNavChrome() {
    const solid = (window.scrollY || 0) > 40 || state.page !== 'home';
    $('#nav').classList.toggle('solid', solid);
  }

  /* ---------------- Efecte de scroll ---------------- */
  let io;
  function setupObserver() {
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          if (e.target.hasAttribute('data-counter')) countUp(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    observeAll();
  }
  function observeAll() {
    document.querySelectorAll('.reveal, [data-counter]').forEach((el) => {
      if (!el.__obs) { el.__obs = true; io.observe(el); }
    });
  }
  function countUp(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------------- Delegare evenimente ---------------- */
  function onClick(e) {
    const t = e.target.closest('[data-nav],[data-section],[data-reserve],[data-add],[data-wish],[data-quickview],[data-lightbox],[data-testi],[data-cat],[data-shop-from-cart],[data-checkout],[data-close-cart],[data-inc],[data-dec],[data-remove],[data-close-qv],[data-qv-add],[data-qv-wish],[data-qv-stop],[data-close-lb],[data-lb-prev],[data-lb-next],[data-close-mobile],[data-bservice],[data-calday],[data-slot],[data-back],[data-next]');
    if (!t) return;

    if (t.hasAttribute('data-nav')) return setPage(t.getAttribute('data-nav'));
    if (t.hasAttribute('data-section')) return goSection(t.getAttribute('data-section'));
    if (t.hasAttribute('data-reserve')) {
      const s = SERVICES.find((x) => x.name === t.getAttribute('data-reserve'));
      state.bService = s; state.bStep = 1; state.bDone = false; return setPage('booking');
    }
    if (t.hasAttribute('data-add')) return addToCart(+t.getAttribute('data-add'));
    if (t.hasAttribute('data-wish')) return toggleWish(+t.getAttribute('data-wish'));
    if (t.hasAttribute('data-quickview')) { state.quickView = +t.getAttribute('data-quickview'); return renderQuickView(); }
    if (t.hasAttribute('data-lightbox')) { state.lightbox = +t.getAttribute('data-lightbox'); return renderLightbox(); }
    if (t.hasAttribute('data-testi')) { state.testimonial = +t.getAttribute('data-testi'); return renderTestimonial(); }

    if (t.hasAttribute('data-cat')) { state.shopCat = t.getAttribute('data-cat'); return renderShop(); }

    if (t.hasAttribute('data-shop-from-cart')) { state.cartOpen = false; renderCart(); return setPage('shop'); }
    if (t.hasAttribute('data-checkout')) { state.cartOpen = false; renderCart(); setPage('booking'); return; }
    if (t.hasAttribute('data-close-cart')) { state.cartOpen = false; return renderCart(); }
    if (t.hasAttribute('data-inc')) return changeQty(+t.getAttribute('data-inc'), 1);
    if (t.hasAttribute('data-dec')) return changeQty(+t.getAttribute('data-dec'), -1);
    if (t.hasAttribute('data-remove')) return removeItem(+t.getAttribute('data-remove'));

    if (t.hasAttribute('data-qv-stop')) { e.stopPropagation(); return; }
    if (t.hasAttribute('data-close-qv')) { state.quickView = null; return renderQuickView(); }
    if (t.hasAttribute('data-qv-add')) { const id = +t.getAttribute('data-qv-add'); addToCart(id); state.quickView = null; renderQuickView(); return; }
    if (t.hasAttribute('data-qv-wish')) return toggleWish(+t.getAttribute('data-qv-wish'));

    if (t.hasAttribute('data-close-lb')) { state.lightbox = null; return renderLightbox(); }
    if (t.hasAttribute('data-lb-prev')) { state.lightbox = (state.lightbox - 1 + GALLERY.length) % GALLERY.length; return renderLightbox(); }
    if (t.hasAttribute('data-lb-next')) { state.lightbox = (state.lightbox + 1) % GALLERY.length; return renderLightbox(); }

    if (t.hasAttribute('data-close-mobile')) { state.mobileNavOpen = false; return renderMobileNav(); }

    if (t.hasAttribute('data-bservice')) { state.bService = SERVICES.find((x) => x.name === t.getAttribute('data-bservice')); return renderBooking(); }
    if (t.hasAttribute('data-calday')) { state.bDate = +t.getAttribute('data-calday'); return renderBooking(); }
    if (t.hasAttribute('data-slot')) { state.bTime = t.getAttribute('data-slot'); return renderBooking(); }
    if (t.hasAttribute('data-back')) { if (state.bStep > 1) { state.bStep -= 1; renderBooking(); } return; }
    if (t.hasAttribute('data-next')) {
      if (!canProceed()) return;
      if (state.bStep === 3) { state.bDone = true; renderBooking(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      else { state.bStep += 1; renderBooking(); }
      return;
    }
  }

  function onInput(e) {
    const t = e.target;
    if (t.id === 'shopSearch') { state.search = t.value; renderShop(); return; }
    if (t.hasAttribute && t.hasAttribute('data-field')) {
      const f = t.getAttribute('data-field');
      lastFocusedField = f;
      state[f] = t.value;
      renderBooking();
    }
  }
  function onChange(e) {
    if (e.target.id === 'shopSort') { state.sort = e.target.value; renderShop(); }
  }

  /* ---------------- Init ---------------- */
  function init() {
    renderMarquee();
    renderServices();
    renderGallery();
    renderFeatured();
    renderInstagram();
    renderTestimonial();
    renderBag();

    document.addEventListener('click', onClick);
    document.addEventListener('input', onInput);
    document.addEventListener('change', onChange);
    $('#bagBtn').addEventListener('click', () => { state.cartOpen = true; renderCart(); });
    $('#burger').addEventListener('click', () => { state.mobileNavOpen = !state.mobileNavOpen; renderMobileNav(); });

    document.addEventListener('keydown', (e) => {
      if (state.lightbox != null) {
        if (e.key === 'Escape') { state.lightbox = null; renderLightbox(); }
        else if (e.key === 'ArrowLeft') { state.lightbox = (state.lightbox - 1 + GALLERY.length) % GALLERY.length; renderLightbox(); }
        else if (e.key === 'ArrowRight') { state.lightbox = (state.lightbox + 1) % GALLERY.length; renderLightbox(); }
      } else if (state.quickView != null && e.key === 'Escape') { state.quickView = null; renderQuickView(); }
      else if (state.cartOpen && e.key === 'Escape') { state.cartOpen = false; renderCart(); }
    });

    // scroll: bară de navigare (fără parallax — eroul nu mai are imagine)
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateNavChrome();
        ticking = false;
      });
    }, { passive: true });

    setupObserver();
    setTimeout(observeAll, 50);

    setInterval(() => {
      if (state.page === 'home') {
        state.testimonial = (state.testimonial + 1) % TESTIMONIALS.length;
        renderTestimonial();
      }
    }, 5500);

    updateNavChrome();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

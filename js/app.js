/* ============================================================
   MĂDĂLINA PANDURU — logica aplicației (vanilla JS, fără build)
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Date ---------------- */
  // Iconițe line-art per serviciu — fără numerotare, ca să nu pară pași în ordine.
  const SVG = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const ICON = {
    scissors: SVG('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>'),
    brush: SVG('<path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/>'),
    droplet: SVG('<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'),
    heart: SVG('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
    leaf: SVG('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'),
    feather: SVG('<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>')
  };
  const SERVICES = [
    { icon: ICON.scissors, name: 'Tuns & Scalp Detox', desc: 'Spălat, tuns și aranjat din perie, cu un ritual de detoxifiere a scalpului pentru un păr sănătos.', duration: '1H 15MIN', price: 'de la 270 lei' },
    { icon: ICON.brush, name: 'Vopsit Rădăcină', desc: 'Reîmprospătarea culorii la rădăcină cu produse profesionale care păstrează hidratarea naturală a părului.', duration: '2H 30MIN', price: '300 – 380 lei' },
    { icon: ICON.droplet, name: 'Vopsit Complet', desc: 'Colorare integrală pe același ton sau mai închis. Include consumabile, spălat și aranjat de zi.', duration: '3H', price: '400 – 500 lei' },
    { icon: ICON.heart, name: 'Coafat Mireasă', desc: 'Coafură de mireasă personalizată, cu probă opțională, creată să reziste impecabil întreaga zi.', duration: '1H 45MIN', price: '700 lei' },
    { icon: ICON.leaf, name: 'Tratament Nashi Argan', desc: 'Tratament profesional de hidratare intensă pentru toate tipurile de păr, cu efect de până la 2 luni.', duration: '1H 30MIN', price: '300 lei' },
    { icon: ICON.feather, name: 'SPA Hair Relax', desc: 'Curățare, exfoliere și masaj capilar de relaxare, cu tratament de hidratare pentru scalp și păr.', duration: '1H', price: '150 lei' }
  ];

  const PRODUCTS = [
    { id: 1, brand: 'NASHI ARGAN', name: 'Ulei Nashi Argan', cat: 'oils', price: 160, rating: 4.9, img: 'images/product-oil.jpeg', desc: 'Ulei de argan presat la rece care netezește, hrănește și adaugă strălucire, fără să încarce părul.' },
    { id: 2, brand: 'NASHI ARGAN', name: 'Mască Nashi Argan Kurl', cat: 'treatments', price: 130, rating: 4.8, img: 'images/product-mask.jpeg', desc: 'Mască de hidratare intensă pentru părul ondulat și creț — definește bucla și reduce frizz-ul.' },
    { id: 3, brand: 'NASHI ARGAN', name: 'Elixir de Hidratare', cat: 'treatments', price: 150, rating: 5.0, img: 'images/product-serum.jpeg', desc: 'Serul de finisare Nashi Argan pentru hidratare, suplețe și un păr vizibil mai mătăsos.' },
    { id: 4, brand: 'NORIU', name: 'NORIU Hidratare Leave-in', cat: 'styling', price: 95, rating: 4.7, img: 'images/product-mist.jpeg', desc: 'Spray leave-in pe bază de apă, cu textură ușoară, pentru hidratare și protecția culorii.' },
    { id: 5, brand: 'IKONIK', name: 'Șampon Scalp Ikonik', cat: 'cleanse', price: 90, rating: 4.8, img: 'images/product-shampoo.jpeg', desc: 'Șampon profesional pentru scalp, curăță delicat și echilibrează, fără SLES sau parabeni.' },
    { id: 6, brand: 'NASHI ARGAN', name: 'Spray Protecție Termică', cat: 'styling', price: 110, rating: 4.6, img: 'images/product-heat.jpeg', desc: 'Protejează părul la coafarea cu căldură și lasă un finisaj mătăsos, non-gras.' },
    { id: 7, brand: 'IKONIK', name: 'Loțiune Anticădere Ikonik', cat: 'treatments', price: 140, rating: 4.9, img: 'images/product-elixir.jpeg', desc: 'Loțiune de scalp care fortifică rădăcina și susține reducerea căderii părului.' },
    { id: 8, brand: 'NORIU', name: 'NORIU Restructurare', cat: 'treatments', price: 120, rating: 4.7, img: 'images/product-salt.jpeg', desc: 'Tratament restructurant din exterior spre interior, pentru rezistență și aspect sănătos al firului.' }
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
    { text: 'Recomand cu toată încrederea! Mădălina este foarte atentă la detalii și talentată în ceea ce face, iar rezultatul final a fost exact ceea ce îmi doream. Se vede că lucrează cu pasiune și dedicare.', name: 'Ștefania V.', role: 'RECENZIE VERIFICATĂ · MERO', photo: 'images/review-stefania.jpeg', stars: '★★★★★' },
    { text: 'Părul meu era uscat și deteriorat, iar după tratamentul de reparare moleculară parcă nu mai era același păr. Nu cred că l-am avut vreodată atât de strălucitor și sănătos.', name: 'Sandu N.', role: 'RECENZIE VERIFICATĂ · MERO', photo: 'images/review-sandu.jpeg', stars: '★★★★★' },
    { text: 'Super încântată de experiență. Mădălina este foarte finuță, lucrează atent, iar rezultatele sunt pe măsură!', name: 'Ana H.', role: 'RECENZIE VERIFICATĂ · MERO', photo: null, stars: '★★★★★' },
    { text: 'O experiență minunată, ca de obicei. Mulțumesc, Mădălina!', name: 'Diana S.', role: 'RECENZIE VERIFICATĂ · MERO', photo: 'images/review-diana.jpeg', stars: '★★★★★' }
  ];

  const INSTAGRAM = ['images/portrait-2.jpeg', 'images/portrait-3.jpeg', 'images/portrait-1.jpeg', 'images/portrait-4.jpeg', 'images/gallery-7.jpeg', 'images/gallery-5.jpeg'];
  const MARQUEE = ['Tuns & Coafat', 'Vopsit', 'Tratamente Nashi Argan', 'Coafat Mireasă', 'Scalp Detox'];
  const CATEGORIES = [['all', 'TOATE'], ['cleanse', 'CURĂȚARE'], ['treatments', 'TRATAMENTE'], ['styling', 'STYLING'], ['oils', 'ULEIURI']];
  const MERO_URL = 'https://mero.ro/p/madalina-panduru-hairstylist';

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
    coName: '',
    coEmail: '',
    coPhone: '',
    coDone: false,
    coError: false,
    coOrder: null
  };

  /* ---------------- Helpers ---------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const money = (n) => n + ' lei';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const prodById = (id) => PRODUCTS.find((p) => p.id === id);
  const wished = (id) => state.wishlist.includes(id);
  const cartCount = () => state.cart.reduce((a, c) => a + c.qty, 0);
  const starStr = (rating) => '★'.repeat(Math.round(rating));
  const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((s || '').trim());

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
        <div class="service-num">${s.icon}</div>
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
      <div class="insta-cell"><img src="${img}" alt="Mădălina Panduru pe Instagram"><div class="ov">◎</div></div>`).join('');
  }

  /* ---------------- Testimoniale ---------------- */
  function renderTestimonial() {
    const t = TESTIMONIALS[state.testimonial];
    $('#testiStage').innerHTML = `
      <div class="testi" key="${state.testimonial}">
        <div class="testi-stars">${t.stars}</div>
        <p class="testi-text">„${esc(t.text)}”</p>
        <div class="testi-author">
          <div class="testi-avatar">${t.photo ? `<img src="${t.photo}" alt="${esc(t.name)}">` : `<span class="testi-initial">${esc(t.name.trim().charAt(0))}</span>`}</div>
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

  /* ---------------- Rezervare (prin MERO) ---------------- */
  function renderBooking() {
    const body = $('#bookingBody');
    const services = SERVICES.map((s) => `
      <a class="bservice" href="${MERO_URL}" target="_blank" rel="noopener noreferrer">
        <div><div class="bservice-name">${esc(s.name)}</div><div class="bservice-dur">${s.duration}</div></div>
        <div class="bservice-right"><span class="bservice-price">${esc(s.price)}</span><span class="bservice-arrow">↗</span></div>
      </a>`).join('');
    body.innerHTML = `
      <div class="booking-head">
        <p class="eyebrow">REZERVĂRI</p>
        <h1>Rezervă-ți programarea</h1>
        <p class="booking-intro">Programările se fac online prin <strong>MERO</strong> — alegi serviciul, vezi disponibilitatea în timp real și primești confirmare și memento-uri automate.</p>
        <a class="btn btn-dark booking-cta" href="${MERO_URL}" target="_blank" rel="noopener noreferrer">REZERVĂ PE MERO ↗</a>
      </div>
      <div class="booking-grid">
        <div class="booking-panel">
          <h2>Serviciile noastre</h2>
          <p class="sub">Apasă un serviciu pentru a continua pe MERO și a alege data și ora.</p>
          <div class="bservices">${services}</div>
        </div>
        <div class="summary">
          <p class="summary-title">PROGRAMARE ONLINE</p>
          <div class="summary-row"><span class="k">Platformă</span><span class="v">MERO</span></div>
          <div class="summary-row"><span class="k">Confirmare</span><span class="v">Instant</span></div>
          <div class="summary-row"><span class="k">Memento-uri</span><span class="v">Automat</span></div>
          <a class="btn btn-gold booking-cta-side" href="${MERO_URL}" target="_blank" rel="noopener noreferrer">DESCHIDE MERO ↗</a>
          <p class="summary-note">Ești redirecționat(ă) către pagina oficială MERO a atelierului, unde îți finalizezi programarea în siguranță.</p>
        </div>
      </div>`;
  }

  /* ---------------- Finalizare comandă (produse) ---------------- */
  function renderCheckout() {
    const body = $('#checkoutBody');
    if (state.coDone) {
      const o = state.coOrder || { items: [], total: 0 };
      const rows = o.items.map((it) =>
        `<div class="confirm-row"><span class="k">${esc(it.name)} × ${it.qty}</span><span class="v">${money(it.price * it.qty)}</span></div>`).join('');
      body.innerHTML = `
        <div class="confirm">
          <div class="confirm-ring">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M14 25l7 7 14-15" stroke="#D6B980" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60"/></svg>
          </div>
          <h1>Comanda a fost<br>înregistrată</h1>
          <p>Mulțumim! Vei primi confirmarea și detaliile comenzii la <strong>${esc(state.coEmail)}</strong>.</p>
          <div class="confirm-card">
            ${rows}
            <div class="confirm-row"><span class="k">TOTAL</span><span class="v">${money(o.total)}</span></div>
          </div>
          <button class="btn btn-dark" style="margin-top:40px" data-nav="home">ÎNAPOI ACASĂ</button>
        </div>`;
      return;
    }
    if (state.cart.length === 0) {
      body.innerHTML = `
        <div class="confirm">
          <h1>Coșul tău este gol</h1>
          <p>Adaugă produse din magazin pentru a finaliza o comandă.</p>
          <button class="btn btn-dark" style="margin-top:30px" data-nav="shop">VEZI MAGAZINUL</button>
        </div>`;
      return;
    }
    const items = state.cart.map((c) => {
      const p = prodById(c.id);
      return `<div class="summary-row"><span class="k">${esc(p.name)} × ${c.qty}</span><span class="v">${money(p.price * c.qty)}</span></div>`;
    }).join('');
    const total = state.cart.reduce((a, c) => a + prodById(c.id).price * c.qty, 0);
    const err = state.coError ? '<p class="checkout-error">Te rugăm să introduci o adresă de email validă.</p>' : '';
    body.innerHTML = `
      <div class="booking-head">
        <p class="eyebrow">FINALIZARE COMANDĂ</p>
        <h1>Detaliile tale</h1>
      </div>
      <div class="booking-grid">
        <div class="booking-panel">
          <h2>Date de contact</h2>
          <p class="sub">Îți trimitem confirmarea și detaliile comenzii pe email.</p>
          <div class="field">
            <label><span class="field-label">NUME COMPLET</span><input data-cofield="coName" value="${esc(state.coName)}" placeholder="Numele tău"></label>
            <label><span class="field-label">ADRESĂ DE EMAIL *</span><input data-cofield="coEmail" type="email" value="${esc(state.coEmail)}" placeholder="tu@email.com"></label>
            <label><span class="field-label">TELEFON (OPȚIONAL)</span><input data-cofield="coPhone" value="${esc(state.coPhone)}" placeholder="07..."></label>
          </div>
          ${err}
          <div class="booking-nav">
            <button class="back-btn" data-nav="shop">← ÎNAPOI LA MAGAZIN</button>
            <button class="next-btn" data-checkout-submit>TRIMITE COMANDA</button>
          </div>
        </div>
        <div class="summary">
          <p class="summary-title">COMANDA TA</p>
          ${items}
          <div class="summary-total"><span class="k">Total</span><span class="v">${money(total)}</span></div>
          <p class="summary-note">Te contactăm pe email pentru confirmarea comenzii, detaliile de plată și livrare/ridicare.</p>
        </div>
      </div>`;
  }

  /* ---------------- Navigare ---------------- */
  function setPage(page) {
    state.page = page;
    state.mobileNavOpen = false;
    state.cartOpen = false;
    ['home', 'shop', 'booking', 'checkout'].forEach((p) => {
      $('#screen-' + p).hidden = p !== page;
    });
    if (page === 'shop') renderShop();
    if (page === 'booking') renderBooking();
    if (page === 'checkout') renderCheckout();
    renderMobileNav();
    renderCart();
    updateNavChrome();
    document.querySelectorAll('[data-link="shop"]').forEach((b) => b.classList.toggle('active', page === 'shop'));
    $('#stickyBook').style.display = (page === 'booking' || page === 'checkout') ? 'none' : '';
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
    // hero is light now, so the nav stays solid (dark text) on every screen
    $('#nav').classList.add('solid');
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
    const t = e.target.closest('[data-nav],[data-section],[data-reserve],[data-add],[data-wish],[data-quickview],[data-lightbox],[data-testi],[data-cat],[data-shop-from-cart],[data-checkout],[data-checkout-submit],[data-close-cart],[data-inc],[data-dec],[data-remove],[data-close-qv],[data-qv-add],[data-qv-wish],[data-qv-stop],[data-close-lb],[data-lb-prev],[data-lb-next],[data-close-mobile]');
    if (!t) return;

    if (t.hasAttribute('data-nav')) return setPage(t.getAttribute('data-nav'));
    if (t.hasAttribute('data-section')) return goSection(t.getAttribute('data-section'));
    if (t.hasAttribute('data-reserve')) return setPage('booking');
    if (t.hasAttribute('data-add')) return addToCart(+t.getAttribute('data-add'));
    if (t.hasAttribute('data-wish')) return toggleWish(+t.getAttribute('data-wish'));
    if (t.hasAttribute('data-quickview')) { state.quickView = +t.getAttribute('data-quickview'); return renderQuickView(); }
    if (t.hasAttribute('data-lightbox')) { state.lightbox = +t.getAttribute('data-lightbox'); return renderLightbox(); }
    if (t.hasAttribute('data-testi')) { state.testimonial = +t.getAttribute('data-testi'); return renderTestimonial(); }

    if (t.hasAttribute('data-cat')) { state.shopCat = t.getAttribute('data-cat'); return renderShop(); }

    if (t.hasAttribute('data-shop-from-cart')) { state.cartOpen = false; renderCart(); return setPage('shop'); }
    if (t.hasAttribute('data-checkout')) { state.cartOpen = false; state.coDone = false; state.coError = false; renderCart(); setPage('checkout'); return; }
    if (t.hasAttribute('data-checkout-submit')) {
      if (!isEmail(state.coEmail)) { state.coError = true; renderCheckout(); return; }
      const order = state.cart.map((c) => { const p = prodById(c.id); return { name: p.name, qty: c.qty, price: p.price }; });
      state.coOrder = { items: order, total: state.cart.reduce((a, c) => a + prodById(c.id).price * c.qty, 0) };
      state.coDone = true;
      state.coError = false;
      state.cart = [];
      renderBag();
      renderCheckout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
  }

  function onInput(e) {
    const t = e.target;
    if (t.id === 'shopSearch') { state.search = t.value; renderShop(); return; }
    // bind checkout fields without re-render (keeps input focus)
    if (t.getAttribute && t.getAttribute('data-cofield')) { state[t.getAttribute('data-cofield')] = t.value; }
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

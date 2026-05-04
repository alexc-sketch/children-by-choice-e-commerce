// CbyC Shop — Shared Interactivity

document.addEventListener('DOMContentLoaded', () => {

  // --- Cart Drawer ---
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartTriggers = document.querySelectorAll('[data-cart-trigger]');

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    if (cartDrawer) cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    if (cartDrawer) cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartTriggers.forEach(t => t.addEventListener('click', openCart));
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // --- Add to Cart ---
  const addToCartBtns = document.querySelectorAll('[data-add-cart]');
  const cartCountEl = document.getElementById('cartCount');
  let cartCount = 1;

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cartCount++;
      if (cartCountEl) cartCountEl.textContent = cartCount;
      showToast('✓ Added to cart!');
      setTimeout(openCart, 400);
    });
  });

  // --- Toast ---
  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  // --- Quantity Selectors ---
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.qty-input') || btn.parentElement.querySelector('span');
      if (!input) return;
      let val = parseInt(input.textContent || input.value) || 1;
      if (btn.dataset.dir === 'up') val = Math.min(val + 1, 99);
      if (btn.dataset.dir === 'down') val = Math.max(val - 1, 1);
      if (input.tagName === 'INPUT') input.value = val;
      else input.textContent = val;
    });
  });

  // --- Product Tabs ---
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });

  // --- Colour Swatches ---
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.closest('.colour-swatches').querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
    });
  });

  // --- Size Buttons ---
  document.querySelectorAll('.size-btn:not(.out-of-stock)').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.size-buttons').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- Product Thumbnails ---
  document.querySelectorAll('.product-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumb.closest('.product-gallery').querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // --- Filter Checkboxes (visual only) ---
  document.querySelectorAll('.filter-option input').forEach(cb => {
    cb.addEventListener('change', () => {
      const count = document.querySelector('.catalog-count');
      if (count) {
        const checked = document.querySelectorAll('.filter-option input:checked').length;
        count.textContent = checked > 0 ? `Showing filtered results` : `Showing 12 products`;
      }
    });
  });

  // --- Mobile Filter Toggle ---
  const mobileFilterBtn = document.getElementById('mobileFilterBtn');
  const filterSidebar = document.querySelector('.filter-sidebar');
  if (mobileFilterBtn && filterSidebar) {
    mobileFilterBtn.addEventListener('click', () => {
      filterSidebar.style.display = filterSidebar.style.display === 'block' ? 'none' : 'block';
    });
  }

  // --- Checkout Form Validation (basic) ---
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'confirmation.html';
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.classList.remove('open');
      });
      // Toggle clicked
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        trigger.nextElementSibling.classList.add('open');
      }
    });
  });

  // --- Merchandise Dropdown Toggle ---
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-dropdown-trigger');
    const insideDropdown = e.target.closest('.nav-dropdown');
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      if (d !== insideDropdown) d.classList.remove('open');
    });
    if (trigger) {
      e.preventDefault();
      trigger.closest('.nav-dropdown').classList.toggle('open');
    } else if (!insideDropdown) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.shop-nav-links a, .nav-dropdown-trigger').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

});

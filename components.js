// Shared header and footer components

const HEADER_HTML = `
<!-- Utility Bar -->
<div class="utility-bar">
  <div class="container">
    <div class="utility-left">
      <a href="#" class="quick-exit">✕ Quick Exit</a>
      <a href="#">🗑 Clear Browser History</a>
    </div>
    <div class="utility-right">
      <a href="https://www.childrenbychoice.org.au/">← Back to Main Site</a>
      <a href="account.html">Sign In</a>
    </div>
  </div>
</div>

<!-- Main Header -->
<header class="site-header">
  <div class="container">
    <a href="index.html" class="site-logo">
      <div class="logo-text">CHILDREN<br>BY <span>CHOICE</span></div>
    </a>
    <div class="header-actions">
      <button class="header-icon-btn" id="searchToggle">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Search
      </button>
      <a href="account.html" class="header-icon-btn">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Account
      </a>
      <button class="header-icon-btn" data-cart-trigger>
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        Cart <span class="cart-count" id="cartCount">1</span>
      </button>
    </div>
  </div>
</header>

<!-- Shop Navigation -->
<nav class="shop-nav">
  <div class="container">
    <div class="shop-nav-links">
      <!-- Merchandise Dropdown -->
      <div class="nav-dropdown">
        <a href="shop.html" class="nav-dropdown-trigger">
          Merchandise
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-left:4px;"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="nav-dropdown-menu">
          <a href="shop.html?cat=tshirts" class="nav-dropdown-item">T-Shirts</a>
          <a href="shop.html?cat=accessories" class="nav-dropdown-item">Accessories</a>
          <a href="shop.html?cat=posters" class="nav-dropdown-item">Posters &amp; Postcards</a>
          <div class="nav-dropdown-divider"></div>
          <a href="categories.html" class="nav-dropdown-item nav-dropdown-item-all">View All Categories →</a>
          <a href="shop.html" class="nav-dropdown-item nav-dropdown-item-all">Shop All Merch →</a>
        </div>
      </div>
      <a href="resources.html" class="resources-link">Resources</a>
    </div>
    <div class="shop-search">
      <input type="text" placeholder="Search products...">
      <button>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
    </div>
  </div>
</nav>
`;

const CART_DRAWER_HTML = `
<!-- Cart Overlay & Drawer -->
<div class="cart-overlay" id="cartOverlay"></div>
<div class="cart-drawer" id="cartDrawer">
  <div class="cart-drawer-header">
    <h3>Your Cart (1)</h3>
    <button class="cart-close" id="cartClose">✕</button>
  </div>
  <div class="cart-items">
    <div class="cart-item">
      <div class="cart-item-img img-placeholder">👕</div>
      <div class="cart-item-details">
        <div class="cart-item-title">CbyC White T-Shirt — Liberal Jane</div>
        <div class="cart-item-variant">Size: M · Colour: White</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-dir="down">−</button>
          <input class="qty-input" value="1" type="number" min="1">
          <button class="qty-btn" data-dir="up">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
        <div class="cart-item-price">$45.00</div>
        <button class="cart-item-remove">🗑</button>
      </div>
    </div>
  </div>
  <div class="cart-footer">
    <div class="cart-totals">
      <div class="cart-total-row"><span>Subtotal</span><span>$45.00</span></div>
      <div class="cart-total-row"><span>Shipping</span><span>Calculated at checkout</span></div>
      <div class="cart-total-row grand"><span>Estimated Total</span><span>$45.00</span></div>
    </div>
    <a href="checkout.html" class="btn btn-primary btn-full btn-lg">Proceed to Checkout</a>
    <div style="text-align:center;margin-top:12px;">
      <a href="shop.html" style="font-size:0.85rem;color:var(--purple-mid);text-decoration:underline;">Continue Shopping</a>
    </div>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-logo">
        <div class="logo-text">CHILDREN<br>BY <span>CHOICE</span></div>
        <p>An independent non-profit Queensland-based organisation championing reproductive rights for over 50 years. Funded by the Queensland Government.</p>
        <div class="footer-social">
          <a href="#" title="Facebook">f</a>
          <a href="#" title="Instagram">in</a>
          <a href="#" title="Twitter">𝕏</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Shop</h5>
        <ul>
          <li><a href="shop.html">All Merchandise</a></li>
          <li><a href="shop.html?cat=tshirts">T-Shirts</a></li>
          <li><a href="shop.html?cat=accessories">Accessories</a></li>
          <li><a href="shop.html?cat=posters">Posters & Postcards</a></li>
          <li><a href="resources.html">Professional Resources</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Account</h5>
        <ul>
          <li><a href="account.html">Sign In</a></li>
          <li><a href="account.html">Register</a></li>
          <li><a href="account.html">My Orders</a></li>
          <li><a href="account.html">Downloads</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Help</h5>
        <ul>
          <li><a href="policy.html">Shipping &amp; Returns</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="https://www.childrenbychoice.org.au/get-in-touch/">Contact Us</a></li>
          <li><a href="https://www.childrenbychoice.org.au/">Main Website</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© Children by Choice Association Incorporated 2025. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </div>
  <div class="footer-acknowledgement">
    <div class="container">
      Children by Choice acknowledges Aboriginal and Torres Strait Islander peoples as the Traditional Custodians of Country throughout Australia and the continuing connection to lands, waters and communities. In particular, we acknowledge the country north and south of the Brisbane River, as the home of both the Turrbul and Jagera nations. We pay our respect to them, their culture, and to their Elders both past and present.
    </div>
  </div>
</footer>
`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;

  const cartEl = document.getElementById('cart-components');
  if (cartEl) cartEl.innerHTML = CART_DRAWER_HTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
});

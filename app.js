/* ==========================================================================
   PINKYSH SNEAKERS - INTERACTIVE APPLICATION LOGIC
   ========================================================================== */

// --- Sneaker Catalog Database ---
const SNEAKERS_DATA = {
  'prod-1': {
    id: 'prod-1',
    name: 'Sweet Heart Sneakers',
    price: 3500,
    oldPrice: 4500,
    badge: 'Best Seller',
    image: 'assets/prod_sweet_heart.jpg',
    category: 'pink-collection bestseller',
    rating: 5,
    reviews: 120,
    description: 'Sweet, lightweight, and engineered for maximum charm. Features lovely satin bow lacing, delicate embroidered pink hearts, and cloud-soft memory cushion support for all-day comfort.',
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Baby Pink', 'Pure White', 'Soft Mauve'],
    thumbnails: ['assets/prod_sweet_heart.jpg', 'assets/hero_hd.jpg', 'assets/sale_crop.jpg']
  },
  'prod-2': {
    id: 'prod-2',
    name: 'Blush Runner',
    price: 3800,
    oldPrice: 4800,
    badge: 'New',
    image: 'assets/prod_blush_runner.jpg',
    category: 'pink-collection running new',
    rating: 5,
    reviews: 95,
    description: 'Sporty retro silhouette with double cushioned soles. Designed with soft breathable pink mesh and pastel gradient accents. Perfect for workouts, campus walking, or cute casual fits.',
    sizes: [36, 37, 38, 39, 40],
    colors: ['Blush Pink', 'Soft Peach', 'Warm Cream'],
    thumbnails: ['assets/prod_blush_runner.jpg', 'assets/pink_pastel_runner.jpg', 'assets/hero_hd.jpg']
  },
  'prod-3': {
    id: 'prod-3',
    name: 'Rose Petal',
    price: 3200,
    oldPrice: 4200,
    badge: '',
    image: 'assets/prod_rose_petal.jpg',
    category: 'pink-collection casual',
    rating: 5,
    reviews: 78,
    description: 'Low-top skater court kick adorned with cherry blossom pastel flower stitch and sweet pink lining. Matches beautifully with jeans, tennis skirts, or cozy loungewear.',
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Rose Petal', 'Pearl White', 'Lavender Tint'],
    thumbnails: ['assets/prod_rose_petal.jpg', 'assets/new_arrivals_crop.jpg', 'assets/pink_classic_sport.jpg']
  },
  'prod-4': {
    id: 'prod-4',
    name: 'Pretty Girl Vibes',
    price: 4000,
    oldPrice: 5200,
    badge: '',
    image: 'assets/prod_pretty_girl.jpg',
    category: 'pink-collection casual bestseller',
    rating: 5,
    reviews: 101,
    description: 'Elevated chunky retro sneaker with delicate metallic charms and ultra-comfy high arch support. The ultimate girl-boss statement kick that turns heads everywhere.',
    sizes: [37, 38, 39, 40],
    colors: ['Pink & White', 'Midnight Pink'],
    thumbnails: ['assets/prod_pretty_girl.jpg', 'assets/pink_streetwear.jpg', 'assets/hero_hd.jpg']
  },
  'prod-5': {
    id: 'prod-5',
    name: 'Floral Blossom Court',
    price: 3600,
    oldPrice: 4600,
    badge: 'New Drop',
    image: 'assets/new_arrivals_crop.jpg',
    category: 'new pink-collection',
    rating: 5,
    reviews: 64,
    description: 'Enchanting floral details on crisp pastel pink leather.',
    sizes: [36, 37, 38, 39],
    colors: ['Blossom Pink', 'Ivory'],
    thumbnails: ['assets/new_arrivals_crop.jpg', 'assets/prod_rose_petal.jpg']
  },
  'prod-6': {
    id: 'prod-6',
    name: 'Retro Heart Dunk',
    price: 3400,
    oldPrice: 4900,
    badge: '30% OFF',
    image: 'assets/sale_crop.jpg',
    category: 'pink-collection bestseller',
    rating: 5,
    reviews: 112,
    description: 'High energy skate silhouette with embossed side hearts.',
    sizes: [37, 38, 39, 40, 41],
    colors: ['Bubblegum Pink', 'White Heart'],
    thumbnails: ['assets/sale_crop.jpg', 'assets/prod_sweet_heart.jpg']
  },
  'prod-7': {
    id: 'prod-7',
    name: 'Cloud Chunky Platform',
    price: 4500,
    oldPrice: 5800,
    badge: 'New',
    image: 'assets/prod_cloud_chunky_beige.jpg',
    category: 'chunky-platform casual new',
    rating: 5,
    reviews: 89,
    description: 'Ultra-thick platform sole meets luxurious beige suede. The "FASHION STARS SHOE" label and ribbon lacing give this chunky babe serious street cred. Stands 7cm tall for instant height boost with all-day cloud comfort.',
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Warm Beige', 'Ivory Cream', 'Deep Brown'],
    thumbnails: ['assets/prod_cloud_chunky_beige.jpg', 'assets/pink_air_sneaker.jpg', 'assets/pink_classic_sport.jpg']
  },
  'prod-8': {
    id: 'prod-8',
    name: 'Sun Charm Sneakers',
    price: 4200,
    oldPrice: 5500,
    badge: 'Best Seller',
    image: 'assets/prod_sun_charm_white.jpg',
    category: 'white-collection casual bestseller',
    rating: 5,
    reviews: 143,
    description: 'Crisp all-white chunky runner with an iconic dangling 14K gold-tone sun charm. Breathable mesh upper, sculptural wavy sole, and a side charm detail that makes every step magical. The ultimate minimal-glam statement sneaker.',
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Pure White', 'Soft Ivory', 'Gold Charm'],
    thumbnails: ['assets/prod_sun_charm_white.jpg', 'assets/prod_sun_charm_closeup.jpg', 'assets/pink_classic_sport.jpg']
  }
};

// --- Application State ---
// Initialize with 3 cart items matching screenshot badge (3)
let cart = [
  {
    productId: 'prod-1',
    name: 'Sweet Heart Sneakers',
    price: 3500,
    image: 'assets/prod_sweet_heart.jpg',
    size: '37',
    color: 'Baby Pink',
    quantity: 1
  },
  {
    productId: 'prod-2',
    name: 'Blush Runner',
    price: 3800,
    image: 'assets/prod_blush_runner.jpg',
    size: '38',
    color: 'Blush Pink',
    quantity: 1
  },
  {
    productId: 'prod-3',
    name: 'Rose Petal',
    price: 3200,
    image: 'assets/prod_rose_petal.jpg',
    size: '37',
    color: 'Rose Petal',
    quantity: 1
  }
];

// Wishlist items matching screenshot badge (2)
let wishlist = ['prod-1', 'prod-3'];

let activeDiscount = 0.10; // default 10% coupon or 30% on sale
let appliedCouponCode = 'PINK30';
let activeQuickViewId = 'prod-1';
let currentSlide = 0;

// --- DOM Loaded Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateWishlistUI();
  setupEventListeners();
  setupStickyHeader();
  setupHeroSlides();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Cart drawer triggers
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);

  // Wishlist drawer triggers
  const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', openWishlist);

  // Search input live filtering
  const searchInput = document.getElementById('sneakerSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', handleSearchInput);
  }
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
      closeSearchDropdown();
    });
  }

  // Close search dropdown on outside click
  document.addEventListener('click', (e) => {
    const searchBoxWrapper = document.getElementById('searchBoxWrapper');
    if (searchBoxWrapper && !searchBoxWrapper.contains(e.target)) {
      closeSearchDropdown();
    }
  });

  // Category Pills
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const category = pill.getAttribute('data-category');
      filterCategory(category);
    });
  });

  // Mobile menu button
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
    });
  }
  if (closeMobileNavBtn && mobileNavDrawer) {
    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
    });
  }

  // Hero dots click
  const heroDots = document.querySelectorAll('.hero-dot');
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setHeroSlide(index);
    });
  });

  // Account button
  const accountBtn = document.getElementById('accountBtn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      showToast('Welcome back, Sneaker Babe! 💖 (Signed in as VIP member)', '👤');
    });
  }
}

// --- Sticky Header Styling ---
function setupStickyHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Hero Slider / Dot Switcher ---
function setupHeroSlides() {
  const heroImages = [
    'assets/hero_hd.jpg',
    'assets/pink_air_sneaker.jpg',
    'assets/pink_pastel_runner.jpg'
  ];

  const heroQuotes = [
    { text: 'Good Shoes<br>Brighter Days', heart: '♡' },
    { text: 'Pink Magic<br>Every Step', heart: '✨' },
    { text: 'Sweet Kicks<br>Big Vibes', heart: '💖' }
  ];

  window.setHeroSlide = (slideIndex) => {
    currentSlide = slideIndex;
    const heroImg = document.getElementById('heroSneakerImg');
    const sticker = document.getElementById('heroSticker');
    const dots = document.querySelectorAll('.hero-dot');

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === slideIndex);
    });

    if (heroImg) {
      heroImg.style.opacity = '0.5';
      setTimeout(() => {
        heroImg.src = heroImages[slideIndex % heroImages.length];
        heroImg.style.opacity = '1';
      }, 150);
    }

    if (sticker) {
      const q = heroQuotes[slideIndex % heroQuotes.length];
      sticker.querySelector('.quote-text').innerHTML = q.text;
      sticker.querySelector('.quote-heart').innerHTML = q.heart;
    }
  };

  // Optional subtle auto slide every 6 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    setHeroSlide(currentSlide);
  }, 6000);
}

// --- Category Filtering ---
function filterCategory(category) {
  const productCards = document.querySelectorAll('.product-card');
  
  // Highlight corresponding pill
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => {
    if (p.getAttribute('data-category') === category) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  productCards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.96)';
      setTimeout(() => {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.display = 'none';
    }
  });
}

// --- Live Search ---
function handleSearchInput(e) {
  const query = e.target.value.trim().toLowerCase();
  const searchDropdown = document.getElementById('searchDropdown');
  const searchDropdownList = document.getElementById('searchDropdownList');
  const clearBtn = document.getElementById('searchClearBtn');

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }

  if (query.length < 2) {
    closeSearchDropdown();
    return;
  }

  const matches = Object.values(SNEAKERS_DATA).filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    searchDropdownList.innerHTML = `<div style="padding: 12px; font-size: 0.82rem; color: #7f6475; text-align: center;">No cute sneakers found for "${query}" 🌸</div>`;
  } else {
    searchDropdownList.innerHTML = matches.map(item => `
      <div class="search-item" onclick="openQuickView('${item.id}'); closeSearchDropdown();">
        <img src="${item.image}" alt="${item.name}">
        <div class="search-item-info">
          <h4>${item.name}</h4>
          <span>KSh ${item.price.toLocaleString()}</span>
        </div>
      </div>
    `).join('');
  }

  searchDropdown.classList.add('open');
}

function closeSearchDropdown() {
  const searchDropdown = document.getElementById('searchDropdown');
  if (searchDropdown) searchDropdown.classList.remove('open');
}

// --- Cart Operations ---
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderCart() {
  const cartList = document.getElementById('cartItemsList');
  const cartBadge = document.getElementById('cartBadgeCount');
  const drawerCount = document.getElementById('cartDrawerCount');
  const subtotalText = document.getElementById('cartSubtotalText');
  const discountText = document.getElementById('cartDiscountText');
  const discountRow = document.getElementById('discountRow');
  const totalText = document.getElementById('cartTotalText');
  const mpesaModalTotal = document.getElementById('mpesaModalTotal');
  const trackerFill = document.getElementById('trackerFill');
  const trackerText = document.getElementById('trackerText');

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.innerText = totalQty;
  if (drawerCount) drawerCount.innerText = `${totalQty} item${totalQty === 1 ? '' : 's'}`;

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #7f6475;">
        <span style="font-size: 3rem; display: block; margin-bottom: 8px;">🛍️</span>
        <h4 style="font-weight: 700; color: #201820; margin-bottom: 4px;">Your bag is empty!</h4>
        <p style="font-size: 0.85rem; margin-bottom: 16px;">Add some cute kicks to match your vibe.</p>
        <button class="btn btn-primary btn-pill-small" onclick="closeCart(); location.href='#shop';">Shop Featured Sneakers</button>
      </div>
    `;
    if (subtotalText) subtotalText.innerText = 'KSh 0';
    if (discountRow) discountRow.style.display = 'none';
    if (totalText) totalText.innerText = 'KSh 0';
    if (mpesaModalTotal) mpesaModalTotal.innerText = 'KSh 0';
    if (trackerFill) trackerFill.style.width = '0%';
    return;
  }

  cartList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Size: EU ${item.size} | Color: ${item.color}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">KSh ${(item.price * item.quantity).toLocaleString()}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">×</button>
    </div>
  `).join('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = Math.round(subtotal * activeDiscount);
  const finalTotal = subtotal - discount;

  if (subtotalText) subtotalText.innerText = `KSh ${subtotal.toLocaleString()}`;
  if (discountRow) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountText.innerText = `- KSh ${discount.toLocaleString()}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalText) totalText.innerText = `KSh ${finalTotal.toLocaleString()}`;
  if (mpesaModalTotal) mpesaModalTotal.innerText = `KSh ${finalTotal.toLocaleString()}`;

  // Free shipping tracker (threshold: KSh 5,000)
  const freeThreshold = 5000;
  if (subtotal >= freeThreshold) {
    if (trackerFill) trackerFill.style.width = '100%';
    if (trackerText) trackerText.innerHTML = `🎉 <strong>Hooray!</strong> You have unlocked <strong>FREE Nationwide Delivery</strong>!`;
  } else {
    const diff = freeThreshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    if (trackerFill) trackerFill.style.width = `${pct}%`;
    if (trackerText) trackerText.innerHTML = `You are <strong id="trackerAmount">KSh ${diff.toLocaleString()}</strong> away from <strong>FREE DELIVERY!</strong> 🎉`;
  }
}

function updateCartQty(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast('Item removed from shopping bag', '🗑️');
    }
    renderCart();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    const name = cart[index].name;
    cart.splice(index, 1);
    renderCart();
    showToast(`Removed "${name}" from bag`, '🗑️');
  }
}

function addToCart(productId, size = '37', color = 'Baby Pink', qty = 1) {
  const prod = SNEAKERS_DATA[productId];
  if (!prod) return;

  const existingIndex = cart.findIndex(item => item.productId === productId && item.size === size && item.color === color);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      productId: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      size: size,
      color: color,
      quantity: qty
    });
  }

  renderCart();
  showToast(`Added ${prod.name} (EU ${size}) to your bag! 💖`, '🛍️');
  openCart();
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  const alert = document.getElementById('promoDiscountAlert');

  if (code === 'PINK30') {
    activeDiscount = 0.30;
    appliedCouponCode = 'PINK30';
    if (alert) {
      alert.style.display = 'block';
      alert.innerText = '✨ 30% OFF applied on selected items!';
    }
    renderCart();
    showToast('Promo code PINK30 applied! Saved 30% 🎉', '💖');
  } else if (code === 'PINK500') {
    activeDiscount = 0.15;
    appliedCouponCode = 'PINK500';
    if (alert) {
      alert.style.display = 'block';
      alert.innerText = '✨ Welcome VIP discount applied!';
    }
    renderCart();
    showToast('VIP Discount code applied!', '🎀');
  } else {
    showToast('Invalid promo code. Try "PINK30" for 30% OFF!', '⚠️');
  }
}

// --- Wishlist Operations ---
function openWishlist() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  renderWishlist();
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlist() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const prod = SNEAKERS_DATA[productId];
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from wishlist ♡`, '💔');
  } else {
    wishlist.push(productId);
    showToast(`Saved ${prod ? prod.name : 'sneakers'} to your wishlist! ♡`, '💖');
  }
  updateWishlistUI();
  renderWishlist();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadgeCount');
  const drawerBadge = document.getElementById('wishlistDrawerCount');
  if (badge) badge.innerText = wishlist.length;
  if (drawerBadge) drawerBadge.innerText = `${wishlist.length} item${wishlist.length === 1 ? '' : 's'}`;

  // Update card buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const pid = btn.getAttribute('data-product-id');
    if (wishlist.includes(pid)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderWishlist() {
  const list = document.getElementById('wishlistItemsList');
  if (!list) return;

  if (wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #7f6475;">
        <span style="font-size: 3rem; display: block; margin-bottom: 8px;">♡</span>
        <h4 style="font-weight: 700; color: #201820; margin-bottom: 4px;">Your Wishlist is Empty</h4>
        <p style="font-size: 0.85rem; margin-bottom: 16px;">Tap the heart icon on any sneakers to save them for later.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = wishlist.map(pid => {
    const item = SNEAKERS_DATA[pid];
    if (!item) return '';
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-price">KSh ${item.price.toLocaleString()}</span>
          <div style="margin-top: 8px;">
            <button class="btn btn-pill-small" onclick="addToCart('${item.id}'); toggleWishlist('${item.id}');">
              Move to Bag 🛍️
            </button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="toggleWishlist('${item.id}')" title="Remove">×</button>
      </div>
    `;
  }).join('');
}

function moveAllWishlistToCart() {
  if (wishlist.length === 0) {
    showToast('Your wishlist is empty!', '♡');
    return;
  }
  wishlist.forEach(pid => {
    const prod = SNEAKERS_DATA[pid];
    if (prod) {
      cart.push({
        productId: prod.id,
        name: prod.name,
        price: prod.price,
        image: prod.image,
        size: '37',
        color: prod.colors[0],
        quantity: 1
      });
    }
  });
  wishlist = [];
  updateWishlistUI();
  renderCart();
  closeWishlist();
  openCart();
  showToast('Moved all wishlisted kicks to your bag! 💖', '🛍️');
}

// Attach wishlist click listeners to card buttons
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.wishlist-btn');
  if (btn) {
    e.stopPropagation();
    const pid = btn.getAttribute('data-product-id');
    toggleWishlist(pid);
  }
});

// --- Quick View Modal ---
function openQuickView(productId) {
  const prod = SNEAKERS_DATA[productId];
  if (!prod) return;

  activeQuickViewId = productId;
  const overlay = document.getElementById('quickViewOverlay');
  const mainImg = document.getElementById('qvMainImage');
  const badge = document.getElementById('qvBadge');
  const title = document.getElementById('qvTitle');
  const price = document.getElementById('qvPrice');
  const oldPrice = document.getElementById('qvOldPrice');
  const desc = document.getElementById('qvDesc');
  const ratingText = document.getElementById('qvRatingText');
  const btnPrice = document.getElementById('qvBtnPrice');
  const thumbsContainer = document.getElementById('qvThumbnails');
  const sizeRow = document.getElementById('qvSizeRow');
  const colorsRow = document.getElementById('qvColorsRow');
  const selectedColorText = document.getElementById('qvSelectedColor');

  if (mainImg) mainImg.src = prod.image;
  if (badge) {
    badge.innerText = prod.badge || 'Featured';
    badge.style.display = prod.badge ? 'block' : 'none';
  }
  if (title) title.innerText = prod.name;
  if (price) price.innerText = `KSh ${prod.price.toLocaleString()}`;
  if (oldPrice) oldPrice.innerText = `KSh ${prod.oldPrice.toLocaleString()}`;
  if (btnPrice) btnPrice.innerText = `KSh ${prod.price.toLocaleString()}`;
  if (desc) desc.innerText = prod.description;
  if (ratingText) ratingText.innerText = `4.9 / 5.0 (${prod.reviews} verified reviews)`;

  // Render thumbnails
  if (thumbsContainer && prod.thumbnails) {
    thumbsContainer.innerHTML = prod.thumbnails.map((t, idx) => `
      <div class="qv-thumb ${idx === 0 ? 'active' : ''}" onclick="selectQvThumb(this, '${t}')">
        <img src="${t}" alt="${prod.name}">
      </div>
    `).join('');
  }

  // Render sizes
  if (sizeRow && prod.sizes) {
    sizeRow.innerHTML = prod.sizes.map((s, idx) => `
      <button class="size-pill ${idx === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>
    `).join('');
  }

  // Render colors
  if (colorsRow && prod.colors) {
    selectedColorText.innerText = prod.colors[0];
    colorsRow.innerHTML = prod.colors.map((c, idx) => `
      <span class="color-swatch swatch-pink ${idx === 0 ? 'active' : ''}" title="${c}" onclick="selectQvColor(this, '${c}')"></span>
    `).join('');
  }

  document.getElementById('qvQty').value = 1;

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickView() {
  const overlay = document.getElementById('quickViewOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function selectQvThumb(el, src) {
  document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const mainImg = document.getElementById('qvMainImage');
  if (mainImg) mainImg.src = src;
}

function selectSize(btn) {
  document.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectQvColor(el, colorName) {
  document.querySelectorAll('.qv-colors-row .color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const text = document.getElementById('qvSelectedColor');
  if (text) text.innerText = colorName;
}

function incrementQvQty() {
  const input = document.getElementById('qvQty');
  let val = parseInt(input.value) || 1;
  if (val < 10) input.value = val + 1;
}

function decrementQvQty() {
  const input = document.getElementById('qvQty');
  let val = parseInt(input.value) || 1;
  if (val > 1) input.value = val - 1;
}

function addCurrentQvToCart() {
  const prod = SNEAKERS_DATA[activeQuickViewId];
  if (!prod) return;

  const activeSizePill = document.querySelector('.size-pill.active');
  const size = activeSizePill ? activeSizePill.innerText : '37';
  const color = document.getElementById('qvSelectedColor').innerText;
  const qty = parseInt(document.getElementById('qvQty').value) || 1;

  addToCart(prod.id, size, color, qty);
  closeQuickView();
}

function orderCurrentQvOnWhatsApp() {
  const prod = SNEAKERS_DATA[activeQuickViewId];
  if (!prod) return;
  const activeSizePill = document.querySelector('.size-pill.active');
  const size = activeSizePill ? activeSizePill.innerText : '37';
  const color = document.getElementById('qvSelectedColor').innerText;

  const message = encodeURIComponent(`Hi Pinkysh Sneakers! 💕 I'd like to order:
• Shoe: ${prod.name}
• Size: EU ${size}
• Color: ${color}
• Price: KSh ${prod.price.toLocaleString()}
Please confirm delivery to my location!`);
  window.open(`https://wa.me/254790123456?text=${message}`, '_blank');
}

// --- WhatsApp Ordering Dialog / Checkout ---
function openWhatsAppModal() {
  const message = encodeURIComponent(`Hi Pinkysh Sneakers Kenya! 💕 I'm browsing your website and I'd like some help picking the right size and placing my sneaker order!`);
  window.open(`https://wa.me/254790123456?text=${message}`, '_blank');
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add sneakers first.', '⚠️');
    return;
  }
  const itemsText = cart.map(i => `• ${i.name} (EU ${i.size}, ${i.color}) x${i.quantity} = KSh ${(i.price * i.quantity).toLocaleString()}`).join('\n');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = Math.round(subtotal * activeDiscount);
  const total = subtotal - discount;

  const message = encodeURIComponent(`Hi Pinkysh! 💕 I would like to checkout my order:
${itemsText}

Subtotal: KSh ${subtotal.toLocaleString()}
Discount: - KSh ${discount.toLocaleString()}
Total Amount: KSh ${total.toLocaleString()}

Please send me the M-Pesa Till / Paybill number for prompt delivery!`);
  window.open(`https://wa.me/254790123456?text=${message}`, '_blank');
}

// --- M-Pesa Checkout Flow ---
function openMpesaModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add sneakers first.', '⚠️');
    return;
  }
  closeCart();
  const overlay = document.getElementById('mpesaOverlay');
  const form = document.getElementById('mpesaCheckoutForm');
  const stk = document.getElementById('stkPushScreen');
  const success = document.getElementById('orderSuccessScreen');

  if (form) form.style.display = 'block';
  if (stk) stk.style.display = 'none';
  if (success) success.style.display = 'none';

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMpesaModal() {
  const overlay = document.getElementById('mpesaOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleMpesaSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('customerPhone').value;
  const name = document.getElementById('customerName').value;
  const form = document.getElementById('mpesaCheckoutForm');
  const stk = document.getElementById('stkPushScreen');
  const success = document.getElementById('orderSuccessScreen');
  const timer = document.getElementById('stkTimer');

  form.style.display = 'none';
  stk.style.display = 'block';

  let countdown = 3;
  timer.innerText = `Sending STK Prompt to 0${phone}... (${countdown}s)`;

  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      timer.innerText = `Please enter PIN on your handset... (${countdown}s)`;
    } else {
      clearInterval(interval);
      stk.style.display = 'none';
      success.style.display = 'block';
      showToast(`Payment Confirmed via M-Pesa! 🎉`, '💖');
      // Clear cart
      cart = [];
      renderCart();
    }
  }, 1000);
}

function finishOrder() {
  closeMpesaModal();
  showToast('Thank you for shopping with Pinkysh! Your kicks are on their way. 🚚', '🌸');
}

// --- Size Guide & Trust Modals ---
function openSizeGuideModal() {
  const overlay = document.getElementById('sizeGuideOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSizeGuideModal() {
  const overlay = document.getElementById('sizeGuideOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openDeliveryModal() {
  showToast('🚚 Same-day delivery in Nairobi via rider (KSh 250 or FREE over 5,000). Next-day nationwide via Fargo Courier.', '📦');
}

function openPaymentInfoModal() {
  showToast('💳 We accept M-Pesa Express, Safaricom Till, Visa, and Mastercard.', '🔒');
}

function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail');
  if (email && email.value) {
    showToast(`Welcome to the Pink Club, babe! 💖 KSh 500 voucher sent to ${email.value}`, '💌');
    email.value = '';
  }
}

// --- Toast Notifications ---
function showToast(message, icon = '💖') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span style="font-size: 1.1rem;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('exit');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

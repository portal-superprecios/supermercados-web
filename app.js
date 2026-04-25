// CONFIGURACIÓN
const supermarkets = [
    { id: 'aura', name: 'LA ANONIMA', logo: 'logos/La Anonima.svg', theme: 'aura', color: '#10b981' },
    { id: 'zenith', name: 'CARREFOUR', logo: 'logos/carre.png', theme: 'zenith', color: '#0ea5e9' },
    { id: 'terra', name: 'CHANGO MAS', logo: 'logos/changomas-2011-seeklogo.png', theme: 'terra', color: '#f59e0b' },
    { id: 'lumina', name: 'VEA', logo: 'logos/super-vea-seeklogo.png', theme: 'lumina', color: '#d946ef' },
    { id: 'maxiconsumo', name: 'MAXICONSUMO', logo: 'logos/maxiconsumo.png', theme: 'maxiconsumo', color: '#ed1c24' }
];

let products = [];
let currentCategory = 'all';
let currentMarket = 'all';
let searchQuery = '';
let sortType = 'none';
let priceChart = null;

// OBTENER HISTORIAL REAL
function getPriceHistory(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return [];

    // Verificamos si existe el historial real que provee process_data.py
    if (product.history && product.history.length > 0) {
        // Mapeamos para que el gráfico interprete las fechas más amigablemente
        return product.history.map(item => {
            // Convertir 'YYYY-MM-DD' a algo como 'D/M/YYYY' si es necesario
            const parts = item.date.split('-');
            let fDate = item.date;
            if (parts.length === 3) {
                fDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
            return {
                date: fDate,
                price: parseFloat(item.price)
            };
        });
    }

    // Si por algún motivo no hay historial, retornamos al menos el precio actual
    const today = new Date();
    return [{
        date: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
        price: product.price
    }];
}

// CARGA DE PRODUCTOS
async function loadAllProducts() {
    const loader = document.getElementById('loader');
    const productList = document.getElementById('product-list');

    if (loader) loader.style.display = 'flex';

    try {
        if (typeof allProductsData !== 'undefined') {
            products = allProductsData;
        } else {
            const response = await fetch('products.json');
            if (!response.ok) throw new Error('No se pudo cargar products.json');
            products = await response.json();
        }

        updateDynamicOffers();
        renderProducts();
    } catch (error) {
        console.error("Error cargando productos:", error);
        if (productList) {
            productList.innerHTML = `<p class="error">Error al cargar productos. Por favor, reintenta.</p>`;
        }
    } finally {
        if (loader) loader.style.display = 'none';
    }
}

// OFERTAS DINÁMICAS (Algoritmo para encontrar las mejores ofertas)
function updateDynamicOffers() {
    const offerList = document.getElementById('offer-list');
    if (!offerList || products.length === 0) return;

    // Filtramos productos que tengan precio real y una imagen que no parezca fallida
    const validProducts = products.filter(p => p.price > 0 && p.image && !p.image.includes('via.placeholder'));

    // Si no hay suficientes válidos, usamos todos como respaldo
    const sourcePool = validProducts.length >= 4 ? validProducts : products;

    let dynamicOffers = [];
    const usedIds = new Set();
    
    // Lista de categorías que nos interesan destacar
    let categoriesToHighlight = ['aceite', 'leche', 'carne', 'arroz', 'harinas', 'aguas', 'gaseosas', 'fideos', 'limpieza', 'snacks', 'cervezas', 'cereales'];

    // Barajamos aleatoriamente las categorías para que cambien en cada actualización/carga de la página
    categoriesToHighlight = categoriesToHighlight.sort(() => 0.5 - Math.random());

    // 1. Prioridad: Buscar uno de los mejores precios de cada categoría aleatoria hasta llegar a 4
    for (const cat of categoriesToHighlight) {
        if (dynamicOffers.length >= 4) break;
        const catProds = sourcePool.filter(p => p.category === cat);
        
        if (catProds.length > 0) {
            // Ordenamos por precio para obtener los más baratos
            const sortedCatProds = catProds.sort((a, b) => a.price - b.price);
            
            // Elegimos entre los 3 más baratos al azar (para dar rotación a los productos)
            const topDeals = sortedCatProds.slice(0, 3);
            const randomDeal = topDeals[Math.floor(Math.random() * topDeals.length)];

            if (!usedIds.has(randomDeal.id)) {
                const market = supermarkets.find(m => m.id === randomDeal.market);
                dynamicOffers.push({
                    ...randomDeal,
                    label: '¡MEJOR PRECIO!',
                    badge: market?.name || randomDeal.market,
                    marketLogo: market?.logo || 'logos/carre.png'
                });
                usedIds.add(randomDeal.id);
            }
        }
    }

    // 2. Relleno automático: Si aún no llegamos a 4, buscamos otras ofertas generales
    if (dynamicOffers.length < 4) {
        const others = [...sourcePool]
            .filter(p => !usedIds.has(p.id))
            .sort((a, b) => a.price - b.price);

        // De los 20 más baratos restantes, tomamos al azar los que nos falten
        const topOthersPool = others.slice(0, 20).sort(() => 0.5 - Math.random());
        const needed = 4 - dynamicOffers.length;
        
        topOthersPool.slice(0, needed).forEach(o => {
            const market = supermarkets.find(m => m.id === o.market);
            dynamicOffers.push({
                ...o,
                label: 'OFERTA DESTACADA',
                badge: market?.name || o.market,
                marketLogo: market?.logo || 'logos/carre.png'
            });
            usedIds.add(o.id);
        });
    }

    // Dibujar exactamente 4 ofertas
    const finalOffers = dynamicOffers.slice(0, 4);

    offerList.innerHTML = finalOffers.map(prod => `
        <div class="offer-card" onclick="openProductDetail(${prod.id})">
            <div class="offer-badge">${prod.label}</div>
            <div class="offer-img-wrapper">
                <img src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80'">
            </div>
            <div class="offer-overlay">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <img src="${prod.marketLogo}" style="height: 15px; filter: brightness(0) invert(1);">
                    <span style="color: var(--primary); font-weight: bold; font-size: 0.7rem; text-transform: uppercase;">${prod.badge}</span>
                </div>
                <h3>${prod.name}</h3>
                <p class="product-price" style="color: white; font-size: 1.8rem;">$${Number(prod.price).toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// RENDERIZADO DE PRODUCTOS CON FILTROS Y SORT
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    let filtered = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchMarket = currentMarket === 'all' || p.market === currentMarket;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchMarket && matchSearch;
    });

    // Aplicar ordenamiento
    if (sortType === 'low') filtered.sort((a, b) => a.price - b.price);
    else if (sortType === 'high') filtered.sort((a, b) => b.price - a.price);
    else if (sortType === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    if (filtered.length === 0) {
        productList.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
            <p style="color: var(--text-muted); font-size: 1.2rem;">No encontramos lo que buscas con esos filtros.</p>
        </div>`;
        return;
    }

    productList.innerHTML = filtered.map((p, index) => {
        const market = supermarkets.find(m => m.id === p.market);
        return `
        <div class="product-card animate-up" style="animation-delay: ${Math.min(index * 0.05, 1)}s">
            <div class="product-img-container" onclick="openProductDetail(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Producto'">
            </div>
            <div class="product-info">
                <div class="market-badge-container">
                    <img src="${market?.logo}" alt="${market?.name}" class="market-mini-logo">
                </div>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-price">$${Number(p.price).toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn-icon" onclick="openProductDetail(${p.id})" title="Comparar precios" style="width: 100%;">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg>
                        <span>Ver Comparativa</span>
                    </button>
                </div>
            </div>
        </div>
    `}).join('');
}

// MODAL DE DETALLE Y COMPARACIÓN
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    // Algoritmo de Coincidencia Inteligente
    const words = product.name.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split(' ')
        .filter(w => w.length > 2);

    const comparisons = supermarkets.map(m => {
        if (m.id === product.market) return { supermarket: m, product: product, isOriginal: true };

        // Buscamos solo en la misma categoría del mismo mercado
        const candidates = products.filter(p => p.market === m.id && p.category === product.category);

        let bestMatch = null;
        let highestScore = 0;

        candidates.forEach(cand => {
            const candName = cand.name.toLowerCase();
            let score = 0;

            // Puntuación por palabras coincidentes
            words.forEach(word => {
                if (candName.includes(word)) score++;
            });

            // Bonus si coincide el final (donde suele estar el tamaño ej: 1L, 900ml)
            const tail1 = product.name.slice(-5).toLowerCase();
            const tail2 = cand.name.slice(-5).toLowerCase();
            if (tail1 === tail2) score += 2;

            if (score > highestScore) {
                highestScore = score;
                bestMatch = cand;
            }
        });

        // Solo aceptamos el match si hay suficiente coincidencia
        return { supermarket: m, product: highestScore >= 1 ? bestMatch : null };
    });

    const validComparisons = comparisons.filter(c => c.product);
    const cheapestPrice = validComparisons.length > 0
        ? Math.min(...validComparisons.map(c => c.product.price))
        : 0;

    modalBody.innerHTML = `
        <div class="product-detail-hero">
            <div class="modal-product-img-container">
                <img src="${product.image}" alt="${product.name}" class="modal-product-img">
            </div>
            <div>
                <div class="market-badge-container">
                    <img src="${supermarkets.find(m => m.id === product.market).logo}" class="market-mini-logo" style="height: 30px;">
                </div>
                <h2 style="font-size: 2.2rem; margin: 1rem 0; line-height: 1.2;">${product.name}</h2>
                <div style="margin-bottom: 2rem;">
                    <span style="font-size: 3rem; font-weight: 800; color: var(--primary);">$${Number(product.price).toFixed(2)}</span>
                </div>
                <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">Comparamos automáticamente este producto con opciones similares en otros supermercados para garantizarte el mejor ahorro.</p>
            </div>
        </div>
        
        <div class="price-history-section">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                Historial de Precios
            </h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Evolución del precio real del producto.</p>
            <div class="chart-container">
                <canvas id="priceHistoryChart"></canvas>
            </div>
        </div>
        
        <div class="comparison-section">
            <h3 class="section-title" style="font-size: 1.5rem; text-align: left; margin: 2rem 0 1rem;">Comparativa de Precios</h3>
            <div class="comparison-grid">
                ${comparisons.map(c => `
                    <div class="compare-card glass ${c.product ? 'available' : ''} ${c.product && !c.isOriginal ? 'clickable' : ''} ${c.product && c.product.price === cheapestPrice ? 'cheapest' : ''} ${c.isOriginal ? 'original-source' : ''}" 
                         ${c.product && !c.isOriginal ? `onclick="openProductDetail(${c.product.id})"` : ''}>
                        <div class="compare-header">
                            <img src="${c.supermarket.logo}" class="compare-market-logo" style="height: 30px; object-fit: contain; margin-bottom: 1rem;">
                        </div>
                        ${c.product ? `
                            <div class="compare-info">
                                <p style="font-size: 0.85rem; color: var(--text-muted); height: 3.6rem; line-height: 1.4; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin-bottom: 0.5rem;" title="${c.product.name}">${c.product.name}</p>
                                <p style="font-size: 1.3rem; font-weight: 700; margin: 0.5rem 0;">$${Number(c.product.price).toFixed(2)}</p>
                                ${c.product.price === cheapestPrice && !c.isOriginal ? '<span class="saving-badge">¡MÁS BARATO!</span>' : ''}
                                ${c.isOriginal ? '<span style="font-size: 0.7rem; color: var(--primary); font-weight: 800; display: block; margin-top: 1rem;">TU PRODUCTO</span>' : ''}
                                ${c.product && !c.isOriginal ? '<p style="font-size: 0.65rem; color: var(--primary); margin-top: 0.5rem; font-weight: 600;">Click para ver detalle</p>' : ''}
                            </div>
                        ` : `
                            <p style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">No disponible</p>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';

    // Renderizar gráfico después de que el modal sea visible
    setTimeout(() => {
        renderPriceHistoryChart(productId);
    }, 100);
}

function renderPriceHistoryChart(productId) {
    const ctx = document.getElementById('priceHistoryChart');
    if (!ctx) return;

    const history = getPriceHistory(productId);
    const product = products.find(p => p.id === productId);

    if (priceChart) priceChart.destroy();

    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: history.map(h => h.date),
            datasets: [{
                label: 'Precio ($)',
                data: history.map(h => h.price),
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#6366f1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return 'Precio: $' + context.parsed.y.toFixed(2);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// EVENTOS Y NAVEGACIÓN
function showHome() {
    currentCategory = 'all';
    currentMarket = 'all';
    document.getElementById('hero').style.display = 'block';
    document.getElementById('offers-wrapper').style.display = 'block';
    document.getElementById('products').style.display = 'none';
    document.getElementById('nav-home').classList.add('active');
    document.getElementById('nav-supermarkets').classList.remove('active');
    document.body.classList.remove('searching');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSupermarkets() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('offers-wrapper').style.display = 'none';
    document.getElementById('products').style.display = 'block';
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-supermarkets').classList.add('active');
    document.body.classList.add('searching');
    renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    // Escuchar búsqueda y orden
    document.getElementById('product-search')?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        const productsTitle = document.getElementById('products-title');

        if (searchQuery.length > 0) {
            document.body.classList.add('searching');
            if (document.getElementById('nav-home').classList.contains('active')) {
                showSupermarkets();
            }
            if (productsTitle) productsTitle.innerText = `Resultados para "${searchQuery}"`;
        } else {
            document.body.classList.remove('searching');
            if (productsTitle) productsTitle.innerText = "Nuestros Productos";
        }
        renderProducts();
    });

    document.getElementById('price-sort')?.addEventListener('change', (e) => {
        sortType = e.target.value;
        renderProducts();
    });

    // Categorías
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.cat;
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b === btn));
            if (currentCategory !== 'all') showSupermarkets();
            renderProducts();
        });
    });

    // Supermercados
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMarket = btn.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
            renderProducts();
        });
    });

    // Modal
    document.querySelector('.close-modal')?.addEventListener('click', () => {
        document.getElementById('product-modal').style.display = 'none';
    });

    window.onclick = (event) => {
        const modal = document.getElementById('product-modal');
        if (event.target === modal) modal.style.display = 'none';
    };

    // Nav
    document.getElementById('nav-home')?.addEventListener('click', showHome);
    document.getElementById('nav-supermarkets')?.addEventListener('click', showSupermarkets);
    document.getElementById('nav-contact')?.addEventListener('click', () => {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        document.getElementById('nav-contact').classList.add('active');
    });

    // Desplazamiento de categorías
    const categoryContainer = document.querySelector('.categories-container');
    document.getElementById('scroll-left')?.addEventListener('click', () => categoryContainer.scrollBy({ left: -300, behavior: 'smooth' }));
    document.getElementById('scroll-right')?.addEventListener('click', () => categoryContainer.scrollBy({ left: 300, behavior: 'smooth' }));

    loadAllProducts();
});

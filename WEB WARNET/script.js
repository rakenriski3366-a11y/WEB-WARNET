// Data Paket NON VIP (3 produk)
const nonVipPackages = [
    {
        id: 1,
        name: "REGULER 1 JAM",
        desc: "Cocok untuk ngetik, browsing, atau main game ringan",
        price: "Rp 7.000",
        icon: "fa-clock",
        specs: ["PC Reguler", "Monitor 144Hz", "Headset RGB", "Mouse Gaming"]
    },
    {
        id: 2,
        name: "REGULER 3 JAM",
        desc: "Main lebih lama dengan harga hemat",
        price: "Rp 20.000",
        icon: "fa-hourglass-half",
        specs: ["PC Reguler", "Monitor 144Hz", "Headset RGB", "Mouse Gaming", "Hemat Rp 1.000"]
    },
    {
        id: 3,
        name: "REGULER 5 JAM",
        desc: "Sesi gaming panjang dengan bonus minuman",
        price: "Rp 33.000",
        icon: "fa-moon",
        specs: ["PC Reguler", "Monitor 144Hz", "Headset RGB", "Mouse Gaming", "1 Teh Botol Gratis"]
    }
];

// Data Paket VIP (3 produk)
const vipPackages = [
    {
        id: 4,
        name: "VIP 1 JAM",
        desc: "Akses ke ruangan VIP eksklusif",
        price: "Rp 12.000",
        icon: "fa-crown",
        specs: ["PC VIP (RTX 4060)", "Monitor 240Hz", "Headset Wireless", "Keyboard Mechanical", "Ruangan AC Khusus", "Minuman Gratis"]
    },
    {
        id: 5,
        name: "VIP 3 JAM",
        desc: "Main 3 jam di arena premium",
        price: "Rp 34.000",
        icon: "fa-hourglass-end",
        specs: ["PC VIP (RTX 4060)", "Monitor 240Hz", "Headset Wireless", "Keyboard Mechanical", "Ruangan AC Khusus", "Minuman & Snack Gratis", "Hemat Rp 2.000"]
    },
    {
        id: 6,
        name: "VIP 5 JAM",
        desc: "Untuk hardcore gamer, puas main semalaman",
        price: "Rp 55.000",
        icon: "fa-star",
        specs: ["PC VIP (RTX 4060)", "Monitor 240Hz", "Headset Wireless", "Keyboard Mechanical", "Ruangan AC Khusus", "Minuman & Makanan Ringan Gratis", "Prioritas Booking"]
    }
];

// Load Paket ke HTML
function loadPackages() {
    const nonVipGrid = document.getElementById('nonVipGrid');
    const vipGrid = document.getElementById('vipGrid');
    
    nonVipPackages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-icon">
                <i class="fas ${pkg.icon}"></i>
            </div>
            <h3>${pkg.name}</h3>
            <p class="product-desc">${pkg.desc}</p>
            <ul class="product-specs">
                ${pkg.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
            </ul>
            <span class="product-price">${pkg.price}</span>
            <button class="btn-order" onclick="orderPackage('${pkg.name}', '${pkg.price}', 'NON VIP')">
                <i class="fab fa-whatsapp"></i> BOOKING VIA WA
            </button>
        `;
        nonVipGrid.appendChild(card);
    });

    vipPackages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'product-card vip-card';
        card.innerHTML = `
            <div class="product-icon">
                <i class="fas ${pkg.icon}"></i>
            </div>
            <h3>${pkg.name}</h3>
            <p class="product-desc">${pkg.desc}</p>
            <ul class="product-specs">
                ${pkg.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
            </ul>
            <span class="product-price">${pkg.price}</span>
            <button class="btn-order" onclick="orderPackage('${pkg.name}', '${pkg.price}', 'VIP')">
                <i class="fab fa-whatsapp"></i> BOOKING VIA WA
            </button>
        `;
        vipGrid.appendChild(card);
    });
}

// Fungsi Booking via WhatsApp
function orderPackage(packageName, packagePrice, type) {
    const phoneNumber = '6289537890123'; // Ganti dengan nomor CW NET
    const message = `Halo CW NET, saya mau booking paket *${packageName}* (${type}) dengan harga ${packagePrice}. Apakah tersedia? Saya ingin booking jam berapa?`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
}

// Animasi Counter (Statistik)
function animateCounter(elementId, target, duration = 2000) {
    const element = document.getElementById(elementId);
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Intersection Observer untuk memicu animasi statistik
function setupIntersectionObserver() {
    const statsSection = document.querySelector('.stats-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('stat1', 50);
                animateCounter('stat2', 1250);
                animateCounter('stat3', 24);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Form Contact Handler
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const phoneNumber = '6289537890123';
        const text = `Halo CW NET, saya ${name} (${email}). Pesan: ${message}`;
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        
        window.open(waLink, '_blank');
        form.reset();
        alert('Pesan terkirim! Kami akan segera merespon via WA.');
    });
}

// Mobile Menu Handler
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efek typing di subtitle
function setupTypeWriter() {
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Inisialisasi semua fungsi
document.addEventListener('DOMContentLoaded', () => {
    loadPackages();
    setupIntersectionObserver();
    setupContactForm();
    setupMobileMenu();
    setupSmoothScroll();
    setupTypeWriter();
});
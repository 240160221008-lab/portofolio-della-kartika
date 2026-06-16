/**
 * Pastel Portfolio Interaction Scripts
 * Author: Della Kartika
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Sticky Navbar & Back to Top ---
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item a');

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle icon lines between burger and close
    const isActive = navLinks.classList.contains('active');
    mobileToggle.innerHTML = isActive 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close mobile menu when clicking links
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });

  // --- 3. Intersection Observer for Scroll Reveals ---
  const revealElements = [
    document.getElementById('hero-text'),
    document.getElementById('hero-visual'),
    document.getElementById('about-visual'),
    document.getElementById('about-content'),
    document.getElementById('skill-header'),
    document.getElementById('skill-col-1'),
    document.getElementById('skill-col-2'),
    document.getElementById('skill-col-3'),
    document.getElementById('project-header'),
    document.getElementById('experience-header'),
    document.getElementById('timeline-item-1'),
    document.getElementById('timeline-item-2'),
    document.getElementById('timeline-item-3'),
    document.getElementById('contact-info'),
    document.getElementById('contact-form-container')
  ];

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Specially animate skill progress bars inside this column
        if (entry.target.classList.contains('skill-column')) {
          const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
          progressBars.forEach(bar => {
            const targetVal = bar.getAttribute('data-progress');
            bar.style.width = targetVal;
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    if (el) revealObserver.observe(el);
  });

  // Also reveal project cards dynamically
  const projectCards = document.querySelectorAll('.project-card');
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  projectCards.forEach(card => projectObserver.observe(card));


  // --- 4. Portfolio Filters ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });


  // --- 5. Project Modal Window ---
  const projectData = {
    1: {
      title: "Midnight Roast Manager",
      category: "Web App",
      img: "assets/project_caffeine.png",
      filterColor: "none",
      desc: "Sebuah aplikasi dashboard barista interaktif untuk mengelola pesanan kedai kopi Midnight Roast. Sistem ini mendukung CRUD penuh (Create, Read, Update, Delete) untuk pesanan secara langsung, pembaruan status pengerjaan kopi secara dinamis, filter riwayat transaksi harian, serta visualisasi data penjualan sederhana. Semua data disimpan secara lokal dan aman di browser menggunakan Local Storage.",
      tech: ["Vanilla HTML5", "CSS Grid/Flexbox", "JavaScript ES6", "Local Storage API", "SVG Graphics"],
      link: "#"
    },
    2: {
      title: "Caffeine & Co Brand Identity",
      category: "Branding",
      img: "assets/project_caffeine.png",
      filterColor: "none",
      desc: "Pengembangan panduan identitas visual yang lengkap untuk Caffeine & Co. Projek ini meliputi pembuatan desain logo minimalis berbentuk biji kopi dan cangkir yang estetik, perancangan kartu nama bertekstur, palet warna pastel hangat (cream, mint, rose), layout menu kafe, serta mockup kemasan produk ramah lingkungan.",
      tech: ["Figma Prototype", "Adobe Illustrator", "Brand Strategy", "Vector Layouts", "Color Matching"],
      link: "#"
    },
    3: {
      title: "Blush & Bloom Marketplace",
      category: "UI/UX Design",
      img: "assets/project_blush.png",
      filterColor: "none",
      desc: "Desain antarmuka aplikasi seluler untuk Blush & Bloom, sebuah marketplace kosmetik dan kecantikan berbasis personalisasi rekomendasi. Dilengkapi dengan kuis tipe kulit interaktif, halaman detail produk dengan rating terperinci, alur keranjang belanja minimalis, serta admin panel berdesain Pink Pastel Dashboard.",
      tech: ["Figma UI UX", "User Flow Maps", "Component Libraries", "Interactive Prototypes", "A/B Testing Mockups"],
      link: "#"
    },
    4: {
      title: "PickMie Ordering Prototype",
      category: "UI/UX Design",
      img: "assets/project_pickmie.png",
      filterColor: "none",
      desc: "Prototipisasi aplikasi pemesanan mie instan kustom bernama PickMie. Memuat splash screen animasi pembuka premium, menu kustomisasi bahan tambahan mie (topping, tingkat kepedasan, saus), sistem checkout instan yang mencatat metode pembayaran, serta riwayat pemesanan yang persisten secara lokal.",
      tech: ["Figma Design", "Mobile App UX", "Micro-interactions", "User Testing", "Visual Styling"],
      link: "#"
    },
    5: {
      title: "BPSK Archiving System",
      category: "Web App",
      img: "assets/project_caffeine.png",
      filterColor: "none",
      desc: "Aplikasi pengarsipan dokumen digital untuk Badan Penyelesaian Sengketa Konsumen (BPSK) Sumedang. Projek ini mengimplementasikan web dashboard berkinerja tinggi yang memungkinkan petugas mengunggah dokumen persidangan, mengategorikan status berkas, mencari arsip dengan filter dinamis, dan menganalisis statistik pengaduan tahunan.",
      tech: ["HTML/CSS", "JavaScript", "Responsive Design", "Data Visualization", "Information Architecture"],
      link: "#"
    }
  };

  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalTechList = document.getElementById('modal-tech-list');
  const modalLink = document.getElementById('modal-link');

  const openModal = (id) => {
    const data = projectData[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalImg.style.filter = data.filterColor;
    modalDesc.textContent = data.desc;
    
    // Clear & Populate tech tags
    modalTechList.innerHTML = '';
    data.tech.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'project-tag';
      span.textContent = tech;
      modalTechList.appendChild(span);
    });

    modalLink.href = data.link;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop page scrolling
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Resume scrolling
  };

  // Add click listeners to project cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Press ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });


  // --- 6. Contact Form & LocalStorage Message Saving ---
  const contactForm = document.getElementById('contact-form');
  const successToast = document.getElementById('success-toast');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const newMessage = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    // Retrieve existing messages or initialize empty array
    let savedMessages = [];
    try {
      savedMessages = JSON.parse(localStorage.getItem('contact_messages')) || [];
    } catch (err) {
      savedMessages = [];
    }

    savedMessages.push(newMessage);
    localStorage.setItem('contact_messages', JSON.stringify(savedMessages));

    // Reset Form fields
    contactForm.reset();

    // Show Success Toast Notification
    successToast.classList.add('show');
    
    // Hide toast after 3.5 seconds
    setTimeout(() => {
      successToast.classList.remove('show');
    }, 3500);
  });

  // --- 7. Scroll Spy (Dynamic Nav Highlighter) ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a');

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Find if there is a nav link for this section
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) {
          navAnchorLinks.forEach(link => link.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  }, {
    root: null,
    threshold: 0.2, // Trigger when 20% of section is visible
    rootMargin: '-20% 0px -60% 0px' // Offset viewport bounds
  });

  sections.forEach(section => {
    scrollSpyObserver.observe(section);
  });

});

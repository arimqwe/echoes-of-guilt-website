body {
  margin: 0;
  background: #9b0f1b;
  color: #f4e5d0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

.page-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.side-panel {
  position: fixed;
  top: 0;
  width: 180px;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}

.side-left {
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 0 70px 40px;
}

.side-right {
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 50px 0;
}

.panel-image {
  width: 150px;
  height: 150px;
  background: #cfe0ea;
  opacity: 0.9;
}

.panel-1 { margin-top: 10px; }
.panel-2 { margin-top: 60px; }
.panel-3 { width: 150px; height: 150px; }

.main-content {
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 20px 100px;
}

.container {
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(16, 10, 10, 0.3);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 2vw, 2.5rem);
  letter-spacing: 0.08em;
  color: #f0dfbf;
  text-transform: none;
}

.nav-links {
  display: flex;
  gap: 28px;
  color: #e8d8c7;
}

.nav-links a {
  transition: opacity 0.2s ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

.hero {
  padding: 40px 0 20px;
}

.hero-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-copy {
  width: min(100%, 880px);
  background: rgba(41, 20, 14, 0.97);
  border: 1px solid rgba(255,255,255,0.14);
  min-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 22px 38px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.24);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d9c3a1;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(4rem, 7vw, 8rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  color: #f0dfbf;
}

.subtitle {
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  color: #d7dfe5;
  margin-bottom: 14px;
}

.lead {
  max-width: 740px;
  font-size: 1.08rem;
  line-height: 1.8;
  color: #f1e6db;
}

.hero-actions {
  margin-top: 18px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: #f4e5d0;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.08);
}

.btn-primary {
  background: linear-gradient(135deg, #9a1023, #5d1d24);
  border-color: rgba(255,255,255,0.05);
}

.section {
  max-width: 1040px;
  margin: 90px auto 0;
  padding: 0 20px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading.centered {
  text-align: center;
}

.section-heading h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  color: #f0dfbf;
}

.plot-box {
  background: rgba(31, 18, 13, 0.9);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 10px 26px rgba(0,0,0,0.18);
  padding: 38px 42px 30px;
  width: min(100%, 900px);
  margin: 0 auto;
}

.plot-text h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin-bottom: 16px;
  color: #f0dfbf;
}

.story-date {
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d9c3a1;
  margin-bottom: 18px;
}

.story-scene {
  opacity: 0.8;
  font-style: italic;
  color: #e9d7c7;
}

.plot-text p {
  font-size: 1.08rem;
  line-height: 1.9;
  color: #f1e6db;
  margin-bottom: 18px;
}

.plot-text p strong {
  color: #f0dfbf;
}

.char-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.char-card {
  background: rgba(31, 18, 13, 0.9);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 24px 22px 18px;
  min-height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.char-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.char-header h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 3vw, 2.7rem);
  color: #f0dfbf;
  margin: 0 0 8px;
}

.char-quote {
  color: #cfe0ea;
  font-style: italic;
  margin-bottom: 18px;
  font-size: 0.95rem;
}

.char-meta {
  min-width: 90px;
  text-align: right;
  color: #d0c1b7;
  font-size: 0.8rem;
  line-height: 1.7;
}

.char-bio {
  color: #f1e6db;
  line-height: 1.7;
  margin-bottom: 22px;
  font-size: 0.98rem;
}

.crowd-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.crowd-card {
  background: rgba(31, 18, 13, 0.9);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 22px 18px 18px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.crowd-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  color: #f0dfbf;
}

.crowd-meta {
  color: #d6c7bc;
  margin-top: 8px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.faq-card {
  background: rgba(31, 18, 13, 0.9);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 22px 20px;
  min-height: 160px;
}

.faq-card h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #f0dfbf;
}

.faq-card p {
  color: #f1e6db;
  line-height: 1.7;
}

.wiki-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.66);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 30;
}

.wiki-modal.active {
  display: flex;
}

.wiki-modal-content {
  position: relative;
  width: min(900px, calc(100% - 30px));
  background: rgba(31, 18, 13, 0.98);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 28px 28px 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.wiki-close {
  position: absolute;
  right: 18px;
  top: 12px;
  border: none;
  background: transparent;
  color: #f0dfbf;
  font-size: 2rem;
  cursor: pointer;
}

.wiki-container h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #f0dfbf;
  margin-bottom: 20px;
}

.wiki-container p {
  color: #f2e8dc;
  line-height: 1.8;
  margin-bottom: 14px;
}

.wiki-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.wiki-badges span {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 12px;
  border-radius: 999px;
  color: #cfe0ea;
  font-size: 0.82rem;
}

.footer {
  padding: 28px 0 20px;
  text-align: center;
  color: #d8c7b9;
}

@media (max-width: 980px) {
  .side-panel {
    display: none;
  }

  .char-grid,
  .crowd-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .char-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .char-meta {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .main-content {
    padding-left: 10px;
    padding-right: 10px;
  }

  .hero-copy {
    min-height: 500px;
    padding: 22px 16px 24px;
  }

  .nav {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 10px 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .plot-box {
    padding: 24px 18px;
  }
}




















































































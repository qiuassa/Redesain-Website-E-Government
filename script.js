/* =========================================================
   SCRIPT AKSESIBILITAS & TEMA TERANG / GELAP - KABUPATEN BREBES
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tangkap Elemen Tombol & Modal
  const accessibilityBtn = document.getElementById('accessibility-btn');
  const accessibilityModal = document.getElementById('accessibility-modal');
  const closeAccessibilityBtn = document.getElementById('close-accessibility');

  // 2. Tangkap Elemen Tema & Font
  const quickContrastToggle = document.getElementById('quick-contrast-toggle');
  const toggleContrastBtn = document.getElementById('toggle-contrast');
  const fontSizeUpBtn = document.getElementById('font-size-up');
  const fontSizeDownBtn = document.getElementById('font-size-down');
  const fontSizeResetBtn = document.getElementById('font-size-reset');
  const toggleSpeechBtn = document.getElementById('toggle-speech');
  const speechStatusText = document.getElementById('speech-status');

  let currentFontSize = 0; // -1: Kecil, 0: Normal, 1: Besar
  let isSpeechActive = false;

  // --- A. BUKA & TUTUP MODAL AKSESIBILITAS ---
  if (accessibilityBtn && accessibilityModal) {
    accessibilityBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      accessibilityModal.classList.toggle('hidden');
    });
  }

  if (closeAccessibilityBtn && accessibilityModal) {
    closeAccessibilityBtn.addEventListener('click', (e) => {
      e.preventDefault();
      accessibilityModal.classList.add('hidden');
    });
  }

  // Klik di luar modal untuk menutup
  document.addEventListener('click', (e) => {
    if (accessibilityModal && !accessibilityModal.contains(e.target) && e.target !== accessibilityBtn) {
      accessibilityModal.classList.add('hidden');
    }
  });

  // --- B. FITUR GANTI TEMA TERANG / GELAP (DARK & HIGH CONTRAST MODE) ---
  function toggleThemeMode() {
    const isDark = document.body.classList.toggle('dark-mode');

    // Sync status switch di Topbar jika ada
    if (quickContrastToggle) {
      quickContrastToggle.checked = isDark;
    }

    // Sync tampilan tombol di modal
    if (toggleContrastBtn) {
      if (isDark) {
        toggleContrastBtn.classList.add('bg-brebesMaroon', 'text-white');
        toggleContrastBtn.innerHTML = '<i class="ph ph-sun text-base text-amber-400"></i> Mode Terang';
      } else {
        toggleContrastBtn.classList.remove('bg-brebesMaroon', 'text-white');
        toggleContrastBtn.innerHTML = '<i class="ph ph-moon-stars text-base"></i> Mode Gelap / Kontras';
      }
    }
  }

  // Listener untuk Tombol Modal
  if (toggleContrastBtn) {
    toggleContrastBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleThemeMode();
    });
  }

  // Listener untuk Switch Topbar
  if (quickContrastToggle) {
    quickContrastToggle.addEventListener('change', () => {
      toggleThemeMode();
    });
  }

  // --- C. FITUR UKURAN FONT ---
  function applyFontSize() {
    document.body.classList.remove('font-size-sm', 'font-size-lg', 'font-size-xl');
    if (currentFontSize === -1) document.body.classList.add('font-size-sm');
    if (currentFontSize === 1) document.body.classList.add('font-size-lg');
    if (currentFontSize === 2) document.body.classList.add('font-size-xl');
  }

  if (fontSizeUpBtn) {
    fontSizeUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentFontSize < 2) currentFontSize++;
      applyFontSize();
    });
  }

  if (fontSizeDownBtn) {
    fontSizeDownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentFontSize > -1) currentFontSize--;
      applyFontSize();
    });
  }

  if (fontSizeResetBtn) {
    fontSizeResetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentFontSize = 0;
      applyFontSize();
    });
  }

  // --- D. FITUR PEMBACA TEKS (SPEECH SYNTHESIS) ---
  if (toggleSpeechBtn && 'speechSynthesis' in window) {
    toggleSpeechBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isSpeechActive = !isSpeechActive;

      if (isSpeechActive) {
        toggleSpeechBtn.classList.add('bg-emerald-600', 'text-white');
        if (speechStatusText) speechStatusText.textContent = 'Status: Aktif (Sorot Teks)';
        speakText('Fitur pembaca teks aktif. Sorot teks yang ingin didengar.');
      } else {
        toggleSpeechBtn.classList.remove('bg-emerald-600', 'text-white');
        if (speechStatusText) speechStatusText.textContent = 'Status: Nonaktif';
        window.speechSynthesis.cancel();
      }
    });

    document.addEventListener('mouseover', (e) => {
      if (!isSpeechActive) return;
      const target = e.target;
      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'SPAN', 'BUTTON'].includes(target.tagName)) {
        const text = target.innerText || target.textContent;
        if (text && text.trim().length > 0 && text.trim().length < 150) {
          speakText(text.trim());
        }
      }
    });
  }

  function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    window.speechSynthesis.speak(utterance);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // 1. Tangkap Elemen
  const accessibilityBtn = document.getElementById('accessibility-btn');
  const accessibilityModal = document.getElementById('accessibility-modal');
  const closeAccessibilityBtn = document.getElementById('close-accessibility');

  const fontSizeUpBtn = document.getElementById('font-size-up');
  const fontSizeDownBtn = document.getElementById('font-size-down');
  const fontSizeResetBtn = document.getElementById('font-size-reset');
  const toggleContrastBtn = document.getElementById('toggle-contrast');
  const quickContrastToggle = document.getElementById('quick-contrast-toggle');
  const toggleSpeechBtn = document.getElementById('toggle-speech');
  const speechStatusText = document.getElementById('speech-status');

  let currentFontSize = 0; // -1: Kecil, 0: Normal, 1: Besar
  let isSpeechActive = false;

  // 2. Buka & Tutup Modal Aksesibilitas
  if (accessibilityBtn && accessibilityModal) {
    accessibilityBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accessibilityModal.classList.toggle('hidden');
    });
  }

  if (closeAccessibilityBtn && accessibilityModal) {
    closeAccessibilityBtn.addEventListener('click', () => {
      accessibilityModal.classList.add('hidden');
    });
  }

  // Tutup modal jika klik di luar modal
  document.addEventListener('click', (e) => {
    if (accessibilityModal && !accessibilityModal.contains(e.target) && e.target !== accessibilityBtn) {
      accessibilityModal.classList.add('hidden');
    }
  });

  // 3. Fitur Ubah Ukuran Font
  function applyFontSize() {
    document.body.classList.remove('font-size-sm', 'font-size-lg');
    if (currentFontSize === -1) document.body.classList.add('font-size-sm');
    if (currentFontSize === 1) document.body.classList.add('font-size-lg');
  }

  if (fontSizeUpBtn) {
    fontSizeUpBtn.addEventListener('click', () => {
      currentFontSize = 1;
      applyFontSize();
    });
  }

  if (fontSizeDownBtn) {
    fontSizeDownBtn.addEventListener('click', () => {
      currentFontSize = -1;
      applyFontSize();
    });
  }

  if (fontSizeResetBtn) {
    fontSizeResetBtn.addEventListener('click', () => {
      currentFontSize = 0;
      applyFontSize();
    });
  }

  // 4. Fitur Mode Kontras Tinggi / Dark Mode
  function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    if (quickContrastToggle) quickContrastToggle.checked = isContrast;
  }

  if (toggleContrastBtn) toggleContrastBtn.addEventListener('click', toggleContrast);
  if (quickContrastToggle) quickContrastToggle.addEventListener('change', toggleContrast);

  // 5. Fitur Text-to-Speech (Pembaca Teks)
  if (toggleSpeechBtn && 'speechSynthesis' in window) {
    toggleSpeechBtn.addEventListener('click', () => {
      isSpeechActive = !isSpeechActive;
      if (isSpeechActive) {
        toggleSpeechBtn.classList.add('bg-emerald-600', 'text-white');
        if (speechStatusText) speechStatusText.textContent = 'Status: Aktif (Sorot Teks)';
        speak('Fitur pembaca teks aktif');
      } else {
        toggleSpeechBtn.classList.remove('bg-emerald-600', 'text-white');
        if (speechStatusText) speechStatusText.textContent = 'Status: Nonaktif';
        window.speechSynthesis.cancel();
      }
    });

    document.addEventListener('mouseover', (e) => {
      if (!isSpeechActive) return;
      const text = e.target.innerText || e.target.textContent;
      if (text && text.trim().length > 0 && text.trim().length < 150) {
        speak(text.trim());
      }
    });
  }

  function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    window.speechSynthesis.speak(utterance);
  }
});
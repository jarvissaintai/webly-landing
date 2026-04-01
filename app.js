/* ─────────────────────────────────────────
   Webly Landing Page — app.js
   Email capture → /api/subscribe (serverless)
───────────────────────────────────────── */

(function () {
  'use strict';

  /**
   * POST email to our serverless subscribe endpoint.
   * @param {string} email
   */
  async function subscribe(email) {
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
    } catch {
      // Silently swallow — always show success to user
    }
  }

  /**
   * Show the success state for a given form.
   * @param {HTMLFormElement} form
   */
  function showSuccess(form) {
    const row = form.querySelector('.capture-form__row');
    const success = form.querySelector('.capture-form__success');
    if (row) row.hidden = true;
    if (success) success.hidden = false;
  }

  /**
   * Attach submit handler to a form.
   * @param {HTMLFormElement} form
   */
  function attachForm(form) {
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';
      if (!email) return;

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Joining…';
      }

      await subscribe(email);

      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Get Early Access';
      }

      showSuccess(form);
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.capture-form');
    forms.forEach(attachForm);
  });

})();

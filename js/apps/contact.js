window.initContactApp = function () {
    const contactLinks = [
        { name: 'Email', handle: 'imtiazyt.ia@gmail.com', href: 'mailto:imtiazyt.ia@gmail.com', icon: '✉️', copyable: true },
        { name: 'Github', handle: 'github.com/not-imtiaz', href: 'https://github.com/not-imtiaz', icon: '💻', copyable: false },
        { name: 'LinkedIn', handle: 'linkedin.com/in/imtiaahm', href: 'https://www.linkedin.com/in/imtiaahm/', icon: '🔗', copyable: false },
        { name: 'Instagram', handle: '@imtiaahm', href: 'https://www.instagram.com/imtiaahm/', icon: '📸', copyable: false },
        { name: 'Discord', handle: 'imtiaahm', href: '#', icon: '💬', copyable: true },
    ];

    const contactHTML = `
    <div class="contact-container">
      <!-- Profile Overview Header -->
      <div class="contact-profile">
        <div class="contact-avatar">
          <img src="assets/icon.jpg" alt="Imtiaz Ahmed" />
        </div>
        <div class="contact-info">
          <h3>Imtiaz Ahmed</h3>
          <p>Founder & Full-Stack Developer</p>
          <span class="contact-status-badge">🟢 Available for projects</span>
        </div>
      </div>

      <!-- Social & Direct Links Grid -->
      <div class="contact-grid">
        ${contactLinks.map(link => `
          <div class="contact-card">
            <span class="contact-icon">${link.icon}</span>
            <div class="contact-details">
              <span class="contact-name">${link.name}</span>
              <span class="contact-handle">${link.handle}</span>
            </div>
            <div class="contact-actions">
              ${link.copyable ? `<button class="contact-btn copy-btn" data-copy="${link.handle}" title="Copy to clipboard">📋</button>` : ''}
              ${link.href !== '#' ? `<a href="${link.href}" target="_blank" class="contact-btn link-btn" title="Open Link">↗</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Quick Message Note -->
      <div class="contact-footer-note">
        <span>Preferred method: GitHub or Email for project inquiries.</span>
      </div>
    </div>
  `;

    wm.createWindow('contact', 'Get in Touch', contactHTML, { width: '480px', height: '490px' });

    setTimeout(() => {
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const textToCopy = btn.getAttribute('data-copy');
                navigator.clipboard.writeText(textToCopy);
                const originalTitle = btn.textContent;
                btn.textContent = '✓';
                btn.style.background = '#dcfce7';
                btn.style.color = '#15803d';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 1500);
            });
        });
    }, 100);
};
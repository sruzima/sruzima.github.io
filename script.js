// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Scroll to top of content smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Typing effect for home section
    const typingElement = document.querySelector('.typing-effect h1');
    if (typingElement) {
        const originalText = typingElement.innerHTML;
        typingElement.innerHTML = '';
        
        let charIndex = 0;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalText;
        const textContent = tempDiv.textContent || tempDiv.innerText;
        
        function type() {
            if (charIndex < originalText.length) {
                const char = originalText.charAt(charIndex);
                if (char === '<') {
                    // Handle HTML tags
                    const closingIndex = originalText.indexOf('>', charIndex);
                    typingElement.innerHTML += originalText.substring(charIndex, closingIndex + 1);
                    charIndex = closingIndex + 1;
                } else {
                    typingElement.innerHTML += char;
                    charIndex++;
                }
                setTimeout(type, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(type, 500);
    }

    // Add terminal cursor effect
    const cursorElements = document.querySelectorAll('.blink');
    setInterval(() => {
        cursorElements.forEach(el => {
            if (el.textContent === '█') {
                el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
            }
        });
    }, 500);

    // Simulate terminal loading effect on page load
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
        terminalWindow.style.opacity = '0';
        terminalWindow.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            terminalWindow.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            terminalWindow.style.opacity = '1';
            terminalWindow.style.transform = 'scale(1)';
        }, 100);
    }

    // Matrix rain effect (optional, lightweight version)
    createMatrixRain();
});

// Matrix rain background effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.15';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const chars = [
  // digits & hex
  '0','1','2','3','4','5','6','7','8','9',
  'A','B','C','D','E','F','a','b','c','d','e','f',

  // half-width katakana (Matrix vibe)
  'ｱ','ｲ','ｳ','ｴ','ｵ','ｶ','ｷ','ｸ','ｹ','ｺ',
  'ｻ','ｼ','ｽ','ｾ','ｿ','ﾀ','ﾁ','ﾂ','ﾃ','ﾄ',
  'ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ﾊ','ﾋ','ﾌ','ﾍ','ﾎ',
  'ﾏ','ﾐ','ﾑ','ﾒ','ﾓ','ﾔ','ﾕ','ﾖ','ﾗ','ﾘ','ﾙ','ﾚ','ﾛ','ﾜ','ｦ','ﾝ',

  // full-width katakana (for variety)
  'ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ',
  'サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト',
  'ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ',
  'マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン',

  // greek + mathy symbols
  'λ','ψ','Π','Σ','Δ','Ω','µ','π',
  '∧','∨','¬','⊢','⊣','∑','∏',

  // brackets, slashes, pipes
  '{','}','[',']','(',')','<','>','/','\\','|',

  // hacker-y punctuation
  '@','#','$','%','&','*','+','-','=',':',';','.',','
];

    let lastTime = 0;
    const fps = 20; // 20 frames per second (50ms interval)
    const fpsInterval = 1000 / fps;

    function draw(currentTime) {
        requestAnimationFrame(draw);
        
        const elapsed = currentTime - lastTime;
        
        if (elapsed < fpsInterval) {
            return;
        }
        
        lastTime = currentTime - (elapsed % fpsInterval);
        
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = '14px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * 20;
            const y = drops[i] * 20;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    requestAnimationFrame(draw);

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + 1-5 for quick navigation
    if (e.altKey) {
        const shortcuts = {
            '1': '#home',
            '2': '#about',
            '3': '#skills',
            '4': '#blog',
            '5': '#contact'
        };

        if (shortcuts[e.key]) {
            e.preventDefault();
            const targetLink = document.querySelector(`a[href="${shortcuts[e.key]}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    }
});

// Add smooth scrolling for read more links
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would navigate to full blog post
        console.log('Navigate to full blog post');
        alert('Blog post page would open here. This is a demo version.');
    });
});

// Generate fallback placeholder SVG for project images
function getImagePlaceholder(text = 'Add Image Here') {
    // Using viewBox for proper scaling - the SVG will adapt to the container size
    const svg = [
        `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E`,
        `%3Crect width='200' height='150' fill='%230a0e27'/%3E`,
        `%3Ctext x='50%25' y='50%25' fill='%2300ff41' font-family='monospace' font-size='12' `,
        `text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(text)}%3C/text%3E`,
        `%3C/svg%3E`
    ].join('');
    
    return `data:image/svg+xml,${svg}`;
}

// Handle image loading errors for project images
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(img => {
        img.addEventListener('error', function() {
            const fallbackText = this.getAttribute('data-fallback-text') || 'Add Image Here';
            this.src = getImagePlaceholder(fallbackText);
        });
    });
});

// Log a welcome message to console
console.log('%c Welcome to Solomon Ruzima\'s Portfolio! ', 'background: #00ff41; color: #0a0e27; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Keyboard Shortcuts: Alt + 1-5 to navigate sections ', 'background: #0a0e27; color: #00ff41; font-size: 14px; padding: 5px;');
console.log('%c Built with passion and code ❤️ ', 'color: #00ff41; font-size: 12px;');

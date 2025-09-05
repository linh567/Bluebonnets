// Add interactive effects when page loads
document.addEventListener('DOMContentLoaded', function () {
    const polaroids = document.querySelectorAll('.polaroid');

    // Add hover effects to polaroid cards
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('mouseenter', function () {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            this.style.zIndex = '100';
        });

        polaroid.addEventListener('mouseleave', function () {
            const originalRotate = this.style.getPropertyValue('--rotate') || '0deg';
            this.style.transform = `rotate(${originalRotate}) scale(1)`;
            this.style.zIndex = '1';
        });
    });
});

function openCollageTab(topic) {
    // Create a new window/tab for the collage
    const collageWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes');

    let title, content, bgColor, photos;

    switch (topic) {
        case 'bluebonnets':
            title = 'Why Texas Bluebonnets?';
            bgColor = '#14366d';
            content = `
                <h2>My Full Story</h2>
                <div class="story-text">
                    <p>Reflecting on my experience at UT after studying abroad–I met some pretty cool people...</p>
                    <p>Bluebonnets are one of the few spirits with an academic scholar component...</p>
                    <p>I'm looking for that kind of deep, meaningful connection...</p>
                </div>
            `;
            photos = [
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg",
                "assets/9ef20a4353f33146d022bdfe4b5643f1.jpg"
            ];
            break;

        case 'leadership':
            title = 'Leadership Journey';
            bgColor = '#fdc500';
            content = `
                <h2>How I Bring Community</h2>
                <div class="story-text">
                    <p>Leadership to me isn't about being in charge...</p>
                    <p>I actively engage in my community...</p>
                    <p>The best leaders are the ones who lift others up...</p>
                </div>
            `;
            photos = [
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg",
                "assets/b0d4e0f0697ee2b4679e4958da5e49f9.jpg"
            ];
            break;

        case 'vietnam':
            title = 'Vietnam Journey';
            bgColor = '#ffd500';
            content = `
                <h2>A Life-Changing Experience</h2>
                <div class="story-text">
                    <p>The most formative experience was my recent trip back to Vietnam...It reminded me of the privileged life I've had...This experience shaped my perspective on community and family...</p>
                </div>
            `;
            photos = [
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg",
                "assets/bluebonnets_bg.jpg"
            ];
            break;

        case 'passion':
            title = 'What are you most passionate about?';
            bgColor = '#4569ad';
            content = `
                <h2>My Full Story</h2>
                <div class="story-text">
                    <p>Reflecting on my experience at UT after studying abroad...</p>
                    <p>Bluebonnets are one of the few spirits with an academic scholar component...</p>
                    <p>I want to be part of something bigger and more diverse.</p>
                </div>
            `;
            photos = [
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg",
                "assets/f9abcd0d38e29d4ca00d526e2e74a49d.jpg"
            ];
            break;
    }

    // Build the photo grid dynamically
    const photoHTML = photos.map((src, i) => `
        <div class="photo-item"><img src="${src}" alt="Photo ${i + 1}"></div>
    `).join('');

    collageWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Comic Neue', cursive;
                background: linear-gradient(135deg, ${bgColor}20, ${bgColor}40);
                margin: 0;
                padding: 20px;
                color: #2d3436;

            }
            .container {
                max-width: 1000px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            h1 {
                font-family: 'Fredoka', sans-serif;
                font-size: 2.5rem;
                text-align: center;
                color: ${bgColor};
                margin-bottom: 30px;
            }
            h2 {
                font-family: 'Caveat', cursive;
                font-size: 2rem;
                color: #636e72;
                margin-bottom: 20px;
            }
            .story-text {
                font-size: 1.1rem;
                line-height: 1.8;
                margin-bottom: 30px;
            }
            .story-text p {
                margin-bottom: 20px;
            }
            .photo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }
            .photo-item {
                background: white;
                padding: 10px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                transform: rotate(var(--rotate));
                transition: all 0.3s ease;
                position: relative;
            }
            .photo-item:hover {
                transform: rotate(0deg) scale(1.05);
                z-index: 100;
            }
            .photo-item:nth-child(odd) { --rotate: -2deg; }
            .photo-item:nth-child(even) { --rotate: 2deg; }
            .photo-item img {
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${title}</h1>
            ${content}
            <div class="photo-grid">
                ${photoHTML}
            </div>
        </div>
    </body>
    </html>
    `);

    collageWindow.document.close();
}

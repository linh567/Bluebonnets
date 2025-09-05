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
                <div class="story-text">
                    <p>A series of events from the past year brought me here today. In Spring 2025, I studied abroad in Singapore, where I met fellow Longhorns and international students. For the first two years, I had pigeonholed myself in the engineering circle–I even thought there were only three UT students abroad in Singapore, when there were 27 of us! I just hadn’t considered the other non-engineering programs. Around that time, I was also reading Everything I Know About Love by Dolly Alderton. The most important lesson I took from it is that the friendships you build in your 20s—especially with other women—can be some of the most enduring. It made me realize that while academics will always be a priority, I don’t want to miss out on opportunities to build meaningful connections.</p>
                    <p>Reflecting on my UT experience, I realized I never would have met so many amazing people without seeking out spaces that bring us together. That’s why Bluebonnets stand out to me. It’s one of the few organizations that blends community and spirit with an academic pillar. The women I’ve met at events are ambitious and driven, but they also value friendship and support. Just like discovering those 26 other Longhorns in Singapore expanded my circle, joining Bluebonnets represents that same opportunity without sacrificing academic excellence. I want to be part of an organization that aligns with my values both academic excellence and genuine connection!</p>
                </div>
            `;
            photos = [
                "assets/bluebonnets1.JPG",
                "assets/bluebonnets2.JPG",
                "assets/bluebonnets3.JPG",
                "assets/bluebonnets4.jpg",
                "assets/bluebonnets5.JPG",
                "assets/bluebonnets6.JPG",
                "assets/bluebonnets7.jpg"
            ];
            break;

        case 'leadership':
            title = 'Leadership Journey';
            bgColor = '#fdc500';
            content = `
                <div class="story-text">
                    <p>When we think of leadership, our minds go to big heroic acts: spearhead a massive project, leading a team of X people. But, I think leadership presents itself in smaller acts as well–initiative, supporting others, and knowing when to step back and let your group shine. I've always gravitated toward organizations whose missions genuinely resonate with me, and once I'm there, I look for ways to engage deeply in the community. Whether serving as student organization president, joining officer boards and committees, volunteering for community service, showing up consistently to social events, or mentoring underclassmen–I show up whenever and however I can. These seemingly small acts have opened doors I never expected. I've formed incredible friendships, discovered new passions, and found myself in opportunities that shaped who I am today.</p>
                    <p>The impact of leadership is felt in both directions. There were numerous times when small acts of leadership from others–something like planning a hangout, organizing an event, or simply checking in–made me feel welcomed and supported. These gestures, though seemingly “minor”, created spaces where I felt seen, included, and motivated to contribute myself. A person’s act of “leadership” inspires others to feel empowered to do the same, and through that we can build resilient and vibrant communities. Leadership is valuable because I truly believe it builds, upholds, and flourishes communities.</p>
                </div>
            `;
            photos = [
                "assets/leadership1.jpg",
                "assets/leadership2.jpg",
                "assets/leadership3.png",
                "assets/passion2.png",
            ];
            break;

        case 'vietnam':
            title = 'Winter Trip';
            bgColor = '#ffd500';
            content = `
                <div class="story-text">
                    <p>I immigrated from Vietnam when I was nine. This past winter, I went back to visit my extended family–the second time in 11 years. Growing up, my parents have always reminded my brother and I how fortunate we are to immigrate to the US and the opportunities we have–to pursue further education, access resources they never had, explore careers that wouldn’t be possible if we stayed in Vietnam. All that to say, we are very fortunate to live the lives that we do.</p>
                    <p>The trip was incredible, but I couldn’t shake the bittersweet feeling. My cousins who were toddlers when I left are now entering high school and my grandma has gotten older and frailer. It felt like I had missed such important chapters of their lives. The warmth and sense of community I felt with my family and friends made me wish I hadn’t moved to the U.S at all. Admittedly, I’m still grappling with that feeling, but I came back from Vietnam with a new sense of motivation: to make the most of the opportunities my parents worked so hard to give me, and to stay connected to my culture.</p>
                </div>
            `;
            photos = [
                "assets/vietnam1.JPG",
                "assets/vietnam2.JPG",

            ]
            break;

        case 'passion':
            title = 'What are you most passionate about?';
            bgColor = '#4569ad';
            content = `
                <div class="story-text">
                    <p>My research! I’m currently working part-time at a national lab–conducting research for autonomous systems. I stumbled upon robotics my freshman year of college when my friend asked me to join a competition with her. At this point, I had zero idea what I was doing. I was an art kid in high school. Our robot looked like a roach and we placed second to last.</p>
                    <p>I didn’t fall in love with robotics then. But I stayed because of the people and the chance to gain technical experience. Strangely–opportunities, knowledge, and genuine passion for the field slowly came. Each experience taught me something new, and tasks that once felt impossible gradually became routine. Now, I’m working towards making robots capable enough to coexist with humans. This field is evolving rapidly–there’s new research and breakthroughs every day. It’s incredibly exciting to be working alongside engineers and professors that are pioneering the field!</p>
                </div>
            `;
            photos = [
                "assets/passion1.jpeg",
                "assets/passion3.png",
            ];
            break;
        case 'sweet-treat':
            title = 'If you had 1000 dollars, what would you spend it on?';
            bgColor = '#ffd500';
            content = `
                <div class="story-text">
                    <p>I would use it to fund the numerous craft projects I want to do, cafe hopping, and sweet treats. I have a spending problem and I love to eat</p>
                </div>
            `;
            photos = [
                "assets/treat2.JPG",
                "assets/treat1.JPG",
                "assets/treat3.JPG",
            ];
            break;
        case 'yolo':
            title = 'Favorite thing about yourself?';
            bgColor = '#ffd500';
            content = `
                <div class="story-text">
                    <p>My willingness to try new activities! I'm pretty YOLO, especially when it comes to fitness or travel. This summer I tried hot yoga and was convinced to hike Angel's Landing (I'm scared of height)🚶‍♀️</p>
                </div>
            `;
            photos = [
                "assets/yolo2.JPG",
                "assets/yolo1.JPG",
            ];
            break;
    }

    // Build the photo grid dynamically with modal functionality
    const photoHTML = photos.map((src, i) => `
        <div class="photo-item">
            <img src="${src}" alt="Photo ${i + 1}" onclick="openModal('${src}')">
        </div>
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
                cursor: pointer;
            }
            /* Modal styles */
            #modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }
            #modalImg {
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
            }
            #modalClose {
                position: absolute;
                top: 20px;
                right: 30px;
                font-size: 40px;
                color: white;
                cursor: pointer;
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

        <!-- Modal Structure -->
        <div id="modal">
            <span id="modalClose">&times;</span>
            <img id="modalImg" src="">
        </div>

        <script>
            function openModal(src) {
                const modal = document.getElementById('modal');
                const modalImg = document.getElementById('modalImg');
                modal.style.display = 'flex';
                modalImg.src = src;
            }

            document.getElementById('modalClose').onclick = function() {
                document.getElementById('modal').style.display = 'none';
            }

            document.getElementById('modal').onclick = function(e) {
                if(e.target.id === 'modal') {
                    this.style.display = 'none';
                }
            }
        </script>
    </body>
    </html>
    `);

    collageWindow.document.close();
}

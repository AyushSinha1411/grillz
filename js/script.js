// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    setupBackgroundAnimation();
    setupProjects();
    setupSkills();
    setupContactForm();
    initParticles(); // Hero section particles
    initProjectParticles(); // Projects section particles
    initAboutParticles(); // About section particles
});

// Particle systems code remains the same...
[Previous particle system code here, up until setupProjects function]

function setupProjects() {
    const projects = [
        {
            title: "Food Ordering App",
            description: "A comprehensive full-stack food delivery platform featuring real-time order tracking, secure payment integration via Stripe, and a responsive UI. Allows users to browse menus, customize orders, and track delivery status in real-time.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Socket.io"],
            color: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)"
        },
        {
            title: "Interactive Portfolio",
            description: "Modern portfolio website showcasing advanced animations and interactive elements. Features particle systems, dynamic content loading, and smooth transitions using GSAP animations and Canvas API.",
            tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Canvas API", "ScrollTrigger"],
            color: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)"
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectElement = createProjectCard(project);
        projectsGrid.appendChild(projectElement);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    card.innerHTML = `
        <div class="project-image" style="background: ${project.color};">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    // Enhanced hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.project-overlay'), {
            opacity: 1,
            y: 0,
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.project-overlay'), {
            opacity: 0,
            y: 10,
            duration: 0.3
        });
    });

    return card;
}

function setupSkills() {
    const skillsByCategory = {
        Core: [
            { name: "HTML5", level: 95, icon: "📄" },
            { name: "CSS3", level: 92, icon: "🎨" },
            { name: "JavaScript", level: 90, icon: "⚡" },
            { name: "DOM Manipulation", level: 88, icon: "🔄" }
        ],
        Animation: [
            { name: "GSAP Animation", level: 85, icon: "🎭" },
            { name: "Canvas API", level: 88, icon: "🖼️" },
            { name: "CSS Animations", level: 90, icon: "✨" },
            { name: "SVG Animation", level: 85, icon: "🔄" }
        ],
        Layout: [
            { name: "Responsive Design", level: 95, icon: "📱" },
            { name: "CSS Grid", level: 92, icon: "📐" },
            { name: "Flexbox", level: 90, icon: "🔲" },
            { name: "UI/UX Design", level: 85, icon: "🎯" }
        ]
    };

    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const gridElement = document.getElementById(`${category.toLowerCase()}Skills`);
        if (!gridElement) return;

        gridElement.innerHTML = '';
        skills.forEach(skill => {
            const skillElement = createSkillItem(skill);
            gridElement.appendChild(skillElement);
        });
    });
}

function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item fade-in';
    
    item.innerHTML = `
        <h3>${skill.icon} ${skill.name}</h3>
        <div class="skill-bar">
            <div class="skill-progress" style="width: 0%"></div>
        </div>
    `;

    // Enhanced skill progress animation
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        onEnter: () => {
            gsap.to(item.querySelector('.skill-progress'), {
                width: `${skill.level}%`,
                duration: 1.5,
                ease: "power2.out"
            });
            
            // Add glow effect
            gsap.to(item, {
                boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)',
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
        }
    });

    return item;
}

// Rest of the code remains the same...
[Previous animation and initialization code here]

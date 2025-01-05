const certificates = [
    {
        title: "Java Spring Framework 5 - Build A Web App Step By Step",
        issuer: "Example Academy",
        date: "30th September, 2024",
        image: "images/certificates/certificate1.jpg",
        description: "Full Stack Web Development certification covering HTML, CSS, JavaScript, and modern frameworks.",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-22GW98HS?v=1736053097"
    },
    {
        title: "Docker ",
        issuer: "Example Academy",
        date: "30th September, 2024",
        image: "images/certificates/certificate1.jpg",
        description: "Full Stack Web Development certification covering HTML, CSS, JavaScript, and modern frameworks.",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-22GW98HS?v=1736053097"
    },
    {
        title: "Java Spring boot ",
        issuer: "Example Academy",
        date: "30th September, 2024",
        image: "images/certificates/certificate1.jpg",
        description: "Full Stack Web Development certification covering HTML, CSS, JavaScript, and modern frameworks.",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-22GW98HS?v=1736053097"
    },
    {
        title: "Java Spring Framework 5 - Build A Web App Step By Step",
        issuer: "Example Academy",
        date: "30th September, 2024",
        image: "images/certificates/certificate1.jpg",
        description: "Full Stack Web Development certification covering HTML, CSS, JavaScript, and modern frameworks.",
        certificateUrl: "https://www.example.com/cert1"
    },
    {
        title: "Advanced JavaScript Development",
        issuer: "Tech Institute",
        date: "15th August, 2024",
        image: "images/certificates/certificate2.jpg",
        description: "Advanced JavaScript concepts including ES6+, async programming, and modern frameworks.",
        certificateUrl: "https://www.example.com/cert2"
    },
    {
        title: "React Development Specialist",
        issuer: "Web Academy",
        date: "1st July, 2024",
        image: "images/certificates/certificate3.jpg",
        description: "Comprehensive React.js development including hooks, context API, and Redux.",
        certificateUrl: "https://www.example.com/cert3"
    }
    // Add more certificates as needed
];

// Function to create certificate cards
function createCertificateCards() {
    const certificateGrid = document.getElementById('certificateGrid');

    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certificate-card';

        const cardContent = `
            <img src="${cert.image}" alt="${cert.title}" onerror="handleImageError(this)">
            <div class="card-content">
                <h3>${cert.title}</h3>
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
                <p><strong>Date:</strong> ${cert.date}</p>
                <p>${cert.description}</p>
                <button class="view-certificate" onclick="window.open('${cert.certificateUrl}', '_blank')">
                    View Certificate
                </button>
            </div>
        `;

        card.innerHTML = cardContent;
        certificateGrid.appendChild(card);
    });
}

// Handle errors for image loading
function handleImageError(img) {
    img.onerror = null;
    img.src = 'images/placeholder.jpg';
}

// Header scroll functionality
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header-hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});

// Initialize the page
document.addEventListener('DOMContentLoaded', createCertificateCards);

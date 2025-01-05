const certificates = [
    
    {
        title: "Java Certification 2024",
        issuer: "Tutorialspoint",
        date: "30th September, 2024",
        image: "images/certificates/certificate1.jpg",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-QBH3DBQ0"
    },
    {
        title: "Java Spring Framework 5",
        issuer: "Damian Jedrzejak",
        date: "30th September, 2024",
        image: "images/certificates/certificate2.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-22GW98HS"
    },
    {
        title: "Functional Programming and Lambda",
        issuer: "Arun Ammasai",
        date: "12th September, 2024",
        image: "images/certificates/certificate3.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-M2SNONVC"
    },
    {
        title: "Create Chatting App Using Android Studio and Java",
        issuer: "Mustafa Alawi",
        date: "24th July, 2024",
        image: "images/certificates/certificate4.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-35XLUDYD"
    },
    {
        title: "JSP and Servlets",
        issuer: "TELCOMA Global",
        date: "22nd July, 2024",
        image: "images/certificates/certificate5.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-1K9IFTRV"
    },
    {
        title: "Java Database Connectivity (JDBC)",
        issuer: "Emenwa Global, Ejike IfeanyiChukwu",
        date: "12th June, 2024",
        image: "images/certificates/certificate6.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-95G4QLJJ"
    },
    {
        title: "Java Concurrency & Multithreading",
        issuer: "Denis Tishkov",
        date: "8th June, 2024",
        image: "images/certificates/certificate7.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-DZ5B7L4F"
    },
    {
        title: "Fundamentals Of Object-Oriented Programming",
        issuer: "Doxa Anthony",
        date: "21st April, 2024",
        image: "images/certificates/certificate8.png",
        certificateUrl: "https://www.tutorialspoint.com/market/certificate.jsp/TP-BEZJ8PLI"
    },
    {
        title: "Learn Spring Boot 3 in 100 Steps",
        issuer: "In 28 Minutes",
        date: "31st july, 2024",
        image: "images/certificates/certificate9.png",
        certificateUrl: "https://www.udemy.com/certificate/UC-66724011-62e0-4b3d-8f71-89f6f2d4a985"
    },
    {
        title: "Mastering Chatbots with Botpress",
        issuer: "Abu Bakr Soliman",
        date: "24st sep, 2024",
        image: "images/certificates/certificate10.png",
        certificateUrl: "https://www.udemy.com/certificate/UC-23e381f6-e907-4007-9d82-b3c5cfc2e89a/"
    },
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
               <!-- <p>${cert.description}</p> --> 
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

/**
 * Digital Marketing Agency Website
 * Full-Stack JavaScript Functionality
 * 
 * API Endpoints:
 * - GET    /api/services      - Fetch all services
 * - POST   /api/services      - Add a new service
 * - DELETE /api/services/:id  - Remove a service by ID
 */

// ================================
// API Configuration
// ================================
const API_BASE_URL = '/api';

// ================================
// Service Management
// ================================

// Fetch and display all services from the backend
async function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    try {
        const response = await fetch(`${API_BASE_URL}/services`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const services = await response.json();
        displayServices(services);
    } catch (error) {
        console.error('Error loading services:', error);
        servicesGrid.innerHTML = `
            <div class="loading-message" style="color: var(--pink-highlight);">
                ❌ Failed to load services. Please check your connection and try again.
            </div>
        `;
    }
}

// Display services in the grid
function displayServices(services) {
    const servicesGrid = document.getElementById('servicesGrid');
    
    if (services.length === 0) {
        servicesGrid.innerHTML = `
            <div class="loading-message">
                No services available. Add your first service above! 
            </div>
        `;
        return;
    }
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" data-service-id="${service.id}">
            <button class="delete-service-btn" onclick="deleteService(${service.id})" title="Delete service">
                ✕
            </button>
            <span class="service-icon">${service.icon}</span>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Add a new service
async function addService(serviceData) {
    try {
        const response = await fetch(`${API_BASE_URL}/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to add service');
        }
        
        const newService = await response.json();
        console.log('Service added successfully:', newService);
        
        // Reload services to show the new one
        await loadServices();
        
        // Show success message
        showMessage('✅ Service added successfully!', 'success');
        
        return newService;
    } catch (error) {
        console.error('Error adding service:', error);
        showMessage(`❌ Error: ${error.message}`, 'error');
        throw error;
    }
}

// Delete a service
async function deleteService(id) {
    if (!confirm('Are you sure you want to delete this service?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete service');
        }
        
        const result = await response.json();
        console.log('Service deleted:', result);
        
        // Reload services to reflect the deletion
        await loadServices();
        
        // Show success message
        showMessage('✅ Service deleted successfully!', 'success');
    } catch (error) {
        console.error('Error deleting service:', error);
        showMessage(`❌ Error: ${error.message}`, 'error');
    }
}

// Show success/error message
function showMessage(message, type) {
    const messageDiv = document.getElementById('serviceMessage');
    messageDiv.textContent = message;
    messageDiv.className = `service-message ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.className = 'service-message';
    }, 5000);
}

// ================================
// Form Handling
// ================================
const addServiceForm = document.getElementById('addServiceForm');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const cancelFormBtn = document.getElementById('cancelFormBtn');

// Toggle form visibility
if (toggleFormBtn) {
    toggleFormBtn.addEventListener('click', () => {
        const isVisible = addServiceForm.style.display === 'block';
        addServiceForm.style.display = isVisible ? 'none' : 'block';
        toggleFormBtn.textContent = isVisible ? '➕ Add New Service' : '➖ Hide Form';
    });
}

// Cancel button
if (cancelFormBtn) {
    cancelFormBtn.addEventListener('click', () => {
        addServiceForm.style.display = 'none';
        toggleFormBtn.textContent = '➕ Add New Service';
        addServiceForm.reset();
    });
}

// Handle form submission
if (addServiceForm) {
    addServiceForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const serviceData = {
            name: document.getElementById('serviceName').value.trim(),
            icon: document.getElementById('serviceIcon').value.trim(),
            description: document.getElementById('serviceDesc').value.trim()
        };
        
        // Client-side validation: prevent whitespace-only submissions
        if (!serviceData.name || !serviceData.icon || !serviceData.description) {
            showMessage('❌ All fields are required and cannot be empty or whitespace only.', 'error');
            return;
        }
        
        // Validate icon is 1-2 characters (emoji check)
        if (serviceData.icon.length > 2) {
            showMessage('❌ Icon should be a single emoji (1-2 characters).', 'error');
            return;
        }
        
        try {
            await addService(serviceData);
            
            // Reset form and hide it
            addServiceForm.reset();
            addServiceForm.style.display = 'none';
            toggleFormBtn.textContent = '➕ Add New Service';
        } catch (error) {
            // Error already handled in addService function
        }
    });
}

// ================================
// Initialize Services on Page Load
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Load services from backend
    loadServices();
    
    // Set initial state for animated elements (existing functionality)
    const animatedElements = document.querySelectorAll('.portfolio-card, .testimonial-card, .blog-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    revealOnScroll();
});

// ================================
// Navbar Scroll Effect
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================
// Smooth Scroll for Anchor Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Contact Form Submission
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        console.log('Contact form submitted:', formData);
    });
}

// ================================
// Mobile Menu Toggle
// ================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// ================================
// Scroll Reveal Animation
// ================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.portfolio-card, .testimonial-card, .blog-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ================================
// Form Input Validation
// ================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#f95d9b';
        } else {
            this.style.borderColor = '#e5e7eb';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#39a0ca';
    });
});

// ================================
// Stats Counter Animation
// ================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ================================
// Lazy Loading for Images (if added)
// ================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ================================
// Console Message
// ================================
console.log('%c🚀 NEXA Digital Marketing Agency - Full Stack App', 'color: #f95d9b; font-size: 18px; font-weight: bold;');
console.log('%cBuilt with Express.js backend + Vanilla JS frontend', 'color: #478559; font-size: 14px;');
console.log('%cCustom Color Scheme Applied!', 'color: #39a0ca; font-size: 12px;');
console.log('%cAPI Base URL: ' + API_BASE_URL, 'color: #161748; font-size: 12px;');

# Digital Marketing Agency Website

A modern, professional digital marketing agency website with custom color scheme and separated file structure.

## 🎨 Custom Color Scheme

- **Green Treeline**: #478559
- **Purple Baseline**: #161748
- **Pink Highlight**: #f95d9b
- **Bluewater Lowlight**: #39a0ca

## 📁 Project Structure

```
digital-agency-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (custom color scheme applied)
├── js/
│   └── script.js       # All JavaScript functionality
├── assets/
│   └── images/         # Folder for images (placeholder)
└── README.md           # This file
```

## ✨ Features

### Sections Included
1. **Hero Section** - Gradient background with stats and CTA buttons
2. **About Us** - Company overview with feature highlights
3. **Services** - 6 service cards with hover effects
4. **Portfolio** - 6 case study cards with results
5. **Testimonials** - 3 client reviews with ratings
6. **Blog** - 3 article cards with categories
7. **Contact** - Full form + contact info + Google Maps
8. **Footer** - Links, social media, legal

### Design Features
- ✅ Clean, modern, professional design
- ✅ Custom color scheme applied throughout
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects
- ✅ Scroll reveal animations
- ✅ Fixed navbar with scroll effect
- ✅ SEO-ready structure
- ✅ Fast loading performance

### JavaScript Features
- Smooth scroll navigation
- Navbar scroll effect
- Contact form validation
- Scroll reveal animations
- Stats counter animation
- Mobile menu toggle (ready to implement)
- Lazy loading support

## 🚀 Quick Start

### Option 1: Direct Use
1. Extract the folder
2. Open `index.html` in any modern browser
3. That's it! No installation required.

### Option 2: Local Development Server
For better performance and testing:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 🎨 Customization

### Change Colors
Edit `css/styles.css` and modify the CSS variables:

```css
:root {
    --green-treeline: #478559;
    --purple-baseline: #161748;
    --pink-highlight: #f95d9b;
    --bluewater-lowlight: #39a0ca;
}
```

### Update Content
- **Text**: Edit `index.html` directly
- **Services**: Modify the services section in HTML
- **Portfolio**: Update portfolio cards with your projects
- **Contact Info**: Change contact details in HTML

### Add Images
1. Place images in `assets/images/` folder
2. Replace emoji placeholders in HTML with:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do for Production

- [ ] Add real images to replace emoji placeholders
- [ ] Connect contact form to backend/email service
- [ ] Add Google Analytics tracking
- [ ] Optimize images (compress, webp format)
- [ ] Add favicon
- [ ] Set up proper email service
- [ ] Add blog functionality (if needed)
- [ ] Implement mobile menu dropdown
- [ ] Add 404 error page
- [ ] Set up SSL certificate

## 🔧 Form Integration

To integrate the contact form with a backend:

```javascript
// In js/script.js, replace the form submission with:
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Message sent successfully!');
})
.catch(error => {
    alert('Error sending message. Please try again.');
});
```

## 📦 Deployment

### Deploy to Netlify
1. Drag and drop the `digital-agency-website` folder to Netlify
2. Your site is live!

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Save

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project folder
3. Follow prompts

## 💡 Tips

- Replace emojis with professional icons (Font Awesome, Feather Icons)
- Add actual client testimonials
- Use real case study data
- Create blog content for SEO
- Add social media links
- Set up contact form email notifications

## 🆘 Support

For questions or issues:
- Email: hello@digiagency.com
- Check browser console for errors
- Validate HTML/CSS with W3C validators

## 📄 License

This project is provided as-is for your use. Feel free to customize and deploy!

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Custom color scheme applied throughout the design*
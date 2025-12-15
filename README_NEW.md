# 🚀 Modern Portfolio Website

A professional, responsive portfolio website built with **React**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase your skills, projects, and personality with smooth animations and SEO optimization.

![React](https://img.shields.io/badge/React-19-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-ff69b4) ![Vite](https://img.shields.io/badge/Vite-Build_Tool-646cff)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with gradient accents
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Framer Motion micro-interactions
- 🎯 **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- ♿ **Accessible** - WCAG compliant with semantic elements
- 📧 **Contact Form** - EmailJS integration (no backend needed)
- 📄 **CV Download** - Prominent download button
- 🔗 **Social Links** - LinkedIn, GitHub, Email integration
- 🌙 **Dark Mode Ready** - Tailwind dark mode support
- 📊 **Data Driven** - Separate data file for easy updates

---

## 🏗️ Built With

- [React 19](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [EmailJS](https://www.emailjs.com/) - Contact form

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

### First Steps

1. **Update Personal Info**

   - Edit `src/data/portfolioData.js`
   - Change name, email, title, and social links

2. **Add Your CV**

   - Place PDF in `public/cv.pdf`

3. **Set Up Contact Form**

   - Create [EmailJS](https://www.emailjs.com/) account
   - Update credentials in `portfolioData.js`

4. **Customize Content**
   - Update About, Skills, and Projects sections
   - Add your profile image to `public/`

For detailed instructions, see [QUICK_START.md](QUICK_START.md)

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation + CV button
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── portfolioData.js # Content data (UPDATE THIS!)
│   ├── App.jsx              # Main app
│   └── index.css            # Global styles
├── public/
│   ├── cv.pdf               # Your CV (add yours)
│   ├── profile.jpg          # Your photo (add yours)
│   └── projects/            # Project images
└── index.html               # HTML with meta tags
```

---

## 📋 Sections

### 1. Header

- Smooth scroll navigation
- Mobile-responsive menu
- Prominent CV download button
- Sticky on scroll

### 2. Hero

- Animated gradient background
- Personal introduction
- Social media links
- Call-to-action buttons

### 3. About Me

- Professional bio with 3 paragraphs
- Education and experience highlights
- Profile image with animated frame
- Emphasizes potential and soft skills

### 4. Skills

- 4 customizable categories
- Visual progress bars
- Animated on scroll
- Easy to add/modify skills

### 5. Projects

- Smart display (hides until 2+ projects)
- Project cards with hover effects
- Technology tags
- GitHub & live demo links

### 6. Contact

- EmailJS integration
- Form validation
- Quick email button
- Contact information display

### 7. Footer

- Social media links
- Quick navigation
- Professional branding

---

## 🎨 Customization

### Change Color Scheme

Search and replace in component files:

```jsx
// Default: Blue to Purple gradient
from-blue-600 to-purple-600

// Example: Green to Teal
from-green-600 to-teal-600
```

### Modify Animations

In component files, adjust Framer Motion props:

```jsx
<motion.div
  transition={{ duration: 0.5 }} // Change speed
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>
```

### Update Content

All content is in `src/data/portfolioData.js`:

- Personal information
- About section text
- Skills and levels
- Projects data
- Contact details

---

## 📧 EmailJS Setup

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create an account
3. Add an email service (Gmail/Outlook/etc.)
4. Create an email template with variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
5. Copy Service ID, Template ID, and Public Key
6. Update `src/data/portfolioData.js`:

```javascript
emailJS: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
}
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

### Deploy

Deploy to any static hosting:

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

#### Netlify

1. Drag & drop `dist/` folder to [app.netlify.com](https://app.netlify.com/)
2. Or use Netlify CLI: `netlify deploy --prod`

#### GitHub Pages

1. Update `vite.config.js` with base path
2. Run build and push `dist/` to `gh-pages` branch

---

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Add your CV PDF
- [ ] Set up EmailJS
- [ ] Test contact form
- [ ] Add profile image
- [ ] Add at least 2 projects
- [ ] Update meta tags in `index.html`
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Run production build
- [ ] Test SEO with LinkedIn Post Inspector

For complete checklist, see [CHECKLIST.md](CHECKLIST.md)

---

## 📚 Documentation

- [QUICK_START.md](QUICK_START.md) - Fast setup guide
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Comprehensive instructions
- [CHECKLIST.md](CHECKLIST.md) - Pre-launch checklist
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Technical overview

---

## 🎯 SEO Features

- Meta descriptions
- Open Graph tags (LinkedIn, Facebook, WhatsApp)
- Twitter Card tags
- Semantic HTML structure
- Optimized for social sharing

### Before Sharing

1. Update website URL in `index.html`
2. Add Open Graph image at `public/og-image.jpg`
3. Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and touch-friendly.

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Focus indicators

---

## 🛠️ Tech Stack Details

### Frontend

- **React 19** - Latest React with Hooks
- **Vite** - Next-generation build tool
- **Tailwind CSS v4** - Utility-first CSS

### Animations

- **Framer Motion** - Production-ready animations
- Smooth scroll behavior
- Hover effects
- Scroll-triggered animations

### Icons

- **Lucide React** - Beautiful, consistent icons
- Lightweight and customizable

### Forms

- **EmailJS** - Contact form without backend
- Client-side validation
- Success/error handling

---

## 🌟 Key Features Explained

### Smart Project Display

Projects section automatically:

- Shows "Under Construction" if < 2 projects
- Displays projects when you have 2 or more
- No empty placeholder states

### Data-Driven Architecture

- Content separated from presentation
- Easy to update without touching JSX
- Scalable for future additions

### Performance Optimized

- Fast initial load
- Optimized animations (GPU-accelerated)
- Efficient component structure
- Minimal bundle size

---

## 🤝 Contributing

This is a personal portfolio template. Feel free to:

- Fork for your own use
- Customize as needed
- Share improvements

---

## 📄 License

MIT License - Feel free to use for personal projects

---

## 🎉 Get Started Now!

1. Clone the repo
2. Run `npm install`
3. Edit `src/data/portfolioData.js`
4. Start dev server: `npm run dev`
5. Customize and deploy!

---

**Questions?** Check the documentation files or open an issue.

**Happy building! 🚀**

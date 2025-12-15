# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, clean design, and comprehensive SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: React + Vite + Tailwind CSS + Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Micro-interactions and page transitions with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph tags for social media sharing
- **Accessible**: Semantic HTML5 elements for better accessibility
- **Contact Form**: Integrated with EmailJS for easy contact without backend
- **CV Download**: Fixed button for easy CV download
- **Clean Icons**: Lucide React for lightweight, beautiful icons
- **Dark Mode Ready**: Dark mode support with Tailwind CSS
- **Data Decoupling**: Separate data file for easy content management

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated elements
2. **About** - Detailed "About Me" section with highlights
3. **Skills** - Comprehensive skills showcase with visual progress bars
4. **Projects** - Portfolio projects (shows "Under Construction" until 2+ projects)
5. **Contact** - Contact form with EmailJS integration + direct email option
6. **Footer** - Social links and additional information

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Data

Edit `src/data/portfolioData.js` to customize:

- **Personal Information**: Name, title, email, phone, social links
- **About Section**: Description, education, experience
- **Skills**: Add/modify your technical and soft skills
- **Projects**: Add your projects (minimum 2 for display)
- **Contact**: Update EmailJS credentials

### 3. Set Up EmailJS

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update these values in `src/data/portfolioData.js`:

```javascript
emailJS: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
}
```

### 4. Add Your CV

Place your CV PDF file in the `public` folder as `cv.pdf`, or update the path in `src/data/portfolioData.js`:

```javascript
cvUrl: "/your-cv-name.pdf";
```

### 5. Add Your Profile Image (Optional)

Place your profile image in the `public` folder and update the path in `src/data/portfolioData.js`:

```javascript
image: "/profile.jpg";
```

### 6. Update Meta Tags

Edit `index.html` to customize:

- Page title
- Meta descriptions
- Open Graph tags (for LinkedIn/WhatsApp previews)
- Your website URL

### 7. Add Project Images (Optional)

Place project images in `public/projects/` folder and update paths in your project objects.

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to view your portfolio.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 Customization

### Colors

The default theme uses a blue-to-purple gradient. To customize:

1. Update gradient colors in components (search for `from-blue-600 to-purple-600`)
2. Modify Tailwind config for custom color palette

### Animations

- Framer Motion animations are configured in each component
- Adjust `transition` properties for different animation speeds
- Modify `variants` objects for custom animation patterns

### Layout

- All sections use semantic HTML (`<main>`, `<section>`, `<footer>`)
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Container max-widths can be adjusted in Tailwind config

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text

## 🔍 SEO

- Meta descriptions
- Open Graph tags (Facebook, LinkedIn, WhatsApp)
- Twitter Card tags
- Semantic HTML structure
- Responsive images with alt text

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf              # Your CV file
│   ├── profile.jpg         # Your profile image
│   └── projects/           # Project images
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── data/
│   │   └── portfolioData.js # All content data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template with SEO meta tags
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions, please open an issue on the repository.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

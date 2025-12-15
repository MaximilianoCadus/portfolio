# 🚀 Quick Start Guide

## Your Portfolio is Ready!

Your portfolio website is now running at **http://localhost:5174**

## ✅ What's Been Set Up

1. **Modern Tech Stack**

   - React 19 with Vite
   - Tailwind CSS v4
   - Framer Motion for animations
   - Lucide React for icons
   - EmailJS for contact form

2. **All Sections Created**

   - ✨ Hero section with animated background
   - 📝 About Me section with highlights
   - 🛠️ Skills section with progress bars
   - 💼 Projects section (shows "Under Construction" until you have 2+ projects)
   - 📧 Contact form with EmailJS integration
   - 🔗 Footer with social links

3. **SEO & Accessibility**
   - Meta tags and Open Graph tags configured
   - Semantic HTML elements
   - Smooth scroll navigation

## 📝 Next Steps to Customize

### 1. Update Your Personal Information

Edit `src/data/portfolioData.js` and update:

```javascript
export const personalInfo = {
  name: "YOUR NAME HERE",
  title: "YOUR TITLE",
  tagline: "YOUR TAGLINE",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  cvUrl: "/cv.pdf",
};
```

### 2. Customize About Section

Update the `about` object in `src/data/portfolioData.js`:

- Change description paragraphs
- Update education and experience highlights

### 3. Add Your Skills

Modify skill levels and add/remove skills in the `skills` object.

### 4. Add Your CV

1. Place your CV PDF in the `public` folder as `cv.pdf`
2. Or rename it and update the path in `personalInfo.cvUrl`

### 5. Set Up EmailJS (for Contact Form)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials and update in `src/data/portfolioData.js`:

```javascript
emailJS: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
}
```

**EmailJS Template Variables:**
Use these in your template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email

### 6. Add Profile Image (Optional)

1. Add your photo to `public` folder as `profile.jpg`
2. Update the path in `about.image` in `portfolioData.js`
3. Uncomment the image code in `src/components/About.jsx`

### 7. Add Projects

When you have at least 2 projects ready:

1. Add project images to `public/projects/`
2. Update the `projects` array in `src/data/portfolioData.js`
3. Set `status: "completed"` for each project
4. The "Under Construction" message will automatically disappear

Example project object:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description...",
  image: "/projects/project1.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/project",
  live: "https://project-demo.com",
  featured: true,
  status: "completed"
}
```

### 8. Update Meta Tags

Edit `index.html` and update:

- Page title
- Meta description
- Your website URL in Open Graph tags
- Add your social media image URL

### 9. Update Social Links

Edit the `socialLinks` array in `src/data/portfolioData.js` to add/remove social platforms.

## 🎨 Customization Tips

### Change Color Scheme

The default uses blue-to-purple gradient. To change:

1. Search for `from-blue-600 to-purple-600` in all component files
2. Replace with your preferred colors (e.g., `from-green-600 to-teal-600`)

### Adjust Animations

In each component file, look for Framer Motion `transition` properties:

- Increase `duration` for slower animations
- Decrease `duration` for faster animations
- Modify `delay` values for timing

### Responsive Design

All components are responsive. Breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment Options

Your portfolio can be deployed to:

- **Vercel** (recommended) - `vercel --prod`
- **Netlify** - Drag & drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions
- **AWS S3** - Upload `dist` folder
- Any static hosting service

## 🆘 Troubleshooting

### Contact Form Not Working

- Make sure EmailJS credentials are correct
- Check browser console for errors
- Verify EmailJS service and template are active

### Images Not Showing

- Ensure images are in the `public` folder
- Check file paths match exactly (case-sensitive)
- Clear browser cache

### Styling Issues

- Run `npm run dev` to restart dev server
- Clear browser cache
- Check browser console for errors

## 📞 Need Help?

- Check `SETUP_GUIDE.md` for detailed instructions
- Review comments in `src/data/portfolioData.js`
- Inspect browser console for errors

---

## 🎉 You're All Set!

Your modern, professional portfolio is ready to customize and deploy. Good luck! 🚀

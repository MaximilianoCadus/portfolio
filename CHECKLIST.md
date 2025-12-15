# Portfolio Customization Checklist

## Before You Launch - Complete These Tasks

### 🔴 Critical (Must Do)

- [ ] Update your name in `src/data/portfolioData.js` → `personalInfo.name`
- [ ] Update your title in `src/data/portfolioData.js` → `personalInfo.title`
- [ ] Update your email in `src/data/portfolioData.js` → `personalInfo.email`
- [ ] Update page title in `index.html` (line 10)
- [ ] Update meta description in `index.html` (line 12)
- [ ] Add your CV PDF to `public/cv.pdf` folder
- [ ] Update GitHub profile URL in `src/data/portfolioData.js`
- [ ] Update LinkedIn profile URL in `src/data/portfolioData.js`
- [ ] Set up EmailJS account and update credentials in `src/data/portfolioData.js`
- [ ] Test contact form works properly

### 🟡 Important (Should Do)

- [ ] Write your About Me description in `src/data/portfolioData.js` → `about.description`
- [ ] Update your education in `src/data/portfolioData.js` → `about.highlights`
- [ ] Customize your skills and levels in `src/data/portfolioData.js` → `skills.categories`
- [ ] Add at least 2 completed projects in `src/data/portfolioData.js` → `projects`
- [ ] Add project images to `public/projects/` folder
- [ ] Add your profile photo to `public/profile.jpg`
- [ ] Uncomment image code in `src/components/About.jsx` (line 72-76)
- [ ] Update your location in `src/data/portfolioData.js` → `personalInfo.location`
- [ ] Update phone number in `src/data/portfolioData.js` → `personalInfo.phone`
- [ ] Add Open Graph image for social sharing to `public/og-image.jpg`
- [ ] Update website URL in `index.html` Open Graph tags

### 🟢 Optional (Nice to Have)

- [ ] Customize color scheme (search & replace gradient colors)
- [ ] Add Twitter/X profile to social links
- [ ] Adjust animation speeds in components
- [ ] Add custom favicon to replace default Vite logo
- [ ] Customize footer text
- [ ] Add Google Analytics (if needed)
- [ ] Set up custom domain
- [ ] Add more projects as you complete them
- [ ] Create blog section (if desired)
- [ ] Add testimonials section (if you have them)

### 🚀 Before Deployment

- [ ] Test all navigation links work
- [ ] Test CV download button
- [ ] Test contact form submission
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Check responsive design on mobile
- [ ] Check responsive design on tablet
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Check all images load correctly
- [ ] Verify meta tags with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Run `npm run build` successfully
- [ ] Preview production build with `npm run preview`
- [ ] Check for console errors in browser
- [ ] Proofread all text content

### 📝 Post-Deployment

- [ ] Test live site on actual domain
- [ ] Share on LinkedIn and verify preview looks good
- [ ] Share on WhatsApp and verify preview looks good
- [ ] Submit to Google Search Console (optional)
- [ ] Set up analytics tracking (optional)
- [ ] Update resume/CV with portfolio link
- [ ] Add portfolio link to LinkedIn profile
- [ ] Add portfolio link to GitHub profile

## Quick Reference

### File Locations

- **Personal data**: `src/data/portfolioData.js`
- **CV file**: `public/cv.pdf`
- **Profile image**: `public/profile.jpg`
- **Project images**: `public/projects/`
- **Meta tags**: `index.html`
- **Components**: `src/components/`

### Key Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Important Links

- **EmailJS**: https://www.emailjs.com/
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Open Graph Debugger**: https://www.opengraph.xyz/

---

**Tip**: Work through the checklist from top to bottom. Items marked 🔴 are essential before showing your portfolio to anyone!

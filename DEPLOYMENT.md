# 🚀 Deployment Guide - Neelima Portfolio

## **Netlify Deployment (Recommended)**

### **Step 1: Connect to Netlify**

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Connect your GitHub account
4. Select your `neelima-portfolio` repository

### **Step 2: Configure Build Settings**

Netlify will auto-detect these settings from `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20.19.0

### **Step 3: Deploy**

1. Click **"Deploy site"**
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at a Netlify URL

### **Step 4: Custom Domain (Optional)**

1. Go to **Site settings → Domain management**
2. Add your custom domain
3. Netlify provides free SSL certificates

---

## **Alternative: GitHub Pages**

### **Quick Setup**

```bash
npm install --save-dev gh-pages
```

### **Add to package.json scripts**

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### **Deploy**

```bash
npm run deploy
```

---

## **Why Netlify is Better for Your Project**

✅ **No Rollup native module issues**  
✅ **Automatic dependency management**  
✅ **Built-in CDN and SSL**  
✅ **SPA routing handled automatically**  
✅ **Free tier is generous**  
✅ **Excellent React + Vite support**

---

## **Troubleshooting**

### **Build Fails**

- Check that all dependencies are in `package.json`
- Ensure Node.js version is 20.x
- Clear Netlify cache if needed

### **Site Not Loading**

- Check that `dist` folder contains built files
- Verify `netlify.toml` redirects are correct
- Check browser console for errors

---

## **Performance Tips**

- Your `netlify.toml` includes:
  - Static asset caching (1 year)
  - Security headers
  - SPA routing support
  - CDN optimization

**Your portfolio will be fast and secure! 🎯**

# 2026 Day Tracker - 

A beautiful, fully functional Progressive Web App (PWA) to track your daily progress throughout 2026 with an interactive clock and custom mountain icon.

## 📁 Project Structure

```
2026-tracker-app/
├── index.html          # Main HTML file with PWA meta tags
├── styles.css          # Complete styling with animations
├── script.js           # All functionality (PWA, theme, tracker)
├── manifest.json       # PWA configuration
├── sw.js              # Service Worker for offline support
├── assets/            # Icons folder
│   ├── favicon.png    (32x32)
│   ├── icon-192.png   (192x192)
│   ├── icon-512.png   (512x512)
│   ├── apple-icon.png (180x180)
│   └── windows-icon.png (144x144)
└── README.md          # This file

## ✨ Features

 **Real-time Clock** - Animated analog clock showing current time
 **Day Tracker** - 365/366 dots showing days completed in 2026
 **Progress Bar** - Visual progress of the year
 **Time Counter** - Hours remaining in the day
 **Dark/Light Theme** - Toggle between themes with custom styling
 **Mobile App** - Install as native app with custom mountain icon
 **Offline Support** - Works without internet connection
 **Responsive Design** - Perfect on all devices
 **PWA Ready** - Install on home screen with one click
 **Footer** - Social links and credits section

## 🚀 Quick Start - Ready to Deploy!

### Option 1: Local Testing (Recommended First)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then open: `http://localhost:8000`

### Option 2: Deploy to Free Hosting

#### **GitHub Pages (Easiest)**
1. Create GitHub account at https://github.com
2. Create new repository named: `username.github.io`
3. Upload all files from `2026-tracker-app` folder
4. Your app is live at: `https://username.github.io`

#### **Vercel (Alternative)**
1. Go to https://vercel.com
2. Click "New Project"
3. Upload this folder
4. Done! URL generated automatically

#### **Netlify (Alternative)**
1. Go to https://netlify.com
2. Drag and drop this folder
3. Deploy instantly

## 📱 How to Use on Mobile

### Android:
1. Open website in Chrome browser
2. Wait for install prompt OR tap menu → "Install app"
3. Your custom mountain icon appears on home screen
4. Click to open as full-screen app

### iPhone (iOS 15.4+):
1. Open website in Safari
2. Tap Share button (bottom)
3. Tap "Add to Home Screen"
4. Mountain icon appears on home screen
5. Click to open as app

## 🎨 Features Explained

### Dark/Light Theme
- Click the sun/moon button in top-right
- Your preference is saved automatically
- All colors adapt perfectly

### Day Tracker Dots
- Each dot represents 1 day
- Gray dots = days remaining
- Colored dots = days completed
- Hover to see the date
- Smooth animations on completion

### Real-Time Clock
- Shows current hours, minutes, seconds
- Hours remaining in the day below clock
- Smooth hand animations
- Dark center dot for style

### Progress Bar
- Animated progress of year completion
- Gradient color (indigo to pink)
- Updates in real-time

## ⚙️ Configuration

Edit `manifest.json` to customize:
```json
{
  "name": "Your App Name",
  "short_name": "Short Name",
  "description": "Your description",
  "start_url": "index.html",
  "theme_color": "#0a0e27",
  "background_color": "#0a0e27"
}
```

Edit footer in `index.html`:
- Change "Your Name" to your name
- Update social links
- Modify description

## 🌐 Deployment Checklist

- [x] All files in place
- [x] Icons generated (mountain image)
- [x] Manifest.json configured
- [x] Service Worker enabled
- [x] CSS and JS linked correctly
- [x] Ready to deploy!

**Next Step:** Upload to GitHub Pages, Vercel, or Netlify

## 🔧 Troubleshooting

### Install prompt not showing?
- Must be HTTPS (GitHub Pages is automatic)
- Try on different device
- Wait for second visit
- Check browser console for errors

### Icons not showing?
- Check file paths are correct
- Ensure PNG files exist in `/assets` folder
- Clear browser cache
- Reinstall the app

### Works offline?
- First visit caches everything
- Service Worker handles offline
- Check Settings → Storage → Clear cache to reset

### Theme not saving?
- Browser must have localStorage enabled
- Check privacy/incognito settings
- Clear cookies if issues persist

## 📊 Browser Support

- ✅ Chrome/Edge (All versions)
- ✅ Firefox (Modern versions)
- ✅ Safari (iOS 15.4+, macOS 12+)
- ✅ Opera (All versions)
- ⚠️ Internet Explorer (Not supported)

## 🎯 What to Deploy

Copy entire `2026-tracker-app` folder to:
- GitHub Pages repository
- Vercel project
- Netlify deployment
- Any static hosting (Surge, Firebase, etc.)


Enjoy tracking your 2026 progress! 📅✨

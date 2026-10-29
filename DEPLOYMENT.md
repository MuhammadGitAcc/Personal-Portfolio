# Portfolio Deployment Guide

This document provides instructions for deploying your React portfolio website.

## Option 1: Deploy to Vercel (Recommended)

Vercel is a cloud platform for static sites and Serverless Functions that's perfect for React applications.

1. Create a GitHub repository and push your code
2. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account
3. Click "New Project" and import your GitHub repository
4. Keep the default settings and click "Deploy"
5. Vercel will automatically build and deploy your site
6. Your site will be available at a URL like `https://your-portfolio.vercel.app`

## Option 2: Deploy to Netlify

Netlify is another excellent platform for deploying static sites.

1. Create a GitHub repository and push your code
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git" and select your GitHub repository
4. Set the build command to `npm run build`
5. Set the publish directory to `build`
6. Click "Deploy site"

## Option 3: Deploy to GitHub Pages

1. Install the gh-pages package: `npm install --save-dev gh-pages`
2. Add these scripts to your package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Add homepage to package.json: `"homepage": "https://yourusername.github.io/your-repo-name"`
4. Run `npm run deploy`

## Option 4: Self-hosting with the Build Files

The `deployment` folder contains the optimized production build of your portfolio.

1. Upload the contents of the `deployment` folder to any web hosting service
2. Make sure your hosting service is configured to serve a single-page application

## Development

To run the project locally:

1. Extract the zip file
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Edit files in the `src/components` directory to update content
- Modify `tailwind.config.js` to change the color scheme and other design elements
- Update images in the `public` directory

## Features

- Responsive design for all device sizes
- Dark/light mode toggle with user preference persistence
- Smooth animations using Framer Motion
- Section-based layout with smooth scrolling
- Project filtering functionality
- Contact form with validation

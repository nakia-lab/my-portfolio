# 🌐 Hosting Your Portfolio on Firebase (Next.js Edition)

This guide helps you host your professional portfolio entirely in the cloud using **Firebase App Hosting** and **GitHub**. Because this project uses **Next.js**, we don't need to manually manage `index.html` or `styles.css`. Firebase will automatically build and deploy the entire application for you.

## ✅ Cloud Hosting Steps (No Local Setup Required)

### 🔹 Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/)
2. Click **New repository**
3. Name it: `my-cyber-portfolio`
4. Set visibility to **Public**
5. **Do NOT** check "Add a README" (since Firebase Studio provides the code)
6. Click **Create repository**

### 🔹 Step 2: Push Your Code to GitHub
*In Firebase Studio (where you are right now):*
1. Locate the **GitHub** icon or "Connect to GitHub" button in the sidebar.
2. Follow the prompts to authorize and push this current project to the `main` branch of your new repository.

### 🔹 Step 3: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project**
3. Name it: `nakia-portfolio`
4. Click **Create project**

### 🔹 Step 4: Enable Firebase App Hosting
1. In the left menu, click **Build** -> **App Hosting**
2. Click **Get started**
3. Select **GitHub** as your source
4. Authorize Firebase and select your repository: `my-cyber-portfolio`

### 🔹 Step 5: Configure Deployment
1. **Setting ID**: Use the default (e.g., `nakia-portfolio-app`)
2. **Region**: Choose the one closest to you (e.g., `us-central1`)
3. **Branch**: `main`
4. **Auto-deploys**: ✅ Yes (this ensures every GitHub edit updates your site!)
5. Click **Finish and Deploy**

### 🚀 Your Site is Live!
Firebase will spend a few minutes building your Next.js app. Once finished, you will get a live URL like:
`https://nakia-portfolio.web.app`

---

## 🌱 Assignment Reflection

### Maintenance Plan
**Section I will update most often:** 
`Projects Portfolio` and `Professional Certifications`.

**Why this section matters long-term:** 
In the rapidly evolving landscape of cybersecurity, demonstrating continuous hands-on learning and adaptation is crucial. Regularly updating my project portfolio allows me to showcase my growing proficiency with new tools and defensive strategies, while my certifications prove my commitment to industry standards.

### Final Reflection
This portfolio is more than a static resume; it is a dynamic testament to my journey from a Medical Device Operations Technician to a Cybersecurity professional. As I transition into the digital frontier, maintaining this platform serves as a vital exercise in brand management and technical transparency. Each update represents a milestone in my education at DeVry and my personal growth, ensuring that my professional identity remains as secure and up-to-date as the systems I aim to protect.
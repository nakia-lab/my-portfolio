# 🌐 Host on Firebase Without Local Files

You will host your portfolio entirely in the cloud using **Firebase App Hosting** and **GitHub**. No downloads, no terminal, and no local setup are required.

## ✅ Firebase Hosting via GitHub (No Local Machine)

This method uses **GitHub** to store your website files and **Firebase App Hosting** to publish the site with automatic deploys.

### 🔹 Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/)
2. Click **New repository**
3. Repository name: `my-portfolio`
4. Set visibility to **Public**
5. **Check** "Add a README"
6. Click **Create repository**

### 🔹 Step 2: Add Your Portfolio Files in GitHub
Since this project was built in **Firebase Studio**, you can connect your current environment directly to your new repository.
1. In the Firebase Studio sidebar, click the **GitHub icon**.
2. Select your new `my-portfolio` repository.
3. Push the current code to the `main` branch.
4. Your repository will now contain the full Next.js structure (not just an `index.html`), which Firebase will use to build your site.

### 🔹 Step 3: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project**
3. Name it: `my-portfolio-nakia`
4. Skip Google Analytics (optional)
5. Click **Create project**

### 🔹 Step 4: Enable Firebase App Hosting
1. In the Firebase Console, select your project.
2. Click **App Hosting** in the left menu (under the Build section).
3. Click **Get started**.

### 🔹 Step 5: Connect Firebase Hosting to GitHub
1. When prompted, choose **GitHub** as your source.
2. Click **Authorize Firebase** and sign in to GitHub.
3. Select your GitHub account and the repository you created (`my-portfolio`).
4. Set the branch to `main`.

### 🔹 Step 6: Configure Hosting (No Coding Required)
1. **Setting ID**: Use the default name.
2. **Region**: Choose the one closest to you (e.g., `us-central1`).
3. **Root Directory**: Keep as `/`.
4. **Automatic Deploys**: ✅ Yes.
5. Click **Finish and Deploy**.

### 🚀 Step 7: Automatic Deployment
Firebase will now:
1. Pull your files from GitHub.
2. Build your Next.js application automatically.
3. Generate a live URL like: `https://my-portfolio-nakia.web.app`

---

## 🌱 Assignment Reflection
### Maintenance Plan
**Section I will update most often:** 
`Projects Portfolio` and `Professional Certifications`.

**Why this section matters long-term:** 
In the rapidly evolving landscape of cybersecurity, demonstrating continuous hands-on learning and adaptation is crucial. Regularly updating my project portfolio allows me to showcase my growing proficiency with new tools and defensive strategies, while my certifications prove my commitment to industry standards.

### Professional Reflection
This portfolio is more than a static resume; it is a dynamic testament to my journey from a Medical Device Operations Technician to a Cybersecurity professional. As I transition into the digital frontier, maintaining this platform serves as a vital exercise in brand management and technical transparency. Each update represents a milestone in my education at DeVry and my personal growth, ensuring that my professional identity remains as secure and up-to-date as the systems I aim to protect.
# Vercel Deployment Guide - E-Mart Dashboard

Complete step-by-step guide to deploy your E-Mart Dashboard Application to Vercel.

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ MongoDB Atlas account (already configured)
- ✅ Git installed

---

## 🗄️ Part 1: MongoDB Atlas (Already Configured)

Your MongoDB Atlas is already set up with:
- **Connection String**: `mongodb+srv://emart-admin:iIAp86NV0SxgjNEU@e-mart.gv5igtj.mongodb.net/`

**Note**: Make sure MongoDB Atlas Network Access allows `0.0.0.0/0` (all IPs) for Vercel to connect.

---

## 🚀 Part 2: Deploy Backend to Vercel

### Step 2.1: Push Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `emart-dashboard`)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/emart-dashboard.git
   git branch -M main
   git push -u origin main
   ```

### Step 2.2: Deploy Backend on Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**:
   - Click **"Add New Project"**
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure Backend Project**:
   - **Project Name**: `emart-backend` (or your choice)
   - **Framework Preset**: **Other**
   - **Root Directory**: `backend` ⚠️ **IMPORTANT: Change this to `backend` (not `./`)**
   
   **About Build & Output Settings:**
   - If these fields are grayed out, **don't worry!** 
   - Vercel will automatically use the `backend/vercel.json` file we created
   - The `backend/vercel.json` is already configured correctly for your backend
   - Just proceed with deployment - it will work!
   
   **What happens:**
   - When Root Directory = `backend`, Vercel looks for `backend/vercel.json`
   - Our `backend/vercel.json` tells Vercel to use `@vercel/node` (no build needed)
   - The backend will deploy correctly even if UI settings are locked

4. **Set Environment Variables** (Click "Environment Variables"):
   
   Add these variables one by one:

   | Variable Name | Value |
   |--------------|-------|
   | `DB_URI` | `mongodb+srv://emart-admin:iIAp86NV0SxgjNEU@e-mart.gv5igtj.mongodb.net/` |
   | `NODE_ENV` | `production` |
   | `SECRET_KEY` | `755fd17642f2665b23d66a6b853235b8a087c24ce926755253d10b7349f78859` |
   | `EMAIL_HOST` | `smtp.gmail.com` |
   | `EMAIL_PORT` | `587` |
   | `EMAIL_USER` | `your-email@gmail.com` |
   | `EMAIL_PASSWORD` | `your-gmail-app-password` |
   | `FRONTEND_URL` | `https://your-frontend-app.vercel.app` (update after frontend deployment) |
   | `BACKEND_URL` | `https://your-backend-app.vercel.app` (will be shown after deployment) |

   **For each variable**:
   - Select environments: ✅ Production, ✅ Preview, ✅ Development
   - Click "Add"

5. **Deploy**:
   - Click **"Deploy"**
   - Wait for deployment to complete (2-3 minutes)

6. **Copy Backend URL**:
   - After deployment, you'll see: `https://your-backend-app.vercel.app`
   - **Copy this URL** - you'll need it for the frontend

### Step 2.3: Update Backend Configuration

1. **Note your backend URL** (e.g., `https://emart-backend.vercel.app`)

2. **Update CORS** (if needed):
   - The backend already supports Vercel URLs via regex `/\.vercel\.app$/`
   - If you get CORS errors, update `backend/src/index.js`:
   ```javascript
   app.use(cors({
       origin: [
           "http://localhost:4200",
           "https://YOUR-FRONTEND-URL.vercel.app",  // Add your frontend URL here
           /\.vercel\.app$/
       ],
       credentials: true,
       allowedHeaders: ["Content-Type", "Authorization"]
   }));
   ```

---

## 🎨 Part 3: Deploy Frontend to Vercel

### Step 3.1: Update Frontend Environment

1. **Edit `src/environments/environment.prod.ts`**:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://YOUR-BACKEND-URL.vercel.app/api'  // Replace with your actual backend URL
   };
   ```

   **Example**: If your backend URL is `https://emart-backend.vercel.app`, then:
   ```typescript
   apiUrl: 'https://emart-backend.vercel.app/api'
   ```

2. **Commit the change**:
   ```bash
   git add src/environments/environment.prod.ts
   git commit -m "Update production API URL"
   git push
   ```

### Step 3.2: Deploy Frontend on Vercel

1. **Go to Vercel Dashboard**
   - Click **"Add New Project"** (or use the same project if deploying monorepo)

2. **Import Project** (if separate repository):
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure Frontend Project**:
   - **Project Name**: `emart-frontend` (or your choice)
   - **Framework Preset**: **Angular**
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/e-mart-dashboard-application`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click **"Deploy"**
   - Wait for deployment (3-5 minutes)

5. **Copy Frontend URL**:
   - After deployment: `https://your-frontend-app.vercel.app`
   - **Copy this URL**

### Step 3.3: Update Backend Environment Variables

1. **Go to Backend Project** in Vercel Dashboard
2. **Settings** → **Environment Variables**
3. **Update `FRONTEND_URL`**:
   - Edit the `FRONTEND_URL` variable
   - Set value to your frontend URL: `https://your-frontend-app.vercel.app`
   - Save

4. **Redeploy Backend**:
   - Go to **Deployments** tab
   - Click **"Redeploy"** on the latest deployment
   - This ensures CORS works with your frontend URL

---

## ✅ Part 4: Verify Deployment

### Test Backend

1. **Test root endpoint**:
   ```
   https://your-backend-app.vercel.app/
   ```
   Should return: `"Invalid endpoint"`

2. **Test API endpoint**:
   ```
   https://your-backend-app.vercel.app/api/product
   ```
   Should return JSON (may be empty array `[]`)

### Test Frontend

1. **Visit frontend URL**:
   ```
   https://your-frontend-app.vercel.app
   ```

2. **Test Registration**:
   - Create a new user account
   - Check MongoDB Atlas → Browse Collections → `users` collection
   - Verify user data is saved

3. **Test Login**:
   - Login with registered credentials
   - Verify authentication works

4. **Check Browser Console**:
   - Open DevTools (F12)
   - Check Network tab
   - Verify API calls go to: `https://your-backend-app.vercel.app/api/...`
   - No CORS errors

---

## 🔧 Troubleshooting

### Issue: CORS Errors

**Solution**:
1. Update `backend/src/index.js` CORS configuration with your frontend URL
2. Update `FRONTEND_URL` in Vercel environment variables
3. Redeploy backend

### Issue: 404 on API Routes

**Solution**:
- Check `vercel.json` routing configuration
- Ensure routes start with `/api/`
- Verify backend entry point is `backend/src/index.js`

### Issue: Environment Variables Not Working

**Solution**:
- Verify variables are set in Vercel Dashboard
- Check variable names match exactly (case-sensitive)
- Redeploy after adding/changing variables
- View logs: Vercel Dashboard → Deployments → Click deployment → Functions tab

### Issue: Database Connection Failed

**Solution**:
- Verify `DB_URI` in Vercel environment variables
- Check MongoDB Atlas Network Access allows `0.0.0.0/0`
- Verify connection string format is correct

### Issue: Frontend Can't Connect to Backend

**Solution**:
1. Check `src/environments/environment.prod.ts` has correct backend URL
2. Rebuild frontend: `npm run build`
3. Redeploy frontend
4. Check browser console for errors

---

## 📝 Quick Reference

### Your URLs

After deployment, you'll have:

- **Backend API**: `https://your-backend-app.vercel.app`
- **Frontend App**: `https://your-frontend-app.vercel.app`
- **API Base URL**: `https://your-backend-app.vercel.app/api`

### Environment Variables Summary

**Backend (Vercel)**:
- `DB_URI`: MongoDB Atlas connection string
- `NODE_ENV`: `production`
- `SECRET_KEY`: JWT secret key
- `EMAIL_*`: Email configuration
- `FRONTEND_URL`: Your frontend Vercel URL
- `BACKEND_URL`: Your backend Vercel URL

**Frontend**:
- `environment.prod.ts`: Contains `apiUrl` pointing to backend

### Database Configuration

- **Development**: `mongodb://127.0.0.1:27017/dashboard` (local)
- **Production**: `mongodb+srv://emart-admin:iIAp86NV0SxgjNEU@e-mart.gv5igtj.mongodb.net/` (Atlas)

---

## 🎉 Success!

Your E-Mart Dashboard is now live on Vercel!

- **Frontend**: `https://your-frontend-app.vercel.app`
- **Backend API**: `https://your-backend-app.vercel.app/api`

### Next Steps

- ✅ Test all features (registration, login, products, orders)
- ✅ Monitor Vercel logs for any errors
- ✅ Set up custom domain (optional)
- ✅ Configure email service for password reset

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Check Vercel Logs**: Dashboard → Deployments → Click deployment → Functions tab

---

**Happy Deploying! 🚀**


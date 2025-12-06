# Firebase Deployment Setup

## Prerequisites

1. **Firebase Project**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firebase Hosting

2. **Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

## GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

### 1. FIREBASE_SERVICE_ACCOUNT

Generate a service account key:

```bash
# Login to Firebase
firebase login

# Generate service account
firebase projects:list
# Note your project ID

# Go to Firebase Console → Project Settings → Service Accounts
# Click "Generate New Private Key"
# Copy the entire JSON content
```

Add the JSON content as `FIREBASE_SERVICE_ACCOUNT` secret in GitHub.

### 2. FIREBASE_PROJECT_ID

Your Firebase project ID (found in Firebase Console → Project Settings).

Example: `tool-rental-12345`

## Next.js Configuration

The project is configured for static export. Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

## Deployment Workflow

### Automatic Deployment

- **Push to `main`**: Deploys to production
- **Pull Request**: Creates preview channel (expires in 30 days)

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## Workflow Features

✅ **Automatic builds** on push to main  
✅ **Preview deployments** for pull requests  
✅ **Cache optimization** for faster builds  
✅ **Production-ready** static export  
✅ **Asset caching** with proper headers

## Testing Locally

```bash
# Build and export
npm run build

# Serve locally with Firebase
firebase serve
```

## Troubleshooting

### Build Errors

If you encounter build errors, check:
- All dependencies are installed
- Environment variables are set
- Next.js configuration is correct

### Deployment Errors

- Verify GitHub secrets are set correctly
- Check Firebase project permissions
- Ensure service account has Hosting Admin role

## URLs

After deployment:
- **Production**: `https://YOUR_PROJECT_ID.web.app`
- **Preview**: GitHub will comment the preview URL on PRs

## Custom Domain

To add a custom domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Update `firebase.json` if needed

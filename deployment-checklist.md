# Netlify Deployment Checklist for Vibe Coding Landing Page

## 1. Environment Variables
- [ ] Set `NEXT_PUBLIC_SUPABASE_URL` in Netlify dashboard
- [ ] Set `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Netlify dashboard
- [ ] (Optional) Add any analytics or monitoring keys

## 2. Domain Configuration
- [ ] Add custom domain in Netlify dashboard
- [ ] Update DNS records to point to Netlify
- [ ] Verify domain ownership

## 3. SSL Certificate Setup
- [ ] Enable automatic SSL in Netlify
- [ ] Verify HTTPS works for all routes

## 4. Build & Publish
- [ ] Set build command: `npm run build && npm run export`
- [ ] Set publish directory: `out`
- [ ] Confirm successful build and deployment

## 5. Redirects & Headers
- [ ] Verify redirects for client-side routing (`/*` to `/index.html`)
- [ ] Check API proxying if using Netlify Functions
- [ ] Confirm security headers are applied

## 6. Performance Monitoring
- [ ] Integrate analytics (e.g., Google Analytics, Plausible)
- [ ] Set up error logging (e.g., Sentry, LogRocket)
- [ ] Enable Netlify performance monitoring
- [ ] Add health check endpoints if needed

## 7. CI/CD & Rollback
- [ ] Connect GitHub/GitLab repo to Netlify
- [ ] Enable automatic deploys on push
- [ ] Configure branch deploys for staging/preview
- [ ] Test rollback to previous deploy

## 8. Bundle Analysis
- [ ] Run `npm run analyze` or similar to check bundle size
- [ ] Optimize large dependencies if needed

---

**Ready for Netlify deployment!** 
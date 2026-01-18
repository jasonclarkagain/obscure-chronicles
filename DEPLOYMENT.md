# 🚀 Deployment Guide for The Obscure Chronicles

This guide covers multiple deployment options for The Obscure Chronicles application.

## Quick Deploy Options

### 🔥 Replit Deployments (Recommended)

The easiest way to deploy your application:

1. **Import to Replit**
   - Go to [Replit](https://replit.com)
   - Click "Create Repl" → "Import from GitHub"
   - Paste your repository URL

2. **Set Environment Variables**
   ```bash
   # In Replit Secrets (Environment variables)
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=production
   ```

3. **Deploy**
   - Click the "Deploy" button in Replit
   - Your app will be available at `https://your-repl-name.replit.app`

### 🌐 Vercel

Perfect for the frontend with serverless functions:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   ```bash
   vercel env add DATABASE_URL
   vercel env add NODE_ENV production
   ```

### 🚢 Railway

Great for full-stack applications:

1. **Connect Repository**
   - Go to [Railway](https://railway.app)
   - Connect your GitHub repository

2. **Set Environment Variables**
   - Add `DATABASE_URL` in Railway dashboard
   - Set `NODE_ENV` to `production`

3. **Deploy**
   - Railway will automatically deploy on every push

### ☁️ Heroku

Traditional PaaS deployment:

1. **Install Heroku CLI**
   ```bash
   # Install from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Create App**
   ```bash
   heroku create your-app-name
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set DATABASE_URL=your_postgresql_connection_string
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## Database Setup

### 🐘 PostgreSQL Options

#### Neon (Recommended)
1. Go to [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set as `DATABASE_URL` environment variable

#### Supabase
1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Set as `DATABASE_URL` environment variable

#### Railway PostgreSQL
1. In your Railway project
2. Click "New" → "Database" → "PostgreSQL"
3. Railway will automatically set the `DATABASE_URL`

### 🔄 Database Migration

After setting up your database:

```bash
# Push schema to database
npm run db:push

# Seed with stories (if available)
npm run db:seed
```

## Environment Variables

Required environment variables for production:

```bash
# Required
DATABASE_URL=postgresql://username:password@host:port/database

# Optional but recommended
NODE_ENV=production
PORT=5000

# For local development
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=obscure_chronicles
```

## Build Process

The application builds in two parts:

1. **Frontend Build** (Vite)
   ```bash
   vite build
   ```
   - Creates optimized React bundle
   - Outputs to `dist/` directory

2. **Backend Build** (esbuild)
   ```bash
   esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
   ```
   - Bundles Express server
   - Outputs to `dist/index.js`

## Production Checklist

### Performance
- [ ] Enable gzip compression
- [ ] Set up CDN for static assets
- [ ] Configure database connection pooling
- [ ] Enable browser caching headers

### Security
- [ ] Set secure environment variables
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS if needed
- [ ] Set up rate limiting

### Monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Configure logging
- [ ] Set up uptime monitoring
- [ ] Database performance monitoring

### SEO
- [ ] Verify all meta tags
- [ ] Test Open Graph sharing
- [ ] Submit to search engines
- [ ] Set up Google Analytics

## Custom Domain

### With Replit
1. Go to your Repl's deployment settings
2. Add your custom domain
3. Configure DNS records as instructed

### With Vercel
1. Add domain in Vercel dashboard
2. Configure DNS records
3. SSL is automatically handled

### With Railway
1. Add custom domain in Railway dashboard
2. Configure CNAME record
3. SSL is automatically provided

## Troubleshooting

### Common Issues

#### Database Connection Failed
```bash
# Check environment variables
echo $DATABASE_URL

# Test connection manually
psql $DATABASE_URL -c "SELECT 1;"
```

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### 404 Errors
- Ensure your hosting service supports SPA routing
- Configure rewrites for client-side routing

### Performance Issues
- Check database query performance
- Optimize images and assets
- Enable compression
- Use a CDN

## Monitoring & Logs

### Application Logs
```bash
# View logs on most platforms
heroku logs --tail  # Heroku
vercel logs         # Vercel
# Railway: Check dashboard
```

### Database Monitoring
- Monitor connection count
- Check slow queries
- Set up alerts for downtime

## Updates & Maintenance

### Automated Deployments
Set up CI/CD with GitHub Actions (included in repository):
- Automatic testing on PRs
- Automatic deployment on main branch
- Dependency security scanning

### Manual Updates
1. Test changes locally
2. Push to staging branch (if available)
3. Merge to main branch
4. Monitor deployment logs

## Support

If you encounter issues:

1. Check the application logs
2. Verify environment variables
3. Test database connectivity
4. Review the troubleshooting section
5. Contact support through the repository issues

---

## Cost Estimates

### Free Tier Options
- **Replit**: Free hosting with upgrade options
- **Vercel**: Free for personal projects
- **Railway**: $5/month for hobby projects
- **Neon**: Free PostgreSQL tier available

### Paid Options
- **Heroku**: $7+/month for basic dynos
- **Railway**: $5+/month for production
- **Vercel**: $20+/month for teams
- **Supabase**: $25+/month for production

Choose the option that best fits your needs and budget!
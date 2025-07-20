# Vibe Coding Landing Page

A modern, responsive landing page for the Vibe Coding MVP development program. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS v4
- **Real-time Signup Counter**: Live social proof with Supabase integration
- **Form Validation**: Client and server-side validation with real-time feedback
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals and fast loading
- **SEO Optimized**: Meta tags, structured data, and Open Graph support

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe-coding-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up database**
   - Create a new Supabase project
   - Run the migration in `supabase/migrations/001_create_vibe_coding_signups.sql`
   - Or execute the SQL in your Supabase SQL editor

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
vibe-coding-landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── sections/          # Page sections
│   ├── lib/                   # Utilities and configurations
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── supabase/                  # Database migrations
└── tests/                     # Test files
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- **Unit Tests**: `src/lib/__tests__/` - Utility functions
- **Component Tests**: `src/components/__tests__/` - UI components
- **Integration Tests**: `src/app/__tests__/` - API routes and forms

## 🚀 Deployment

### Netlify Deployment

1. **Connect to Netlify**
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify

2. **Configure build settings**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

3. **Set environment variables**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   - Netlify will automatically build and deploy your site

### Manual Deployment
```bash
# Build for production
npm run build

# Export static files
npm run export

# Deploy the `out` directory to your hosting provider
```

## 🎨 Component Usage

### Input Component
```tsx
import Input from '@/components/ui/Input'

<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  required
/>
```

### Button Component
```tsx
import Button from '@/components/ui/Button'

<Button
  variant="primary"
  size="lg"
  loading={isSubmitting}
  disabled={!isValid}
>
  Submit
</Button>
```

### Signup Form
```tsx
import SignupForm from '@/components/sections/SignupForm'

<SignupForm />
```

### Signup Counter
```tsx
import SignupCounter from '@/components/sections/SignupCounter'

<SignupCounter 
  showLoadingSpinner={false}
  autoRefresh={true}
/>
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom design tokens defined in `src/lib/design-tokens.ts`.

### TypeScript
Strict TypeScript configuration with custom type definitions in `src/types/`.

### ESLint & Prettier
Code quality tools configured for consistent formatting and linting.

## 📊 Performance

### Core Web Vitals
- **LCP**: Optimized with font preloading and image optimization
- **FID**: Minimal JavaScript with efficient event handling
- **CLS**: Stable layout with proper image dimensions

### Bundle Analysis
```bash
npm run analyze
```

## 🔒 Security

- Input sanitization and validation
- CORS configuration
- Security headers (HSTS, X-Frame-Options, etc.)
- Rate limiting (configurable)

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Support

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized for mobile performance

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with Tailwind errors**
   - Ensure you're using Tailwind CSS v4
   - Check `globals.css` for proper import syntax

2. **Supabase connection issues**
   - Verify environment variables are set correctly
   - Check Supabase project settings and RLS policies

3. **Form validation not working**
   - Ensure all required fields are filled
   - Check browser console for JavaScript errors

### Getting Help

- Check the [Issues](../../issues) page
- Review the [deployment checklist](./deployment-checklist.md)
- Consult the [Netlify documentation](https://docs.netlify.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ by the Vibe Coding Team**

# Contributing to The Obscure Chronicles

Thank you for your interest in contributing to The Obscure Chronicles! We welcome contributions from developers who share our passion for mysterious stories and quality web development.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- Basic knowledge of React, TypeScript, and modern web development
- PostgreSQL (optional - in-memory storage available for development)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/obscure-chronicles.git
   cd obscure-chronicles
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database connection if desired
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 How to Contribute

### Types of Contributions Welcome

- **Bug fixes** - Help us identify and fix issues
- **New mysterious stories** - Add compelling unexplained phenomena
- **UI/UX improvements** - Enhance the user experience
- **Performance optimizations** - Make the app faster and more efficient
- **Documentation** - Improve our guides and explanations
- **Testing** - Add tests to increase code reliability

### Story Submissions

We're always looking for new mysterious stories! When submitting stories:

1. **Research thoroughly** - Ensure historical accuracy and cite sources
2. **Match the tone** - Keep the mysterious, atmospheric writing style
3. **Use proper categories** - Place stories in appropriate categories
4. **Include metadata** - Provide tags, read time estimates, and excerpts
5. **High-quality images** - Use atmospheric, relevant imagery

### Code Contributions

#### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style and patterns
   - Add comments for complex logic
   - Update tests if applicable

3. **Test your changes**
   ```bash
   npm run dev        # Test in development
   npm run build      # Ensure production build works
   npm run type-check # Check TypeScript types
   ```

4. **Commit with descriptive messages**
   ```bash
   git commit -m "Add new story: The Mysterious Disappearance of Flight 19"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

#### Code Style Guidelines

- **TypeScript** - Use proper type definitions and avoid `any`
- **React** - Follow React best practices and hooks patterns
- **Styling** - Use Tailwind CSS classes and CSS custom properties
- **Database** - Use Drizzle ORM for all database operations
- **API** - Follow RESTful conventions for new endpoints

#### Component Guidelines

- **Shadcn/UI** - Use existing components when possible
- **Responsive** - Ensure all components work on mobile and desktop
- **Accessibility** - Include proper ARIA labels and keyboard navigation
- **Dark theme** - All components must support the dark theme

## 🗄️ Database Schema

When adding new stories or features that require database changes:

1. **Update schema** in `shared/schema.ts`
2. **Create migration** using `npm run db:push`
3. **Update seed data** in `server/seed.ts` if needed
4. **Test with both PostgreSQL and in-memory storage**

## 🎨 Design Guidelines

### Visual Style
- **Dark atmosphere** with deep blacks and charcoals
- **Orange accents** (#ff6b35) for highlights and calls-to-action
- **Purple accents** (#7209b7) for secondary elements
- **Mysterious typography** with proper hierarchy

### User Experience
- **Fast loading** - Optimize images and code
- **Intuitive navigation** - Clear paths to content
- **Search functionality** - Help users find stories
- **Mobile-first** - Excellent mobile experience

## 🐛 Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behavior**
- **Browser and device information**
- **Screenshots** if applicable
- **Console errors** if any

Use our bug report template:

```markdown
**Bug Description:**
A clear description of what the bug is.

**To Reproduce:**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior:**
What you expected to happen.

**Screenshots:**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]
- Device: [e.g. Desktop, iPhone]
```

## 💡 Feature Requests

We welcome feature requests! Please:

1. **Check existing issues** to avoid duplicates
2. **Provide clear use cases** for the feature
3. **Explain the benefits** to users
4. **Consider implementation complexity**

## 📋 Development Workflow

### Branch Naming
- `feature/story-title` - New stories or major features
- `fix/bug-description` - Bug fixes
- `docs/section-name` - Documentation updates
- `style/component-name` - UI/styling improvements

### Commit Messages
Follow conventional commits format:
- `feat: add new story about Bermuda Triangle`
- `fix: resolve search functionality on mobile`
- `docs: update installation instructions`
- `style: improve story card hover animations`

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Search functionality works
- [ ] Story sharing works (Twitter, Facebook, copy link)
- [ ] Mobile responsive design
- [ ] Dark theme consistency
- [ ] Database operations (if applicable)

### Future Automated Testing
We're planning to add:
- Unit tests for components
- Integration tests for API endpoints
- End-to-end tests for user flows

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Shadcn/UI](https://ui.shadcn.com/)

### Inspiration
- Research unexplained phenomena and urban legends
- Study atmospheric web design patterns
- Review dark theme implementations

## ❓ Questions?

If you have questions about contributing:

1. **Check existing issues** and discussions
2. **Read the documentation** thoroughly
3. **Contact the maintainer** at mysteries@obscurechronicles.com

## 🏆 Recognition

Contributors will be:
- **Listed in our contributors section**
- **Credited in story submissions**
- **Acknowledged in release notes**
- **Invited to join our maintainers team** (active contributors)

Thank you for helping make The Obscure Chronicles an amazing resource for mysterious stories and unexplained phenomena!

---

*"The best way to find out if you can trust somebody is to trust them."* - Ernest Hemingway
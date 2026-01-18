# 🌟 The Obscure Chronicles

A mysterious stories blog featuring 25+ unique and enigmatic tales with immersive visual effects and atmospheric storytelling. Built with modern web technologies and powered by a PostgreSQL database.

![The Obscure Chronicles](https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&q=80)

## ✨ Features

- **21 Mysterious Stories** across 4 categories: Mysterious Landscapes, Abandoned Places, Unexplained Phenomena, and Creatures
- **Immersive Dark Theme** with atmospheric orange and purple accents
- **Interactive 3D Background** powered by CSS animations
- **Advanced Search** functionality with real-time results
- **Social Media Sharing** with Twitter, Facebook, and copy link options
- **Responsive Design** optimized for all devices
- **PostgreSQL Database** with automatic failover to in-memory storage
- **SEO Optimized** with proper meta tags and structured data

## 🚀 Live Demo

[View Live Demo](https://obscure-chronicles.replit.app) *(Replace with your actual deployment URL)*

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for lightweight routing
- **Tailwind CSS** with custom CSS variables
- **Shadcn/UI** component library
- **TanStack Query** for server state management
- **Vite** for build tooling

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **PostgreSQL** (Neon serverless)
- **RESTful API** design

### Deployment
- **Replit Deployments** for hosting
- **GitHub** for version control
- **Environment-based configuration**

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or use the in-memory fallback)
- Git

### Quick Start

1. **Clone the repository**
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
   # Create .env file
   cp .env.example .env
   
   # Add your database URL (optional - will use in-memory storage if not provided)
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Initialize the database** (if using PostgreSQL)
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:5000` to see the application.

## 🗄️ Database Setup

### Using PostgreSQL (Recommended)
1. Create a PostgreSQL database (we recommend [Neon](https://neon.tech))
2. Set the `DATABASE_URL` environment variable
3. Run database migrations: `npm run db:push`
4. Seed with stories: `npm run db:seed`

### Using In-Memory Storage (Development)
- No setup required - the app automatically falls back to in-memory storage
- Perfect for development and testing
- Data is reset on each server restart

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Database
npm run db:push      # Push schema changes to database
npm run db:seed      # Seed database with stories
npm run db:studio    # Open Drizzle Studio (database GUI)

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🏗️ Project Structure

```
obscure-chronicles/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and configurations
├── server/              # Backend Express server
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database abstraction layer
│   └── db.ts           # Database connection
├── shared/              # Shared TypeScript types
│   └── schema.ts        # Database schema and types
└── ...config files
```

## 🌟 Story Categories

### 🏔️ Mysterious Landscapes
Unexplained geological formations and mysterious places on Earth
- Mel's Hole: The Bottomless Pit
- Devil's Kettle Falls
- The Zone of Silence

### 🏚️ Abandoned Places  
Forgotten locations with dark histories and unexplained phenomena
- Winchester Mystery House
- Eastern State Penitentiary
- Poveglia Island
- Centralia
- The Stanley Hotel

### 🔮 Unexplained Phenomena
Strange events and occurrences that defy scientific explanation
- The Dyatlov Pass Incident
- The Hum
- Spontaneous Human Combustion
- Ball Lightning
- The Taos Hum
- The Bloop
- Skinwalker Ranch
- The Phoenix Lights
- The Wow! Signal

### 🐾 Creatures
Cryptids, mysterious beings, and unexplained sightings
- The Mothman of Point Pleasant
- Jersey Devil
- Beast of Bladenboro
- The Sallie House

## 🔧 API Endpoints

```bash
# Stories
GET    /api/stories              # Get all stories
GET    /api/stories/featured     # Get featured stories
GET    /api/stories/:slug        # Get story by slug
GET    /api/stories/search?q=    # Search stories

# Categories
GET    /api/categories           # Get all categories
GET    /api/categories/:slug     # Get category by slug
GET    /api/categories/:slug/stories  # Get stories in category
```

## 🎨 Customization

### Color Scheme
The application uses CSS custom properties for theming:

```css
:root {
  --deep-black: #0a0a0a;
  --charcoal: #1a1a1a;
  --mysterious-orange: #ff6b35;
  --electric-purple: #7209b7;
}
```

### Adding New Stories
1. Update the database schema if needed in `shared/schema.ts`
2. Add stories through the database or update the seed file
3. Stories automatically appear on the site

## 🚀 Deployment

### Replit Deployment (Recommended)
1. Fork this project on Replit
2. Set up your environment variables
3. Click "Deploy" in the Replit interface

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Set up your environment variables
4. Ensure your database is accessible

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jason Clark**
- Website: [jason-clark.org](https://jason-clark.org)
- Email: mysteries@obscurechronicles.com

## 🙏 Acknowledgments

- Stories inspired by real unexplained phenomena and urban legends
- UI components from [Shadcn/UI](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

*Seeking truth in the unexplained* 🔍✨
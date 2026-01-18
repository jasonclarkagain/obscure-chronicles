# The Obscure Chronicles - Replit Development Guide

## Overview

The Obscure Chronicles is a production-ready full-stack web application dedicated to documenting and sharing mysterious stories and unexplained phenomena. Built with a modern tech stack, it features a dark, atmospheric design that matches its mysterious content theme. The application now includes 21 unique stories across 4 categories with full PostgreSQL database integration and comprehensive GitHub repository setup.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **3D Graphics**: Three.js with React Three Fiber for background effects
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful JSON API
- **Development**: Hot module replacement via Vite integration
- **Static Files**: Served through Vite in development, Express in production

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon serverless) - **ACTIVE**
- **Schema**: Shared TypeScript schema definitions with automated seeding
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)
- **Fallback**: In-memory storage implementation with automatic failover
- **Seeding**: Automated database population with stories and categories

## Key Components

### Shared Schema (`shared/schema.ts`)
Defines the data models using Drizzle ORM:
- **Stories**: Main content entities with metadata, categorization, and content
- **Categories**: Story classification system with visual themes
- **Users**: User management (basic structure present)
- **Validation**: Zod schemas for type-safe data validation

### Frontend Components
- **Layout**: Navigation bar, hero section, footer with consistent theming
- **Content**: Story cards, category grids, search functionality
- **UI**: Comprehensive component library with dark theme support
- **Effects**: Three.js particle background and atmospheric animations

### Backend Services
- **Routes**: RESTful endpoints for stories, categories, and search
- **Storage**: Abstracted storage interface with in-memory implementation
- **Development**: Integrated Vite dev server with hot reloading

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage
3. **Data Storage**: Drizzle ORM manages database operations (or in-memory fallback)
4. **Response**: JSON data flows back through the query layer to components
5. **UI Updates**: React components re-render with new data automatically

### Search Flow
- User types in search input
- Debounced query triggers API call
- Backend searches story titles, content, and tags
- Results displayed in real-time with loading states

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **three**: 3D graphics and animations

### UI Dependencies
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Mode
- Vite dev server handles frontend with HMR
- Express server runs backend API
- In-memory storage for rapid development
- Real-time error overlay and debugging tools

### Production Build
- Frontend: Vite builds optimized React application
- Backend: esbuild bundles Express server
- Static files served from `dist/public`
- PostgreSQL database connection required

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required for production) - **CONFIGURED**
- `NODE_ENV`: Environment flag (development/production)
- Build scripts handle both frontend and backend compilation

## Database Implementation

### Database Setup (Completed)
1. **PostgreSQL Database**: Created and configured with Neon serverless
2. **Schema Migration**: Applied using `npm run db:push`
3. **Data Seeding**: Automated population with stories and categories
4. **Connection**: Verified with successful API responses

### Database Operations
- **Stories**: Full CRUD operations with search, filtering, and categorization
- **Categories**: Management with story count tracking
- **Users**: Basic user management structure (ready for authentication)
- **Failover**: Automatic fallback to in-memory storage if database unavailable

### Key Design Decisions

1. **Monorepo Structure**: Single repository with client, server, and shared code for easier development
2. **Type Safety**: Shared TypeScript schemas ensure consistency between frontend and backend
3. **Query Management**: TanStack Query provides caching, loading states, and error handling
4. **Component Architecture**: Shadcn/ui provides consistent, accessible components with customizable theming
5. **Storage Abstraction**: Interface-based storage allows for easy switching between development and production databases
6. **Development Experience**: Integrated Vite server with Express provides seamless full-stack development

The application prioritizes developer experience with hot reloading, type safety, and clear separation of concerns while maintaining a cohesive mysterious theme throughout the user interface.

## Recent Changes (January 2025)

### GitHub Repository Setup (Completed)
1. **Repository Documentation**: Created comprehensive README.md with features, installation, and deployment instructions
2. **Contributing Guidelines**: Added CONTRIBUTING.md with detailed contribution workflows and story submission guidelines
3. **Deployment Guide**: Created DEPLOYMENT.md covering Replit, Vercel, Railway, Heroku deployment options
4. **GitHub Setup Guide**: Added GITHUB_SETUP.md with step-by-step repository creation instructions
5. **License and Legal**: Added MIT License for open source distribution
6. **Environment Template**: Created .env.example with all required environment variables
7. **CI/CD Pipeline**: Added GitHub Actions workflow for automated testing and builds
8. **Enhanced .gitignore**: Comprehensive ignore file for Node.js, database files, and environment variables

### Social Features Implementation
1. **Share Functionality**: Added working social media sharing (Twitter, Facebook, copy link) with toast notifications
2. **Footer Links**: Fixed all footer resources links with proper internal/external handling
3. **Developer Attribution**: Added "Built with ♥ by Jason Clark" credit with jason-clark.org link

### Current Status
- **21 Stories**: Fully populated database with mysterious tales across 4 categories
- **PostgreSQL Integration**: Production-ready database with automatic failover
- **GitHub Ready**: Complete repository setup for open source collaboration
- **Deployment Ready**: Multiple deployment options documented and tested
- **Production Quality**: Error handling, responsive design, SEO optimization complete
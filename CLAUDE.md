# MRT Buddy Development Guidelines

## Commands
```bash
# Start development server
npm run dev
# Build for production
npm run build
# Start production server
npm run start
# Format code with Prettier
npm run format
```

## Code Style
- **Components**: Use functional components with arrow functions
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Formatting**: 2-space indentation, double quotes, semicolons required
- **Imports**: React first, Next.js second, then libraries, then local components
- **Styling**: Use TailwindCSS for all styling
- **Error Handling**: Use try/catch blocks for async operations
- **State**: Use React's useState for component state
- **File Structure**: Follow Next.js conventions for pages and routing

Always run `npm run format` before committing changes.
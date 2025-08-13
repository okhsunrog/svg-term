# CRUSH Agent Configuration

## Build Commands
- `bun run build` - Build the project using TypeScript compiler
- `bun run clean` - Remove compiled output directory

## Test Commands
- `bun test` - Run all tests
- `bun test <file>` - Run a specific test file
- `bun test --watch` - Run tests in watch mode

## Code Style Guidelines

### Imports
- Use ES6 import/export syntax
- Group imports in order: built-ins, external packages, internal modules
- Use absolute paths when possible for internal modules

### Formatting
- Use 2 space indentation
- No semicolons
- Single quotes for strings
- Trailing commas in multiline objects/arrays

### Types
- Use TypeScript for all code
- Enable strict mode (noImplicitAny, strictNullChecks)
- Prefer interfaces over types for object shapes
- Use generics when appropriate

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for components and classes
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names, avoid abbreviations

### Error Handling
- Handle errors explicitly
- Use try/catch blocks for async operations
- Prefer early returns for error conditions

### React Components
- Use functional components with hooks
- Use TypeScript interfaces for props
- Follow React best practices for state management
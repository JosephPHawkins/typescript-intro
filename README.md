# TypeScript Fundamentals - Learning Repository

A comprehensive TypeScript learning repository demonstrating core concepts, advanced features, and best practices. This project serves as a practical reference for TypeScript development, covering everything from basic types to advanced generics and design patterns.

## Overview

This repository contains structured lessons that progressively build TypeScript knowledge, from fundamental concepts to advanced type system features. Each lesson includes both TypeScript source files (`.ts`) and their compiled JavaScript outputs (`.js`), providing clear examples of how TypeScript enhances JavaScript development.

## Features

- **Structured Learning Path**: Organized into three progressive lessons
- **Type Safety**: Demonstrates TypeScript's static typing capabilities
- **Modern Configuration**: Uses strict TypeScript compiler settings for best practices
- **Real-World Examples**: Practical code samples covering common use cases
- **Compiled Output**: Includes both source and compiled JavaScript for comparison

## Lessons

### Lesson 1: Fundamentals

- Introduction to TypeScript
- Variable declarations and type annotations
- Basic type system

### Lesson 2: Core Concepts

- **Arrays**: Type-safe array handling
- **Enums**: Enumerated types
- **Functions**: Function types, parameters, return types, and function overloading
- **Interfaces**: Object shape definitions and contracts
- **Objects**: Typed object structures
- **Tuples**: Fixed-length typed arrays
- **Union Types**: Flexible type combinations

### Lesson 3: Advanced Topics

- **Generics**: Reusable type-safe code with type parameters
- **Abstract Classes**: Base class definitions
- **Interface Extensions**: Extending and composing interfaces
- **Type Narrowing**: Type guards and conditional type checking
- **Access Modifiers**: `private`, `protected`, and `public` modifiers
- **Advanced Type System**: Complex type manipulations

## Technologies

- **TypeScript**: Latest version with strict mode enabled
- **Node.js**: Modern ES modules support
- **TypeScript Compiler**: Configured with strict type checking

## Project Structure

```
typescript-intro/
├── lesson1/          # Fundamentals
│   ├── intro.ts
│   └── variables.ts
├── lesson2/          # Core Concepts
│   ├── arrays.ts
│   ├── enums.ts
│   ├── functions.ts
│   ├── interface.ts
│   ├── objects.ts
│   ├── tuples.ts
│   └── union.ts
└── lesson3/          # Advanced Topics
    ├── src/
    │   ├── abstract.ts
    │   ├── generics.ts
    │   ├── interface-ex.ts
    │   ├── narrowing.ts
    │   └── private-protected-public.ts
    ├── tsconfig.json
    └── package.json
```

## Configuration

The project uses a modern TypeScript configuration with:

- **Strict Mode**: Enabled for maximum type safety
- **ES Modules**: Node.js module resolution
- **Source Maps**: For debugging support
- **Strict Type Checking**: Including `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- TypeScript compiler (`npm install -g typescript`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/typescript-intro.git
cd typescript-intro
```

2. Navigate to lesson3 and install dependencies (if needed):

```bash
cd lesson3
npm install
```

### Compilation

To compile TypeScript files:

```bash
# From lesson3 directory
tsc
```

Or compile individual files:

```bash
tsc lesson1/intro.ts
```

## Key Concepts Demonstrated

- **Type Safety**: Leveraging TypeScript's type system to catch errors at compile time
- **Code Reusability**: Using generics to write flexible, reusable code
- **Object-Oriented Programming**: Classes, interfaces, and access modifiers
- **Type Inference**: Understanding how TypeScript infers types
- **Advanced Types**: Union types, tuples, and type narrowing

## Examples

### Generics Example

```typescript
function identity<T>(val: T): T {
  return val;
}

const user = identity<Person>({ name: "Joseph", age: 22 });
```

### Function Types Example

```typescript
function addTwo(num: number): number {
  return num + 2;
}
```

### Interface Example

```typescript
interface Person {
  name: string;
  age: number;
}
```

## Learning Outcomes

After completing this repository, you'll understand:

- TypeScript's type system and how it enhances JavaScript
- How to write type-safe, maintainable code
- Advanced TypeScript features like generics and type narrowing
- Best practices for TypeScript project configuration
- Object-oriented programming concepts in TypeScript

## License

This project is open source and available for educational purposes.

## Author

**Joseph**

---

If you find this repository helpful, please consider giving it a star!

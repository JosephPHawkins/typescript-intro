# TypeScript Fundamentals - Learning Repository

A comprehensive TypeScript learning repository demonstrating core concepts, advanced features, and best practices. This project serves as a practical reference for TypeScript development, covering everything from basic types to advanced generics and design patterns.

## Overview

This repository contains structured lessons that progressively build TypeScript knowledge, from fundamental concepts to advanced type system features. Each lesson includes both TypeScript source files (`.ts`) and their compiled JavaScript outputs (`.js`), providing clear examples of how TypeScript enhances JavaScript development with static typing, type inference, and advanced type system capabilities.

## Features

- **Structured Learning Path**: Organized into three progressive lessons building from basics to advanced topics
- **Type Safety**: Demonstrates TypeScript's static typing capabilities to catch errors at compile time
- **Modern Configuration**: Uses strict TypeScript compiler settings following industry best practices
- **Real-World Examples**: Practical code samples covering common use cases and patterns
- **Compiled Output**: Includes both source and compiled JavaScript for comparison and understanding
- **Comprehensive Coverage**: From basic types to generics, interfaces, and advanced type manipulation

## Core Concepts

### Type System Fundamentals

TypeScript's type system is the foundation of the language, providing static type checking that helps catch errors before runtime.

**Basic Types**: TypeScript supports all JavaScript primitive types (string, number, boolean, null, undefined) plus additional types like `any`, `void`, `never`, and `unknown`.

**Type Annotations**: Explicitly declaring types for variables, function parameters, and return values ensures type safety and improves code documentation.

**Type Inference**: TypeScript automatically infers types when they can be determined from context, reducing the need for explicit annotations while maintaining type safety.

### Arrays and Collections

TypeScript provides powerful array typing capabilities:

- **Typed Arrays**: Arrays with specific element types (`string[]`, `number[]`)
- **Generic Arrays**: Arrays of custom types using type aliases or interfaces
- **Multi-dimensional Arrays**: Nested array structures with type safety
- **Union Arrays**: Arrays that can contain multiple types (`(number | string)[]`)

### Functions

Functions in TypeScript are first-class citizens with comprehensive type support:

- **Parameter Types**: Type annotations for function parameters
- **Return Types**: Explicit return type declarations
- **Optional Parameters**: Parameters that may be omitted using `?` or default values
- **Function Overloading**: Multiple function signatures for different use cases
- **Arrow Functions**: Type-safe arrow function syntax
- **Void and Never**: Special return types for functions that don't return values or never complete

### Objects and Type Aliases

TypeScript provides multiple ways to define object shapes:

- **Type Aliases**: Custom type definitions using the `type` keyword
- **Readonly Properties**: Properties that cannot be modified after initialization
- **Optional Properties**: Properties that may be undefined using `?`
- **Type Intersection**: Combining multiple types using `&` operator
- **Object Literals**: Inline type definitions for function parameters

### Interfaces

Interfaces define contracts that objects must follow:

- **Interface Declaration**: Defining object shapes and method signatures
- **Interface Extension**: Inheriting properties from other interfaces using `extends`
- **Interface Merging**: TypeScript's ability to merge multiple declarations of the same interface
- **Method Signatures**: Defining function types within interfaces
- **Implementation**: Classes implementing interfaces must satisfy all interface requirements

### Enums

Enums provide a way to define a set of named constants:

- **Numeric Enums**: Auto-incrementing numeric values starting from 0
- **String Enums**: Explicit string values for each member
- **String Enums**: Type-safe string constants
- **Use Cases**: Status codes, configuration options, and predefined choices

### Tuples

Tuples are fixed-length arrays with specific types at each position:

- **Ordered Types**: Each position has a specific type requirement
- **Type Safety**: Prevents incorrect type placement
- **Use Cases**: Returning multiple values, RGB colors, coordinate pairs
- **Limitations**: TypeScript's tuple type checking and edge cases

### Union Types

Union types allow a value to be one of several types:

- **Type Unions**: Combining types with the `|` operator
- **Type Narrowing**: Using type guards to narrow union types
- **Discriminated Unions**: Using literal types to create type-safe unions
- **Literal Types**: Restricting values to specific strings or numbers
- **Type Guards**: `typeof`, `instanceof`, and custom type guard functions

### Generics

Generics enable writing reusable, type-safe code:

- **Generic Functions**: Functions that work with multiple types
- **Generic Constraints**: Restricting generic types using `extends`
- **Generic Classes**: Classes that can work with different types
- **Type Parameters**: Using `<T>`, `<U>` for type variables
- **Real-world Applications**: Collections, utility functions, and data structures

### Classes and Object-Oriented Programming

TypeScript supports full object-oriented programming:

- **Class Declarations**: Defining classes with properties and methods
- **Constructors**: Initializing class instances with type safety
- **Access Modifiers**: `public`, `private`, and `protected` visibility controls
- **Abstract Classes**: Base classes that cannot be instantiated directly
- **Inheritance**: Extending classes with `extends` keyword
- **Getters and Setters**: Controlled access to class properties
- **Interface Implementation**: Classes implementing interfaces

### Type Narrowing and Type Guards

TypeScript's type narrowing allows safe type checking:

- **Typeof Guards**: Using `typeof` to narrow primitive types
- **Instanceof Guards**: Checking class instances
- **In Operator**: Checking for property existence
- **Discriminated Unions**: Using literal types for exhaustive checking
- **Type Assertions**: Explicitly telling TypeScript about types (use with caution)
- **Custom Type Guards**: User-defined functions for type narrowing

### Advanced Type Features

- **Type Inference**: Automatic type detection from context
- **Type Assertions**: Explicit type casting when needed
- **Type Compatibility**: Understanding structural typing vs nominal typing
- **Utility Types**: Built-in types like `Partial`, `Required`, `Pick`, `Omit`
- **Conditional Types**: Types that depend on conditions
- **Mapped Types**: Creating new types by transforming existing ones

## Lessons

### Lesson 1: Fundamentals

**Introduction to TypeScript**

- Understanding TypeScript's purpose and benefits
- Setting up TypeScript projects
- Basic type annotations and inference

**Variable Declarations**

- `let`, `const`, and `var` with type annotations
- Type inference in variable declarations
- Basic type system overview

### Lesson 2: Core Concepts

**Arrays**

- Typed arrays (`string[]`, `number[]`)
- Arrays of custom types
- Multi-dimensional arrays
- Array methods with type safety

**Enums**

- Numeric and string enums
- Enum member initialization
- Using enums in functions and conditionals
- Real-world enum use cases

**Functions**

- Function parameter types and return types
- Optional and default parameters
- Function overloading
- Arrow functions with types
- `void` and `never` return types
- Type-safe function expressions

**Interfaces**

- Interface declarations and properties
- Interface extension and inheritance
- Interface merging
- Method signatures in interfaces
- Implementing interfaces in classes

**Objects**

- Type aliases for objects
- Readonly properties
- Optional properties
- Type intersection (`&`)
- Object type definitions

**Tuples**

- Fixed-length typed arrays
- Tuple type definitions
- Tuple use cases and limitations
- Tuple manipulation

**Union Types**

- Union type syntax (`|`)
- Type narrowing with union types
- Literal types
- Discriminated unions
- Type guards for unions

### Lesson 3: Advanced Topics

**Generics**

- Generic function syntax
- Generic type parameters
- Generic constraints with `extends`
- Generic classes
- Real-world generic patterns

**Abstract Classes**

- Abstract class definitions
- Abstract methods
- Class inheritance from abstract classes
- When to use abstract classes vs interfaces

**Interface Extensions**

- Extending interfaces
- Multiple interface inheritance
- Interface composition
- Implementing multiple interfaces

**Type Narrowing**

- Typeof type guards
- Instanceof type guards
- Property existence checks (`in` operator)
- Discriminated unions
- Custom type guard functions

**Access Modifiers**

- Public, private, and protected modifiers
- Constructor parameter properties
- Getter and setter methods
- Encapsulation and data hiding

## Technologies

- **TypeScript**: Latest version with strict mode enabled for maximum type safety
- **Node.js**: Modern ES modules support with Node.js module resolution
- **TypeScript Compiler**: Configured with strict type checking and modern compiler options

## Project Structure

```
typescript-intro/
├── lesson1/          # Fundamentals
│   ├── intro.ts      # Introduction to TypeScript basics
│   └── variables.ts  # Variable declarations and types
├── lesson2/          # Core Concepts
│   ├── arrays.ts     # Typed arrays and collections
│   ├── enums.ts      # Enumerated types
│   ├── functions.ts  # Function types and signatures
│   ├── interface.ts  # Interface definitions
│   ├── objects.ts    # Object types and type aliases
│   ├── tuples.ts     # Fixed-length typed arrays
│   └── union.ts      # Union types and type narrowing
└── lesson3/          # Advanced Topics
    ├── src/
    │   ├── abstract.ts              # Abstract classes
    │   ├── generics.ts              # Generic types and functions
    │   ├── interface-ex.ts          # Advanced interface patterns
    │   ├── narrowing.ts             # Type narrowing techniques
    │   └── private-protected-public.ts  # Access modifiers
    ├── tsconfig.json                # TypeScript configuration
    └── package.json                 # Project dependencies
```

## Configuration

The project uses a modern TypeScript configuration optimized for type safety and best practices:

- **Strict Mode**: Enabled for maximum type safety (`strict: true`)
- **ES Modules**: Node.js module resolution (`module: "nodenext"`)
- **Target**: Latest ECMAScript features (`target: "esnext"`)
- **Strict Type Checking**:
  - `noUncheckedIndexedAccess`: Prevents unsafe array/object access
  - `exactOptionalPropertyTypes`: Strict optional property handling
- **Module Detection**: Force module detection for better compatibility
- **Isolated Modules**: Ensures each file can be safely transpiled independently

## Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher recommended
- **TypeScript Compiler**: Install globally with `npm install -g typescript`
- **Code Editor**: VS Code with TypeScript support recommended

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
# Compile a specific file
tsc lesson1/intro.ts

# Compile with watch mode for development
tsc --watch
```

## Code Examples

### Arrays with Type Safety

```typescript
const superHeros: string[] = [];
superHeros.push("batman");

type User = {
  name: string;
  password: number;
};

const userList: User[] = [];
userList.push({ name: "john", password: 1 });

// Multi-dimensional arrays
const mlModel: number[][] = [[255, 255, 255], []];
```

### Enums for Type Safety

```typescript
enum PetStatus {
  HAPPY = "happy",
  HUNGRY = "hungry",
  GOOFY = "goofy",
}

function petAction(status: PetStatus) {
  if (status === PetStatus.GOOFY) {
    console.log(`Your dog bonked his head because he is ${status}`);
  } else if (status === PetStatus.HAPPY) {
    console.log(`Your dog smiled because he is ${status}`);
  }
}
```

### Functions with Type Safety

```typescript
function addTwo(num: number): number {
  return num + 2;
}

function createAccount(
  username: string,
  email: string,
  password: string,
  paidMembership: boolean = false
): string {
  return "account created";
}

// Never return type for functions that throw
function displayError(errMsg: string): never {
  throw new Error(errMsg);
}
```

### Interfaces and Type Aliases

```typescript
interface Animal {
  name: string;
  age: number;
  attack: (move: string) => number;
}

// Interface extension
interface Fish extends Animal {
  gills: boolean;
}

// Type alias with readonly and optional properties
type User = {
  readonly _id: number;
  email: string;
  isActive: boolean;
  creditCard?: boolean; // Optional property
};

// Type intersection
type CardDetails = CardNumber &
  CardDate & {
    cvv: string;
  };
```

### Generics for Reusable Code

```typescript
// Generic function
function identity<T>(val: T): T {
  return val;
}

interface Person {
  name: string;
  age: number;
}

const user = identity<Person>({ name: "Joseph", age: 22 });

// Generic function with constraints
function getSearchItems<T>(items: T[], index: number): T | undefined {
  return items[index];
}

// Generic class
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
```

### Union Types and Type Narrowing

```typescript
// Union type
let score: number | string;
score = 3;
score = "3";

// Type narrowing with typeof
function getDBId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id + 1;
  }
}

// Literal types
let passengerSeat: "window" | "isle" | "middle";
passengerSeat = "window"; // Only these three values allowed

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}
```

### Classes with Access Modifiers

```typescript
class Family {
  constructor(
    public name: string,
    public age: number,
    protected relative: string[]
  ) {}

  // Getter
  get parents(): string[] {
    return this.parents;
  }

  // Setter
  set addParent(name: string) {
    this.parents.push(name);
  }
}

class DistantFamily extends Family {
  get notCloselyRelated(): string[] {
    return this.relative; // Can access protected member
  }
}
```

### Type Narrowing Techniques

```typescript
// Typeof guard
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toFixed(2);
}

// In operator guard
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: string;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// Custom type guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## Key Concepts Demonstrated

- **Type Safety**: Leveraging TypeScript's type system to catch errors at compile time rather than runtime
- **Code Reusability**: Using generics to write flexible, reusable code that works with multiple types
- **Object-Oriented Programming**: Classes, interfaces, inheritance, and encapsulation
- **Type Inference**: Understanding how TypeScript automatically infers types from context
- **Advanced Types**: Union types, tuples, type narrowing, and discriminated unions
- **Best Practices**: Following TypeScript conventions and patterns for maintainable code
- **Error Prevention**: Using the type system to prevent common programming errors

## Learning Outcomes

After completing this repository, you'll understand:

- **TypeScript Fundamentals**: How TypeScript enhances JavaScript with static typing
- **Type System Mastery**: Working with basic types, interfaces, and advanced type features
- **Type-Safe Development**: Writing maintainable, error-free code using TypeScript's type system
- **Advanced Features**: Generics, type narrowing, and complex type manipulations
- **Best Practices**: TypeScript project configuration and coding standards
- **Object-Oriented Patterns**: Classes, interfaces, inheritance, and encapsulation in TypeScript
- **Real-World Applications**: How to apply TypeScript concepts in practical scenarios

## Use Cases

This repository is ideal for:

- **Learning TypeScript**: Progressive learning path from basics to advanced topics
- **Reference Material**: Quick lookup for TypeScript syntax and patterns
- **Interview Preparation**: Comprehensive coverage of TypeScript concepts
- **Project Setup**: Example TypeScript configuration and project structure
- **Code Examples**: Practical examples for common TypeScript patterns

## License

This project is open source and available for educational purposes.

## Author

**Joseph**

---

If you find this repository helpful, please consider giving it a star!

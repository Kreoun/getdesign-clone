```markdown
# getdesign-clone Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the development patterns and conventions used in the `getdesign-clone` repository, a TypeScript project built with Next.js. You'll learn about file naming, import/export styles, commit patterns, and how to write and run tests. This guide ensures consistency and efficiency when contributing to the codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.tsx`, `mainLayout.ts`

### Import Style
- Imports can be both named and default, and may be mixed within the same file.
  - Example:
    ```typescript
    import React from 'react';
    import { useState } from 'react';
    import customHook from './useCustomHook';
    ```

### Export Style
- **Default exports** are preferred.
  - Example:
    ```typescript
    const UserProfile = () => { /* ... */ };
    export default UserProfile;
    ```

### Commit Patterns
- Commit messages are **freeform**, sometimes with prefixes, averaging 79 characters.
  - Example:  
    ```
    Add responsive layout for dashboard page
    Fix: handle null user in profile component
    ```

## Workflows

### Adding a New Component
**Trigger:** When you need to create a new UI component.
**Command:** `/add-component`

1. Create a new file in the appropriate directory using camelCase naming.
2. Write your component in TypeScript, using default export.
3. Use mixed import style as needed.
4. Add the component to the relevant page or layout.
5. Commit your changes with a clear, descriptive message.

### Running Tests
**Trigger:** When you want to verify code correctness.
**Command:** `/run-tests`

1. Locate or create test files matching the `*.test.*` pattern.
2. Write tests for your components or utilities.
3. Run the test suite using the project's test runner (framework unknown; check project scripts).
4. Review and fix any failing tests.

### Refactoring Code
**Trigger:** When improving or restructuring existing code.
**Command:** `/refactor`

1. Identify the code to refactor.
2. Apply changes, maintaining camelCase file naming and default exports.
3. Update imports if file names or locations change.
4. Run tests to ensure nothing is broken.
5. Commit with a descriptive message.

## Testing Patterns

- Test files follow the `*.test.*` naming convention.
  - Example: `userProfile.test.tsx`
- The testing framework is not specified; check project scripts or documentation for details.
- Place test files near the code they test or in a dedicated `__tests__` directory.
- Write tests in TypeScript, covering key functionality and edge cases.

## Commands
| Command        | Purpose                                   |
|----------------|-------------------------------------------|
| /add-component | Scaffold a new component with conventions  |
| /run-tests     | Run the project's test suite              |
| /refactor      | Refactor code following repo standards     |
```

# Test Structure Guide

## Test folders
- tests/login/: login-related scenarios
- tests/cart/: cart and checkout scenarios
- tests/helpers/: shared helper modules

## Test naming conventions
- Use descriptive test names that describe the user journey
- Prefer behavior-driven names such as "User can log in and reach the inventory page"

## Best practices
- Keep tests independent and isolated
- Reuse fixtures and page objects wherever possible
- Avoid hardcoding selectors directly in test files

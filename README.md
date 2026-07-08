# Playwright TypeScript Framework

## Overview
This repository contains a scalable Playwright + TypeScript automation framework for web UI testing. It is structured around the SauceDemo application and uses page objects, reusable fixtures, and shared test data for maintainability.

## Prerequisites
- Node.js 18 or newer
- npm

## Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```
4. Update values in .env if needed.

## Project Structure
- tests/: test specifications organized by feature
- pages/: page object models for UI interactions
- fixtures/: reusable Playwright fixtures and test setup
- utils/: shared helpers and test data
- playwright.config.ts: global Playwright configuration
- package.json: scripts and dependencies

## Available Scripts
- npm test: run the full suite
- npm run test:headed: run tests in headed mode
- npm run test:debug: run tests in debug mode
- npm run report: open the HTML report

## Environment Variables
The framework supports the following variables through .env:
- BASE_URL: application base URL
- STANDARD_USER: login username
- STANDARD_PASSWORD: login password

## Test Conventions
- Keep tests short and focused on user behavior
- Use page objects instead of raw selectors inside tests
- Store selectors and reusable actions in page classes
- Keep test data in utils/testData.ts or environment variables

## Reporting
Playwright generates HTML reports automatically. To view them locally:
```bash
npm run report
```

## CI / Automation
This repository includes a GitHub Actions workflow in [.github/workflows/playwright.yml](.github/workflows/playwright.yml) to run the Playwright suite automatically on push and pull request events.

## Contributing
See [docs/contributing.md](docs/contributing.md) for contribution steps and review expectations.

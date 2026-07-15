# Beeceptor HTTP Callout Assignment

## Overview

This project automates the Beeceptor HTTP Callout feature using Playwright.

## Features

- Opens Beeceptor console
- Reuses an existing endpoint
- Configures the HTTP Callout Rule
- Saves the configuration
- Sends a request to the Beeceptor endpoint
- Verifies HTTP 200 response
- Validates JSON response

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Installation

```bash
npm install
```

## Run

```bash
npx playwright test --headed
```

## Verification

The test verifies:

- HTTP Status = 200
- JSON response received
- Response contains expected properties
This project contains UI and API automation using Playwright with JavaScript.

How to Run Tests
Install dependencies: npm install
Install Playwright browsers: npx playwright install
Run UI Test: npx playwright test ui-test.spec.js --headed
Run API Test: npx playwright test api-test.spec.js

To generate and view report:
npx playwright test --reporter=html
npx playwright show-report

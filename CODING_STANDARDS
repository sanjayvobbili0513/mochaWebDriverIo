# Coding Standards

These rules define the naming conventions and coding standards for this automation testing project (WebdriverIO + Mocha + Chai).

---

## 🏷 Naming Conventions

| Item                        | Convention         | Example                              |
|------------------------------|--------------------|-----------------------------------------|
| **Variables / functions**     | `camelCase`           | `loginToRealm`, `productName` |
| **Async functions**            | `camelCase`           | `addToCart`, `selectProduct`            |
| **Classes / Page Objects**     | `PascalCase`           | `MainPage`, `DashBoard`                  |
| **Constants**                   | `UPPER_CASE_SNAKE`    | `MAX_WAIT_TIME`, `BASE_URL`              |
| **Selectors (keys)**             | `camelCase`           | `cartAdd`, `productsSelect`, `userField` |
| **File names (tests)**           | `kebab-case`           | `add-product-to-cart.spec.js`            |
| **File names (page objects/utils)** | `camelCase`      | `mainPage.js`, `waitUtils.js`             |
| **JSON files**                    | `kebab-case`           | `sample.json`, `test-data.json`            |

> **Tip:** Each page object class should be in its own file named after the class (e.g. `MainPage` → `mainPage.js`).

---

## 💻 Code Style Rules

- **Indentation:** 2 spaces
- **String quotes:** Use `'single quotes'`
- **Semicolons:** Always use semicolons
- **Line length:** Maximum 100 characters
- **Trailing commas:** Avoid unless needed
- **Import order:** External packages first, then internal modules, then local files
- **Spacing:** One blank line between `describe`/`it` blocks

---

## ✅ Testing Guidelines

- Use **one top-level `describe`** per test file
- **Do not use** `it.only` or `describe.only` (to avoid skipping other tests)
- Always use `async/await` for WebdriverIO commands (e.g. `await browser.getTitle()`)
- Use **meaningful test titles** (e.g. `'Step1: Login to store'`)
- Each test should contain **Arrange → Act → Assert** pattern
- Always include at least one `assert` or `expect` in each `it` block

---

## 📁 Folder Structure

- `framework/` → Page objects, selectors, utilities
  - `loginPage/mainPage.js`
  - `loginPage/dashBoard.js`
  - `commonUtils/waitUtils.js`
- `test/` → All `.spec.js` test files
- `data/` → `.json` test data files

---

## ⚠ Common Violations to Avoid

- ❌ Using `await` before non-async functions
- ❌ Forgetting `await` for async WebdriverIO commands (`browser`, `$`, `$$`)
- ❌ Using inconsistent casing (`Mainpage`, `mainpage`, etc.)
- ❌ Having multiple `describe` blocks per test file
- ❌ Duplicated `it` titles

---

By following these standards, we maintain a consistent, clean, and maintainable codebase.

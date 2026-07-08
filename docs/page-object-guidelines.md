# Page Object Guidelines

## What belongs in a page object
- Locators for elements on that page
- Reusable actions such as login, add to cart, checkout
- Assertions specific to that page

## What should stay out of a page object
- Test-specific data
- Business flows spanning multiple pages
- Assertions for unrelated pages

## Rules of thumb
- One page object per page or view
- Keep methods focused and reusable
- Use Playwright locators rather than raw CSS/XPath where possible

# Installments Select Widget

This project aims to provide an installments select widget, fetching the data from an endpoint and showing the result to the user. This project doesn't use any external library, only vanilla JavaScript and the built-in methods.

## How to Install and Use

1. **Install Dependencies**:

   - Go to the `widgets` folder and run `npm install` to add all the required dependencies.

2. **Build the Bundle**:

   - Run `npm build` to build the bundle version.

3. **Integrate into Your Site**:
   - Add a `div` with the id `widget_container` to the main site.
   - Import both `sequra_widget.js` and `sequra_widget.css` in your main page.
   - Retrieve selected number of installments by getting the attribute `data-selected-option` from the `#selected-option` component

## Project Structure

This project uses pure vanilla JavaScript without any library or framework. It utilizes componentization to reduce code complexity and keep components lean, making the code easy to maintain and scale.

### Commit Messages

Commits follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern.

### Testing

Due to the deadline, I prioritized the outcome over testing. This is not a practice I follow—unit, integration, and end-to-end (e2e) tests are powerful tools to avoid bugs in production. As a future task, I will work on adding tests.

## Folder Structure

- **lib**: The entry point of the library.
- **src**: Where all the business logic lies.
  - **src/components**: All the components used in the test. Each component is a domain, so you'll find `shared`, `utils`, and other folders related to this domain.
  - **src/services/api**: Interactions with the endpoint, such as `get installments`.
  - **src/shared**: Everything shared among all the domains.
- **style.css**: All the stylesheets are in this file.

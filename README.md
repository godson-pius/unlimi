## Blutech Solution: A Next.js Application with Tailwind CSS, TypeScript, and API Context

This Next.js application provides a user-friendly interface for browsing product catalogs. Users can filter products by supplier selection and search for specific items. It utilizes API Context for efficient state management and TypeScript for improved type safety, ensuring a smooth and maintainable user experience.

**Features**

- **Supplier Selection:** Choose a supplier from the dropdown menu to filter the product catalog.
- **Search Functionality:** Enter a keyword in the search bar to narrow down the displayed products.
- **Data Table Rendering:** Fetched product data is presented in a visually appealing and informative data table using Tailwind CSS.
- **API Integration:** Retrieves product catalogs from the provided API endpoint.
- **API Context:** Manages application state effectively and avoids prop drilling through component hierarchies.
- **TypeScript:** Enhances code type safety and improves maintainability.

**Getting Started**

**Prerequisites**

- Node.js and npm (or yarn) installed on your system.
- Basic understanding of TypeScript and Tailwind CSS.

**Installation**

1. Clone this repository:

   ```bash
   git clone https://github.com/godson-pius/unlimi.git
   ```

2. Navigate to the project directory:

   ```bash
   cd unlimi
   ```

3. Install dependencies:

   ```bash
   npm install or yarn
   ```

**Running the Application**

1. Start the development server:

   ```bash
   npm run dev or yarn run dev
   ```

2. Open http://localhost:3000 in your web browser.

**API Configuration**

This application fetches data from the provided API endpoint (find that in ./controllers/index.ts )

**Deployment**

To deploy your application to a production environment, follow the deployment guidelines specific to your chosen hosting platform. Next.js offers excellent production support for both static site generation (SSG) and server-side rendering (SSR), allowing you to optimize your application's performance and user experience.

**Contribution**

Feel free to fork this repository, make modifications, and create pull requests to contribute to the project's improvement.

**License**

This project is a free software.

# Multi-Step Form React App

This is a simple multi-step form built with React that allows users to input personal information, contact details, and educational background in a step-by-step manner.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Multi-step form with Personal Information, Contact Information, and Educational Background steps.
- Form data is stored in `localStorage` to maintain user progress even if the page is refreshed.
- Validation for required fields and basic email/number formats.
- Display of submitted data in the final step.
- Option to create a new form, clearing stored data.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emmarcaber/WebDev-MultiStepForm.git
   ```

2. Navigate to the project directory:

    ```bash
    cd WebDev-MultiStepForm
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```
   
2. Open your browser and visit http://localhost:3000.

3. Follow the steps in the multi-step form to input your information.

4. Optionally, refresh the page to see that your form progress is maintained using `localStorage`.

5. Submit the form to see the displayed result.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the <a href="https://github.com/emmarcaber/WebDev-MultiStepForm/blob/main/LICENSE">MIT License</a>.

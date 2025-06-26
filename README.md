# Calculator App

A simple, modern calculator built with React, TypeScript, Vite, and Tailwind CSS. This project demonstrates clean code structure, component-based design, and thorough testing with Jest.

## Features

- Basic arithmetic operations (add, subtract, multiply, divide)
- Responsive and accessible UI
- Modular, reusable React components
- Context-based state management
- Utility functions for operations and display formatting
- Comprehensive unit tests

## Tech Stack

- **React** (with TypeScript)
- **Vite** (for fast development and build)
- **Tailwind CSS** (for styling)
- **Jest** (for testing)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd calculator
npm install # or yarn install
```

### Running the App

```bash
npm run dev # or yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build # or yarn build
```

### Preview Production Build

```bash
npm run preview # or yarn preview
```

## Usage

- Click the number and operation buttons to perform calculations.
- The display panel shows the current input and result.
- Utilities panel may include clear, backspace, or other functions.

## Testing

Run all tests with:

```bash
npm test # or yarn test
```

Test files are located in the `__tests__` directory and cover core logic and components.

## Project Structure

```
calculator/
├── __tests__/              # Unit tests
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── utils/              # Utility functions (operations, formatting)
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind CSS config
├── vite.config.ts          # Vite config
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

[MIT](LICENSE)

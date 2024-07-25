# Generic Table

This project is a generic table component built using React and Vite. It supports various functionalities such as column visibility toggling, inline editing of cell data, and pagination for handling large datasets.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Dynamic Columns:** Toggle visibility of columns.
- **Inline Editing:** Edit cell data directly within the table.
- **Pagination:** Efficiently handle and display large datasets.
- **Data Types:** Support for different data types including strings, numbers, booleans, and selections.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RoiyM/generic-table.git
   ```

2. Navigate to the project directory:

   ```bash
   cd generic-table
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

After starting the development server, you can view the project in your browser at `http://localhost:{port}`.

## Components

### EditableCell

Handles the editing of different types of cells (string, number, boolean, selection).

### TableHeader

Renders the table header and includes buttons for toggling column visibility.

### TableRow

Renders a single row of the table using the `EditableCell` component for each cell.

### Table

Manages the table state, including hidden columns, data updates, and pagination.

### ColumnVisibilityToggle

Renders a list of checkboxes allowing users to toggle the visibility of each column.

### Pagination

Renders pagination controls for navigating through large datasets.

## Project Structure

```
src/
  components/
    EditableCell.jsx
    Table.jsx
    TableHeader.jsx
    TableRow.jsx
    ColumnVisibilityToggle.jsx
    Pagination.jsx
  utils/
    generateData.js
  App.jsx
  main.jsx
```

- **EditableCell.jsx:** Component for editing table cells.
- **Table.jsx:** Main table component handling data and state management.
- **TableHeader.jsx:** Component for rendering table headers.
- **TableRow.jsx:** Component for rendering table rows.
- **ColumnVisibilityToggle.jsx:** Component for toggling column visibility.
- **Pagination.jsx:** Component for pagination controls.
- **generateData.js:** Script for generating sample data.
- **App.jsx:** Root component.
- **main.jsx:** Entry point of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


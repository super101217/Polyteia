# Project Name: Polyteia Test Project

## Problem

The challenge consists of two parts: the back-end and the front-end.\
The back-end part of the challenge will be a NodeJS application using TypeScript that exposes two queries:\
first one outputs numeric data extracted from a pre-populated database, the exact DBMS is up to you;\
the second outputs random numeric data.\
The front-end part will be a React application using TypeScript that queries and displays the data returned by the back-end as a graph, e.g. as a line chart, bar chart, etc. Feel free to use any visualization library that you choose, e.g. Nivo. 
The interface will allow to:\
query new batch of data from the back-end;
switch the type of the graph, e.g. from a line chart to a bar chart.
Feel free to use any component library that you like or create your own components.
Test coverage is, of course, not required.

## Installation

### 1. Database
  - Please import `polyteia_test.sql`
  - Input Data Numeric field.
### 2. Server
  - Navigate to the project directory in your terminal.
  - Install the dependencies using npm: (node version: v18.17.0)
    ```bash
    npm install
    ```
  - Set Environment variable.
    - Create .env file.
    - Copy below variable.
      ```bash
      PORT=8000
      DB_HOST=localhost
      DB_PORT=3306
      DB_USERNAME=root 
      DB_PASSWORD=
      DB_NAME=polyteia_test
      ```
  - Start the development server:
    ```bash
    npm start
    ```
  - Test the application:

    ```bash
    npm test
    ```
### 3. Client

- Navigate to the project directory in your terminal.

- Install the dependencies using npm: (node version: v18.17.0)

   ```bash
   npm install
   ```

- Set Environment variable.

   - Create .env file.
   - Copy below variable.
     `REACT_APP_API_URL=http://localhost:8000/api/v1`

- Start the development server:

   ```bash
   npm run dev
   ```

- Test the application:

   ```bash
   npm run test:server
   npm run test:cy:open
   ```

- Open your web browser and go to `http://localhost:5173` to view the widget.

## Dependencies

The project uses the following main dependencies:

### Server
- Node.js
- Express.js
- MySQL
- Jest
- TypeORM
### Client
- React
- Redux-toolkit
- Redux-saga
- React-router-dom
- Axios
- Styled-components
- Cypress
- Eslint
- Prettier
- Figma

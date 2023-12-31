# Task List App using Redux

Welcome to the Task List App! This is a simple React application built using Redux for state management. With this app, you can keep track of your tasks, mark them as completed, and remove tasks from your list, all using the power of Redux for managing the application's state.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Redux Architecture](#redux-architecture)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks to your list.
- Mark tasks as completed.
- Remove tasks from the list.

## Getting Started

Follow the instructions below to get the Task List App up and running on your local machine.

### Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/task-list-app-with-react-using-redux.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-list-app-redux
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the Task List App.

## Folder Structure

The project structure is organized as follows:

```
task-list-app-redux/
  ├── src/
  │    ├── components/
  │    │    ├── TaskList.js
  │    │    ├── Task.js
  │    ├── actions/
  │    │    ├── actionTypes.js
  │    │    ├── taskActions.js
  │    ├── reducers/
  │    │    ├── taskReducer.js
  │    ├── store/
  │    │    ├── configureStore.js
  │    ├── App.js
  │    ├── index.js
  ├── public/
  ├── README.md
```

- `src/components`: Contains React components responsible for rendering different parts of the app.
- `src/actions`: Holds action type constants and action creators.
- `src/reducers`: Contains the reducer responsible for managing the tasks' state.
- `src/store`: Contains the Redux store configuration.
- `src/App.js`: The main component that composes the app's structure.
- `src/index.js`: Entry point of the application.

## Redux Architecture

The Task List App uses Redux to manage the state of tasks. The `taskReducer.js` file under `src/reducers` contains the Redux reducer responsible for managing the tasks' state.

## Contributing

Contributions to the Task List App are welcomed! If you find any issues or want to enhance the app with new features, feel free to open pull requests.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m "Add a new feature"`.
4. Push the changes to your fork: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Start managing your tasks more effectively with the Task List App! If you have any questions or feedback, please don't hesitate to get in touch.

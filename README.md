# DevThoughts

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
DevThoughts is a CMS-style blog application built with Node.js, Express, and PostgreSQL. It allows users to create, view, and manage blog posts, as well as add comments. Users can sign up, log in, and access a dashboard to manage their content.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To run this application locally:

1. Clone the repository:
```
git clone https://github.com/wilsacker/DevThoughts.git
```

2. Navigate to the project directory:
```
cd DevThoughts
```

3. Install the dependencies:
```
npm install
```

4. Install PostgreSQL if you haven’t already: [PostgreSQL Installation Guide](https://www.postgresql.org/download/)

5. Set up the database:

- Ensure your PostgreSQL server is running.
- Create the database using the following command:
```
psql -U postgres -d postgres -f db/schema.sql
```
- **Note:** Make sure you have created a database named `devthoughts` (or your chosen name) in your PostgreSQL instance before running the schema script.

6. Set up environment variables:

- Create a `.env` file using the `.env.example` file in the root directory.
- Add in the following variables to configure your database:
```
NODE_ENV=development
DATABASE_URL=postgres://username:password@localhost:5432/devthoughts  # Replace with your actual PostgreSQL credentials
SESSION_SECRET=your_random_secret     # Replace with a random string for session management
```
- **Important:** Ensure to replace `username`, `password`, and `devthoughts` with your actual PostgreSQL credentials and database name.

## Usage

1. Run the application using the following command:
```
npm start
```

2. You will be prompted to:
- Sign up or log in to access the dashboard.
- Create new blog posts, view existing posts, and add comments.

3. [Walkthrough Video](insert_your_video_link_here)

## Features

- User Authentication: Secure user login and signup.
- Create Posts: Users can create new blog posts with titles and content.
- Comment Functionality: Users can leave comments on blog posts.
- Dashboard: Users can manage their posts from a dedicated dashboard.

## Technologies

- Node.js: Backend framework used to build the application.
- Express.js: Web framework for building APIs and web applications.
- PostgreSQL: Database for storing blog and user data.
- Sequelize: ORM for interacting with the PostgreSQL database.
- Express-Handlebars: Template engine for rendering views.

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve functionality or fix bugs.

## Tests

This project currently does not include automated tests, but you can manually test the functionality by interacting with the application.

## Questions

If you have any questions, feel free to reach out:
- GitHub: [wilsacker](https://github.com/wilsacker)
- Email: williamsuttona@gmail.com

## Sources

This project was completed with the help of the following resources:

- [ChatGPT](https://chat.openai.com) - Used for guidance and assistance in building and troubleshooting parts of the application.
- [Node.js Documentation](https://nodejs.org/en/docs/) - For understanding the setup and use of Node.js.
- [MDN Web Docs](https://developer.mozilla.org/) - For information on JavaScript functions and web development.
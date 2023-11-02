# Web Theater

## Overview

Welcome to the Web Theater, an advanced platform designed to offer an immersive streaming experience akin to industry-leading services such as Netflix, Amazon Prime, and Disney+. This project, developed using Next.js, Tailwind CSS, Prisma, MySQL, and NextAuth, focuses on delivering high-quality user authentication, interactive user interfaces, and robust database management for a seamless entertainment experience.

## Features

- **Sophisticated User Authentication:** Secure user authentication and authorization facilitated by NextAuth, ensuring a reliable login experience.
- **Responsive and Dynamic UI:** A dynamic user interface crafted with Next.js and Tailwind CSS, enabling smooth and responsive interactions.
- **Robust Database Management:** Utilizing Prisma and MySQL for efficient data management and organization, supporting a diverse collection of movies for a rich user experience.
- **Immersive Streaming Experience:** Offering an immersive streaming environment inspired by leading entertainment platforms.

## Technologies Utilized

- **Next.js**: A React-based framework enabling efficient server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework that assists in creating custom and responsive designs.
- **Prisma**: A modern database toolkit allowing flexible data access and management.
- **MySQL**: An open-source relational database supporting scalable solutions.
- **NextAuth**: An authentication library specifically designed for Next.js projects.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/DanielPenalozaB/web-theater.git
    ```

2. **Installation:**

    ```bash
    cd web-theater
    # Install dependencies
    npm install
    ```

3. **Database Configuration:**

    - Configure your MySQL database settings in the Prisma schema file.
    - Execute Prisma migrations to initialize the database.

    ```bash
    npx prisma migrate dev
    ```

4. **Start the Development Server:**

    ```bash
    npm run dev
    ```

5. **View the Application:**

    Access the application by visiting `http://localhost:3000` in your browser.

## Contribution

Contributions, feedback, and suggestions are appreciated. Please feel free to open issues or submit pull requests for enhancements or fixes.

## License

This project is licensed under the MIT License. Please refer to the [LICENSE](LICENSE) file for details.

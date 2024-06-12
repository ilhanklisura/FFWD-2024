# FENMS 035 - Foundations of Frontend Web Development

This repository contains projects completed as part of the University course "FENMS 035 - Foundations of Frontend Web Development."

## Project 1: Personal Portfolio Website

### Theme: Personal Portfolio Website

#### Project Overview

The first project is a personal portfolio website designed to showcase an understanding of web development fundamentals. It includes a responsive layout, a navigation bar, various content sections, a contact form, and interactive elements such as animations and modal dialogs.

#### Technologies Used

-  HTML
-  CSS
-  Sass
-  Bootstrap
-  JavaScript

#### Key Features

-  Responsive navigation bar using Bootstrap.
-  Multiple content sections (Home, Portfolio, Contact).
-  Contact form with form validation.
-  Utilization of semantic HTML5 tags.
-  Styling with CSS and Sass, including animations.
-  Implementation of Bootstrap components (cards, carousel, modals).
-  Utilization of JavaScript scroll animations.
-  Responsive design for various devices.

#### Project Structure

```plaintext
├── index.html        # Main content
│   ├── #services     # Page for personal information.
│   ├── #work         # Page for latest work.
│   ├── #resume       # Page for real company work experience.
│   ├── #testimonials # Page for customer experience.
│   ├── #contact      # Contact form page.
├── assets/           # Assets folder.
│   ├── css/          # CSS files.
│   ├── js/           # JavaScript files.
│   ├── images/       # Storage for image files used in the application
```

#### How to Run

1. Clone the repository.
2. Open `index.html` in a web browser.

#### Additional Notes

-  Optimize images for faster loading.
-  Test the website on different browsers.

## Project 2: Student Management System

### Project Overview

This application provides a comprehensive platform for managing student information. It allows administrators to view student lists, add new students, and visualize student data through charts. The design focuses on ease of use and seamless functionality, employing various frontend technologies to enhance user experience.

### Technologies Used

-  HTML
-  CSS
-  JavaScript
-  jQuery
-  AJAX
-  DataTables
-  Highcharts
-  SPApp

### Key Features

-  **Interactive Dashboard**: Provides an overview of student data with dynamic cards and summary information.
-  **Student List with DataTables**: Displays a searchable, sortable table of students.
-  **Add Student Form**: Allows administrators to add new students with validation.
-  **Student Workflow Visualization**: Uses Highcharts to visualize student data and workflows.
-  **AJAX Form Submission**: Adds students to the system without reloading the page.
-  **LocalStorage Integration**: Saves and retrieves student data using localStorage.
-  **Responsive Design**: Ensures compatibility across different devices and screen sizes.

### Project Structure

```plaintext
project-2/
├── index.html               # Main entry point of the application
├── assets/
│   ├── css/
│   │   ├── sb-admin-2.min.css
│   │   └── spapp.css
│   ├── img/
│   │   ├── undraw_profile.svg
│   │   ├── undraw_profile_1.svg
│   │   ├── undraw_profile_2.svg
│   │   ├── undraw_profile_3.svg
│   │   └── undraw_rocket.svg
│   └── js/
│       ├── custom.js
│       ├── jquery.spapp.js
│       ├── jquery.spapp.min.js
│       └── sb-admin-2.min.js
├── data/
│   ├── students.json
│   └── users.json
├── services/
│   ├── student-service.js
│   └── user-service.js
├── tpl/
│   ├── dashboard.html
│   ├── students.html
│   ├── student_add.html
│   └── student_workflow.html
├── utils/
│   ├── constants.js
│   ├── rest-client.js
│   └── utils.js
├── vendor/
│   ├── bootstrap/
│   ├── fontawesome-free/
│   └── jquery/
└── login.html
```

### How to Run

1. Clone the repository.
2. Open `index.html` in a web browser.

### Additional Notes

-  Regularly check for console errors.
-  Thoroughly test interactive features.

## Project 3: Main Portfolio Website

### Theme: Ilhan Klisura

#### Project Overview

The Main Portfolio Website showcases the skills and projects of Ilhan Klisura, providing an interactive and professional platform to present work experience, skills, and projects. This project focuses on building a responsive and modern single-page application (SPA) using ReactJS and Material UI.

#### Technologies Used

- **ReactJS**: For building the user interface.
- **Material UI**: To style the application components and ensure a responsive, mobile-friendly design.
- **React Router**: For seamless navigation within the single-page application without page reloads.
- **LocalStorage**: To persist user data across sessions.

#### Key Features

- **Responsive Design**: Ensures the application provides a seamless experience across devices.
- **Dynamic Content**: Features dynamically loaded content such as posts, projects, and contact information.
- **Reusable Components**: Utilizes reusable components for consistency and efficiency.
- **Form Validation**: Implements form validation for the contact form.
- **Google Maps Integration**: Displays the location on the contact page using Google Maps.
- **Interactive Modals**: Uses modals for feedback and additional information.

#### Project Structure

```plaintext
src/
  ├── assets/                      # Assets folder for images and other static files
  ├── components/                  # Reusable UI components
  │   ├── CustomButton.js          # Custom button component
  │   ├── CustomCard.js            # Custom card component
  │   ├── CustomTypography.js      # Custom typography component
  │   ├── SkillsCard.js            # Custom skills component
  │   ├── StarterCard.js           # Custom starter page component
  │   ├── TestimonialsCard.js      # Custom testimonials component
  │   ├── Footer.js                # Footer component
  │   ├── Navbar.js                # Navigation bar
  ├── pages/                       # React components for each page
  │   ├── About.js                 # About page
  │   ├── Contact.js               # Contact page
  │   ├── Home.js                  # Home page
  │   ├── Portfolio.js             # Portfolio page
  │   ├── Posts.js                 # Posts page
  ├── App.js                       # Main React application component
  ├── index.js                     # Entry point for React application
  ├── theme.js                     # Theme configuration for Material UI
public/
  ├── index.html                   # HTML template
  ├── favicon.ico                  # Favicon
```

#### How to Run

```
git clone https://github.com/ilhanklisura/FFWD-2024.git
cd health-wellness-tracker
npm install
npm start
```

#### Additional Notes

-  Deploy the SPA using platforms like Netlify, Vercel, or GitHub Pages.
-  Conduct thorough testing for functionality and responsiveness.

Feel free to explore each project's respective folder for more details and live demos. Contributions and feedback are welcome!

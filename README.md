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

## Project 2: Recipe Finder Application

### Theme: Hana's Cousine

#### Project Overview

This application aims to enhance the online culinary experience by providing an easy-to-use platform where users can search for recipes, view high-quality images, and interact with dynamic content. The design focuses on user engagement and seamless functionality through various frontend technologies.

#### Technologies Used

-  HTML
-  CSS
-  JavaScript
-  jQuery
-  AJAX
-  External APIs

#### Key Features

- **Interactive Image Gallery**: Users can view and interact with high-quality images of recipes, clicking through to see details.
- **Content Toggling**: Toggle visibility of detailed content to streamline user experience.
- **Theme Switcher**: Users can switch between color schemes and adjust font sizes for personalized viewing.
- **Smooth Scrolling**: Enhances navigation through long lists or pages.
- **Accordion Menu**: For a structured display of categories or sections.
- **Form Auto-Save**: Protects user input by saving data as it is entered.
- **Advanced Form Validation with Live Feedback**: Ensures the validity of user inputs before submission.
- **Data-Driven Content Loading**: Dynamically loads recipe data using JSON and XML via AJAX.
- **AJAX Form Submission**: Provides seamless form submission experience without reloading the page.
- **External API Integration**: Incorporates data from external sources, equipped with error handling.
- **Notifications**: Utilizes toast messages to inform users of actions, changes, or errors.

#### Project Structure

```plaintext
├── index.html        # Main entry point of the application
├── css/              # Directory for CSS stylesheets
│   ├── style.css     # Main stylesheet for the application
├── js/               # JavaScript files
│   ├── main.js       # Main JavaScript functionality
│   ├── jquery.min.js # jQuery library
├── tpl/              # Templates for spapp pages
│   ├── home.html     # Home page template
│   ├── search.html   # Search page template
│   ├── favorites.html# Favorites page template
│   ├── details.html  # Recipe details page template
│   ├── about.html    # About Us page template
├── images/           # Storage for image files used in the application
```

#### How to Run

1. Clone the repository.
2. Open `index.html` in a web browser.

#### Additional Notes

-  Regularly check for console errors.
-  Thoroughly test interactive features.

## Project 3: Health and Wellness Tracker

### Theme: VitaTrack

#### Project Overview

The Health and Wellness Tracker provides a user-friendly platform for individuals looking to improve their health and well-being. By allowing users to log daily activities and monitor their progress, this tool aims to motivate users towards healthier lifestyle choices through data visualization and reminders.

#### Technologies Used

- **ReactJS**: For building the user interface.
- **Material UI**: To style the application components and ensure a responsive, mobile-friendly design.
- **React Router**: For seamless navigation within the single-page application without page reloads.
- **Chart.js**: For generating interactive charts to visualize data.

#### Key Features

- **Daily Logs**: Users can log their daily meals, workout sessions, and sleep hours, providing a comprehensive overview of their health routines.
- **Progress Reports**: The application will visualize progress with graphs and statistics, making it easy for users to understand their health trends over time.
- **Custom Reminders**: Users can set custom reminders for health-related tasks such as taking medication, attending health checks, or scheduling workouts to ensure they stay on track.

#### Project Structure

```plaintext
src/
  ├── components/         # Reusable UI components
  │   ├── Layout.js       # Common layout component
  │   ├── Navbar.js       # Navigation bar
  │   ├── Footer.js       # Footer component
  ├── pages/              # React components for each page
  │   ├── Dashboard.js    # Main dashboard page with charts
  │   ├── Logs.js         # Page for entering daily logs
  │   ├── Reminders.js    # Page to manage reminders
  ├── hooks/              # Custom hooks for shared logic
  ├── app.js              # Main React application component
  ├── index.js            # Entry point for React application
public/
  ├── index.html          # HTML template
  ├── favicon.ico         # Favicon
styles/
  ├── main.css            # Main stylesheet for custom styles
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

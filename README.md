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

-  **Interactive Image Gallery**: Users can view and interact with high-quality images of recipes, clicking through to see details.
-  **Content Toggling**: Toggle visibility of detailed content to streamline user experience.
-  **Theme Switcher**: Users can switch between color schemes and adjust font sizes for personalized viewing.
-  **Smooth Scrolling**: Enhances navigation through long lists or pages.
-  **Accordion Menu**: For a structured display of categories or sections.
-  **Form Auto-Save**: Protects user input by saving data as it is entered.
-  **Advanced Form Validation with Live Feedback**: Ensures the validity of user inputs before submission.
-  **Data-Driven Content Loading**: Dynamically loads recipe data using JSON and XML via AJAX.
-  **AJAX Form Submission**: Provides seamless form submission experience without reloading the page.
-  **External API Integration**: Incorporates data from external sources, equipped with error handling.
-  **Notifications**: Utilizes toast messages to inform users of actions, changes, or errors.

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

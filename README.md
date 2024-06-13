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

## Project: Main Portfolio Website (React.js & Material UI)

### Theme: Personal Portfolio Website (Updated)

#### Project Overview

The Main Portfolio Website showcases the skills and projects of Ilhan Klisura, providing an interactive and professional platform to present work experience, skills, and projects. This project focuses on building a responsive and modern single-page application (SPA) using ReactJS and Material UI.

#### Technologies Used

-  **ReactJS**: For building the user interface.
-  **Material UI**: To style the application components and ensure a responsive, mobile-friendly design.
-  **React Router**: For seamless navigation within the single-page application without page reloads.
-  **LocalStorage**: To persist user data across sessions.

#### Key Features

-  **Responsive Design**: Ensures the application provides a seamless experience across devices.
-  **Dynamic Content**: Features dynamically loaded content such as posts, projects, and contact information.
-  **Reusable Components**: Utilizes reusable components for consistency and efficiency.
-  **Form Validation**: Implements form validation for the contact form.
-  **Google Maps Integration**: Displays the location on the contact page using Google Maps.
-  **Interactive Modals**: Uses modals for feedback and additional information.

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

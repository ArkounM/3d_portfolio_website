# 3D Portfolio Website

A 3D portfolio website built using **React.js** and **Three.js**, showcasing projects with support for **Point Clouds** and **GLTF models**. The website is designed to highlight architectural and software development projects with immersive storytelling and interactive features.

## Features

- **Single Page Design**: The main page features a collection of projects displayed as interactive cards.
- **Dedicated Project Pages**: Each project has its own page with detailed information, images, and videos.
- **3D Visualizations**: Includes support for Point Clouds and 3D models using **react-three-fiber**.
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices.
- **Smooth Animations**: Animated transitions powered by **Framer Motion**.
- **Interactive Elements**: Parallax effects, tilt animations, and scroll-based interactions.
- **Contact Form**: Integrated contact form with **EmailJS** for direct communication.

## Libraries and Dependencies

The project uses the following libraries and tools:

- **React.js**: Frontend framework.
- **Vite**: Build tool for fast development.
- **Three.js**: 3D rendering library.
- **react-three-fiber**: React renderer for Three.js.
- **Framer Motion**: Animation library for smooth transitions.
- **Tailwind CSS**: Utility-first CSS framework.
- **react-parallax-tilt**: For interactive tilt effects.
- **react-router-dom**: For routing and navigation.
- **react-vertical-timeline-component**: For timeline visualizations.
- **EmailJS**: For handling contact form submissions.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/3d_portfolio_website.git
   cd 3d_portfolio_website

2. Environment Variables
Create a .env file in the root directory and add the following variables for EmailJS integration:
  
    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key

Start the development server:

Open the app in your browser at http://localhost:5173.


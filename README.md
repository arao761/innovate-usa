# InnovateUSA Website

## Overview

The InnovateUSA website is a modern, responsive web application designed to showcase the organization's mission, team, and impact. The website includes sections on events, competitions, and educational resources, all presented with a clean, professional design inspired by high standards like those seen on Apple's landing page.

## Features

- **Header**: Includes navigation links for About, Team, Events, Competitions, and Learn & Educate sections. The mobile menu is accessible through a toggle button.
- **Hero Section**: Features a full-screen background image with a central text overlay introducing InnovateUSA.
- **About Section**: Provides an overview of InnovateUSA’s mission and achievements.
- **Team Section**: Highlights the team members with their roles, descriptions, and profile images.
- **Impact Section**: Showcases the impact of InnovateUSA's initiatives, including education, community engagement, and more.
- **Events & Activities Section**: Lists upcoming events and activities.
- **Competitions Section**: Details various competitions and challenges hosted by InnovateUSA.
- **Learn and Education Section**: Explains the American Enterprise System and its pillars.
- **Footer**: Contains social media links and copyright information.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/innovateusa-website.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd innovateusa-website
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm start
    ```

    The application should now be running at `http://localhost:3000`.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and layout.
- **Framer Motion**: For animations and transitions.
- **Font Awesome**: For social media icons (or React Icons for an alternative).

## Adding Social Media Icons

If you wish to add or change social media icons:

1. **Install React Icons** (if not already included):

    ```bash
    npm install react-icons
    ```

2. **Update the social media links** in the `Footer` component as follows:

    ```jsx
    import { FaTiktok, FaInstagram } from 'react-icons/fa';

    <div className="flex justify-center">
        <a href="https://tiktok.com/@innovateusa" className="text-white text-3xl mx-2 hover:text-blue-400">
            <FaTiktok />
        </a>
        <a href="https://instagram.com/innovateusa" className="text-white text-3xl mx-2 hover:text-blue-400">
            <FaInstagram />
        </a>
    </div>
    ```

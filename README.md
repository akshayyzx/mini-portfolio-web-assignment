This project is a responsive mini portfolio website built with ReactJS (frontend) and a simple PHP backend for handling contact form submissions.

It was created as part of a development assignment.

🚀 Features
Frontend (React)

Responsive landing page with hero section

Skills section with 5+ skills and hover effects

Projects section (data fetched from local JSON, with search/filter)

Contact form with client-side validation

Modern UI (Google Fonts, gradients, box-shadows, smooth animations)

Backend (PHP)

/messages.php accepts POST data (name, email, message)

Saves form submissions to a .txt file or returns them as JSON

Simple, functional, no database required

📂 Project Structure
portfolio-frontend/   # React project
portfolio-backend/    # PHP API (messages.php)

⚡ How to Run Locally
1. Clone the repository
git clone https://github.com/your-username/mini-portfolio-web-assignment.git
cd portfolio-assignment

2. Run the Frontend (React)
cd portfolio-frontend
npm install     # install dependencies
npm run dev     # start development server


Your React app will be available at:
👉 http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

3. Run the Backend (PHP)
cd portfolio-backend
php -S localhost:8000


The PHP API will be available at:
👉 http://localhost:8000/messages.php

4. Connecting Frontend & Backend

In your React Contact component, update the API URL to point to your PHP backend:

const response = await fetch("http://localhost:8000/messages.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

📥 Form Submission Flow

User fills out the contact form in React frontend.

Data is validated client-side.

On submit, frontend sends a POST request to messages.php.

PHP backend saves the submission into messages.txt and returns JSON response.

Frontend shows success or error message.

🛠️ Tech Stack

Frontend: ReactJS, TypeScript, TailwindCSS / Shadcn UI

Backend: PHP 8+

Data: JSON file for projects

👨‍💻 Developer

Created by [Your Name] as part of an assignment project.

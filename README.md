VeriJob

VeriJob is a web-based platform that detects fake job postings and analyzes resumes for better alignment with job requirements using machine learning.

🔹 Features

Fake Job Detection – Identify suspicious or fraudulent job postings.

Resume Analysis – Evaluate how well a resume matches a job description and get skill gap suggestions.

Responsive Design – Works seamlessly on desktop and mobile browsers.

Real-Time Feedback – Instant results from ML-powered predictions.

🛠 Tech Stack

Frontend: React, TypeScript, Vite

Backend: Node.js, Express, TypeScript

Machine Learning: Text classification & similarity analysis

Other: HTML5, CSS3, JavaScript

⚡ Installation
1. Clone the repository

Copy code

Bash

git clone https://github.com/Abinaya959/VeriJob.git

cd VeriJob

2. Frontend setup

Copy code

Bash

cd client

npm install

npm run dev

3. Backend setup
Copy code

Bash

cd ../server

npm install

npm run dev   # or node index.ts


5. Environment Variables
Frontend (client/.env)

Copy code

REACT_APP_API_URL=http://localhost:5000

Backend (server/.env)

Copy code

PORT=5000

UPLOAD_FOLDER=uploads

📁 Folder Structure
Copy code

VeriJob/
├── client/        # React frontend

│   ├── src/

│   └── package.json

├── server/        # Node.js backend

│   ├── index.ts

│   └── package.json

├── .gitignore

└── README.md

💡 Usage

Start both frontend and backend servers.

Open your browser at http://localhost:5000.

Paste a job description to check for fake jobs.

Upload a resume to see skill matches and improvement suggestions.

🤝 Contributing

Fork the repository

Create a feature branch:

Copy code

Bash

git checkout -b feature-name

Commit your changes:

Copy code

Bash

git commit -m "Add new feature"

Push to your branch and open a pull request

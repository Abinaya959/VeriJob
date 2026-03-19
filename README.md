🚀 VeriJob

VeriJob is a smart web platform designed to make job searching safer and more effective. It helps users detect fake job postings and evaluate how well their resumes match job descriptions using machine learning.

✨ Features
🔍 Fake Job Detection

Identify suspicious or fraudulent job postings using ML-based text analysis.

📄 Resume Analysis

Upload your resume and get insights on:

Skill matching

Relevance to job descriptions

Suggestions for improvement

⚡ Real-Time Feedback

Get instant results powered by machine learning models.

📱 Responsive Design

Seamless experience across desktop and mobile devices.

🛠 Tech Stack

Frontend

React

TypeScript

Vite

Backend

Node.js

Express

TypeScript

Machine Learning

Text Classification

Similarity Analysis

Other

HTML5

CSS3

JavaScript

⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/Abinaya959/VeriJob.git
cd VeriJob
2️⃣ Frontend Setup
cd client
npm install
npm run dev
3️⃣ Backend Setup
cd ../server
npm install
npm run dev   # or: node index.ts
🔑 Environment Variables
Frontend (client/.env)
REACT_APP_API_URL=http://localhost:5000
Backend (server/.env)
PORT=5000
UPLOAD_FOLDER=uploads
📁 Project Structure
VeriJob/
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Node.js backend
│   ├── index.ts
│   └── package.json
│
├── .gitignore
└── README.md
💡 How to Use

Start both frontend and backend servers

Open your browser at:

http://localhost:5000

Paste a job description to detect fake jobs

Upload your resume for analysis and suggestions

🤝 Contributing

Contributions are welcome!

# Fork the repository

# Create a new branch
git checkout -b feature-name

# Commit changes
git commit -m "Add new feature"

# Push to GitHub
git push origin feature-name

Then open a Pull Request 🚀

🧑‍💻 Author

Abinaya

⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

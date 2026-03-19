<h1 align="center">🚀 VeriJob</h1>

<p align="center">
  <b>Smart Job Verification & Resume Analysis Platform</b>
</p>

<p align="center">
  Detect fake job postings • Analyze resumes • Improve job success rate
</p>

<p align="center">
  <a href="https://github.com/Abinaya959/VeriJob">
    <img src="https://img.shields.io/github/stars/Abinaya959/VeriJob?style=for-the-badge" />
  </a>
  <a href="https://github.com/Abinaya959/VeriJob/network">
    <img src="https://img.shields.io/github/forks/Abinaya959/VeriJob?style=for-the-badge" />
  </a>
  <a href="https://github.com/Abinaya959/VeriJob/issues">
    <img src="https://img.shields.io/github/issues/Abinaya959/VeriJob?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <a href="#features"><b>Features</b></a> •
  <a href="#tech-stack"><b>Tech Stack</b></a> •
  <a href="#installation-and-setup"><b>Setup</b></a> •
  <a href="#usage"><b>Usage</b></a>
</p>

---

## 💡 Overview

VeriJob is an intelligent web application that helps users identify fraudulent job postings and evaluate how well their resumes match job descriptions. It uses machine learning techniques to provide real-time insights and actionable suggestions, making the job search process safer and more effective.

---

## ✨ Features

### 🔍 Fake Job Detection  
Detects suspicious or fraudulent job postings using machine learning-based text classification.

### 📄 Resume Analysis  
Analyzes resumes against job descriptions to:
- Measure skill compatibility  
- Highlight missing skills  
- Provide improvement suggestions  

### ⚡ Real-Time Feedback  
Instant analysis results powered by ML models.

### 📱 Responsive Design  
Fully responsive interface for both desktop and mobile users.

---

## 🛠 Tech Stack

**Frontend**
- React  
- TypeScript  
- Vite  

**Backend**
- Node.js  
- Express  
- TypeScript  

**Machine Learning**
- Text Classification  
- Similarity Analysis  

**Other**
- HTML5  
- CSS3  
- JavaScript  

---

## ⚙️ Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Abinaya959/VeriJob.git
cd VeriJob

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev

### 3. Backend Setup
```bash
cd ../server
npm install
npm run dev

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
🚀 Usage

Start both frontend and backend servers

Open your browser and go to:
http://localhost:5000

Paste a job description to detect fake job postings

Upload a resume to analyze skill matching and get suggestions

🤝 Contributing

Fork the repository

Create a new branch

git checkout -b feature-name

Commit your changes

git commit -m "Add new feature"

Push to your branch

git push origin feature-name

Open a Pull Request

🧑‍💻 Author

Abinaya

⭐ Support

If you found this project useful, consider giving it a star on GitHub.

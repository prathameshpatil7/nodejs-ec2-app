Here’s a beautiful and professional `README.md` for your CI/CD full-stack deployment project:  

# 🚀 Full-Stack Application Deployment with CI/CD

This project demonstrates the end-to-end deployment of a **full-stack application** (React.js frontend + Node.js backend) using **Docker**, **GitHub Actions**, and **AWS EC2**. It ensures consistency, scalability, and automation by leveraging modern DevOps practices.  

![image](https://github.com/user-attachments/assets/419e06eb-8d8c-4278-b8ad-cb111b4a9f4a)


---

## 🌟 Features

- **CI/CD Pipeline**: Automated builds, testing, and deployment using GitHub Actions.  
- **Dockerized Applications**: Both React.js frontend and Node.js backend are containerized for consistent environments.  
- **AWS Deployment**: Hosted the full-stack application on AWS EC2 with high scalability.  
- **Nginx Integration**: Used Nginx to serve React static files and manage reverse proxy for the backend.  
- **Database Management**: Node.js backend seamlessly communicates with a MongoDB database.

---

## 🛠️ Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB  
- **Containerization**: Docker  
- **CI/CD**: GitHub Actions  
- **Hosting**: AWS EC2  
- **Web Server**: Nginx  

---

## 📜 Architecture Overview

Here’s how the architecture is structured:  

![image](https://github.com/user-attachments/assets/3c2fbea7-2783-48ad-87d1-19c482ae1fad)

1. **Frontend (React.js)**: Built using React and served as static files through Nginx.  
2. **Backend (Node.js)**: Runs on Express.js and communicates with the MongoDB database.  
3. **CI/CD Pipeline**: Automated with GitHub Actions to build, push Docker images, and deploy to AWS.  
4. **AWS EC2**: Both frontend and backend containers are hosted on AWS EC2 instances.

---

## 🖥️ Project Setup

### Prerequisites
- Node.js & npm  
- Docker installed on your local machine  
- AWS account with EC2 access  
- MongoDB instance  

### Steps to Run Locally
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Build Docker Images**  
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**  
   - Frontend: `http://localhost:80`  
   - Backend API: `http://localhost:9000`  

---

## 🤖 CI/CD Workflow

The CI/CD pipeline is powered by **GitHub Actions**:
1. **Trigger**: On every push to the main branch.  
2. **Build**: Docker images for both frontend and backend are built.  
3. **Push**: Docker images are pushed to Docker Hub.  
4. **Deploy**: The updated containers are deployed to AWS EC2.

---

## 📷 Screenshots

### 1. GitHub Actions Workflow  
![image](https://github.com/user-attachments/assets/0606d108-86df-4488-8cde-665e5d81ebac)


### 2. Deployed Application on AWS  
![image](https://github.com/user-attachments/assets/85a7c573-e7ce-4199-810d-f36aaa854e35)
 

---

## 📩 Contact  

Feel free to reach out for questions or collaborations:  
**Prathamesh Rajendra Patil**  
- [GitHub](https://github.com/prathameshpatil7/nodejs-ec2-app)  
- [LinkedIn](https://www.linkedin.com/in/patilprathamesh6)  

---

⭐ If you like this project, give it a star!

# School Management Website

A responsive School Management Website developed using HTML, CSS, and JavaScript.

## Technologies

- HTML5
- CSS3
- JavaScript
- Docker
- Jenkins
- Nginx
- GitHub
- AWS EC2

## Features

- Responsive Design
- About School
- Courses
- Faculty
- Admissions
- Contact Page
- Interactive JavaScript

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Nithu-30/School-Management-Website-.git
```

Open:

```text
index.html
```

in your browser.

---

## Docker

Build image:

```bash
docker build -t school-website:v1 .
```

Run container:

```bash
docker run -d -p 80:80 --name school-website school-website:v1
```

Visit:

```
http://localhost
```

---

## Jenkins Pipeline

The repository includes a Jenkinsfile for automated deployment.

Pipeline Stages

- Checkout Source Code
- Build Docker Image
- Remove Existing Container
- Deploy New Container

---

## Author

Nithya Sri

DevOps Portfolio Project

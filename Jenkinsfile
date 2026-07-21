pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t school-website:v1 .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh '''
                docker stop school-website || true
                docker rm school-website || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name school-website \
                -p 8081:80 \
                school-website:v1
                '''
            }
        }
    }
}

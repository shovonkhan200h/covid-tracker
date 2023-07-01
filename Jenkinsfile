pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/shovonkhan200h/covid-tracker.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t bayanaltaleb/group-project:2.0 .' 
            }
        }
        
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh 'docker push bayanaltaleb/group-project:2.0' 
                }
            }
        }
        
        stage('Deploy - port 3000') {
            steps {
                sh 'docker run -d -p 3000:80 bayanaltaleb/group-project:2.0'
            }
        }
    }
}

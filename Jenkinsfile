pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo $PWD
                sh build.sh
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
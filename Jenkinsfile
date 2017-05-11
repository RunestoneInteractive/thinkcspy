pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                withCredentials([string(credentialsId: 'webfactiondbpass', variable: 'DBPASS')]) {
                    echo 'Building..'
                    sh './build.sh'
                }
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

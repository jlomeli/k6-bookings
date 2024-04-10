pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                sh '/usr/local/bin/k6 run tests/script.js'
            }
        }
    }
}

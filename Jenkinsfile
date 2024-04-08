pipeline {
    agent {
        docker { image 'node:20.11.1-alpine3.19', args '-u root' }
    }
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'chmod +x setup_k6.sh'
                sh './setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh 'k6 run tests/script.js'
            }
        }
    }
}

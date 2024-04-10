pipeline {
    agent any
    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
        K6_CLOUD_PROJECT_ID=credentials("K6_CLOUD_PROJECT_ID")
    }
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 load tests'
                sh 'K6_CLOUD_TOKEN=${K6_API_TOKEN} K6_CLOUD_PROJECT_ID=${K6_CLOUD_PROJECT_ID} /usr/local/bin/k6 run -o cloud tests/script.js'
                echo 'Completed Running K6 load tests'
            }
        }
    }
}
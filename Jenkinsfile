pipeline {

    agent {
        label 'Agent'
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Srishti620/My_Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo rm -rf /var/www/Srishti-portfolio/*
                sudo cp -r dist/* /var/www/Srishti-portfolio/
                sudo systemctl reload nginx
                '''
            }
        }

    }

}

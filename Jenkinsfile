pipeline {
  agent any

  environment {
    // GANTI dengan repo image kamu di Docker Hub
    IMAGE_NAME = 'yustikanur/pijar-food-mobile'
    // GANTI dengan ID credentials di Jenkins
    REGISTRY_CREDENTIALS = 'dockerhub-credentials'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Build Docker Image') {
      steps {
        bat """docker build -t ${env.IMAGE_NAME}:${env.BUILD_NUMBER} ."""
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.REGISTRY_CREDENTIALS, usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          bat """docker login -u %USER% -p %PASS%"""
          bat """docker push ${env.IMAGE_NAME}:${env.BUILD_NUMBER}"""
          bat """docker tag ${env.IMAGE_NAME}:${env.BUILD_NUMBER} ${env.IMAGE_NAME}:latest"""
          bat """docker push ${env.IMAGE_NAME}:latest"""
          bat """docker logout"""
        }
      }
    }
  }

  post {
    success {
      echo "✅ Build & Push Berhasil: ${IMAGE_NAME}:${BUILD_NUMBER}"
    }
    failure {
      echo "❌ Build Gagal"
    }
  }
}

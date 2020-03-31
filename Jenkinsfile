pipeline {
  environment {
    dockerRegistry = "jimenezdaniel87/docker-nodejs"
    dockerRegistryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  tools { nodejs "nodelts" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/depixelado/recipeapp.git'
      }
    }
    stage('Install dependencies') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build dockerRegistry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Upload Image') {
      steps{
        script {
          docker.withRegistry( '', dockerRegistryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
      }
    }
  }
}
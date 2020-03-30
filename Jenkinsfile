pipeline {
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
  }
}
pipeline {
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/depixelado/recipeapp.git'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('NPM version') {
      steps {
        sh 'npm -v'
      }
    }
  }
}
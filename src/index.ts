import '../style.scss'

/// We need to change import a bit
import * as angular from 'angular'
import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])
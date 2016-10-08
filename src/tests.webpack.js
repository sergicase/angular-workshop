//2/ We need to import angular and mocks
import 'angular'
import 'angular-mocks/angular-mocks'

//2/ There we import all *.spec* files
var testsContext = require.context('.', true, /.spec$/)
testsContext.keys().forEach(testsContext)

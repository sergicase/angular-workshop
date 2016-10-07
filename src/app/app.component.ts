import IComponentOptions = angular.IComponentOptions

//4/ App component is just a wrapper for products component now
export const AppComponent: IComponentOptions = {
  controller: class {},
  template: `<cars></cars>`,
}

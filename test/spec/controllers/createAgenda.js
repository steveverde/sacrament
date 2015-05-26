'use strict';

describe('Controller: CreateAgendaCtrl', function () {

  // load the controller's module
  beforeEach(module('sacramentApp'));

  var CreateAgendaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateAgendaCtrl = $controller('CreateAgendaCtrl', {
      $scope: scope
    });
  }));

  it('should add stakeBusiness to the scope and initialize it to false', function () {
    expect(scope.stakeBusiness).toBe(false);
  });
});

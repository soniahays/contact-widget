angular.module('lightspeedSonia', [
        'ngRoute',
        'xeditable',
        'lightspeedSonia.controllers'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/index.html', {
                controller: 'ListCtrl',
                templateUrl: '/list.html'
            });

        $locationProvider.html5Mode(true);
    })
    .run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
        editableOptions.theme = 'default';
        editableThemes['default'].submitTpl = '<button type="submit" style="float:right;"><i class="fa fa-check"></i></button>';
    }]);

angular.module('lightspeedSonia.controllers', []);



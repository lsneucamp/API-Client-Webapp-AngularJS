angular.module('app.common.error', [
    'ui.router'
])

        .config(function config($stateProvider) {
            $stateProvider.state('not-found', {
                //url:'404',
                views: {
                    "main": {
                        controller: 'ErrorCtrl',
                        templateUrl: 'common/errors/not-found.tpl.html'
                    }
                },
                data: {pageTitle: 'Page Not Found'}
            }).state('forbidden', {
                //url:'403',
                views: {
                    "main": {
                        controller: 'ErrorCtrl',
                        templateUrl: 'common/errors/forbidden.tpl.html'
                    }
                },
                data: {pageTitle: 'Forbidden'}
            }).state('service-not-available', {
                //url:'403',
                views: {
                    "main": {
                        controller: 'ErrorCtrl',
                        templateUrl: 'common/errors/service-not-available.tpl.html'
                    }
                },
                data: {pageTitle: 'Service not available'}
            });
        })
        .controller('ErrorCtrl', function ($scope) {
        });


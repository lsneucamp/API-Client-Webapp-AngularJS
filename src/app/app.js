angular.module('app', [
    'templates-app',
    'templates-common',
    'app.home',
    'app.logistica',
    'app.common.config',
    'app.common.error',
    'app.common.utils',
    'ui.router'
])

        .config(['$urlRouterProvider',
            function myAppConfig($urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');

            }])
        .run(function run($rootScope, $http, api) {
            $rootScope.api = api;
            $http.defaults.headers.post["Content-Type"] = "application/json";
            
        }).controller('AppCtrl',
        function AppCtrl($scope, $rootScope, $state, $q, $log, $timeout, errors) {
            //
            // INIT MAIN AppCtrl configuration
            //
            $scope.isLoading = false;

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                // hide loading
                $timeout(function () {
                    $scope.isLoading = false;
                }, 200);

            });

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                // show loading...
                $scope.isLoading = true;

            });

            $rootScope.$on('$pageTitleUpdate', function (event, title) {
                if (title) {
                    $scope.pageTitle = title + "| Logistica Webapp";
                }
            });

        })

        ;


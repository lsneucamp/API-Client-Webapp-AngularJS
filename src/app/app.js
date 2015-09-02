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

        .config(['$urlRouterProvider', '$httpProvider',
            function myAppConfig($urlRouterProvider, $httpProvider) {
                $urlRouterProvider.otherwise('/home');

                $httpProvider.interceptors.push(['$rootScope', '$q', function ($rootScope, $q) {

                        return {
                            // Every Response check if any errors exists
                            // parse the Header Status 401/403 and call event if necessary.
                            'responseError': function (rejection) {
                                console.debug("interceptors->responseError 2", rejection);
                                if (rejection.status === 0) {
                                    $rootScope.callServiceNotAvailableErr();
                                } else if (rejection.status === 404) {
                                    $rootScope.callNotFoundErr();

                                } else if (rejection.status === 403) {
                                    $rootScope.callForbiddenErr();
                                }
                                return $q.reject(rejection);

                            }
                        };
                    }
                ]);


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

            $rootScope.callServiceNotAvailableErr = function () {
                $state.go('service-not-available');
            };

            $rootScope.callNotFoundErr = function () {
                $state.go('not-found');
            };
            $rootScope.callForbiddenErr = function () {
                $state.go('forbidden');
            };


        })

        ;


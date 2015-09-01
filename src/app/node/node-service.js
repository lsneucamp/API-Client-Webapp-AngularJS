angular.module('app.node.service', [])
        .service('NodeService',
                ['$http', '$rootScope', 'errors', '$q', '$log',
                    function ($http, $rootScope, errors, $q, $log) {
                        this.findOne = function (id) {
                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/nodes/' + id,
                                cache: true
                            });
                        };

                        this.findAll = function () {
                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/nodes/',
                                cache: true
                            });
                        };

                        this.findAllResolver = function () {
                            var def = $q.defer();

                            

                            var responseHandler = function (response) {
                                // verify HTTP status
                                if (response.status === 200) {
                                    def.resolve(response.data);
                                } else {
                                    def.reject(response.status);
                                }
                            };

                            this.findAll().then(responseHandler, responseHandler/*error*/);

                            return def.promise;
                        };

                    }
                ]);


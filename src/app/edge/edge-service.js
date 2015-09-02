angular.module('app.edge.service', [])
        .service('EdgeService',
                ['$http', '$rootScope', '$location', function ($http, $rootScope, $location) {
                        this.findOne = function (id) {
                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/' + id
                            });
                        };

                        this.findAll = function () {
                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/'
                            });
                        };

                        this.findPath = function (paths, sourceNodeId, destNodeId, autonomy, fuelCost) {
                            var params = {};
                            switch (paths) {
                                case "best":
                                    params.paths = "best";
                                    break;
                                case "worst":
                                    params.paths = "worst";
                                    break;
                                default:
                                    params.paths = "all";
                                    break;
                            }
                            params.sourceNodeId = sourceNodeId;
                            params.destNodeId = destNodeId;

                            if (autonomy && autonomy > 0) {
                                params.autonomy = autonomy;
                            }
                            if (fuelCost && fuelCost > 0) {
                                params.fuelCost = fuelCost;
                            }

                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/',
                                cache: true,
                                params: params
                            });
                        };

                        this.findAllPaths = function (sourceNodeId, destNodeId, autonomy, fuelCost) {
                            var params = {};
                            params.paths = "all";
                            params.sourceNodeId = sourceNodeId;
                            params.destNodeId = destNodeId;

                            if (autonomy && autonomy > 0) {
                                params.autonomy = autonomy;
                            }
                            if (fuelCost && fuelCost > 0) {
                                params.fuelCost = fuelCost;
                            }

                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/',
                                cache: true,
                                params: params
                            });
                        };

                        this.findBestPaths = function (sourceNodeId, destNodeId, autonomy, fuelCost) {
                            var params = {};
                            params.paths = "best";
                            params.sourceNodeId = sourceNodeId;
                            params.destNodeId = destNodeId;

                            if (autonomy && autonomy > 0) {
                                params.autonomy = autonomy;
                            }
                            if (fuelCost && fuelCost > 0) {
                                params.fuelCost = fuelCost;
                            }

                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/',
                                cache: true,
                                params: params
                            });
                        };

                        this.findWorstPaths = function (sourceNodeId, destNodeId, autonomy, fuelCost) {
                            var params = {};
                            params.paths = "worst";
                            params.sourceNodeId = sourceNodeId;
                            params.destNodeId = destNodeId;

                            if (autonomy && autonomy > 0) {
                                params.autonomy = autonomy;
                            }
                            if (fuelCost && fuelCost > 0) {
                                params.fuelCost = fuelCost;
                            }

                            return $http({
                                method: 'get',
                                url: $rootScope.api.url + '/edges/',
                                cache: true,
                                params: params
                            });
                        };


                    }
                ]);


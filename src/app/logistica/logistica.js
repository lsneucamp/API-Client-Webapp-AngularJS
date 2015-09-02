angular.module('app.logistica', [
    'app.edge.service',
    'app.node.service'
])
        .config(function config($stateProvider) {
            $stateProvider.state('logistica', {
                url: '/logistica',
                views: {
                    "main": {
                        controller: 'LogisticaCtrl',
                        templateUrl: 'logistica/logistica.tpl.html'
                    }
                },
                resolve: {
                    nodes: function (NodeService) {
                        return NodeService.findAllResolver();
                    }
                },
                data: {pageTitle: 'Logistica'}
            });
        })

        .controller('LogisticaCtrl', ['$scope', 'nodes', 'EdgeService',
            function LogisticaCtrl($scope, nodes, EdgeService) {
                $scope.nodes = nodes;
                $scope.paths = [];
                $scope.type = "all";
                $scope.onDiscoverPaths = function () {
                    if (validate()) {
                        EdgeService
                                .findPath($scope.type, $scope.sourceNode._id, $scope.destNode._id, $scope.autonomy, $scope.fuelCost)
                                .then(function (response) {
                                    if (response.status === 200) {
                                        setPaths(response.data);
                                    } else {
                                        setPaths([]);
                                    }
                                }, function (err) {
                                    setPaths([]);
                                });
                    }
                };

                var setPaths = function (paths) {
                    $scope.paths = paths;
                };

                var validate = function () {
                    return $scope.pathForm.$valid;
                };


            }]);

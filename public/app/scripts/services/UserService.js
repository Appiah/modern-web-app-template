/**
 * Created by gabo on 12/2/13.
 */
'use strict';

angular.module('mainApp')
.factory('UserService',function($resource,$http){
        var service = $resource('/admin/user');

        service.index=function(){
            return $http.get('/admin/user');
        };

        return service;
    });
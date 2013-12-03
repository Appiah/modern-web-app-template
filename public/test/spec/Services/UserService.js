/**
 * Created by gabo on 12/2/13.
 */
'use strict';

describe('Service: UserService',function(){
    beforeEach(module('mainApp'));

    var svc,
        httpBackend,
        mockUser;

    beforeEach(inject(function($httpBackend,UserService){
        svc = UserService;
        httpBackend = $httpBackend;
        mockUser = {id:1,username:"asd",email:"asd"};
    }));

    afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('Should get a list of users',function(){
        var returnData = [mockUser];
        httpBackend.expectGET('/admin/user').respond(returnData);

        var promise,response;
        promise= svc.index();

        promise.success(function(data){ response = data; });
        httpBackend.flush();
        expect(response[0].id).toBe(returnData[0].id);
    });


    it('Shoud create a new user',function(){
        httpBackend.expectPOST('/admin/user').respond(mockUser);
        svc.save();

        httpBackend.flush();
    });

});
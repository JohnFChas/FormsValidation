/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.formInputs = [{
                type: "text",
                id: "name",
                label: "Name",
                model: "John",
                isValid: false
            }, {
                type: "number",
                id: "age",
                label: "Age",
                min: 0,
                model: 0,
                isValid: false
            }, {
                type: "email",
                id: "email",
                label: "E-Mail",
                model: "john@john.john",
                isValid: false
            }];

            $scope.submitForm = function () {
                alert("TODO: Submit form properly");
            }
        }
    ]);
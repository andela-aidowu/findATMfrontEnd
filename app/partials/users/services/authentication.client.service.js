'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;
    // console.log(this);
    var retrievedUser = window.localStorage.getItem('user');
    _this._data = {
      user: JSON.parse(retrievedUser)
    };
    // console.log(window);

		return _this._data;
	}
]);
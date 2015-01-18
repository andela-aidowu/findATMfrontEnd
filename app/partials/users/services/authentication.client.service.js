'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;
    // console.log(this);

    _this._data = {
      user: window.user
    };
    // console.log(window);

		return _this._data;
	}
]);
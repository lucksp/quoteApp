angular.module('quoteApp', [])

angular.module('quoteApp')
	.factory('quoteFactory', [function(){

		var Quotes = function( quote, author, source) {

			this.quote = quote,
			this.author = author,
			this.source = source
		};

		var quoteEntry = new Quotes (
			"Disbelief in magic can force a poor soul into believing in government and business.",
			"Tom Robbins",
			"Even Cowgirls Get the Blues"
		);

		var trueFalse = {
			hideSubmitTab	: true,
			hideListTab		: true,
			hideRandomTab	: true
		};

		return {
			quoteList 	: quoteEntry,
			trueFalse	: trueFalse
		}

	}]);

angular.module('quoteApp')
	.controller('quoteController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

		$scope.quoteList = quoteFactory.quoteList,
		$scope.trueFalse = quoteFactory.trueFalse

		$scope.greeting = 'hello'

	}]);
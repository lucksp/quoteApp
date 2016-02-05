angular.module('quoteApp', [])

angular.module('quoteApp')
	.factory('quoteFactory', [function(){

		var quoteArray = [];
		var Quotes = function( quote, author, source, rating) {

			this.quote = quote,
			this.author = author,
			this.source = source,
			this.rating = rating,
			quoteArray.push(this)
		};

		var quoteEntry = new Quotes (
			"Disbelief in magic can force a poor soul into believing in government and business.",
			"Tom Robbins",
			"Even Cowgirls Get the Blues",
			2
		);
		var quoteEntry = new Quotes (
			"Luck is what happens to you when fate gets tired of waiting.",
			"Gregory David Roberts",
			"Shantaram",
			4
		);
		var quoteEntry = new Quotes (
			"A real diamond is never perfect.",
			"Anthony Doerr",
			"All the Light We Cannot See",
			5
		);
		var quoteEntry = new Quotes (
			"A sense of humor...is superior to any religion so far devised.",
			"Tom Robbins",
			"Jitterbug Perfume",
			5
		);
				var quoteEntry = new Quotes (
			"The bicycle is a curious vehicle. Its passenger is its engine.",
			"John Howard",
			"interview",
			1
		);
		var trueFalse = {
			hideSubmitTab	: true,
			hideListTab		: true,
			hideRandomTab	: true
		};

		return {
			quoteList 	: quoteArray,
			trueFalse	: trueFalse
		}

	}]);

angular.module('quoteApp')
	.controller('quoteController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

		$scope.quoteList = quoteFactory.quoteList,
		$scope.trueFalse = quoteFactory.trueFalse


	}]);
'use strict';

app.controller('CreateAgendaCtrl', function($scope) {
	// TODO: The addInput function doesn't work yet, it still needs to be changed from jQuery to Angular
	/*
	var addInput = function(elementName, elementPlaceholder) {
		var $divElement = $('<li class="input-group ui-state-default" style="padding-bottom: 5px"></li>');
		var $inputElement = $('<input type="text" class="form-control" name="' + elementName + '" placeholder="' + elementPlaceholder + '"/>');
		var $removeButton = $('<span class="input-group-btn"><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button></span>');
		$divElement.append($inputElement).append($removeButton);
		
		$(this).prev().append($divElement);
		$inputElement.focus();
		$removeButton.click(function() {
			$divElement.remove();
		});
	};
	*/
	
	$scope.stakeBusiness = false;
});

var i;

// When the editor is ready, run the title length checker
window.wp.domReady(function() {

	// If the editor has opened a draft check the title length
	checkIfMaximum(jQuery('.editor-post-title__input'))

	var maximum = jQuery('#lptx_maximum').val();
	// The length of the title
	i = jQuery('.editor-post-title__input').val().length;
	// When the user types
	jQuery('.editor-post-title__input').keyup(function(){
		checkIfMaximum(this);
	});
	function checkIfMaximum(elemId){
		var counter = jQuery(elemId).val().length;
		i = jQuery(elemId).val().length;
		// The title is too long
		// Warn the user and disable the publish button
		if(counter > maximum){
			jQuery('#lptx-counter').addClass('lptx-over');
		}
		// The title is the right length
		// Disable our counter warning and enable the publish button
		else{
			jQuery('#lptx-counter').removeClass('lptx-over');
			jQuery('.is-primary')[0].disabled = false;
		}
		jQuery('#lptx-counter').html(counter);
	}

	jQuery('.is-primary').mousedown(function(){
		if(i < maximum){
			//if we're not over the maximum allowed by the plugin, everything is fine. But you could do something here if you wanted.
			return true;
		}else{
			jQuery(this)[0].disabled = true;
			alert(traductionFromWP.alertMessage);
			return false;
		}
	});

})
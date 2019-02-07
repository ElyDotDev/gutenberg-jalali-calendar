var prePublishRemoved = false;

jQuery(document).ready(function() {
	var interval = setInterval(function() {
		var $prePublishElement = $('.gutenberg-jalali-calendar-edit-post-pre-publish-post-schedule').prev().prev();
		if ($prePublishElement.length > 0) {
			prePublishRemoved = true;
			$prePublishElement.css('display', 'none');
		}
	},300);
});

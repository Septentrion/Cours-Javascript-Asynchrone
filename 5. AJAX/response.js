var insertResume = function(req) {
	var resume = document.getElementById('resume');
	var data = req.responseText;

	resume.innerHTML = data;
}
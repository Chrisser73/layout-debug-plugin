console.log('%cLayout Debug Active!', 'color: white; background-color: red; padding: 2px 5px; border-radius: 2px');

var strFoundationGrid = '<div id="rs-foundation" class="grid-container"><div class="grid-x grid-margin-x"> <div class="cell small-1">&nbsp;</div> <div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div><div class="cell small-1">&nbsp;</div></div></div>',
	strBootstrapGrid = '<div id="rs-bootstrap" class="container"> <div class="row"><div class="col-1"><span>&nbsp;</span></div><div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div> <div class="col-1"><span>&nbsp;</span></div></div> </div>',
	addClass = function(elem, classname){
		elem.classList.add(classname);
	},
	// @removeClass: simple remove class
	removeClass = function(elem, classname){
		elem.classList.remove(classname);
	},
	// @classList: adds more classes by array structure
	classList = function (elem, arrClasses, action) {
		for (var z = 0; z < arrClasses.length; z++) {
			if(action || action === undefined){
				addClass(elem, arrClasses[z]);
			}else{
				removeClass(elem, arrClasses[z]);
			}
		}
	},
	// @containsClass: simple contains check class
	containsClass = function(elem, classname){
		if(elem.className.indexOf(classname) !== -1){
			return true;
		} else {
			return false;
		}
	},
	// @toggleClass: toggles class
	toggleClass = function(elem, classname){
		if(containsClass(elem, classname)) {
			removeClass(elem, classname);
		} else {
			addClass(elem, classname);
		}
	},
	$body = document.querySelector('body'),
	toggleLocalStorage = function(strKeyname, strClassToggle){
		var getLocalSotrage = localStorage.getItem(strKeyname);

		if(!getLocalSotrage || getLocalSotrage === '' || getLocalSotrage !== '1'){
			localStorage.setItem(strKeyname, '1');
			toggleClass($body, strClassToggle);
		} else {
			localStorage.setItem(strKeyname, '0');
			toggleClass($body, strClassToggle);
		}
	},
	strCompleteHTML = '';


var toggleButtons = '<div id="overlay-container-toggle"></div><div id="layout-deep-toggle"></div>';
var overlayContainers = toggleButtons + '<div id="overlay-container">';

// Check Framework
if (typeof(window.bootstrap) === "object" || document.getElementsByClassName('col-12').length > 0 || document.getElementsByClassName('col').length > 0){

	// BS?
	strCompleteHTML = overlayContainers + strBootstrapGrid + '</div>';
	console.log('%cFramework: Bootstrap!', 'color: blue; padding: 2px 5px; border-radius: 2px');
} else if(typeof(window.Foundation) === "object"){
	// Foundation?
	strCompleteHTML = overlayContainers + strFoundationGrid + '</div>';
	console.log('%cFramework: Foundation!', 'color: purple; padding: 2px 5px; border-radius: 2px');
} else {
	strCompleteHTML = toggleButtons + '<div id="overlay-container">Framework not found.</div>';
	console.log('%cFramework not found!', 'color: red; padding: 2px 5px; border-radius: 2px');
}

$body.insertAdjacentHTML('afterbegin', strCompleteHTML);

// SET CLASS BY COOKIE
if(localStorage.getItem('rs-hide') === '1'){
	addClass($body, 'rs-hide');
} else {
	removeClass($body, 'rs-hide');
}
if(localStorage.getItem('rs-layout-deep') === '1'){
	addClass($body, 'rs-layout-deep');
} else {
	removeClass($body, 'rs-layout-deep');
}

// Toggle Layout-Debug
if(document.querySelector('#overlay-container-toggle')){
	document.querySelector('#overlay-container-toggle').addEventListener("click", function(){
		toggleLocalStorage('rs-hide', 'rs-hide');
	});

	setTimeout(() => {
		document.querySelector('#overlay-container').style.height = document.documentElement.scrollHeight + "px";
	}, 5000);
}

// Toggle Div-Deep-debug
if(document.querySelector('#layout-deep-toggle')){
	document.querySelector('#layout-deep-toggle').addEventListener("click", function(){
		toggleLocalStorage('rs-layout-deep', 'rs-layout-deep');
	});
}

var khFindStr = "info.gov.hk/gia/general/";
var khReplaceStr = "sc.isd.gov.hk/gb/";
var khReplaceStr2 = "sc1.isd.gov.hk/gb/";

function kanhan(eleID, imgID) {
	if (!isSC()) return;

	if (document.getElementById && document.getElementsByTagName) {
		var ele = document.getElementById(eleID);
		var a = ele.getElementsByTagName("a");
		var img = document.getElementById(imgID);

		img.alt = "ÁcÅéª©";
		for (var i=0; i<a.length; i++) {
			if (a[i].href.toString().indexOf(khFindStr) != -1){
				a[i].href=a[i].href.replace(khReplaceStr, "");
				a[i].href=a[i].href.replace(khReplaceStr2, "");
			}
		}
	} else {
		var a = document.links;
		for (var i=0; i<2; i++) {
			if (a[i].href.toString().indexOf(khFindStr) != -1){
				a[i].href=a[i].href.replace(khReplaceStr, "");
				a[i].href=a[i].href.replace(khReplaceStr2, "");
			}
		}
	}
}

function isSC() {
	if(location.href.toString().indexOf(khReplaceStr) != -1){
		return true;
	} else if(location.href.toString().indexOf(khReplaceStr2) != -1){
		return true;
	}
	return false;
}

function init(e) {
	kanhan("langbar", "lang1");
}


if (window.attachEvent) {
	window.attachEvent('onload',init);
} else if (window.addEventListener) {
	window.addEventListener('load',init,false);
} else {
	window.onload=init;
}
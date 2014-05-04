/******************************************************************
Javascript to add hyperlinks in the press releas on the fly

Version	: 2.0
Author	: irc@isd.gov.hk
Date	: 4 Oct 2007
******************************************************************/

// Zebra the video clip table
$(document).ready(function(){
	$("ul.cliplist li:nth-child(odd)").addClass("evenrow");
});

//Create hyperlink on the fly
$(document).ready(function(){

	//return if the PR is related to fraudulent website
	if ( (document.title.match(/Fraudulent website/i)) ||
		 (document.title.indexOf('´Û¶Bºô¯¸') != -1)
	) return;

	//return if hyperlinks added manually
	if ($("#pressrelease a").is("a")) return;

	//replace hyperlinks if they are composed in full space characters
	var patternArray = new Array(
		"¢¯", "¢°", "¢±", "¢²", "¢³", "¢´", "¢µ", "¢¶", "¢·", "¢¸",
		"¢Ï", "¢Ð", "¢Ñ", "¢Ò", "¢Ó", "¢Ô", "¢Õ", "¢Ö", "¢×", "¢Ù", "¢Ù", "¢Ú",	"¢Û",
		"¢Ü", "¢Ý", "¢Þ", "¢ß", "¢à", "¢á", "¢â", "¢ã", "¢ä", "¢å", "¢æ", "¢ç", "¢è",
		"¢é", "¢ê", "¢ë", "¢ì", "¢í", "¢î", "¢ï", "¢ð", "¢ñ", "¢ò", "¢ó", "¢ô",	"¢õ",
		"¢ö", "¢÷", "¢ø", "¢ù", "¢ú", "¢û", "¢ü", "¢ý", "¢þ", "£@", "£A", "£B", "£C",
		"¡G", "¢I", "¡þ", "¡D", "¡O","¡Ä","¡Ð");

	var charArray = new Array(
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
		"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",	"m",
		"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
		":", "@", "/", ".", ".","_","-");

	//Temp string to test full space characters
	var content = $("#pressrelease p:first").html();
	var tmp = content;
	var str = "";

	for(var i=0; i < patternArray.length; i++) {
		tmp = tmp.replace(new RegExp(patternArray[i], "g"),charArray[i]);
	}

	var Re1 = /[-\w_\.]+@[-\w_\.]*(\.(aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|asia|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nc.tr|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu))+/i;
	var Re2 = /(http(s)*:\/\/)?((www\.)?[-\w_\.]*(\.(aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|asia|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nc.tr|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu))+(\/([-\w_\.\?&;#=%]|<br( \/)*>)*)*)/i;
	var m1 = Re1.exec(tmp);
	var m2 = Re2.exec(tmp);


	while ((m1 != null) || (m2 != null)) {
		if ((m1 != null) && (m2 != null))
			var m = (m1.index<m2.index) ? m1 : m2;
		else
			var m = (m1 != null) ? m1 : m2;

		//clear undefine backreferences
		for (var i=0; i<m.length; i++)
			if (!m[i]) m[i] = "";

		//Tail Shifting
		while (m[0].match(/<br( \/)*>$/i) || m[0].match(/\.$/) || m[0].match(/&nbsp;$/)) {
			m[0] = m[0].replace(/<br( \/)*>$/i, "");
			m[3] = m[3].replace(/<br( \/)*>$/i, "");
			m[0] = m[0].replace(/\.$/, "");
			m[3] = m[3].replace(/\.$/, "");
			m[0] = m[0].replace(/&nbsp;$/, "");
			m[3] = m[3].replace(/&nbsp;$/, "");
		}

		// don't replace if it is a kanhan image
		var r = ( (m[3]) && (m[3].match(/sc\.isd\.gov\.hk/i)) ) ? m[0] : (m==m1) ?
			"<a href='mailto:"+m[0]+"'>"+m[0]+"</a>" :
			"<a href='http"+m[2]+"://"+m[3].replace(/<br( \/)*>/ig,"")+"' target='_blank'>"+m[0]+"</a>" ;

		str += content.substring(0,m.index) + r;
		content = content.substring(m.index+m[0].length, content.length);
		tmp 	= tmp.substring(m.index+m[0].length, tmp.length);

		m1 = Re1.exec(tmp);
		m2 = Re2.exec(tmp);
	}

	str+=content;

	$("#pressrelease p:first").html(str);
});

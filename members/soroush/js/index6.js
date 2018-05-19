// https://www.npmjs.com/package/letterify inlined
function letterify(userOptions) {
	var options = {
		scope: document,
		selector: false,
		segmentClass: 'letterified'
	};

	if (typeof userOptions === "string") {
		options.selector = userOptions;
	} else if (typeof userOptions === 'object') {
		Object.keys(userOptions).forEach(function(key) {
			options[key] = userOptions[key];
		});
	}


	var selected;

	if (!options.selector) {
		return false
	} else {
		selected = document.querySelector(options.selector);
	}

	selected.classList.remove('letterified');

	var elems = options.scope.querySelectorAll(options.selector);

	[].forEach.call(elems, function(el, idx) {

		var split = el.textContent.split('');
		var frag = document.createDocumentFragment();
		split.forEach(function(letter) {
			var span = document.createElement('span');
			span.textContent = letter;
			span.setAttribute('data-letter', letter);
			span.className = options.segmentClass;
      span.style.animationDelay = '0,0,2s,5s,5s';
			frag.appendChild(span);

		});
		el.textContent = null;
		el.appendChild(frag);
	});

	selected.classList.add('letterified');

}

var strings = [
    "Follow me on instagram" , "@soroush_kamalian" ,  "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" , "Follow me on instagram" , "@soroush_kamalian" ,
];

var holder = document.querySelector('h1');

function putText(text, strings){
    
    holder.textContent = text.toUpperCase();
    letterify('h1');
    queueText(strings);
}

var lastQueuedAnim;

function queueText(strings){
    var next = strings.shift();
    if (next) {
      lastQueuedAnim =  setTimeout(putText.bind(null, next, strings), 7000);
    }
}

function go(){
  	if (lastQueuedAnim){
      clearTimeout(lastQueuedAnim);
    }
    var text = strings.slice();
    putText(text.shift(), text);
}
	go();
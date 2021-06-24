function createElement(data) {
	let paragrah = document.createElement('p');
	paragrah.innerHTML = JSON.parse(data).query.pages['21721040'].extract;
	document.body.append(paragrah);
  }
  
  function queryWikipedia(callback) {
	let url =
	'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
	let req = new XMLHttpRequest();
	req.open("GET", url);
	req.onload = function () {
	  callback(req.response);
	};
	req.send();
  }
  
  queryWikipedia(createElement);

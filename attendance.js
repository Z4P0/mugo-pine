window.document.body.onload = function() {
	console.log(attendanceData);

	// add listeners to control elements
	addListener(document.getElementById("league"), "change", updateTable);
	addListener(document.getElementById("year"), "change", updateTable);

	// sort table elements
	var tableHeaders = document.getElementsByTagName("th");
	for (var i = 0; i < tableHeaders.length; i++) {
		addListener(tableHeaders[i], "click", sortTable);
	}

	var table = document.getElementsByTagName("tbody")[0];
	for(year in attendanceData) {
		// console.log(attendanceData[year]);
		for(league in attendanceData[year]) {
			for(team in attendanceData[year][league]) {
				// console.log(attendanceData[year][league][team]);
				var tr = element("tr");
				for(stats in attendanceData[year][league][team]) {
					// console.log(stats);
					tr.appendChild(element("td", attendanceData[year][league][team][stats]));
					// console.log(attendanceData[year][league][team][stats]);
				}
				table.appendChild(tr);
			}
		}
	}

	/*
	for(league in data)
		for(team in league)
			show data
			name
			rank
			stadium
			location
			distance
			time
			attendance
	 */
};

function checkControls() {
	var league = document.getElementById("league");
	var year = document.getElementById("year");
}

function updateTable(e) {
	console.log(e.target.options[e.target.selectedIndex].value);
}
function sortTable(e) {
	console.log("sort by: " +e.target.textContent);
}


var attendanceData = {
	// _2012 : {
	// },
	NASL : {
		Atlanta : {
			team : "Atlanta",
			standing : {
				_2012 : "7",
				_2011 : "-"
			},
			stadium : "Silverbacks Pack",
			location : "Atlanta",
			distance : ".4",
			time : "21",
			attendance : {
				_2012 : "4505",
				_2011 : "----"
			}
		},
		Carolina : {
			team : "Carolina",
			standing : {
				_2012 : "0",
				_2011 : "-"
			},
			stadium : "Wakemed Park",
			location : "Cary, NC",
			distance : "2.2",
			time : "5",
			attendance : {
				_2012 : "3883",
				_2011 : "-"
			}
		},
		Edmonton : {
			team : "Edmonton",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"8",
			stadium : "Clarke Stadium",
			location : "Edmonton",
			distance : "2.9",
			time : "11",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "1492"
		},
		Ft_Lauderdale : {
			team : "Ft. Lauderdale",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"5",
			stadium : "Lockhart Stadium",
			location : "Ft. Lauderdale, FL",
			distance : "7.4",
			time : "13",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "3609"
		},
		Minnesota : {
			team : "Minnesota",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"6",
			stadium : "NSC (Blaine)",
			location : "Minneapolis, MN",
			distance : "17.5",
			time : "23",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "2796"
		},
		Puerto_Rico : {
			team : "Puerto Rico",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"3",
			stadium : "Bayamon, PR",
			location : "Bayamon Soccer Complex",
			distance : ".4",
			time : "2",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "1864"
		},
		San_Antonio : {
			team : "San Antonio",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"1",
			stadium : "Heroes Stadium",
			location : "San Antonio, TX",
			distance : "13.2",
			time : "20",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "9176"
		},
		Tampa_Bay : {
			team : "Tampa Bay",
			standing : {
				_2012 : "0",
				_2011 : "-"
			}"2",
			stadium : "Al Lang at Progress Energy Park",
			location : "St. Petersburg, FL",
			distance : ".7",
			time : "4",
			attendance : {
				_2012 : "0",
				_2011 : "-"
			} "3116"
		}
	},
	USL_Pro : {
		team : {
			team : "name",
			standing : {
				_2012 : "0",
				_2011 : "0"
			},
			stadium : "stadium",
			location : "city",
			distance : "miles",
			time : "minutes",
			attendance : {
				_2012 : "4505",
				_2011 : "0000"
			}
		}
	}
};



function element(_element, _text) {
	var ele;
	// check if _element has classes/IDs attached
	var classes = _element.split(/\W/i);
	if (classes.length > 1) {
		ele = document.createElement(classes[0]);
		var classString = "";
		for (var i = 1; i < classes.length; i++) { classString += classes[i]+" "; }
		console.log(classString);
		// call addClass?
		// addClass();
	}
	else {
		ele = document.createElement(_element);
	}

	// if we have a 2nd parameter
	if (_text !== undefined) {
		if (_element === "img") ele.setAttribute("src", _text);
		else {
			if (_element === "a") ele.setAttribute("href", _text);
			var text = document.createTextNode(_text);
			ele.appendChild(text);
		}
	}
	return ele;
}

/* add event listener */
function addListener( _element, _event_string, _func ) {
	// Chrome, FF, O, Safari
	if( _element.addEventListener ) {
		_element.addEventListener( _event_string, _func, false );
	}
	// IE
	else if( _element.attachEvent ) {
		_element.attachEvent( "on" + _event_string, _func );
	}else {
		// credit to roxik, Masayuki Kido. roxik.com/cat
	}
} // end addListener

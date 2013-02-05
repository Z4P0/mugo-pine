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
	for(var league in attendanceData) {
		for(var team in attendanceData[league]) {
			// console.log(team);
			// console.log(attendanceData[league][team]);
			for(var stats in attendanceData[league][team]) {
				console.log(stats);
				console.log(attendanceData[league][team][stats]);
				// if (stats === "") {}
				// var tr = element("tr");
				// for(stats in attendanceData[year][league][team]) {
					// console.log(stats);
					// tr.appendChild(element("td", attendanceData[year][league][team][stats]));
					// console.log(attendanceData[year][league][team][stats]);
				// }
				// table.appendChild(tr);
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
				_2012 : "4",
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
				_2012 : "8",
				_2011 : "-"
			},
			stadium : "Clarke Stadium",
			location : "Edmonton",
			distance : "2.9",
			time : "11",
			attendance : {
				_2012 : "1492",
				_2011 : "-"
			}
		},
		Ft_Lauderdale : {
			team : "Ft. Lauderdale",
			standing : {
				_2012 : "5",
				_2011 : "-"
			},
			stadium : "Lockhart Stadium",
			location : "Ft. Lauderdale, FL",
			distance : "7.4",
			time : "13",
			attendance : {
				_2012 : "3609",
				_2011 : "-"
			}
		},
		Minnesota : {
			team : "Minnesota",
			standing : {
				_2012 : "6",
				_2011 : "-"
			},
			stadium : "NSC (Blaine)",
			location : "Minneapolis, MN",
			distance : "17.5",
			time : "23",
			attendance : {
				_2012 : "2796",
				_2011 : "-"
			}
		},
		Puerto_Rico : {
			team : "Puerto Rico",
			standing : {
				_2012 : "3",
				_2011 : "-"
			},
			stadium : "Bayamon, PR",
			location : "Bayamon Soccer Complex",
			distance : ".4",
			time : "2",
			attendance : {
				_2012 : "1864",
				_2011 : "-"
			}
		},
		San_Antonio : {
			team : "San Antonio",
			standing : {
				_2012 : "1",
				_2011 : "-"
			},
			stadium : "Heroes Stadium",
			location : "San Antonio, TX",
			distance : "13.2",
			time : "20",
			attendance : {
				_2012 : "9176",
				_2011 : "-"
			}
		},
		Tampa_Bay : {
			team : "Tampa Bay",
			standing : {
				_2012 : "2",
				_2011 : "-"
			},
			stadium : "Al Lang at Progress Energy Park",
			location : "St. Petersburg, FL",
			distance : ".7",
			time : "4",
			attendance : {
				_2012 : "3116",
				_2011 : "-"
			}
		}
	},
	USL_Pro : {
		Antigua : {
			team : "Antigua Barracuda",
			standing : {
				_2012 : "11",
				_2011 : "0"
			},
			stadium : "Sir Vivian Richards Stadium",
			location : "Antigua",
			distance : "5.1",
			time : "14",
			attendance : {
				_2012 : "818 **",
				_2011 : "1189"
			}
		},
		Charleston : {
			team : "Charleston Battery",
			standing : {
				_2012 : "3",
				_2011 : "0"
			},
			stadium : "Blackbaud Stadium",
			location : "Charleston",
			distance : "15.3",
			time : "20",
			attendance : {
				_2012 : "3947",
				_2011 : "3501"
			}
		},
		Charlotte : {
			team : "Charlotte Eagles",
			standing : {
				_2012 : "7",
				_2011 : "0"
			},
			stadium : "Restart Field at Charlotte Christian HS Stadium",
			location : "city",
			distance : "8.7",
			time : "21",
			attendance : {
				_2012 : "806 **",
				_2011 : "1022"
			}
		},
		Dayton : {
			team : "Dayton",
			standing : {
				_2012 : "9",
				_2011 : "0"
			},
			stadium : "Bellbrook High School",
			location : "city",
			distance : "14.8",
			time : "23",
			attendance : {
				_2012 : "722 *",
				_2011 : "661"
			}
		},
		Harrisburg : {
			team : "Harrisburg",
			standing : {
				_2012 : "6",
				_2011 : "0"
			},
			stadium : "Skyline Sports Complex",
			location : "city",
			distance : "2.2",
			time : "7",
			attendance : {
				_2012 : "1411 **",
				_2011 : "1406"
			}
		},
		Los_Angeles : {
			team : "Los Angeles",
			standing : {
				_2012 : "8",
				_2011 : "0"
			},
			stadium : "Cal State Fullerton",
			location : "city",
			distance : "3.3",
			time : "8",
			attendance : {
				_2012 : "666 *",
				_2011 : "440"
			}
		},
		Orlando : {
			team : "Orlando",
			standing : {
				_2012 : "1",
				_2011 : "0"
			},
			stadium : "Citrus Bowl",
			location : "city",
			distance : "1.9",
			time : "7",
			attendance : {
				_2012 : "6606",
				_2011 : "5415"
			}
		},
		Pittsburgh : {
			team : "Pittsburgh",
			standing : {
				_2012 : "10",
				_2011 : "0"
			},
			stadium : "Chartiers Valley High School Stadium",
			location : "city",
			distance : "8.7",
			time : "16",
			attendance : {
				_2012 : "984",
				_2011 : "1127"
			}
		},
		Richmond : {
			team : "Richmond",
			standing : {
				_2012 : "4",
				_2011 : "0"
			},
			stadium : "City Stadium",
			location : "city",
			distance : "4.7",
			time : "10",
			attendance : {
				_2012 : "2379",
				_2011 : "1986"
			}
		},
		Rochester : {
			team : "Rochester Rhinos",
			standing : {
				_2012 : "2",
				_2011 : "0"
			},
			stadium : "Sahlen's Stadium",
			location : "Rochester",
			distance : "1.4",
			time : "6",
			attendance : {
				_2012 : "6265",
				_2011 : "5139"
			}
		},
		Wilmington : {
			team : "Wilmington Hammerheads",
			standing : {
				_2012 : "0",
				_2011 : "0"
			},
			stadium : "Legion Stadium",
			location : "Wilmington",
			distance : "2",
			time : "8",
			attendance : {
				_2012 : "4265",
				_2011 : "4053"
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

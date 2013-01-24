window.document.body.onload = function() {
	console.log("yes");
	console.log(attendanceData);
	console.log(attendanceData._2012.NASL.Atlanta.standing);

	var table = document.getElementsByTagName("tbody")[0];
	for(year in attendanceData) {
		// console.log(attendanceData[year]);
		for(league in attendanceData[year]) {
			for(team in attendanceData[year][league]) {
				// console.log(attendanceData[year][league][team]);
				var tr = element("tr");
				for(stats in attendanceData[year][league][team]) {
					console.log(stats);
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
var attendanceData = {
	_2012 : {
		NASL : {
			Atlanta : {
				team : "Atlanta",
				standing : "7",
				stadium : "Silverbacks Pack",
				location : "Atlanta",
				distance : ".4",
				time : "21",
				attendance : "4505"
			},
			Carolina : {
				team : "Carolina",
				standing : "4",
				stadium : "Wakemed Park",
				location : "Cary, NC",
				distance : "2.2",
				time : "5",
				attendance : "3883"
			},
			Edmonton : {
				team : "Edmonton",
				standing : "8",
				stadium : "Clarke Stadium",
				location : "Edmonton",
				distance : "2.9",
				time : "11",
				attendance : "1492"
			},
			Ft_Lauderdale : {
				team : "Ft. Lauderdale",
				standing : "5",
				stadium : "Lockhart Stadium",
				location : "Ft. Lauderdale, FL",
				distance : "7.4",
				time : "13",
				attendance : "3609"
			},
			Minnesota : {
				team : "Minnesota",
				standing : "6",
				stadium : "NSC (Blaine)",
				location : "Minneapolis, MN",
				distance : "17.5",
				time : "23",
				attendance : "2796"
			},
			Puerto_Rico : {
				team : "Puerto Rico",
				standing : "3",
				stadium : "Bayamon, PR",
				location : "Bayamon Soccer Complex",
				distance : ".4",
				time : "2",
				attendance : "1864"
			},
			San_Antonio : {
				team : "San Antonio",
				standing : "1",
				stadium : "Heroes Stadium",
				location : "San Antonio, TX",
				distance : "13.2",
				time : "20",
				attendance : "9176"
			},
			Tampa_Bay : {
				team : "Tampa Bay",
				standing : "2",
				stadium : "Al Lang at Progress Energy Park",
				location : "St. Petersburg, FL",
				distance : ".7",
				time : "4",
				attendance : "3116"
			}
		},
		USL_Pro : {
			team : {
				team : "name",
				standing : "-",
				stadium : "stadium",
				location : "city",
				distance : "miles",
				time : "minutes",
				attendance : "4505"
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
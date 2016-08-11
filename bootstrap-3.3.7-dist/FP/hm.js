function HMCon() {
				var b = document.getElementById("bustsize").value;
				var w = document.getElementById("waistsize").value;
				var h = document.getElementById("hipsize").value;
				var bval = 0;
				var wval = 0;
				var hval = 0;
				
				if (30 <= b && 31.5 >= b) {
					bval = 0;
				} else if (31.5 < b && 34.5 >= b) {
					bval = 1;
				} else if (34.5 < b && 37.5 >= b) {
					bval = 2;
				} else if (37.5 < b && 41 >= b) {
					bval = 3;
				} else if (41 < b && 46 >= b) {
					bval = 4;
				} 
				

				if (23.5 <= w && 25.5 >= w) {
					wval = 0;
				} else if (25.5 < w && 28.5 >= w) {
					wval = 1;
				} else if (28.5 < w && 31.5 >= w) {
					wval = 2;
				} else if (31.5 < w && 34.5 >= w) {
					wval = 3;
				} else if (34.5 < w && 39.5 >= w) {
					wval = 4;
				} 
				

				if (33 <= h && 34.5 >= h) {
					hval = 0;
				} else if (34.5 < h && 38 >= h) {
					hval = 1;
				} else if (38 < h && 41 >= h) {
					hval = 2;
				} else if (41 < h && 44 >= h) {
					hval = 3;
				} else if (44 < h && 48 >= h) {
					hval = 4;
				} 

				sum = bval + wval + hval
				quotient = sum/3
				roundedAverage = Math.round(quotient)
				var hmSize = "";
				if (roundedAverage == 0) {
					hmSize = "X-Small";
				}
				 else if (roundedAverage == 1) {
					hmSize = "Small";
				}
				 else if (roundedAverage == 2) {
					hmSize = "Medium";
				}
				 else if (roundedAverage == 3) {
					hmSize = "Large";
				}
				 else if (roundedAverage == 4) {
					hmSize = "X-Large";
				} 

				console.log(hmSize)
				document.getElementById("HMS").innerHTML = hmSize;
				// document.getElementbyId("HMBfit").innerHTML = Bfit;
				// document.getElementbyId("HMWfit").innerHTML = Wfit;
				// document.getElementbyId("HMHfit").innerHTML = Hfit;
				// add the last three items to the HTML file whenever we do the table/chart thing//
			}

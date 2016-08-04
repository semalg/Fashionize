function HMCon() {
				var b = document.getElementById("bustsize").value;
				var w = document.getElementById("waistsize").value;
				var h = document.getElementById("hipsize").value;
				var bval = 0;
				var wval = 0;
				var hval = 0;
				if (30 <= b && 31.5 >= b) {
					bval = 0;
				} else if (33 <= b && 34.5 >= b) {
					bval = 1;
				} else if (36 <= b && 37.5 >= b) {
					bval = 2;
				} else if (39.5 <= b && 41 >= b) {
					bval = 3;
				} else if (45 <= b && 46 >= b) {
					bval = 4;}
				// } else {
				// 	document.write("Sorry, we can't compute this.")
				// } 

				if (23.5 <= w && 25.5 >= w) {
					wval = 0;
				} else if (26.5 <= w && 28.5 >= w) {
					wval = 1;
				} else if (30 <= w && 31.5 >= w) {
					wval = 2;
				} else if (33 <= w && 34.5 >= w) {
					wval = 3;
				} else if (37 <= w && 39.5 >= w) {
					wval = 4;}
				// } else {
				// 	document.write("Sorry, we can't compute this.")
				// }

				if (33 <= h && 34.5 >= h) {
					hval = 0;
				} else if (36 <= h && 38 >= h) {
					hval = 1;
				} else if (39.5 <= h && 41 >= h) {
					hval = 2;
				} else if (42.5 <= h && 44 >= h) {
					hval = 3;
				} else if (46 <= h && 48 >= h) {
					hval = 4;}
				// } else {
				// 	document.write("Sorry, we can't compute this.")
				// }

				sum = bval + wval + hval
				quotient = sum/3
				roundedAverage = Math.round(quotient)
				var hmSize = "";
				if (roundedAverage == 0) {
					hmSize = "X-Small";
				}
				if (roundedAverage == 1) {
					hmSize = "Small";
				}
				if (roundedAverage == 2) {
					hmSize = "Medium";
				}
				if (roundedAverage == 3) {
					hmSize = "Large";
				}
				if (roundedAverage == 4) {
					hmSize = "X-Large";
				}
				console.log(hmSize)
				document.getElementById("HMS").innerHTML = hmSize;
			}

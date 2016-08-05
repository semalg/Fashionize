function HMConverter() {
			var b = document.getElementById("bustsize").value;
			var w = document.getElementById("waistsize").value;
			var h = document.getElementById("hipsize").value;
			var bval = 0;
			var wval = 0;
			var hval = 0;
// Bust
			if (30 <= b && 31.5 >= b) {
				bval = 0;
			} else if (33 <= b && 34.5 >= b) {
				bval = 1;
			} else if (36 <= b && 37.5 >= b) {
					bval = 2;
			} else if (39.5 <= b && 41 >= b) {
				bval = 3;
			} else if (45 <= b && 46 >= b) {
				bval = 4;
			} else {
				bval = -1
			}
// Waist
			if (23.5 <= w && 25.5 >= w) {
				wval = 0;
			} else if (26.5 <= w && 28.5 >= w) {
				wval = 1;
			} else if (30 <= w && 31.5 >= w) {
				wval = 2;
			} else if (33 <= w && 34.5 >= w) {
				wval = 3;
			} else if (37 <= w && 39.5 >= w) {
				wval = 4;
			} else {
				wval = -1
			}
// Hips
			if (33 <= h && 34.5 >= h) {
				hval = 0;
			} else if (36 <= h && 38 >= h) {
				hval = 1;
			} else if (39.5 <= h && 41 >= h) {
				hval = 2;
			} else if (42.5 <= h && 44 >= h) {
				hval = 3;
			} else if (46 <= h && 48 >= h) {
				hval = 4;
			} else {
				hval = -1
			}
// Average
			sum = bval + wval + hval
			quotient = sum/3
			roundedAverage = Math.round(quotient)
			var HMSize = "";
			if (roundedAverage == 0) {
				HMSize = "X-Small";
			} if (roundedAverage == 1) {
				HMSize = "Small";
			} if (roundedAverage == 2) {
				HMSize = "Medium";
			} if (roundedAverage == 3) {
				HMSize = "Large";
			} if (roundedAverage == 4) {
				HMSize = "X-Large";
			}
// Fit Description
			if (bval == -1) {
				Bfit = "Invalid Bust Size"
			} else if (bval == roundedAvg) {
				Bfit = "10"
			} else if ((bval == roundedAvg + 1) || (bval == roundedAvg - 1)) {
				Bfit = "8"
			} else if ((bval == roundedAvg + 2) || (bval == roundedAvg - 2)) {
				Bfit = "6"
			} else if ((bval == roundedAvg + 3) || (bval == roundedAvg - 3)) {
				Bfit = "4"
			} else {
				Bfit = "2"
			}

			if (wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (wval == roundedAvg) {
				Wfit = "10"
			} else if ((wval == roundedAvg + 1) || (wval == roundedAvg - 1)) {
				Wfit = "8"
			} else if ((wval == roundedAvg + 2) || (wval == roundedAvg - 2)) {
				Wfit = "6"
			} else if ((wval == roundedAvg + 3) || (wval == roundedAvg - 3)) {
				Wfit = "4"
			} else {
				Wfit = "2"
			}

			if (hval == -1) {
				Hfit = "Invalid Hip Size"
			} else if (hval == roundedAvg) {
				Hfit = "10"
			} else if ((hval == roundedAvg + 1) || (hval == roundedAvg - 1)) {
				Hfit = "8"
			} else if ((hval == roundedAvg + 2) || (hval == roundedAvg - 2)) {
				Hfit = "6"
			} else if ((hval == roundedAvg + 3) || (val == roundedAvg - 3)) {
				Hfit = "4"
			} else {
				Hfit = "2"
			}

			if (HMBfit !== undefined) {
				document.getElementById("HMBfit").innerHTML = Bfit;
			} if (HMWfit !== undefined) {
				document.getElementById("HMWfit").innerHTML = Wfit;
			} if (HMWfit !== undefined) {
				document.getElementById("HMHfit").innerHTML = Hfit;
			}
		}

		function UOConverter() {
			var w = document.getElementById("waistsize").value;
			var h = document.getElementById("hipsize").value;
			var b = document.getElementById("bustsize").value;
			var Wval = 0;
			var Hval = 0;
			var Bval = 0;
			var Bfit = 0;
			var Wfit = 0;
			var Hfit = 0;
// Bust
			if (b >= 32 && b <= 34) {
				Bval = 0;
			} else if (b > 34 && b <= 36) {
				Bval = 1;
			} else if (b > 36 && b <= 38) {
				Bval = 2;
			} else if (b > 38 && b <= 40) {
				Bval = 3;
			} else {
				Bval = -1
			}
// Waist
			if (w >= 24 && w <= 26) {
				Wval = 0;
			} else if (w > 26 && w <= 28) {
				Wval = 1;
			} else if (w > 28 && w <= 30) {
				Wval = 2;
			} else if (w > 30 && w <= 34) {
				Wval = 3;
			} else {
				Wval = -1
			}
// Hips
			if (h >= 34 && h <= 36) {
				Hval = 0;
			} else if (h > 36 && h <= 38) {
				Hval = 1;
			} else if (h > 38 && h <= 40) {
				Hval = 2;
			} else if (h > 40 && h <= 43) {
				Hval = 3;
			} else {
				Hval = -1
			}
// Average
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var UOSize = "";
			if (roundedAvg == 0) {
				UOSize = "X-Small"
			} if (roundedAvg == 1) {
				UOSize = "Small"
			} if (roundedAvg == 2) {
				UOSize = "Medium"
			} if (roundedAvg == 3) {
				UOSize = "Large"
			} 
// Fit Description
			if (Bval == -1) {
				Bfit = "Invalid bust size"
			} else if (Bval == roundedAvg) {
				Bfit = "10"
			} else if ((Bval == roundedAvg + 1) || (Bval == roundedAvg - 1)) {
				Bfit = "8"
			} else if ((Bval == roundedAvg + 2) || (Bval == roundedAvg - 2)) {
				Bfit = "6"
			} else if ((Bval == roundedAvg + 3) || (Bval == roundedAvg - 3)) {
				Bfit = "4"
			} else {
				Bfit = "2"
			} 

			if (Wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				Wfit = "10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				Wfit = "8"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				Wfit = "6"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				Wfit = "4"
			} else {
				Wfit = "2"
			}

			if (Hval == -1) {
				Hfit = "Invalid Hip Size" 
			} else if (Hval == roundedAvg) {
				Hfit = "10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				Hfit = "8"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				Hfit = "6"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				Hfit = "4"
			} else {
				Hfit = "2"
			}

			if (UOBfit !== undefined) {
				document.getElementById("UOBfit").innerHTML = Bfit;
			} if (UOWfit !== undefined) {
				document.getElementById("UOWfit").innerHTML = Wfit;
			} if (UOHfit !== undefined) {
				document.getElementById("UOHfit").innerHTML = Hfit;
			}
		}
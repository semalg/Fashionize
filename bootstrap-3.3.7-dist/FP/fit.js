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
				} else if (31.5 < b && 34.5 >= b) {
					bval = 1;
				} else if (34.5 < b && 37.5 >= b) {
					bval = 2;
				} else if (37.5 < b && 41 >= b) {
					bval = 3;
				} else if (41 < b && 46 >= b) {
					bval = 4;
				} else{
					bval = -1
				}
// Waist
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
				} else {
					wval = -1
				}
// Hips
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
				Bfit = "10/10"
			} else if ((bval == roundedAvg + 1) || (bval == roundedAvg - 1)) {
				Bfit = "8/10"
			} else if ((bval == roundedAvg + 2) || (bval == roundedAvg - 2)) {
				Bfit = "6/10"
			} else if ((bval == roundedAvg + 3) || (bval == roundedAvg - 3)) {
				Bfit = "4/10"
			} else {
				Bfit = "2/10"
			}

			if (wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (wval == roundedAvg) {
				Wfit = "10/10"
			} else if ((wval == roundedAvg + 1) || (wval == roundedAvg - 1)) {
				Wfit = "8/10"
			} else if ((wval == roundedAvg + 2) || (wval == roundedAvg - 2)) {
				Wfit = "6/10"
			} else if ((wval == roundedAvg + 3) || (wval == roundedAvg - 3)) {
				Wfit = "4/10"
			} else {
				Wfit = "2/10"
			}

			if (hval == -1) {
				Hfit = "Invalid Hip Size"
			} else if (hval == roundedAvg) {
				Hfit = "10/10"
			} else if ((hval == roundedAvg + 1) || (hval == roundedAvg - 1)) {
				Hfit = "8/10"
			} else if ((hval == roundedAvg + 2) || (hval == roundedAvg - 2)) {
				Hfit = "6/10"
			} else if ((hval == roundedAvg + 3) || (val == roundedAvg - 3)) {
				Hfit = "4/10"
			} else {
				Hfit = "2/10"
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
				Bfit = "10/10"
			} else if ((Bval == roundedAvg + 1) || (Bval == roundedAvg - 1)) {
				Bfit = "8/10"
			} else if ((Bval == roundedAvg + 2) || (Bval == roundedAvg - 2)) {
				Bfit = "6/10"
			} else if ((Bval == roundedAvg + 3) || (Bval == roundedAvg - 3)) {
				Bfit = "4/10"
			} else {
				Bfit = "2/10"
			} 

			if (Wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				Wfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				Wfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				Wfit = "6/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				Wfit = "4/10"
			} else {
				Wfit = "2/10"
			}

			if (Hval == -1) {
				Hfit = "Invalid Hip Size" 
			} else if (Hval == roundedAvg) {
				Hfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				Hfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				Hfit = "6/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				Hfit = "4/10"
			} else {
				Hfit = "2/10"
			}

			if (UOBfit !== undefined) {
				document.getElementById("UOBfit").innerHTML = Bfit;
			} if (UOWfit !== undefined) {
				document.getElementById("UOWfit").innerHTML = Wfit;
			} if (UOHfit !== undefined) {
				document.getElementById("UOHfit").innerHTML = Hfit;
			}
		}
		function F21Converter() {
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
			if (b >= 32 && b <= 33) {
				Bval = 0
			} else if (b >= 34 && b <= 35) {
				Bval = 1
			} else if (b >= 36 && b <= 37) {
				Bval = 2
			} else if (b >= 38 && b <= 39) {
				Bval = 3
			} else if (b >= 40 && b <= 45) {
				Bval = 4
			} else {
				Bval = -1
			}
// Waist
			if (w >= 24 && w <= 25) {
				Wval = 0
			} else if (w >= 26 && w <= 27) {
				Wval = 1
			} else if (w >= 28 && w <= 29) {
				Wval = 2
			} else if (w >= 30 && w <= 31) {
				Wval = 3
			} else if (w>=32 && w<=33) {
				Wval = 4
			} else {
				Wval = -1
			}
// Hips
			if (h >= 33 && h <= 34) {
				Hval = 0
			} else if (h >= 35 && h <= 36) {
				Hval = 1
			} else if (h >= 37 && h <= 40) {
				Hval = 2
			} else if (h >= 42 && h <= 44) {
				Hval = 3
			} else if (h >= 45 && h <= 47) {
				Hval = 4
			} else {
				Hval = -1
			}
// Average
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var F21Size = "";
			if (roundedAvg == 0) {
				F21Size = "X-Small"
			} if (roundedAvg == 1) {
				F21Size = "Small"
			} if (roundedAvg == 2) {
				F21Size = "Medium"
			} if (roundedAvg == 3) {
				F21Size = "Large"
			} if (roundedAvg == 4) {
				F21Size = "X-Large"  
			}
// Fit Description
			if (Bval == -1) {
				Bfit = "Invalid Bust Size"
			} else if (Bval == roundedAvg) {
				Bfit = "10/10"
			} else if ((Bval == roundedAvg + 1) || (Bval == roundedAvg - 1)) {
				Bfit = "8/10"
			} else if ((Bval == roundedAvg + 2) || (Bval == roundedAvg - 2)) {
				Bfit = "6/10"
			} else if ((Bval == roundedAvg + 3) || (Bval == roundedAvg - 3)) {
				Bfit = "4/10"
			} else {
				Bfit = "2/10"
			}
			
			if (Wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				Wfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				Wfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				Wfit = "6/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				Wfit = "4/10"
			} else {
				Wfit = "2/10"
			}

			if (Hval == -1) {
				Hfit == "Invalid Hip Size"
			} else if (Hval == roundedAvg) {
				Hfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				Hfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				Hfit = "6/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				Hfit = "4/10"
			} else {
				Hfit = "2/10"
			}

			if (F21Bfit !== undefined) {
				document.getElementById("F21Bfit").innerHTML = Bfit;
			} if (F21Wfit !== undefined) {
				document.getElementById("F21Wfit").innerHTML = Wfit;
			} if (F21Hfit !== undefined) {
				document.getElementById("F21Hfit").innerHTML = Hfit;
			}
		}
		function CKConverter() {
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
			if (b >= 31 && b <= 33) {
				Bval = 0
			} else if (b > 33 && b <= 35) {
				Bval = 1
			} else if (b > 35 && b <= 37) {
				Bval = 2
			} else if (b > 37 && b <= 38.5) {
				Bval = 3
			} else if (b > 38.5 && b <= 40) {
				Bval = 4
			} else {
				Bval = -1
			}
// Waist
			if (w >= 29 && w <= 30) {
				Wval = 0
			} else if (w > 30 && w <= 32) {
				Wval = 1
			} else if (w > 32 && w <= 34) {
				Wval = 2
			} else if (w > 34 && w <= 35.5) {
				Wval = 3
			} else if (w > 35.5 && w <= 37) {
				Wval = 4
			} else {
				Wval = -1
			}
// Hips
			if (h >= 37 && h <= 38) {
				Hval = 0
			} else if (h > 38 && h <= 40) {
				Hval = 1
			} else if (h > 40 && h <= 42) {
				Hval = 2
			} else if (h > 42 && h <= 43.5) {
				Hval = 3
			} else if (h > 43.5 && h <= 45) {
				Hval = 4
			} else {
				Hval = -1
			}
// Average
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var CKSize = "";
			if (roundedAvg == 0) {
				CKSize = "X-Small"
			} else if (roundedAvg == 1) {
				CKSize = "Small"
			} else if (roundedAvg == 2) {
				CKSize = "Medium"
			} else if (roundedAvg == 3) {
				CKSize = "Large"
			} else if (roundedAvg == 4) {
				CKSize = "X-Large"	
			}
// Fit Description
			if (Bval == -1) {
				Bfit = "Invalid Bust Size"
			} else if (Bval == roundedAvg) {
				Bfit = "10/10"
			} else if ((Bval == roundedAvg + 1) || (Bval == roundedAvg - 1)) {
				Bfit = "8/10"
			} else if ((Bval == roundedAvg + 2) || (Bval == roundedAvg - 2)) {
				Bfit = "6/10"
			} else if ((Bval == roundedAvg + 3) || (Bval == roundedAvg - 3)) {
				Bfit = "4/10"
			} else {
				Bfit = "2/10"
			}
			
			if (Wval == -1) {
				Wfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				Wfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				Wfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				Wfit = "6/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				Wfit = "4/10"
			} else {
				Wfit = "2/10"
			}

			if (Hval == -1) {
				Hfit = "Invalid Hip Size"
			} else if (Hval == roundedAvg) {
				Hfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				Hfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				Hfit = "6/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				Hfit = "4/10"
			} else {
				Hfit = "2/10"
			}

			if (CKBfit !== undefined) {
				document.getElementById("CKBfit").innerHTML = Bfit;
			} if (CKWfit !== undefined) {
				document.getElementById("CKWfit").innerHTML = Wfit;
			} if (CKHfit !== undefined) {
				document.getElementById("CKHfit").innerHTML = Hfit;}

			}
			
		
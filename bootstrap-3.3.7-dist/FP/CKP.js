function CKPantsCon() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			if (w==25) {
				Wval = 0;
			}
			else if (w==26) {
				Wval = 1;
			}
			else if (w==27) {
				Wval = 2;
			}
			else if (w==28) {
				Wval = 3;
			}
			else if (w==29) {
				Wval = 4;
			}
			else if (w==30) {
				Wval = 5;
			}
			else if (w>30 && w<=31) {
				Wval = 6;
			}
			else if (w>31 && w<=32) {
				Wval = 7;
			}
			else if (w>32 && w<=34) {
				Wval = 8;
			}
			if (h>=35 && h<=36) {
				Wval = 0;
			}
			else if (h>36 && h<=37) {
				Wval = 1;
			}
			else if (h>37 && h<=38) {
				Wval = 2;
			}
			else if (h>38 && h<=39) {
				Wval = 3;
			}
			else if (h>39 && h<=40) {
				Wval = 4;
			}
			else if (h>40 && h<=42) {
				Wval = 5;
			}
			else if (h>42 && h<=43) {
				Wval = 6;
			}
			else if (h>43 && h<=45) {
				Wval =7;
			}
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var CKPSize = "";
			if (roundedAvg == 0) {
				CKPSize = "0 (XS)"
			}
			if (roundedAvg == 1) {
				CKPSize = "2 (XS)"
			}
			if (roundedAvg == 2) {
				CKPSize = "4 (S)"
			}
			if (roundedAvg == 3) {
				CKPSize = "6 (S)"
			}
			if (roundedAvg == 4) {
				CKPSize = "8 (M)"
			}
			if (roundedAvg == 5) {
				CKPSize = "10 (M)"
			}
			if (roundedAvg == 6) {
				CKPSize = "12 (L)"	
			}
			if (roundedAvg == 7) {
				CKPSize = "14 (L)"	
			}
			if (roundedAvg == 8) {
				CKPSize = "16 (XL)"	
			}
			console.log(CKPSize)
			document.getElementById("CKSP").innerHTML = CKPSize;
		}
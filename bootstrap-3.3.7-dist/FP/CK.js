function CKCon() {
			var w = document.getElementById("waistsize").value;
			var h = document.getElementById("hipsize").value;
			var b = document.getElementById("bustsize").value;
			var Wval = 0;
			var Hval = 0;
			var Bval = 0;
			if (b>=31 && b<=33) {
				Bval = 0
			}
			else if (b>33 && b<= 35) {
				Bval = 1
			}
			else if (b>35 && b<=37) {
				Bval = 2
			}
			else if (b>37 && b<=38.5) {
				Bval = 3
			}
			else if (b>38.5 && b<=40) {
				Bval = 4
			} 
			if (w>=29 && w<=30) {
				Wval = 0
			}
			else if (w>30 && w<=32) {
				Wval = 1
			}
			else if (w>32 && w<=34) {
				Wval = 2
			}
			else if (w>34 && w<=35.5) {
				Wval = 3
			}
			else if (w>35.5 && w<=37) {
				Wval = 4
			} 
			if (h>=37 && h<=38) {
				Hval = 0
			}
			else if (h>38 && h<=40) {
				Hval = 1
			}
			else if (h>40 && h<=42) {
				Hval = 2
			}
			else if (h>42 && h<=43.5) {
				Hval = 3
			}
			else if (h>43.5 && h<=45) {
				Hval = 4
			} 
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var CKSize = "";
			if (roundedAvg == 0) {
				CKSize = "X-Small"
			}
			else if (roundedAvg == 1) {
				CKSize = "Small"
			}
			else if (roundedAvg == 2) {
				CKSize = "Medium"
			}
			else if (roundedAvg == 3) {
				CKSize = "Large"
			}
			else if (roundedAvg == 4) {
				CKSize = "X-Large"	
			} 
			
			
			
			console.log(CKSize)
			document.getElementById("CKS").innerHTML = CKSize;
			
			// add the last three items to the HTML file whenever we do the table/chart thing//


		}
function UOCon() {
			var w = document.getElementById("waistsize").value;
			var h = document.getElementById("hipsize").value;
			var b = document.getElementById("bustsize").value;
			var Wval = 0;
			var Hval = 0;
			var Bval = 0;
		
			if (w>=24 && w<=26) {
				Wval = 0;
			}
			else if (w>26 && w<=28) {
				Wval = 1;
			}
			else if (w>28 && w<=30) {
				Wval = 2;
			}
			else if (w>30 && w<=34) {
				Wval = 3;
			}
			

			if (h>=34 && h<=36) {
				Hval = 0;
			}
			else if (h>36 && h<=38) {
				Hval = 1;
			}
			else if (h>38 && h<=40) {
				Hval = 2;
			}
			else if (h>40 && h<=43) {
				Hval = 3;
			}
			
			if (b>=32 && b<=34) {
				Bval = 0;
			}
			else if (b>34 && b<= 36) {
				Bval = 1;
			}
			else if (b>36 && b<=38) {
				Bval = 2;
			}
			else if (b>38 && b<=40) {
				Bval = 3;
			} 
			
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var UOSize = "";
			if (roundedAvg == 0) {
				UOSize = "X-Small"
			}
			 else if (roundedAvg == 1) {
				UOSize = "Small"
			}
			else if (roundedAvg == 2) {
				UOSize = "Medium"
			}
			else if (roundedAvg == 3) {
				UOSize = "Large"
			} 

			console.log(UOSize)
			document.getElementById("UOS").innerHTML = UOSize;
			
			// add the last three items to the HTML file whenever we do the table/chart thing//
		}
// H & M 
function HMPants() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			var WPfit = 0;
			var HPfit = 0;
// Waist
			if (w>=23 && w<=25) {
				Wval = 0;
			}else if (w>25 && w<=26) {
				Wval = 1;
			}else if (w>26 && w<=27) {
				Wval = 2;
			}else if (w>27 && w<=28) {
				Wval = 3;
			}else if (w>28 && w<=29) {
				Wval = 4;
			}else if (w>29 && w<=30) {
				Wval = 5;
			}else if (w>30 && w<=35) {
				Wval = 6;
			}else {
				Wval = -1
			}
// Hips
			if (h>=33 && h<=35) {
				Hval = 0;
			}else if (h>35 && h<=36) {
				Hval = 1;
			}else if (h>36 && h<=37) {
				Hval = 2;
			}else if (h>37 && h<=38) {
				Hval = 3;
			}else if (h>38 && h<=39) {
				Hval = 4;
			}else if (h>39 && h<=40) {
				Hval = 5;
			}else if (h>40 && h<=44) {
				Hval = 6;
			}else {
				Wval = -1
			}
// MATH 
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var HMSize = "";
			if (roundedAvg == 0) {
				HMSize = "0"
			}
			else if (roundedAvg == 1) {
				HMSize = "2"
			}
			else if (roundedAvg == 2) {
				HMSize = "4"
			}
			else if (roundedAvg == 3) {
				HMSize = "6"
			}
			else if (roundedAvg == 4) {
				HMSize = "8"
			}
			else if (roundedAvg == 5) {
				HMSize = "10"
			}
			else if (roundedAvg == 6) {
				HMSize = "12"	
			}
			else {
 HEAD
				Forever21Size = "error"
				Forever21Size = "Error"}


// Fit Description
			if (Wval == -1) {
				WPfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				WPfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				WPfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				WPfit = "6/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 4) || (Wval == roundedAvg - 4)) {
				WPfit = "4/10"
			}else if ((Wval == roundedAvg + 5) || (Wval == roundedAvg - 5)) {
				WPfit = "4/10"
			} else {
				WPfit = "2/10"
			}

			if (Hval == -1) {
				HPfit = "Invalid Hips Size"
			} else if (Hval == roundedAvg) {
				HPfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				HPfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				HPfit = "6/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 4) || (Hval == roundedAvg - 4)) {
				HPfit = "4/10"
			}else if ((Hval == roundedAvg + 5) || (Hval == roundedAvg - 5)) {
				HPfit = "4/10"
			} else {
				HPfit = "2/10"
			}

			if (HMWPfit !== undefined) {
				document.getElementById("HMWPfit").innerHTML = WPfit;
			} if (HMHPfit !== undefined) {
				document.getElementById("HMHPfit").innerHTML = HPfit;
			}
}
// URBAN OUTFITTERS 
		function UOPants() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			var HPfit = 0;
			var WPfit = 0;
// WAIST			
			if (w>=23 && w<=25) {
				Wval = 0;
			}
			else if (w>25 && w<=26) {
				Wval = 1;
			}

			else if (w>26 && w<=27) {
				Wval = 2;
			}
			else if (w>27 && w<=28) {
				Wval = 3;
			}
			else if (w>28 && w<=29) {
				Wval = 4;
			}
			else if (w>29 && w<=30) {
				Wval = 5;
			}
			else if (w>30 && w<=35) {
				Wval = 6;
			}
// HIPS			
			if (h>=33 && h<=35) {
				Hval = 0;
			}
			else if (h>35 && h<=36) {
				Hval = 1;
			}
			else if (h>36 && h<=37) {
				Hval = 2;
			}
			else if (h>37 && h<=38) {
				Hval = 3;
			}
			else if (h>38 && h<=39) {
				Hval = 4;
			}
			else if (h>39 && h<=40) {
				Hval = 5;
			}
			else if (h>40 && h<=44) {
				Hval = 6;
			}
//MATH
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var UOSize = "";
			if (roundedAvg == 0) {
				UOSize = "0"
			}
			else if (roundedAvg == 1) {
				UOSize = "2"
			}
			else if (roundedAvg == 2) {
				UOSize = "4"
			}
			else if (roundedAvg == 3) {
				UOSize = "6"
			}
			else if (roundedAvg == 4) {
				UOSize = "8"
			}
			else if (roundedAvg == 5) {
				UOSize = "10"
			}
			else if (roundedAvg == 6) {
				UOSize = "12"	
			} else {
				UOSize="Error"
			}
// FIT DESCRIPTION
			if (Wval == -1) {
				WPfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				WPfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				WPfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				WPfit = "6/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 4) || (Wval == roundedAvg - 4)) {
				WPfit = "4/10"
			}else if ((Wval == roundedAvg + 5) || (Wval == roundedAvg - 5)) {
				WPfit = "4/10"
			} else {
				WPfit = "2/10"
			}

			if (Hval == -1) {
				HPfit = "Invalid Hips Size"
			} else if (Hval == roundedAvg) {
				HPfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				HPfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				HPfit = "6/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 4) || (Hval == roundedAvg - 4)) {
				HPfit = "4/10"
			}else if ((Hval == roundedAvg + 5) || (Hval == roundedAvg - 5)) {
				HPfit = "4/10"
			} else {
				HPfit = "2/10"
			}

			if (UOWPfit !== undefined) {
				document.getElementById("UOWPfit").innerHTML = WPfit;
			} if (UOHPfit !== undefined) {
				document.getElementById("UOHPfit").innerHTML = HPfit;
			}
		}
// CALVIN KLEIN
			function CKPants() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			var HPfit = 0;
			var WPfit = 0;
// WAIST
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
// HIPS
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
//MATH
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var CKPSize = "";
			if (roundedAvg == 0) {
				CKPSize = "0"
			}
			if (roundedAvg == 1) {
				CKPSize = "2"
			}
			if (roundedAvg == 2) {
				CKPSize = "4"
			}
			if (roundedAvg == 3) {
				CKPSize = "6"
			}
			if (roundedAvg == 4) {
				CKPSize = "8"
			}
			if (roundedAvg == 5) {
				CKPSize = "10"
			}
			if (roundedAvg == 6) {
				CKPSize = "12"	
			}
			if (roundedAvg == 7) {
				CKPSize = "14"	
			}
			if (roundedAvg == 8) {
				CKPSize = "16"	
			}
// FIT DESCRIPTION
			if (Wval == -1) {
				WPfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				WPfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				WPfit = "10/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				WPfit = "8/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				WPfit = "8/10"
			}else if ((Wval == roundedAvg + 4) || (Wval == roundedAvg - 4)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 5) || (Wval == roundedAvg - 5)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 6) || (Wval == roundedAvg - 6)) {
				WPfit = "4/10"
			}else if ((Wval == roundedAvg + 7) || (Wval == roundedAvg - 7)) {
				WPfit = "4/10"
			} else {
				WPfit = "2/10"
			}

			if (Hval == -1) {
				HPfit = "Invalid Hips Size"
			} else if (Hval == roundedAvg) {
				HPfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				HPfit = "10/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				HPfit = "8/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				HPfit = "8/10"
			}else if ((Hval == roundedAvg + 4) || (Hval == roundedAvg - 4)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 5) || (Hval == roundedAvg - 5)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 6) || (Hval == roundedAvg - 6)) {
				HPfit = "4/10"
			}else if ((Hval == roundedAvg + 7) || (Hval == roundedAvg - 7)) {
				HPfit = "4/10"
			} else {
				HPfit = "2/10"
			}

			if (CKWPfit !== undefined) {
				document.getElementById("CKWPfit").innerHTML = WPfit;
			} if (CKHPfit !== undefined) {
				document.getElementById("CKHPfit").innerHTML = HPfit;
			}
		}
// FOREVER 21
			function F21Pants() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			var HPfit = 0;
			var WPfit = 0;
//WAIST
			if (w==24) {
				Wval = 0;
			}
			else if (w==25) {
				Wval = 1;
			}
			else if (w==26) {
				Wval = 2;
			}
			else if (w==27) {
				Wval = 3;
			}
			else if (w==28) {
				Wval = 4;
			}
			else if (w==29) {
				Wval = 5;
			}
			else if (w==30) {
				Wval = 6;
			}
			else if (w==31) {
				Wval = 7;
			}
// HIPS
			if (h==32) {
				Hval = 0;
			}
			else if (h==33) {
				Hval = 1;
			}
			else if (h==34) {
				Hval = 2;
			}
			else if (h==35) {
				Hval = 3;
			}
			else if (h==36) {
				Hval = 4;
			}
			else if (h==37) {
				Hval = 5;
			}
			else if (h==38) {
				Hval = 6;
			}
			else if (h==39) {
				Hval = 7;
			}
// MATH 
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var Forever21Size = "";
			if (roundedAvg == 0) {
				Forever21Size = "24"
			}
			else if (roundedAvg == 1) {
				Forever21Size = "25"
			}
			else if (roundedAvg == 2) {
				Forever21Size = "26"
			}
			else if (roundedAvg == 3) {
				Forever21Size = "27"
			}
			else if (roundedAvg == 4) {
				Forever21Size = "28"
			}
			else if (roundedAvg == 5) {
				Forever21Size = "29"
			}
			else if (roundedAvg == 6) {
				Forever21Size = "30"	
			}
			else if (roundedAvg == 7) {
				Forever21Size = "31"	
			}
			else {
				Forever21Size = "Error"
			}
// FIT DESCRIPTION 
			if (Wval == -1) {
				WPfit = "Invalid Waist Size"
			} else if (Wval == roundedAvg) {
				WPfit = "10/10"
			} else if ((Wval == roundedAvg + 1) || (Wval == roundedAvg - 1)) {
				WPfit = "8/10"
			} else if ((Wval == roundedAvg + 2) || (Wval == roundedAvg - 2)) {
				WPfit = "8/10"
			} else if ((Wval == roundedAvg + 3) || (Wval == roundedAvg - 3)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 4) || (Wval == roundedAvg - 4)) {
				WPfit = "6/10"
			}else if ((Wval == roundedAvg + 5) || (Wval == roundedAvg - 5)) {
				WPfit = "4/10"
			}else if ((Wval == roundedAvg + 6) || (Wval == roundedAvg - 6)) {
				WPfit = "4/10"
			} else {
				WPfit = "2/10"
			}

			if (Hval == -1) {
				HPfit = "Invalid Hips Size"
			} else if (Hval == roundedAvg) {
				HPfit = "10/10"
			} else if ((Hval == roundedAvg + 1) || (Hval == roundedAvg - 1)) {
				HPfit = "8/10"
			} else if ((Hval == roundedAvg + 2) || (Hval == roundedAvg - 2)) {
				HPfit = "8/10"
			} else if ((Hval == roundedAvg + 3) || (Hval == roundedAvg - 3)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 4) || (Hval == roundedAvg - 4)) {
				HPfit = "6/10"
			}else if ((Hval == roundedAvg + 5) || (Hval == roundedAvg - 5)) {
				HPfit = "4/10"
			}else if ((Hval == roundedAvg + 6) || (Hval == roundedAvg - 6)) {
				HPfit = "4/10"
			} else {
				HPfit = "2/10"
			}

			if (F21WPfit !== undefined) {
				document.getElementById("F21WPfit").innerHTML = WPfit;
			} if (F21HPfit !== undefined) {
				document.getElementById("F21HPfit").innerHTML = HPfit;
			
			}
		}
		
var list=["IMG_0002.JPG","IMG_0035.JPG","IMG_0149.JPG",
"IMG_0150.JPG","IMG_0163.JPG","IMG_0164.JPG","IMG_0165.JPG","IMG_0166.JPG",
"IMG_0168.JPG","IMG_0170.JPG","IMG_0172.JPG","IMG_0173.JPG","IMG_0174.JPG",
"IMG_0175.JPG","IMG_0587.JPG","IMG_0584.JPG","IMG_0593.JPG","IMG_0611.JPG",
"IMG_0621.JPG","IMG_0622.JPG","IMG_0623.JPG","IMG_0627.JPG","IMG_0631.JPG",
"IMG_0632.JPG","IMG_0466.JPG","IMG_0467.JPG","IMG_0326.JPG","IMG_0237.JPG"];
var Counter=0;
function SlideImage()
{
	 if (Counter >= list.length)
                Counter = 0;
            document.getElementById("slidepic").setAttribute("src", "Images/" + list[Counter]);           
            Counter++;
	}
	
setInterval(SlideImage,1000);

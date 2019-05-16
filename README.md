# PiSenseHatRandomColors

This is a small pice of softwer that lets you control raspberry pi sense hat module using a nodejs application. You first launch a
testserver.js using nodejs, and then you launch view.html in your web browser, make shure that you change IP addres in view.html to
ip of your PI. 
At this moment app just lets you click on buttons that corespond to sense hat LED diodes and it send random color using
RGB format, in JSON sending to PI you specife id of a LED and R,G,B separately, the PI sends you a JSON of a 64 element array 
wich has a RGB data for each diode.

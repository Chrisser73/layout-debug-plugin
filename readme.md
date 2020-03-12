# Layout Debug for Bootstrap & Foundation Framework via Tampermonkey & 

This tool will help you to debug your weblayout and layers

![Demo](http://christopher-matthes.de/wp-content/Projects/layout-debug/demo.gif)

## First things first / How to
Q: What is Tampermonkey? <br>
A: Tampermonkey is the world's most popular userscript manager. 
<br><br>
Q: How to use Tampermonkey<br>
A: Just create an "new script" in Tampermonkey, copy and paste the code of "tampermonkey.js" into your new "test" / "userscript" and save
<br><br>
Q: How to use Layout Debug<br>
A: After saving the test. Go to a Bootstrap- or Foundation-based website, activate your Tampermonkey-Layout-Debug-Script in Chrome / Firefox and reaload.
<br> Now you can toggle the complete test on or off, and you can toggle "layout debug" and "depth debug" separately
<br><br>


## Modify Script / Setup of source
* In terminal run ```$ ./start.sh ``` (or .bat for Windows)
* Server starts with something like ```http://localhost:9001/``` <br>
* Minify and uglify by yourself. This is just the raw source!


## Troubleshooting
If you have trouble with yarn or nvm version, use this code line BEFORE step "Getting Started": <br>
```nvm install xx.xx.x && npm i -g yarn@x.xx.x```
<br><br>
Sometimes it cant detect a bootstrap page especially if there is something different e.g. async loaded css and so on...<br>
The dirty solution; You can put a timeout around the script

# Jquery-Ajax-Wrapper
Its simple ajax wrapper for jQuery with UI blocker and option to Upload files via ajax

##Usage

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js"></script>
<script src="jquery.ajax.js"></script>

	var req = new Request();
	req.url = "sayhello.php";
	req.data = {
	"name":"Arunkumar"
	};
	
	RequestHandler(req,function(data){ alert(data) });
	
```

##Simple example

```html

<input type="button" id="sayhello" value="Say Hello"/>

<script>
$(document).ready(function(){

$(document).on("click","#sayhello",function(){
sayhello();
});

//Simple Example

function sayhello(){
	var req = new Request();
	req.url = "sayhello.php";
	req.data = {
	"name":"Arunkumar"
	};
	
	RequestHandler(req,processSayHello);
}

function processSayHello(data){
	alert(data);
}

});
</script>
```

## With Callback Information

```html

function sayHelloWithCallBack(){
	var req = new Request();
	req.url = "sayhello.php";
	req.data = {
	"name":"Arunkumar"
	};
	
	var callbackdata = {
	"firstname": "Arun",
	"lastname" : "kumar"
	}
	
	RequestHandler(req,processSayHelloWithCallBack,callbackdata);
}

function processSayHelloWithCallBack(data,callbackdata){
	alert(data); // Hello Arunkumar
	alert(callbackdata.firstname); // Arun
}

```

##Options

```html

	var req = new Request();
	req.url = "sayhello.php";
	req.data = {
	"name":"Arunkumar"
	};
	
	req.type = "POST"; //Method: By Default it is POST, you can change it to GET,PUT,etc...
	this.datatype = "json"; //Content-type: By Default its json
	this.isfulluri = false; //If you set it to TRUE, base url won't attached to the give url, so you have to pass full url to the url parameter
	this.isblockui = true; //By default, UI blocked using blockUI, if you dont want to block UI, set it to false
	
	RequestHandler(req,processSayHello);
	
```

##File Upload

```html

<form id="imageform" enctype="multipart/form-data">
<input type="file" name="imagefile"/>
<input type="text"  name="name" value=""/>
<input type="submit" value="submit">
</form>

$(document).on("submit","#imageform",function(e){
	e.preventDefault();
	var req = new Request();
		req.url ="sayhello.php";
		req.data = new FormData(this); 
		ImageRequestHandler(req,processSayHello);
});

```

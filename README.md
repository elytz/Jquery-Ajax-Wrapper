# Jquery-Ajax-Wrapper
Its simple ajax wrapper for jQuery with UI blocker and option to Upload files via ajax

##Usage

<pre>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js"></script>
<script src="jquery.ajax.js"></script>

	var req = new Request();
	req.url = "sayhello.php";
	req.data = {
	"name":"Arunkumar"
	};
	
	RequestHandler(req,function(data){ alert(data) });
	
</pre>

##Simple example

<pre>
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
</pre>

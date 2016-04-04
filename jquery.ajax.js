/*!
 * jQuery Ajax Wrapper v1.0
 * https://github.com/elytz/Jquery-Ajax-Wrapper
 * 
 * Author: Arunkumar Kubendran
 *
 * Date: 2016-03-31
 */

/*Domain Name*/

var domain = "";

/*Request Function */

function Request(){
	
	this.data = null;
	this.type = "POST";
	this.url = null;
	this.datatype = "json";
	this.isfulluri = false;
	this.isblockui = true;
}


/* Ajax Request Common Function */

function RequestHandler(request,response,resdata){
	
	$=jQuery.noConflict();
	
	if(request.isblockui){
		$.blockUI();
	}
	var tempurl = domain+request.url;
	
	if(request.isfulluri){
		tempurl = request.url;
	}
	
	$.ajax({
		type: request.type,
		url: tempurl,
		data: request.data,
		datatype:request.datatype,
		success: function(data){
			if(request.isblockui){
				$.unblockUI();
			}
			
			if(resdata != null && resdata != '')
			response(data,resdata);
			else
			response(data);
			
		},
		error: function(err){
			if(request.isblockui){
				$.unblockUI();
			}
			
			//Handle Exception
			//alert("Error:"+err.responseText);
		}
		
	});
	
}


/* Ajax Request Common Function */

function ImageRequestHandler(request,response,resdata){
	
	var tempurl = domain+request.url;
	
	if(request.isfulluri){
		tempurl = request.url;
	}
	
	if(request.isblockui){
		$.blockUI();
	}
	
	$.ajax({
		type: request.type,
		url: tempurl,
		data: request.data,
		datatype:request.datatype,
        processData: false,
		cache: false,
		contentType:false,
		success: function(data){
			
			if(request.isblockui){
				$.unblockUI();
			}
			
			if(resdata != null && resdata != '')
			response(data,resdata);
			else
			response(data);
			
		},
		error: function(err){
			
			if(request.isblockui){
				$.unblockUI();
			}
			
			//Handle Exception
			//alert("Error:"+err.responseText);
			
		}
		
	});
	
}

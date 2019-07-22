exports.handler = function(event, context, callback){
	var params = {
		TableName : "cities",
		Item : {
		    "cityno" : event.cityno,
		    "cityname" : event.cityname
		}
	};
	documentClient.put(params, function(err, data){
		if(err){
		    callback(err, null);
		}else{
		    callback(null, data);
		}
	});
}
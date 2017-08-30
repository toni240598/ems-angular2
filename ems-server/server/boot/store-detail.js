"use strict";

module.exports = function(server){
	var router = server.loopback.Router();
	router.get("/api/store/detail",(req,res)=>{

		// Twilio Credentials 
		var accountSid = 'AC2f4dcccace811b831637cab0ead0576c'; 
		var authToken = '2ca80a754e8ad9151a2bf5415be3dd2a'; 
		 
		//require the Twilio module and create a REST client 
		var client = require('twilio')(accountSid, authToken); 
		 
		client.messages.create({ 
		    to: "+181510927781", 
		    from: "+181510927781", 
		    body: "Percobaan open betta. mengirim sms buat yang mau kawin. semoga cepat punya bini 2", 
		}, function(err, message) { 
		    console.log(err); 
		});

		res.send("bisa");
	})
	server.use(router);
}
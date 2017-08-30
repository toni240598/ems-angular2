"use strict";

module.exports = function(server){
	let router = server.loopback.Router();
	router.get("/api/dashboard",(req,res)=>{
		res.send([
		    {
		      id: 1, id_account: 1,
		      label: 'Pondok Pinang 3',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 90 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		    {
		      id: 2, id_account: 2,
		      label: 'Bandung ',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 40 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		    {
		      id: 3, id_account: 1,
		      label: 'Kebayoran Lama ',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 40 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		    {
		      id: 4, id_account: 2,
		      label: 'Depok ',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 40 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		    {
		      id: 5, id_account: 2,
		      label: 'Sumedang ',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 40 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		    {
		      id: 6, id_account: 2,
		      label: 'Garut ',
		      gauge: { value: '99,9', unit: 'KWH', value_gauge: 40 },
		      information: { maintenance: 10, temperature: 90, alarm: 10 }
		    },
		]);
	})
	server.use(router);
} 
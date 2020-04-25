// FullStackPosition. The Problem was of LoadBalancing
let cur = 0;

	addEventListener('fetch', event => {
	  event.respondWith(serverRequest(event))
	})

async function serverRequest(event) 
{
	const a = [];	  
	const bodyy =await fetch('https://cfw-takehome.developers.workers.dev/api/variants', {
	      method: 'GET',
	      headers: { 'Content-Type': 'application/json' }
	})
	.then(res=> res.json())
	.then(data => 
	{
		for(i in data.variants)
		{
			try{
			a[i] = `${data.variants[i]}`;  // Storing in Variable
			console.log(data.variants[i]);
			}
			catch(error){
			console.error(error);
			}
		}
	}); 
	cur = (cur +1) % a.length;
	const url = a[cur];
	let data = {
    		id: 'title'
		}
		
	 return new Response(url, { method: 'GET',headers: { 'Content-Type': 'text/html' }, body: data, mode: 'no-cors'});
	

}

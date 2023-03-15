var mycache="mynewcache";
var assets=[
    "/assets/icn.png",
    "/assets/soccer.png",
    "/index.html",
    "/manifest.json","sw.js",
    "/assets/player.png",
    "/assets/tree.jpg"
];



async function fetchGH() {
    const response = await fetch('https://api.github.com/users/indrabhushan11',
    {
        headers: {
        'Authorization': 'token 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'
        }
        })
    
    return await response.json()
}
self.addEventListener("install",_event=> {
    console.log("inside install",_event);
    caches.open(mycache)
    .then(Cache=>{
        Cache.addAll(assets)
    });
});


self.addEventListener("activate",_event=>
{
    console.log("inside activate",_event);
});

self.addEventListener('fetch', async (event) => {
    const res = await fetchGH();
    console.log("RES is: ",res);
    console.log('inside the fetched',event);
});



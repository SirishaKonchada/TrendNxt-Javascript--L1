const url = new URL('http://localhost:8080/default.htm?year=2017&month=february');
console.log(url.protocol);
console.log(url.port);
console.log(url.host);
console.log(url.searchParams);
var cd = {'CdName': 'Mosh','CdPublisher' : 'CodewithMosh' , 'CdPrice' : 2000};
function displayAllDetails(){
    console.log('CD Name : '+cd.CdName);
    console.log('CD Publiher : '+cd.CdPublisher);
    var pr = cd.CdPrice + (10*(cd.CdPrice))/100 - (3*(cd.CdPrice)/100);
    console.log(pr);
}

displayAllDetails();
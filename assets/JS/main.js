function taxedprice(){
    var price=Number((window.prompt("enter product price")));
    var tax = price *(14/100);
    var profit = price * (10/100) ;
    var adverts = price * (6/100);
    return Number(price + tax + profit + adverts);
}
var fullprice = window.alert(taxedprice());

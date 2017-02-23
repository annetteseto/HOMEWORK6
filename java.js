var count1 = 0;

function myfunction()
{

count1++;

document.getElementById('chick').innerHTML = "Amount: $" + count1;

}
function myfunction2()
{

count1--;

document.getElementById('chick').innerHTML = "Amount: $" + count1;

}

var count2 = 0;

function myfunction3()
{

count2++;

document.getElementById('pine').innerHTML = "Amount: $" + count2;

}
function myfunction4()
{

count2--;

document.getElementById('pine').innerHTML = "Amount: $" + count2;

}

var count3 = 0;

function myfunction5()
{

count3++;

document.getElementById('olive').innerHTML = "Amount: $" + count3;
}
function myfunction6()
{

count3--;

document.getElementById('olive').innerHTML = "Amount: $" + count3;

}
function total()
{

document.getElementById('total').innerHTML = "Total: $";
document.getElementById('total').innerHTML += count1 + count2 + count3;
}

function reset()
{
	count1-count1;
	count2-count2;
	count3-count3;
document.getElementById('total').innerHTML = "Total: $";
document.getElementById('total').innerHTML += count1 - count1 + count2 - count2 + count3 - count3;
document.getElementById('chick').innerHTML = "Amount: $"
document.getElementById('chick').innerHTML +=- count1 + count1;
document.getElementById('pine').innerHTML = "Amount: $"
document.getElementById('pine').innerHTML +=- count2 + count2;
document.getElementById('olive').innerHTML = "Amount: $"
document.getElementById('olive').innerHTML +=- count3 + count3;
}
function addInputs() {
	var currTotal = document.getElementById("total").innerHTML;
	var p = 0;
	if (Order = "Chicken") {
		p++;
	}
	if (myString = "Pineapple") {
		p++;
	}
	if (myString = "Olives") {
		p++;
	}
	var textTotal = p;
	var newTotal = textTotal + count1 + count2 + count3;
	
	document.getElementById('total').innerHTML = "Total: $";
	document.getElementById("total").innerHTML += newTotal;

  
  var myString = document.getElementById("myInput").value;
	var Order = myString.split(",");
  
  for (var i=0; i<Order.length; i++) {
		Order[i] = Order[i].trim();

		console.log(Order[i]);
	}
	document.getElementById("food").innerHTML = "Your toppings are: " + Order;
	
	var tax = 0.12;
	var taxxx = newTotal*tax;
	var sub = newTotal + taxxx;
	document.getElementById('order').innerHTML = "Thank you for ordering with Pizza Pizza Pizza,<br> Here's your receipt:<br><br><br>Price: $" + sub + "<br>Subtotal: $" + newTotal +
	"<br>Tax: $" + taxxx + "<br>Total: $" + sub;
	
}
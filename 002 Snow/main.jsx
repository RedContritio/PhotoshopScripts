var originalStem = app.activeDocument.activeLayer;
var stemsAmount = prompt("How many stems do you need?", 6, "Processing \""+originalStem.name+"\""); 
while( isNaN ( stemsAmount) || stemsAmount <= 0 || stemsAmount > 100)
{
    if( stemsAmount == null) break;
    alert("Please enter a number in range from 2 to 100");
    stemsAmount = prompt("How many stems do you need?", 6, "Processing \""+originalStem.name+"\""); 
}
var angle = 360 / stemsAmount;
for(var i = 1; i < stemsAmount; i++)
{
    var newStem = originalStem.duplicate ();
    newStem.name = originalStem.name + " " + i;
    newStem.rotate( angle*i, AnchorPosition.BOTTOMCENTER);
}
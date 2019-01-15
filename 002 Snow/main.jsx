var originalStem = app.activeDocument.activeLayer;
var stemsAmount = prompt("How many stems do you need?", 6, "Processing \""+originalStem.name+"\""); 
while( isNaN ( stemsAmount) || stemsAmount <= 0 || stemsAmount > 100)
{
    if( stemsAmount == null) break;
    alert("Please enter a number in range from 2 to 100");
    stemsAmount = prompt("How many stems do you need?", 6, "Processing \""+originalStem.name+"\""); 
}

if( stemsAmount != null)
{
    var angle = 360 / stemsAmount;
    var stemsGroup = app.activeDocument.layerSets.add();
    stemsGroup.name = originalStem.name + "(" + stemsAmount + " stems)";
//    originalStem.move( stemsGroup, ElementPlacement.INSIDE);
    for(var i = 0; i < stemsAmount; i++)
    {
        var newStem = originalStem.duplicate ();
        newStem.rotate( angle*i, AnchorPosition.BOTTOMCENTER);
        newStem.name = originalStem.name + " " + i;
        newStem.move( stemsGroup, ElementPlacement.PLACEATEND);
    }
    originalStem.visible = false;
//    It's impossible to fold layerSets
}
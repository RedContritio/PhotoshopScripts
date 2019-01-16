function labels2List( labels, attr)
{
	var list = new ActionList();
	for( var i = 0; i < labels.length; i++)
	{
		list.putObject( attr, labels[i]);
	}
	return list;
}

function RGB( R, G, B)
{
	var desc = new ActionDescriptor();
	desc.putDouble( charIDToTypeID( "Rd  "), R);
	desc.putDouble( charIDToTypeID( "Grn "), G);
	desc.putDouble( charIDToTypeID( "Bl  "), B);
	return desc;
}

function colorLabel2desc( rgbdesc, pos)
{
	var desc = new ActionDescriptor();
	desc.putObject( charIDToTypeID( "Clr "), charIDToTypeID( "RGBC"), rgbdesc);
	desc.putEnumerated( charIDToTypeID( "Type"), charIDToTypeID( "Clry"), charIDToTypeID( "UsrS"));
	desc.putInteger( charIDToTypeID( "Lctn"), pos*4096);
	desc.putInteger( charIDToTypeID( "Mdpn"), 50);
	return desc;
}
function colorLables2List( labels)
{
	return labels2List( labels, charIDToTypeID( "Clrt"));
}

function transparent2desc( pos, alpha)
{
	var desc = new ActionDescriptor();
	desc.putUnitDouble( charIDToTypeID( "Opct"), charIDToTypeID( "#Prc"), alpha);
	desc.putInteger( charIDToTypeID( "Lctn"), pos*4096);
	desc.putInteger( charIDToTypeID( "Mdpn"), 50 );
	return desc;
}
function transparentLables2List( labels)
{
	return labels2List( labels, charIDToTypeID( "Trns"));
}

function lists2Gradient( name, ColorList, TrnsList)
{
	var desc= new ActionDescriptor();
	desc.putString( charIDToTypeID( "Nm  "), name);
	desc.putEnumerated( charIDToTypeID( "GrdF"), charIDToTypeID( "GrdF"), charIDToTypeID( "CstS"));
	desc.putDouble( charIDToTypeID( "Intr"), 4096.000000 ); // 4096 is Length of the scroll bar

	desc.putList( charIDToTypeID( "Clrs"), ColorList);
	desc.putList( charIDToTypeID( "Trns"), TrnsList);

	return desc;
}

function Coord( x, y)
{
	var desc = new ActionDescriptor();
	desc.putUnitDouble( charIDToTypeID( "Hrzn"), charIDToTypeID( "#Rlt"), x);
	desc.putUnitDouble( charIDToTypeID( "Vrtc"), charIDToTypeID( "#Rlt"), y);
	return desc;
}

function DeleteGradient( name)
{
	var idDlt = charIDToTypeID( "Dlt " );
	var desc58 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref30 = new ActionReference();
	var idGrdn = charIDToTypeID( "Grdn" );
	ref30.putIndex( idGrdn, 20 ); // id : todo, change the value
	desc58.putReference( idnull, ref30 );
	executeAction( idDlt, desc58, DialogModes.NO );
}
function SaveGradient( GradientEntity)
{
		var GradAdd = new ActionDescriptor();
		GradAdd.putObject( charIDToTypeID( "Grad" ), charIDToTypeID( "Grdn" ), GradientEntity );
		
		var MakeAction = new ActionDescriptor();
		
		var GradRef = new ActionReference();
		GradRef.putClass( charIDToTypeID( "Grdn"));
		MakeAction.putReference( charIDToTypeID( "null"), GradRef);
		
		MakeAction.putObject( charIDToTypeID( "Usng"), charIDToTypeID( "Grad"), GradAdd);
		executeAction( charIDToTypeID( "Mk  " ), MakeAction, DialogModes.NO );
}

function ApplyGradient( GradientEntity, from, to)
{
    var GradAction = new ActionDescriptor();
	
	GradAction.putObject( charIDToTypeID( "From"), charIDToTypeID( "Pnt "), from);
    GradAction.putObject( charIDToTypeID( "T   "), charIDToTypeID( "Pnt "), to);
	
    GradAction.putEnumerated( charIDToTypeID( "Type"), charIDToTypeID( "GrdT"),
										charIDToTypeID( "Lnr "));
    GradAction.putBoolean( charIDToTypeID( "Dthr"), true );
    GradAction.putBoolean( charIDToTypeID( "UsMs"), true );
	
    GradAction.putObject( charIDToTypeID( "Grad"), charIDToTypeID( "Grdn"), GradientEntity);
	executeAction( charIDToTypeID( "Grdn"), GradAction, DialogModes.NO );
}

function RandRange( low, high)
{
	return Math.floor(Math.random()*(high-low+1))+low;
}

var colorRed = RGB( 120.000000, 80.000000, 0.000000);
var clrTag1 = colorLabel2desc( colorRed, 0);
var colorDeepBlue = RGB( 0.000000, 80.000000, 80.000000 );
var clrTag2 = colorLabel2desc ( colorDeepBlue, 1);
var colorlabels = new Array( clrTag1, clrTag2);

var TrnsTag1 = transparent2desc( 0, 100);
var TrnsTag2 = transparent2desc( 0.5, 95);
var TrnsTag3 = transparent2desc( 1, 80);
var transparentlabels = new Array( TrnsTag1, TrnsTag2, TrnsTag3);

var colorList = colorLables2List( colorlabels);
var trnsList = transparentLables2List( transparentlabels);

var MyGrad = lists2Gradient ( """name""", colorList, trnsList);
//SaveGradient( MyGrad);

//DeleteGradient();

ApplyGradient( MyGrad, Coord(0,0), Coord(500,500));
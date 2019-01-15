function color2desc( R, G, B)
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
	var list = new ActionList();
	for( var i = 0; i < labels.length; i++)
	{
		list.putObject( charIDToTypeID( "Clrt"), labels[i]);
	}
	return list;
}

function transparent2desc( pos, alpha)
{
	var desc = new ActionDescriptor();
	desc.putUnitDouble( charIDToTypeID( "Opct"), charIDToTypeID( "#Prc"), alpha*100);
	desc.putInteger( charIDToTypeID( "Lctn"), pos*4096);
	desc.putInteger( charIDToTypeID( "Mdpn"), 50 );
	return desc;
}
function transparentLables2List( labels)
{
	var list = new ActionList();
	for( var i = 0; i < labels.length; i++)
	{
		list.putObject( charIDToTypeID( "Trns"), labels[i]);
	}
	return list;
}
var idMk = charIDToTypeID( "Mk  " );
    var desc146 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref27 = new ActionReference();
        var idGrdn = charIDToTypeID( "Grdn" );
        ref27.putClass( idGrdn );
    desc146.putReference( idnull, ref27 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc147 = new ActionDescriptor();
        var idGrad = charIDToTypeID( "Grad" );
            var desc148 = new ActionDescriptor();
            var idNm = charIDToTypeID( "Nm  " );
            desc148.putString( idNm, """渐变名称""" );
            var idGrdF = charIDToTypeID( "GrdF" );
            var idGrdF = charIDToTypeID( "GrdF" );
            var idCstS = charIDToTypeID( "CstS" );
            desc148.putEnumerated( idGrdF, idGrdF, idCstS );
            var idIntr = charIDToTypeID( "Intr" );
            desc148.putDouble( idIntr, 4096.000000 );
            var idClrs = charIDToTypeID( "Clrs" );
					
                    var desc150 = color2desc( 255.000000, 0.000000, 0.000000);
                    var desc149 = colorLabel2desc( desc150, 0);
                    var desc152 = color2desc( 0.000000, 0.000000, 120.000000 );
				  var desc151 = colorLabel2desc ( desc152, 1);
				  var colorlabels = new Array();
				  colorlabels[0] = desc149;
				  colorlabels[1] = desc151;
					
                var list22 = colorLables2List( colorlabels);
            desc148.putList( idClrs, list22 );
			
			var idTrns = charIDToTypeID( "Trns" );
			var desc153 = transparent2desc( 0, 1);
			var desc154 = transparent2desc( 1, 1);
			var transparentlabels = new Array( desc153, desc154);
			var list23 = transparentLables2List( transparentlabels);
			
            desc148.putList( idTrns, list23 );
        var idGrdn = charIDToTypeID( "Grdn" );
        desc147.putObject( idGrad, idGrdn, desc148 );
    var idGrdn = charIDToTypeID( "Grdn" );
    desc146.putObject( idUsng, idGrdn, desc147 );
executeAction( idMk, desc146, DialogModes.NO );
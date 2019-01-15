var BasicPath = "C:\\Users\\RedContritio\\Documents\\Adobe Scripts\\PhotoshopScripts\\003 FindEdges\\";
var samplesFolder = Folder(BasicPath+"img");

var fileList = samplesFolder.getFiles ();

for( var i=0; i<fileList.length; i++)
{
	if( fileList[i] instanceof File)
	{
		open( fileList[i]);
		var layer = app.activeDocument.activeLayer;
//		layer.applyStyle ( stringIDToTypeID("FndE"));
		var idFndE = charIDToTypeID( "FndE" );
		executeAction( idFndE, undefined, DialogModes.NO );
		
		SaveAsPngWithName(BasicPath+"dst\\"+i+".png");
//		app.activeDocument.close ();
		CloseNowDocumentWithoutSaving();
	}
}

function SaveAsPngWithName( name)
{
	var idsave = charIDToTypeID( "save" );
	var desc0 = new ActionDescriptor();
	var idAs = charIDToTypeID( "As  " );
	var desc1 = new ActionDescriptor();
	var idPGIT = charIDToTypeID( "PGIT" );
	var idPGIT = charIDToTypeID( "PGIT" );
	var idPGIN = charIDToTypeID( "PGIN" );
	desc1.putEnumerated( idPGIT, idPGIT, idPGIN );
	var idPNGf = charIDToTypeID( "PNGf" );
	var idPNGf = charIDToTypeID( "PNGf" );
	var idPGAd = charIDToTypeID( "PGAd" );
	desc1.putEnumerated( idPNGf, idPNGf, idPGAd );
	var idCmpr = charIDToTypeID( "Cmpr" );
	desc1.putInteger( idCmpr, 9 );
	var idPNGF = charIDToTypeID( "PNGF" );
	desc0.putObject( idAs, idPNGF, desc1 );
	var idIn = charIDToTypeID( "In  " );
	desc0.putPath( idIn, new File( name) );
	var idDocI = charIDToTypeID( "DocI" );
	desc0.putInteger( idDocI, 140 );
	var idCpy = charIDToTypeID( "Cpy " );
	desc0.putBoolean( idCpy, true );
	var idsaveStage = stringIDToTypeID( "saveStage" );
	var idsaveStageType = stringIDToTypeID( "saveStageType" );
	var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
	desc0.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
	executeAction( idsave, desc0, DialogModes.NO );
}

function CloseNowDocumentWithoutSaving()
{
	var idCls = charIDToTypeID( "Cls " );
	var desc = new ActionDescriptor();
	var idSvng = charIDToTypeID( "Svng" );
	var idYsN = charIDToTypeID( "YsN " );
	var idN = charIDToTypeID( "N   " );
	desc.putEnumerated( idSvng, idYsN, idN );
	executeAction( idCls, desc, DialogModes.NO );
};
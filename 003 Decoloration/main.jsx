var samplesFolder = Folder("C:\\Users\\RedContritio\\Documents\\Adobe Scripts\\PhotoshopScripts\\003 Decoloration\\img");

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
		
		break;
		
		app.activeDocument.close();
		break;
	}
}
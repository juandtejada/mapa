var wms_layers = [];


        var lyr_Mapanuevo_0 = new ol.layer.Tile({
            'title': 'Mapa nuevo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Casas_1 = new ol.format.GeoJSON();
var features_Casas_1 = format_Casas_1.readFeatures(json_Casas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casas_1.addFeatures(features_Casas_1);
var lyr_Casas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casas_1, 
                style: style_Casas_1,
                interactive: true,
                title: '<img src="styles/legend/Casas_1.png" /> Casas'
            });
var format_Arboleda_2 = new ol.format.GeoJSON();
var features_Arboleda_2 = format_Arboleda_2.readFeatures(json_Arboleda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arboleda_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arboleda_2.addFeatures(features_Arboleda_2);
var lyr_Arboleda_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arboleda_2, 
                style: style_Arboleda_2,
                interactive: true,
                title: '<img src="styles/legend/Arboleda_2.png" /> Arboleda'
            });
var format_Carretera_3 = new ol.format.GeoJSON();
var features_Carretera_3 = format_Carretera_3.readFeatures(json_Carretera_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carretera_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carretera_3.addFeatures(features_Carretera_3);
var lyr_Carretera_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carretera_3, 
                style: style_Carretera_3,
                interactive: true,
    title: 'Carretera<br />\
    <img src="styles/legend/Carretera_3_0.png" /> Calle Secundaria<br />\
    <img src="styles/legend/Carretera_3_1.png" /> Carretera Principal<br />'
        });
var format_Rios_4 = new ol.format.GeoJSON();
var features_Rios_4 = format_Rios_4.readFeatures(json_Rios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_4.addFeatures(features_Rios_4);
var lyr_Rios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_4, 
                style: style_Rios_4,
                interactive: true,
                title: '<img src="styles/legend/Rios_4.png" /> Rios'
            });

lyr_Mapanuevo_0.setVisible(true);lyr_Casas_1.setVisible(true);lyr_Arboleda_2.setVisible(true);lyr_Carretera_3.setVisible(true);lyr_Rios_4.setVisible(true);
var layersList = [lyr_Mapanuevo_0,lyr_Casas_1,lyr_Arboleda_2,lyr_Carretera_3,lyr_Rios_4];
lyr_Casas_1.set('fieldAliases', {'id': 'id', });
lyr_Arboleda_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_Carretera_3.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Longitud': 'Longitud', });
lyr_Rios_4.set('fieldAliases', {'id': 'id', 'Longitud': 'Longitud', });
lyr_Casas_1.set('fieldImages', {'id': '', });
lyr_Arboleda_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Carretera_3.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Rios_4.set('fieldImages', {'id': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Casas_1.set('fieldLabels', {'id': 'no label', });
lyr_Arboleda_2.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Perimetro': 'no label', });
lyr_Carretera_3.set('fieldLabels', {'id': 'no label', 'Tipo': 'no label', 'Longitud': 'no label', });
lyr_Rios_4.set('fieldLabels', {'id': 'no label', 'Longitud': 'no label', });
lyr_Rios_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
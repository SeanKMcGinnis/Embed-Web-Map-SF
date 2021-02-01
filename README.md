# Esri & Salesforce Integration Examples

There are many ways to integrate ArcGIS components with Salesforce and Salesforce data. The repository contain examples on how to integrate ArcGIS and Salesforce.

![image](https://user-images.githubusercontent.com/3063562/106500469-dd401f00-648f-11eb-9b59-d55b549a1779.png)

## Embed Web Map in Salesforce Lightning Web Component

Example to embed an ArcGIS Online Web Map in a Lightning Web Component for use in Salesforce Lightning pages.

#### Additional Resources

##### Esri
[Embed maps, apps, and groups](https://doc.arcgis.com/en/arcgis-online/share-maps/embed-maps-groups.htm)

[Use URL parameters to modify embedded maps](https://doc.arcgis.com/en/arcgis-online/reference/embed-map-parameters.htm)

##### Salesforce
[Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction)

[Lightning Web Component Configuration File Tags](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags)

## Embed an ArcGIS App in Salesforce Lightning Web Component

Example to embed an ArcGIS Online app in a Lightning Web Component for use in Salesforce Lightning pages.

#### Additional Resources

##### Esri
[Embed maps, apps, and groups](https://doc.arcgis.com/en/arcgis-online/share-maps/embed-maps-groups.htm)

[Use URL parameters to modify embedded maps](https://doc.arcgis.com/en/arcgis-online/reference/embed-map-parameters.htm)

##### Salesforce
[Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction)

[Lightning Web Component Configuration File Tags](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags)

## Esri Leaflet

More complex workflows, often require custom capabilities that cannot be met with configurable components. You may wonder why we are using the [Esri Leaflet](https://github.com/Esri/esri-leaflet) JavaScript plugin for [Leaflet](https://leafletjs.com/) instead of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/). Salesforce has a file size cap for static resources and there is not an easy way to reduce the file size of the ArcGIS API for JavaScript to meet the 25MB file size. The Esri Leaflet plugin allows us to access ArcGIS System capabilities, including:

- Basemaps
- Feature Services
- Tiled Map Services
- Dynamic Maps Services
- Image Services
- [Geocoding with an additional plugin](https://github.com/Esri/esri-leaflet-geocoder)
- [Geoprocessing Services with an additional plugin](https://github.com/jgravois/esri-leaflet-gp)


To make the example work, the JavaScript libraries need to be loaded into your Salesforce instance as a Static Resource

#### Additional Resources

##### Esri Resources

##### Salesforce

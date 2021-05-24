# Esri & Salesforce Integration Examples

There are many ways to integrate ArcGIS components into Salesforce to leverage Salesforce data. The repository contains examples on three specific methods to integrate ArcGIS and Salesforce:

- Embed an ArcGIS Online Web Map as a Salesforce Lightning Web Component
- Embed an ArcGIS App as a Salesforce Lightning Web Component
- Esri Leaflet JavaScript Plugin
- JS Force JavaScript Library and ArcGIS Platform

![image](https://user-images.githubusercontent.com/3063562/106500469-dd401f00-648f-11eb-9b59-d55b549a1779.png)

## Embed Web Map in Salesforce Lightning Web Component

Example to embed an ArcGIS Online Web Map in a Lightning Web Component for use in Salesforce Lightning pages.

![image](https://user-images.githubusercontent.com/3063562/107782164-be0a8280-6d16-11eb-98f0-81987c351746.png)

#### Additional Resources

##### Esri
[Embed maps, apps, and groups](https://doc.arcgis.com/en/arcgis-online/share-maps/embed-maps-groups.htm)

[Use URL parameters to modify embedded maps](https://doc.arcgis.com/en/arcgis-online/reference/embed-map-parameters.htm)

##### Salesforce
[Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction)

[Lightning Web Component Configuration File Tags](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags)

## Embed an ArcGIS App in Salesforce Lightning Web Component

Example to embed an ArcGIS Online app in a Lightning Web Component for use in Salesforce Lightning pages.

![image](https://user-images.githubusercontent.com/3063562/107782172-c06cdc80-6d16-11eb-8975-b7539ed1d4dd.png)

#### Additional Resources

##### Esri
[Embed maps, apps, and groups](https://doc.arcgis.com/en/arcgis-online/share-maps/embed-maps-groups.htm)

[Use URL parameters to modify embedded maps](https://doc.arcgis.com/en/arcgis-online/reference/embed-map-parameters.htm)

##### Salesforce
[Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction)

[Lightning Web Component Configuration File Tags](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags)

## Esri Leaflet

More complex workflows, often require custom capabilities that cannot be met with configurable components. To accomplish this, we are using the [Esri Leaflet](https://github.com/Esri/esri-leaflet) JavaScript plugin for [Leaflet](https://leafletjs.com/).

![image](https://user-images.githubusercontent.com/3063562/107782159-bb0f9200-6d16-11eb-994f-07a1018edfef.png)

You may wonder why we are using the [Esri Leaflet](https://github.com/Esri/esri-leaflet) JavaScript plugin for [Leaflet](https://leafletjs.com/) instead of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/). Salesforce has a file size cap for static resources and there is not an easy way to reduce the file size of the ArcGIS API for JavaScript to meet the 25MB file size. The Esri Leaflet plugin is small enough to upload as a static resource and allows us to access ArcGIS System capabilities, including:

- Basemaps
- Feature Services
- Tiled Map Services
- Dynamic Maps Services
- Image Services
- [Geocoding with an additional plugin](https://github.com/Esri/esri-leaflet-geocoder)
- [Geoprocessing Services with an additional plugin](https://github.com/jgravois/esri-leaflet-gp)

### Implementation Steps

1. Place all of the files in a single directory and compress them into a single ZIP files
2. Upload the ZIP file to Salesforce as a Static Resources
3. Reference the item as a Static Resource in the Lightning Web Component JS files
4. In a [renderedCallback](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_rendered) hook,use the [loadStyle and loadScript](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.js_third_party_library) methods to load the necessary components
5. Add the necessary URL's to the CSP Trusted Sites

#### Additional Resources
[Leaflet](https://leafletjs.com/)

##### Esri Resources
[Esri Leaflet Plugin](https://github.com/Esri/esri-leaflet)

##### Salesforce
[Static Resources](https://help.salesforce.com/articleView?id=sf.pages_static_resources.htm&type=5)
[renderedCallback](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_rendered)
[Platform Resource Loader](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.js_third_party_library)
[Content Security Policy](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_csp.htm)

## JS Force & ArcGIS Platform Integration with Leaflet JS

*Documentation to be written*

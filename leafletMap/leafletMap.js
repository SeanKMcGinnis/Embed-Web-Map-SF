import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
import EsriLeaflet from '@salesforce/resourceUrl/EsriLeaflet';

export default class LeafletMap extends LightningElement {
    leafletInitialzed = false;

    renderedCallback(){
        if(this.leafletInitialzed){
            return;
        }
        this.leafletInitialzed = true;

        Promise.all([
            loadStyle(this, EsriLeaflet + '/leaflet/leaflet.css'),
            loadScript(this, EsriLeaflet + '/leaflet/leaflet.js'),
            loadScript(this, EsriLeaflet + '/leaflet/esri-leaflet.js')
        ])    
        .then(() => {
            this.initializeMap();
        })
        .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Leaflet',
                    message: error.message,
                    variant: 'error'
                })
            );
        })
    }    
    initializeMap(){
        console.log('>>>>Initialized: Houston, we have Leaflet!');
        var map = L.map(this.template.querySelector(".map-root")).setView([37.75, -122.23], 10);
        console.log('>>>>Initialized: map built');
        L.esri.basemapLayer('Topographic').addTo(map);
    }
}
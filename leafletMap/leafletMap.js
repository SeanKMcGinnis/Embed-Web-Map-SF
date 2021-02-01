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
        var map = L.map(this.template.querySelector(".map-root")).setView([34.05, -117.20], 13);
        L.esri.basemapLayer('Topographic').addTo(map);
    }
}
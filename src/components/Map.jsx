import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to install leaflet and import its CSS

/*
  CSS Styles
  It's recommended to add these styles to a separate CSS file 
  (e.g., MapComponent.css) and import it into this component.
*/
const styles = `
    @keyframes pulse-ring {
        0% { transform: scale(0.8); opacity: 1; }
        80%, 100% { transform: scale(2.5); opacity: 0; }
    }

    .custom-div-icon { 
        background: none; 
        border: none; 
    }
    
    .pulsing-marker { 
        position: relative; 
        width: 8px; 
        height: 8px; 
    }

    .pulsing-marker::before {
        content: ''; 
        position: relative; 
        display: block;
        width: 100%; 
        height: 100%;
        background-color: #ff5722; 
        border-radius: 50%; 
        z-index: 2;
    }

    .pulsing-marker::after {
        content: ''; 
        position: absolute; 
        left: 0; 
        top: 0;
        width: 100%; 
        height: 100%;
        background-color: #ff5722; 
        border-radius: 50%;
        animation: pulse-ring 1.75s ease-out infinite;
        z-index: 1;
    }
    
    .port-label {
        background: transparent;
        border: none;
        box-shadow: none;
        color: #1a202c;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
    }
    
    .port-label.leaflet-tooltip-left::before,
    .port-label.leaflet-tooltip-right::before {
        border-left-color: transparent;
        border-right-color: transparent;
    }
`;

// --- Port Data ---
const ports = [
    { name: "Mumbai Port", coords: [18.9647, 72.8258], labelOptions: { direction: 'left', offset: [-5, -5] } },
    { name: "Jawaharlal Nehru Port", coords: [18.9600, 72.9450], labelOptions: { direction: 'left', offset: [-5, 5] } },
    { name: "Kandla Port", coords: [23.0300, 70.2200] },
    { name: "Kochi Port", coords: [9.9500, 76.2500] },
    { name: "New Mangalore Port", coords: [12.9141, 74.8114] },
    { name: "Marmagao Port", coords: [15.4000, 73.8000] },
    { name: "Chennai Port", coords: [13.0843, 80.2913] },
    { name: "Visakhapatnam Port", coords: [17.6868, 83.2185] },
    { name: "Paradeep Port", coords: [20.2631, 86.6713] },
    { name: "Haldia Port", coords: [22.0257, 88.0673], labelOptions: { direction: 'right', offset: [5, 5] } },
    { name: "Kolkata Port", coords: [22.5726, 88.3639], labelOptions: { direction: 'right', offset: [5, -5] } },
    { name: "Tuticorin Port", coords: [8.7642, 78.1348], labelOptions: { direction: 'right', offset: [5, 0] } }
];

// --- Map Component ---
function MapComponent() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;

        const map = L.map(mapContainerRef.current, {
            zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false,
            touchZoom: false, boxZoom: false, keyboard: false,
            dragging: false, attributionControl: false
        });
        mapRef.current = map;

        map.createPane('portsPane');
        map.getPane('portsPane').style.zIndex = 650;

        let geojsonLayer;

        const style = (feature) => ({ fillColor: '#bde0fe', weight: 1, opacity: 1, color: 'white', fillOpacity: 1 });
        const highlightFeature = (e) => {
            e.target.setStyle({ fillColor: '#003B73' });
            e.target.bringToFront();
        };
        const resetHighlight = (e) => {
            geojsonLayer.resetStyle(e.target);
        };
        const onEachFeature = (feature, layer) => {
            layer.on({ mouseover: highlightFeature, mouseout: resetHighlight });
        };

        const addPortMarkers = () => {
            ports.forEach(port => {
                const pulsingIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div class="pulsing-marker"></div>`,
                    iconSize: [8, 8],
                    iconAnchor: [4, 4]
                });

                const marker = L.marker(port.coords, {
                    icon: pulsingIcon,
                    pane: 'portsPane'
                }).addTo(map);

                let direction;
                let offset;

                if (port.labelOptions) {
                    direction = port.labelOptions.direction;
                    offset = port.labelOptions.offset;
                } else {
                    direction = port.coords[1] < 79 ? 'left' : 'right';
                    offset = direction === 'left' ? [-5, 0] : [5, 0];
                }

                marker.bindTooltip(port.name, {
                    permanent: true,
                    direction: direction,
                    className: 'port-label',
                    offset: offset,
                    pane: 'portsPane'
                });
            });
        };

        const geoJsonUrl = 'https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@bcbcba3/geojson/india.geojson';
        fetch(geoJsonUrl)
            .then(response => response.json())
            .then(data => {
                geojsonLayer = L.geoJson(data, { style: style, onEachFeature: onEachFeature }).addTo(map);
                const bounds = geojsonLayer.getBounds();
                map.fitBounds(bounds);
                addPortMarkers();
            })
            .catch(error => console.error('Error fetching GeoJSON data:', error));
        
        return () => {
            map.remove();
            mapRef.current = null;
        };

    }, []);

    return <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '100%' }}></div>;
}

// --- Main App Component ---
function App() {
    return (
        <>
            <style>{styles}</style>
            <div style={{ width: '100vw', height: '100vh' }}>
                <MapComponent />
            </div>
        </>
    );
}

export default App;

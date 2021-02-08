import * as Location from 'expo-location';

const tenMetersWidthDegrees = 0.0001;


const getLoction = increment =>{
    return{
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 127.071791 +increment*tenMetersWidthDegrees,
            latitude: 37.553413 + increment*tenMetersWidthDegrees
        }
    };
};

let counter =0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
      watchId: Location._getCurrentWatchId(),
      location: getLoction(counter)  
    });
    counter++;
},1000);
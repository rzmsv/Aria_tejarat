function initMap() {
const options = {
    zoom: 5,
    center:{lat: 32.866669, lng: 51.566666 }
};
const map = new google.maps.Map(document.getElementById("map"),options);
const marker = new google.maps.Marker({
    position:{lat: 32.866669, lng: 51.566666 } ,
    map: map,
});
}

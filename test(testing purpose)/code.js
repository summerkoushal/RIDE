function initMap() {
  const tutorialsPoint_office = {
    lat: 17.43827944602866,
    lng: 78.39530424154626,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17.56,
    center: tutorialsPoint_office,
  });
}

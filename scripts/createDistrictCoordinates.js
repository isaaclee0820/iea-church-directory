const fs = require("fs");

const districts = require("../data/districts.json");

const existing = require("../data/districtCoordinates.json");


const result = districts.map((district) => {

  const found = existing.find(
    (item) =>
      item.district === district.district &&
      item.region === district.region
  );


  if (found) {
    return found;
  }


  return {
    region: district.region,
    district: district.district,
    lat: 0,
    lng: 0
  };

});


fs.writeFileSync(
  "data/districtCoordinates.json",
  JSON.stringify(
    result,
    null,
    2
  )
);


const missing =
  result.filter(
    (item)=>
      item.lat === 0
  );


console.log(
  `✅ ${result.length} districts created`
);

console.log(
  `⚠️ ${missing.length} districts need coordinates`
);
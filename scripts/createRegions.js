const fs = require("fs");

const churches = require("../data/churches.json");

const regions = {};

churches.forEach((church) => {
  const region = church.region;

  if (!regions[region]) {
    regions[region] = {
      region,
      churchCount: 0,
    };
  }

  regions[region].churchCount++;
});

const output = Object.values(regions);

fs.writeFileSync(
  "data/regions.json",
  JSON.stringify(output, null, 2)
);

console.log(
  `✅ ${output.length} regions created`
);
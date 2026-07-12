const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile(
  "INTERNATIONAL EVANGELISM ASSEMBLIES - DISCIPLES CHURCH DIRECTORY 2026.xlsx"
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

let churches = [];
let districts = {};

let currentRegion = "";

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];

  if (!row.length) continue;

if (row[2]) currentRegion = String(row[2]).trim();

const district = String(row[3] || "").trim();
let church = String(row[4] || "").trim();
const pastor = String(row[5] || "").trim();

  if (!district) continue;

if (!church) {
  church = district;
}

  churches.push({
    id: churches.length + 1,
    region: currentRegion,
    district,
    name: church,
    pastor,
  });

  const key = `${currentRegion}|${district}`;

  if (!districts[key]) {
    districts[key] = {
      region: currentRegion,
      district,
      churchCount: 0,
    };
  }

  districts[key].churchCount++;
}

fs.writeFileSync(
  "data/churches.json",
  JSON.stringify(churches, null, 2)
);

fs.writeFileSync(
  "data/districts.json",
  JSON.stringify(Object.values(districts), null, 2)
);

console.log(`✅ ${churches.length} churches exported.`);
console.log(`✅ ${Object.keys(districts).length} districts exported.`);
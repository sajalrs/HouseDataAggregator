const fs = require("fs");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors());
app.use(express.json());

const toWrite = `"Address","City","State","Zip Code","Price","Total Monthly Cost","Estimated Rental Value","Mortgage-Principal & Interest","Property Taxes","Home Insurance","HOA Fees","Cost of Utilities","Beds","Baths","Total Livable Area","Type","Year Built","Lot Size Area","Heating","Cooling","Pool","County/Parish","Subdivision","Levels","Interior Highlights","Flooring","Security Features","Window Features","Appliances","Property Type","Style","Ownership Type","Parking Features","Sewer","Water Source","Utilities","Construction Materials","Roof","Foundation Details","Property Condition","HOA Fees Includes","School District","Walk","Bike","Transit","Link"\n`;
  
fs.writeFile("./one-home.csv", toWrite, function (err, _) {
  if (err) {
    return console.log(err);
  }
});


app.post("/", async (req, res) => {


  const json = req.body;
  const zipCode = json?.["Zip Code"].split("-")?.[0];

  const estRent = await fetch("https://www.rentdata.org/data/zip", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrf-token": "UovG5d833DmiGafF9JOW0ysBttOtoL6RrYqpRU1i",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.rentdata.org/lookup?zip=18051",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `size=fmr${json?.["Beds"]}&zip=${zipCode}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(res => res.json()).then(data => data[`fmr${json?.["Beds"]}`]).catch(_ => json?.["Total Monthly Cost"]);
  const toWrite = `"${json?.Address}","${json?.City}","${json?.State}","${json?.["Zip Code"]}","${json?.["Price"]}","${json?.["Total Monthly Cost"]}","${estRent}","${json?.["Mortgage-Principal & Interest"]}","${json?.["Property Taxes"]}","${json?.["Home Insurance"]}","${json?.["HOA Fees"]}","${json?.["Cost of Utilities"]}","${json?.["Beds"]}","${json?.["Baths"]}","${json?.["Total Livable Area"]}","${json?.["Type"]}","${json?.["Year Built"]}","${json?.["Lot Size Area"]}","${json?.["Heating"]}","${json?.["Cooling"]}","${json?.["Pool"]}","${json?.["County/Parish"]}","${json?.["Subdivision"]}","${json?.["Levels"]}","${json?.["Interior Highlights"]}","${json?.["Flooring"]}","${json?.["Security Features"]}","${json?.["Window Features"]}","${json?.["Appliances"]}","${json?.["Property Type"]}","${json?.["Style"]}","${json?.["Ownership Type"]}","${json?.["Parking Features"]}","${json?.["Sewer"]}","${json?.["Water Source"]}","${json?.["Utilities"]}","${json?.["Construction Materials"]}","${json?.["Roof"]}","${json?.["Foundation Details"]}","${json?.["Property Condition"]}","${json?.["HOA Fees Includes"]}","${json?.["School District"]}","${json?.["Walk"]}","${json?.["Bike"]}","${json?.["Transit"]}","${json?.["Link"]}"\n`;

  fs.appendFile("./one-home.csv", toWrite, function (err, _) {
    if (err) {
      return console.log(err);
    }
  });

  res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));

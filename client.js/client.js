const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
 
sleep(5000).then(() => {
  doIt();
});

function doIt() {
  var addressLine1 =
    document?.getElementsByClassName("address-line-one")?.[0]?.outerText;
  var price = document
    ?.getElementsByClassName("price")?.[0]
    ?.outerText.slice(1);

  var addressLine2 = document
    ?.getElementsByClassName("address-line-two")?.[0]
    ?.outerText?.split(", TX ");
  var city = addressLine2?.[0];
  var zip = addressLine2?.[1];
  var beds = document?.querySelector(`[data-qa="beds"]`)?.outerText.substr(-1);
  var baths = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[1]?.outerText;
  var type = document
    ?.querySelector(`[data-qa="PropertySubType-feature"]`)
    ?.getElementsByClassName("detail")?.[0]?.outerText;
  var yearBuilt = document
    ?.querySelector(`[data-qa="YearBuilt-feature"]`)
    ?.getElementsByClassName("detail")?.[0]?.outerText;
  var lotSize = document
    ?.querySelector(`[data-qa="LotSizeAreaOrRange-feature"]`)
    ?.getElementsByClassName("detail")?.[0]
    ?.outerText.split(" ")[0];
  var pool = document
    ?.querySelector(`[data-qa="PoolFeatures-feature"]`)
    ?.getElementsByClassName("detail")?.[0]?.outerText;
  var county = document
    ?.querySelector(`[data-qa="CountyOrParish-feature"]`)
    ?.getElementsByClassName("detail")?.[0]?.outerText;
  var subDivision = document
    ?.querySelector(`[data-qa="SubdivisionName-feature"]`)
    ?.getElementsByClassName("detail")?.[0]?.outerText;
  var levels = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[3]?.outerText;
  var flooring = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[5]?.outerText;
  var security = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[6]?.outerText;
  var windowFeature = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[7]?.outerText;
  var appliances = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[8]?.outerText;
  var style = document
    ?.getElementsByClassName("property-details")?.[1]
    ?.getElementsByTagName("dd")?.[1]?.outerText;
  var ownershipType = document
    ?.getElementsByClassName("property-details")?.[1]
    ?.getElementsByTagName("dd")?.[2]?.outerText;
  var parking = document
    ?.getElementsByClassName("property-details")?.[1]
    ?.getElementsByTagName("dd")?.[5]?.outerText;
  var heating = document
    ?.getElementsByClassName("property-details")?.[2]
    ?.getElementsByTagName("dd")?.[0]?.outerText;
  var cooling = document
    ?.getElementsByClassName("property-details")?.[2]
    ?.getElementsByTagName("dd")?.[1]?.outerText;
  var sewer = document
    ?.getElementsByClassName("property-details")?.[2]
    ?.getElementsByTagName("dd")?.[2]?.outerText;
  var water = document
    ?.getElementsByClassName("property-details")?.[2]
    ?.getElementsByTagName("dd")?.[3]?.outerText;
  var utilities = document
    ?.getElementsByClassName("property-details")?.[2]
    ?.getElementsByTagName("dd")?.[4]?.outerText;
  var interiorHighlights = document
    ?.getElementsByClassName("property-details")?.[0]
    ?.getElementsByTagName("dd")?.[4]?.outerText;

  var constructionMaterials = document
    ?.getElementsByClassName("property-details")?.[3]
    ?.getElementsByTagName("dd")?.[0]?.outerText;

  var roof = document
    ?.getElementsByClassName("property-details")?.[3]
    ?.getElementsByTagName("dd")?.[3]?.outerText;
  var foundation = document
    ?.getElementsByClassName("property-details")?.[3]
    ?.getElementsByTagName("dd")?.[4]?.outerText;
  var propertyCondition = document
    ?.getElementsByClassName("property-details")?.[3]
    ?.getElementsByTagName("dd")?.[5]?.outerText;

  var HOABenefits = document
    ?.getElementsByClassName("property-details")?.[4]
    ?.getElementsByTagName("dd")?.[3]?.outerText;

  var ISD = document
    ?.getElementsByClassName("property-details")?.[8]
    ?.getElementsByTagName("dd")?.[3]?.outerText;

  var walk = document?.getElementsByClassName("score")?.[0]?.outerText;
  var bike = document?.getElementsByClassName("score")?.[1]?.outerText;
  var transit = document?.getElementsByClassName("score")?.[2]?.outerText;

  var propertyType = document
    ?.getElementsByClassName("property-details")?.[1]
    ?.getElementsByTagName("dd")?.[0]?.outerText;
  var area = document
    ?.querySelector(`[data-qa="sqft`)
    ?.outerText.replace(" sqft", "");

  document?.querySelector(`[data-qa="monthly-breakdown-link"]`)?.click();
  var estPayment = document
    ?.getElementsByClassName("total-price")?.[0]
    ?.outerText.slice(1)
    .replace("/mo", "");
  var mortgage = document
    ?.querySelector(`[title="Mortgage - Principal & Interest"]`)
    ?.getElementsByClassName("price")?.[0]
    ?.outerText?.slice(1)
    ?.replace(" /mo", "");
  var taxes = document
    ?.querySelector(`[title="PROPERTY TAXES"]`)
    ?.getElementsByClassName("price")?.[0]
    ?.outerText?.slice(1)
    ?.replace(" /mo", "");
  var insurance = document
    ?.querySelector(`[title="HOME INSURANCE"]`)
    ?.getElementsByClassName("price")?.[0]
    ?.outerText?.slice(1)
    ?.replace(" /mo", "");
  var costOfUtilities = document
    ?.querySelector(`[title="HOA FEES"]`)
    ?.getElementsByClassName("price")?.[0]
    ?.outerText?.slice(1)
    ?.replace(" /mo", "");
  var HOA = document
    ?.querySelector(`[title="Utilities"]`)
    ?.getElementsByClassName("price")?.[0]
    ?.outerText?.slice(1)
    ?.replace(" /mo", "");
  document
    ?.querySelector(`[data-qa="close-button"]`)
    ?.getElementsByTagName("button")?.[0]
    ?.click();

  var url = window?.location?.href;
  var data = JSON.stringify({
    Address: addressLine1,
    City: city,
    State: "TX",
    "Zip Code": zip,
    Price: price,
    "Total Monthly Cost": estPayment,
    "Mortgage-Principal & Interest": mortgage,
    "Property Taxes": taxes,
    "Home Insurance": insurance,
    "HOA Fees": HOA,
    "Cost of Utilities": costOfUtilities,
    Beds: beds,
    Baths: baths,
    "Total Livable Area": area,
    Type: type,
    "Year Built": yearBuilt,
    "Lot Size Area": lotSize,
    Heating: heating,
    Cooling: cooling,
    Pool: pool,
    "County/Parish": county,
    Subdivision: subDivision,
    Levels: levels,
    "Interior Highlights": interiorHighlights,
    Flooring: flooring,
    "Security Features": security,
    "Window Features": windowFeature,
    Appliances: appliances,
    "Property Type": propertyType,
    Style: style,
    "Ownership Type": ownershipType,
    "Parking Features": parking,
    Sewer: sewer,
    "Water Source": water,
    Utilities: utilities,
    "Construction Materials": constructionMaterials,
    Roof: roof,
    "Foundation Details": foundation,
    "Property Condition": propertyCondition,
    "HOA Fees Includes": HOABenefits,
    "School District": ISD,
    Walk: walk,
    Bike: bike,
    Transit: transit,
    Link: url,
  });

  // console.log("Hello");
  // console.log(data);
  chrome.runtime.sendMessage(
    {
      data: data,
    },
    function (response) {
      debugger;
      if (response != undefined && response != "") {
        callback(response);
      } else {
        debugger;
        callback(null);
      }
    }
  );

  // your code
}

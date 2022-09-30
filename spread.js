var details = {
  names: "nodejs",
  content: "spreadoperator",
  price: { gst: 18, tax: "paid" },
};
details.company = "proclink";
console.log(details);
var branch = "branch";
details[branch] = "hyd";
console.log(details);
console.log({ ...details }, { type: "IT" });
var details1 = { ...details, version: 90 };
console.log(details1);
console.log(...details,details.price(total:900,...details.price))

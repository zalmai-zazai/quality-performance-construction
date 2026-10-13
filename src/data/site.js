import { Bath, Hammer, Droplets } from "lucide-react";
export const SITE = {
  name: "Quality Performance Construction",
  // NOTE: Google lists (206) 755-1423, Facebook lists (203) 755-1423. Confirm the right one.
  phone: "(206) 755-1423", tel: "+12067551423",
  email: "qualityperformanceconstruction@gmail.com",
  address: ["3640 S 272nd St", "Kent, WA 98032"], plusCode: "9P57+67 Kent, Washington",
  directions: "https://www.google.com/maps/dir/?api=1&destination=3640+S+272nd+St,+Kent,+WA+98032",
  closes: "Closes 8 PM", rating: "5.0", reviewCount: 13,
  social: { instagram: "https://www.instagram.com/qualityperformanceco", facebook: "https://www.facebook.com/profile.php?id=61582062329101" },
};
export const NAV = ["Services","Process","Projects","Reviews","Area","FAQ"];
export const SERVICES = [
  { name:"Bathroom Remodels", icon:Bath, desc:"Full and partial bathroom remodels, planned around how you actually use the space.", points:["Tile, tub and shower work","Vanities, fixtures and finishes","Clear scope before work starts"] },
  { name:"Structural Repairs", icon:Hammer, desc:"Repairs that restore the strength and safety of your home's framing and structure.", points:["Assessment of the problem","Repair of damaged framing","Finished to a clean standard"] },
  { name:"Water Damage Repairs", icon:Droplets, desc:"Fix the damage water leaves behind, from soaked drywall to rotted subfloor.", points:["Find and address the source","Remove and replace damaged materials","Rebuild and finish the area"], urgent:true },
];
export const PROCESS = [
  ["Tell us what's wrong", "Call or send the form. Describe the project and we'll follow up."],
  ["Walkthrough & estimate", "We look at the work in person and put the scope and cost in writing."],
  ["We do the work", "Quality workmanship, with updates along the way so you're never guessing."],
  ["Final walkthrough", "We go over the finished job together before we call it done."],
];
export const REVIEWS = [1,2,3].map(() => ({ name:"Customer name", text:"Placeholder: paste a real Google review here." })); // TODO real reviews
export const COUNTIES = ["King County","Pierce County"];
export const FAQ = [
  ["How do I get an estimate?", "Call us or fill out the form below with a few details about the project. We'll follow up to schedule a walkthrough."],
  ["Which areas do you serve?", "We're based in Kent and serve King and Pierce County."],
  ["I have water damage. How fast can you help?", "Call us right away at the number above so we can talk through the situation and next steps."],
  ["Can you handle both repair and rebuild?", "Yes. We handle the damage repair and the rebuild, so you deal with one contractor."],
];

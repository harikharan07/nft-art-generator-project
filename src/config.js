const { MODE } = require("./blendMode.js");
const description =
  "nft art generator project is a project build for buidl it hackathon where you can create nft collection by coding";


const layerConfigurations = [
 
  
  {
    growEditionSizeTo: 5, 
    layersOrder: [
      { name: "background" },
      { name: "upper stomach" },
      { name: "stomach" },
      { name: "hips" },
      { name: "obliques" },
      { name: "arm joint" },
      { name: "head" },
      { name: "upper neck" },
      { name: "neck" },
      { name: "body" },
      { name: "left fore arm" },
      { name: "right arm" },
      { name: "left arm" },
      { name: "hand shadow" },
      { name: "hands" },
      { name: "right fore arm" },
      { name: "ear base" },
      { name: "ear" },
      { name: "mouth" },
      { name: "eye base" },
      { name: "oculus" },
      
     
      { name: "antena" },
      { name: "shoulders" },
      { name: "shoulders cover" },
      { name: "elbows" },
      { name: "elbows cover" },
     
      { name: "chest" },
      { name: "outline" },
      


      


    ],
  },
]; // Now you can go and rename the pngs to which ever number you want them to be...
            // ... to make the order more mixed. Remember even tho it's not RNG now, it is to the buyer!
const format = {
  width: 1200, // change this to the dimension your NFT was created with in PSD
  height: 1200,
};

const background = {
  generate: true,
  brightness: "100%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};



this project is created for buidl it hackathon.
Created nft art  generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js and yarn installed.

## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/tarunwalia12345/nft-art-generator-project
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install // I prefer NPM over Yarn
```

## Usage ℹ️

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. You can name the assets anything as long as it has a rarity weight attached in the file name like so: `example element#70.png`. You can optionally change the delimiter `#` to anything you would like to use in the variable `rarityDelimiter` in the `src/config.js` file.

Once you have all your layers, go into `src/config.js` and update the `layerConfigurations` objects `layersOrder` array to be your layer folders name in order of the back layer to the front layer.


Example :_ if you were creating a portrait design you might have background,upper stomach ,stomach,hips , etc so your layerorder would look like this 

```js
const layerConfigurations = [
  {
    growEditionSizeTo: 10, // Example to show you the inifite amount of possibilities.
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
];
```

you can put any layers here the above one is just the example to show you !

Here is a list of the different blending modes that you can optionally use.

```js
const MODE = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-out",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  colorDodge: "color-dodge",
  colorBurn: "color-burn",
  hardLight: "hard-light",
  softLight: "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
};
```

When you are all ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory:

```sh
npm run build
```

or

```sh
node index.js
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this:

```json
{
  "dna": "2f1e8102d0aa761c6002a7a2746943fc21874f47",
  "name": "#1",
  "description": "nft art generator project is a project build for buidl it hackathon where you can create nft collection by coding",
  "image": "undefined/1.png",
  "edition": 1,
  "date": 1639244617735,
  "attributes": [
    {
      "trait_type": "background",
      "value": "background4"
    },
    {
      "trait_type": "upper stomach",
      "value": "upperStomach2"
    },
    {
      "trait_type": "stomach",
      "value": "STOMACH1"
    },
    {
      "trait_type": "hips",
      "value": "hips2"
    },
    {
      "trait_type": "obliques",
      "value": "obliques1"
    },
    {
      "trait_type": "arm joint",
      "value": "armjoint2"
    },
    {
      "trait_type": "head",
      "value": "head1"
    },
    {
      "trait_type": "upper neck",
      "value": "upperneck2"
    },
    {
      "trait_type": "neck",
      "value": "neck2"
    },
    {
      "trait_type": "body",
      "value": "body1"
    },
    {
      "trait_type": "left fore arm",
      "value": "left-fore-arm2"
    },
    {
      "trait_type": "right arm",
      "value": "right-Arm2"
    },
    {
      "trait_type": "left arm",
      "value": "leftArm1"
    },
    {
      "trait_type": "hand shadow",
      "value": "hand-shadow1"
    },
    {
      "trait_type": "hands",
      "value": "hands2"
    },
    {
      "trait_type": "right fore arm",
      "value": "right-fore-arm2"
    },
    {
      "trait_type": "ear base",
      "value": "ear-base2"
    },
    {
      "trait_type": "ear",
      "value": "ear1"
    },
    {
      "trait_type": "mouth",
      "value": "mouth2"
    },
    {
      "trait_type": "eye base",
      "value": "eyeBase1"
    },
    {
      "trait_type": "oculus",
      "value": "oculus1"
    },
    {
      "trait_type": "antena",
      "value": "antena"
    },
    {
      "trait_type": "shoulders",
      "value": "shoulders2"
    },
    {
      "trait_type": "shoulders cover",
      "value": "shoulderscover1"
    },
    {
      "trait_type": "elbows",
      "value": "elbows2"
    },
    {
      "trait_type": "elbows cover",
      "value": "elbowscover2"
    },
    {
      "trait_type": "chest",
      "value": "chest1"
    },
    {
      "trait_type": "outline",
      "value": "outline1"
    }
  ],
  "compiler": "NFT art generator project"
}
```

That's it, you're done.


<p/>
once it's downloaded, open the folder from your terminal and Follow the read me instructions provided!

console.log("bruh");
const tf = require("@tensorflow/tfjs");

async function loadModel() {
  const model = await tf.loadLayersModel("model.json");
  console.log("Model loaded.");
  return model;
}

const a = tf.tensor([1, 2, 3, 4], (dtype = tf.int32));

const model = loadModel();

const predictions = model.predict(a);

console.log(predictions);

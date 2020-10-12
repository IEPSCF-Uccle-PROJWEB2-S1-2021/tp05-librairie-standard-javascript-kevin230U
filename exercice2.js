let Temperature = 5526; let data = "";

function analyzeTemperature(quantity, data) {
  const tabData = data.split(' '); let verif = false;
  if (quantity <= 0) {
    return 0;
  } else {
    if (quantity <= 10000 && tabData.length === quantity) {
      let i = 0;
      while (i < tabData.length && verif === false) {
        let element = parseInt(tabData[i]);

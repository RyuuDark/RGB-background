function changeColor() {
  let red = 255;
  let green = 0;
  let blue = 0;
   // Növekvő sorrendben indulunk

  function nextColor() {


      if(red==255 && green==255)
        {
          red=0;
        }
      else if(green == 255 && blue==255)
        {
          green=0;
        }
      else if(blue==255 && red==255)
        {
          blue=0;
        }
      else if(red==255 && green<255)
        {
          green++;
        }
      else if(green==255 && blue<255)
        {
          blue++;
        }
      else if(blue==255 && red<255)
        {
          red++;
        }



    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('grid').style.backgroundColor = rgbColor;

    setTimeout(nextColor, 10); // Változtasd a színt 1 másodpercenként
  }


  nextColor(); // Indítsd el a színváltoztatást
}

changeColor();
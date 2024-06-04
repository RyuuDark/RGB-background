function changeColor() {
  let red = 255;
  let green = 0;
  let blue = 0;

  function nextColor() {

    /*
    255,0,0->
    255,255,0->
    0,255,0->
    0,255,255->
    0,0,255->
    255,0,255->
    255,0,0
    */

    if(red==255 && green <255 && blue==0)
      {
        green++;
      }
    else if(red>0 && green==255 && blue==0)
      {
        red--;
      }
    else if(red==0 && green==255 && blue<255)
      {
        blue++;
      }
    else if(red==0 && green>0 && blue==255)
      {
        green--;
      }
    else if(red<255 && green==0 && blue==255)
      {
        red++;
      }
    else if(red==255 && green==0 && blue>0)
      {
        blue--;
      }


    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('grid').style.backgroundColor = rgbColor;

    setTimeout(nextColor, 5); // Változtasd a színt 1 másodpercenként
  }


  nextColor(); // Indítsd el a színváltoztatást
}

changeColor();
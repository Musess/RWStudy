function Init(){
  
  arrLeft = [];

  arrLeft.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
  arrLeft.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
  arrLeft.push("🟩🟩🟩🟩🟩🟩🟩");
  arrLeft.push("🟦🟦🟦🟦🟦");
  arrLeft.push("🟪🟪🟪");
  arrLeft.push("⬛");

  Draw();
}



function Draw()
{

  var ui_side_left = document.getElementsByClassName("first")
  while ( ui_side_left[0].hasChildNodes() ) 
  { ui_side_left[0].removeChild( ui_side_left[0].firstChild ); }
  
  for(var i=0;i<arrLeft.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrLeft[i]));

    ui_side_left[0].appendChild(ptag);
  }

  // 누르면 옮겨지는 코드랑 예외처리까지


} 


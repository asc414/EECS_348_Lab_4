function alert_paragraph_color(){
    const paragraph = document.getElementById("paragraph");
    const border_R = document.getElementById("border_R").value;
    const border_G = document.getElementById("border_G").value;
    const border_B = document.getElementById("border_B").value;
    const border_width = document.getElementById("border_width");
    const bg_R = document.getElementById("bg_R").value;
    const bg_G = document.getElementById("bg_G").value;
    const bg_B = document.getElementById("bg_B").value;


    paragraph.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    paragraph.style.borderWidth = border_width;
    paragraph.body.style.backgroundColor = "rgb("+br_R+","+bg_G+","+bg_B+")";
  }
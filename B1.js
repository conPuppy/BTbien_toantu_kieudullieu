function Tb() {
    let x= +document.getElementById("a").value;
    let y= +document.getElementById("b").value;
    let z= +document.getElementById("c").value;
    let tb= (x+y+z)/3;
    document.getElementById("d").innerHTML="Điểm trung bình: "+tb;
}

function Tt() {
    let x= +document.getElementById("a").value;
    let y= +document.getElementById("b").value;
    let z= +document.getElementById("c").value;
    let t= x+y+z;
    document.getElementById("e").innerHTML="Tổng điểm: "+t;
}
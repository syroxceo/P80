studentArray=[];

displayStudentArray=[];

function submit() {
for(j=1; j<=4; j++){
    studentName=document.getElementById("name_of_the_student_" + j).value;
    studentArray.push(studentName);
}

console.log(studentArray);

var length = studentArray.length;

for(k=0; k<length; k++){
    displayStudentArray.push("<h4> Name - " + studentArray[k] + "</h4>")
}


document.getElementById("display_name_with_commas").innerHTML = displayStudentArray;

withoutComma= displayStudentArray.join(" ");

document.getElementById("display_name_without_commas").innerHTML = withoutComma;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    displayStudentArray.sort();

    withoutComma= displayStudentArray.join(" ");

    document.getElementById("display_name_without_commas").innerHTML = withoutComma;
}
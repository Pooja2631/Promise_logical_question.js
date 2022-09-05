function displayDetails(testscore){
    console.log(this.id);
    console.log(this.name);
    console.log(testscore);

}

var student1 = {
    id:1,
    name:"Deepti"
}

var student2 = {
    id:2,
    name:"Pooja"
}

this.id = 3;
this.name = "Ranjan";

displayDetails.apply(student1,[10]);
displayDetails.apply(student1,[20]);
displayDetails.apply(this,[30]);
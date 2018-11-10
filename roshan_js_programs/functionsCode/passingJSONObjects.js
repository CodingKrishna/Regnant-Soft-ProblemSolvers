var student = {
    name : "hari",
    rollno : 23455,
    phno : 9876543211,
    address : "JeevanBima Nagar,bengaluru"
}
function printObject(obj){

    console.log("******************** printing object members *********************")

    console.log("name :"+obj["name"])
    console.log("rollno :"+obj["rollno"])
    console.log("phone no :"+obj["phno"])
    console.log("address :"+obj["address"])
}
printObject(student)
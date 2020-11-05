function addName(){
    name = $("#my-input").val()
    console.log(name)
    const nameList = $("#nameList") 
    nameList.append(("<li>" +name +"</li>"))
    $("#my-input").val("")
}
$("#button").on("click",addName)

$("#nameList").on("click", "li", function() {
    $(this).remove()
})

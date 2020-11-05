const posts = [{name:"mosa" ,text:"eat an apple"} , {name:"easa" , text:"eat a banana"}]
render()
$("#button").on("click" , addAndRefresh)
function render()
{
    const postLayout = $("#postLayout")
    postLayout.empty()
    for(post of posts)
    {
        postLayout.append("<div>" + post.name +": " +  post.text + "</div>")
    }
}
function addAndRefresh ()
{
    const name = $("#name").val()
    const text = $("#text").val()
    posts.push({name : name , text : text})
    $("#name").val("")
    $("#text").val("")
    render()
}
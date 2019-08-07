// `Delete` buttons should remove the topics (`li` elements). 
$(function(){
    $(document).on('click', '.delete', function () {
        
        $(this).closest('li').remove()
        })
    });

    
// There is a `checkbox` under the topics. It should hide all topics when checked, 
//unhide when unchecked. (hide all `ul` elements)
$(function(){

    $("#hide").click(function(){

        $("ul").fadeToggle();
    });

});

//There is search field above.
//It should filter the topics (filter `li` elements).
// It should be case-insensitive.

$("#search-topics input").keyup(function() {

    let searchText = $(this).val();
    
    $('ul > li').each(function () {
        let listText = $(this).text();
        showList = listText.toUpperCase().indexOf(searchData.toUpperCase()) !== -1;
        $(this).toggle(showList);
    });
});

// `Add` button should add a topic 
//(an `li` element inside 2 `span` elements).

$("button").on("click", function(e) {

    e.preventDefault();

    let addNew = $("#add-list").val();

        if (addNew !==""){
            $("ul").append(
                "<li><span class='name'>" + addNew +
                "</span><span class='delete' >delte</span>"
            );
            $("#add-list").val("");
        }

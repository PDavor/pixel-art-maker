// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var inputHeight = $("#inputHeight");
  var inputWeight = $("#inputWeight");
  var table = $("#pixelCanvas");
  table.html("");
  var w = inputWeight.val();
  var h = inputHeight.val();
  for(var height = 0; height < h; height++) {
    table.append("<tr></tr>");
    for (var width = 0; width < w; width++) {
      $("tr").last().append("<td></td>");}
  }
  table.on("click", "td", function() {
     const color = $("#colorPicker").val();
      $(this).css("background-color", color);});
  }
$("#send").on("click", function() {
  event.preventDefault();
  makeGrid();});
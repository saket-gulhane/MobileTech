var names = [
  "Thomas",
  "Charles",
  "Christopher",
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Daniel",
  "Matthew",
  "Anthony",
  "Donald",
  "Mark",
  "Paul",
  "Steven"
];

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  $(this).css({ border: "1px solid white" });
}

$(document).ready(function() {
  for (var i = names.length - 1; i >= 0; i--) {
    $("#Names").prepend(
      `<div class="formatlist" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">${names[i]}</div>`
    );
    $("#Names").css("overflow", "scroll");
  }

  for (var i = 0; i < 30; i++) {
    $("#Blocks").prepend(
      `<div class="formatblock" class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`
    );
  }
});

var opts = {
  method: 'GET',
  headers: {}
};
fetch('https://jsonplaceholder.typicode.com/posts/', opts).then(function (response) {
  return response.json();
})
.then(function (data) {
  data = data.filter(function(entry) {
    return entry.id < 10;
  }).reverse();

  var ajaxElement = document.querySelector("#ajaxElement");
  var ul = document.createElement('ul');
  data.forEach(function(el) {
    console.log(el);
    var li = document.createElement('li');
    li.innerHTML = el.id + " " + el.title;
    ul.appendChild(li);
  });

  ajaxElement.appendChild(ul);
});

$('#clickEvent a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#clickEvent a[href="#home"]').tab('show') // Select tab by name
$('#clickEvent a[href="#profile"]').tab('show') // Select tab by name

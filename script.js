const $add = document.getElementById('add')
const $addForm = document.getElementById('addForm')
const $color = document.getElementById('color')
const $dialog = document.getElementById('dialog')
const $searchForm = document.getElementById('searchForm')
const $search = document.getElementById('search')
const $list = document.getElementById('list')


function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

function buildList (items) {
  $list.innerHTML = ''
  $list.append(...items.map(item => 
    createElement('li', {className: 'list-group-item'}, item)))
}

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'brown'
]

buildList(colors)

$add.addEventListener('click', function () {
  $dialog.showModal()
})

$addForm.addEventListener('submit', function (e) {
  e.preventDefault()

  colors.push($color.value)
  buildList(colors)
  $dialog.close()
  $addForm.reset()
})

$searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
})

$search.addEventListener('input', function (e) {
  console.log(e)
  const filtered = colors.filter(color => 
    color.includes($search.value))
  buildList(filtered)
})
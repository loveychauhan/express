const heading = document.querySelector('.heading')
const newName = document.querySelector('.newName')
const oldName = document.querySelector('.oldName')
const renameForm = document.querySelector('.renameForm')

renameForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (newName.value) {
        oldName.value = newName.value
        heading.innerHTML = `${oldName.value} Blog`
        newName.value = ''
        renameForm.action = `http://localhost:4000/files/${oldName.value}`
    }
})
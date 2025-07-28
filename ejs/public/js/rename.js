const heading = document.querySelector('.heading')
const newName = document.querySelector('.newName')
const oldName = document.querySelector('.oldName')
const renameForm = document.querySelector('.renameForm')

renameForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (newName.value) {
        heading.innerHTML = `${newName.value}.txt Blog`
        renameForm.action = `http://localhost:4000/files/${newName.value}.txt`
        renameForm.submit()
    }
})
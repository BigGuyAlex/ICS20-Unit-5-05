let number = 0

document.getElementById('math-calculate').addEventListener('click', calculate)

function calculate () {
  number = document.getElementById('input-numbers').value
  number = parseInt(number)
  number = number * number
  alert(number)
  onclick = document.getElementById('input-numbers').value = ''
}

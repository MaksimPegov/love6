const person1 = ['maksim', 'maksimka', 'максим', 'максимка', 'максім', 'максімка']
const person2 = ['alina', 'alinka', 'алина', 'алинка', 'аліна', 'алінка']

export const trueLove = (player1, player2) => {
  const name1 = player1.toLowerCase().trim()
  const name2 = player2.toLowerCase().trim()

  if (
    (person1.includes(name1) || person2.includes(name1)) &&
    (person1.includes(name2) || person2.includes(name2)) &&
    name1 !== name2
  ) {
    return true
  } else if (
    (person1.includes(name2) || person2.includes(name2)) &&
    (person1.includes(name1) || person2.includes(name1)) &&
    name1 !== name2
  ) {
    return true
  }
  return false
}

function writeCards(array, occasion) {
  let messages = []
  for (let i = 0; i < array.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
  }
  return messages
}
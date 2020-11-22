export default async function personHandler({ query: { id } }, res) {
  const data = await fetch(`https://polls.apiblueprint.org/questions/${id}`)
  const items = await data.json()

  res.setHeader('Content-Type', 'application/json')
  if (items) {
    res.status(200).json(items)
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}

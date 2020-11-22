export default async function handler(req, res) {
  const data = await fetch(`https://polls.apiblueprint.org/questions`)
  const items = await data.json()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(items)
}

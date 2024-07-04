export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      console.log('GET')
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    case 'POST':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST'])
      // res.headers.append('Access-Control-Allow-Credentials', "true")
      res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
      res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
      res.headers.append(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      )
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
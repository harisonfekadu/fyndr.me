import Cors from 'cors'
import axios from 'axios'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  axios.get("https://www.creatopia.et/profiles/contributor/"+req.body.username).then((data)=>{
      console.log(req)
       res.json({ data:data.config })
    }).catch(console.error);
 
}

export default handler
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default function checkAvailability(req, res) {
   axios.get("https://www.creatopia.et/profiles/contributor/"+username).then(res=>{
      if(res.status==200){
        alert("used")
      }
    }).catch(console.error);
}

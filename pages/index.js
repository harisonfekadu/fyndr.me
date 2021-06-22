import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [isFacebookChecked, setIsFacebookChecked] = useState(false);
  const [isTwitterChecked, setIsTwitterChecked] = useState(false);
  const [username, setUsername] = useState("")

  const checkAvailability=()=>{
    axios.get("http://localhost:3000/api/cors",{username}).then(res=>{
     console.log(res.data.status)
    }).catch(console.error);
    //  axios.get("https://www.facebook.com/"+username).then(res=>{
    //   if(res.status==200){
    //     alert("used")
    //   }
    // }).catch(console.error);
  }

  const handleUsername = (e) =>{setUsername(e.target.value)}

  return (
    <div className={styles.container}>
      <Head>
        <title>fynd.me - username availability checker.</title>
        <meta name="description" content="Check if your username is available on facebook, instagram, telegram and other social media." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <span style={{fontFamily: "'Kalam', cursive", fontSize:"2rem", marginBottom:"2rem", color:"#0070f3"}}>fynd.me</span>
        <h1 className={styles.title}>
          Find the perfect <span className={styles.highlight}>username</span>!
        </h1>

        <p className={styles.description}>
          Check if your preferred username is available on popular social medias.
        </p>

        <form onSubmit={(e)=>e.preventDefault()}>
          <input onChange={handleUsername} className={styles.searchField} placeholder="your preferred username"/>
          <button onClick={(e)=>{e.preventDefault();checkAvailability();}} className={styles.primaryButton}>Check</button>
        </form>

        <div className={styles.grid}>
         <Checkbox isChecked={isFacebookChecked} setIsChecked={setIsFacebookChecked}>Facebook</Checkbox>
         <Checkbox isChecked={isTwitterChecked} setIsChecked={setIsTwitterChecked}>Twitter</Checkbox>
        

        </div>
      </main>

     
    </div>
  )
}

const Checkbox = ({isChecked, setIsChecked, children}) =>{
  // const [isChecked, setIsChecked] = useState(props.isChecked);
  
  return(
  <div style={{display:'flex',flexDirection:"row", alignContent:"center", margin:"20px"}}>
      <div onClick={()=>setIsChecked(!isChecked)}style={{ padding:"1px",background:isChecked?"#0070f3":"white", border:isChecked?"none":"solid 1px #aaa", width:"20px",height:"20px",minWidth:"20px",minHeight:"20px",maxWidth:"20px",maxHeight:"20px", borderRadius:"50%"}}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="3 3 20 20" width="20px" transform="scale(0.7 0.7)" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></div>
      <span onClick={()=>setIsChecked(!isChecked)}style={{ paddingTop:"1.2px",marginLeft:"7px"}}>
        {children}
      </span>
    </div>
  );
}
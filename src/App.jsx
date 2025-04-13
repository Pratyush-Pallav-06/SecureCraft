import { useState , useCallback, useEffect , useRef} from 'react'



function App() {
  
  // yahaa we provided the function and constant for the length , number whether present or not , character whether present or not ....( TRUE or FALSE )
  const [length , setlength] = useState(8) ;

  const [numAllowed , setnumAllowed] = useState(false) ;

  const [charAllowed , setcharAllowed] = useState(false) ;

  const [password , setpassword] = useState("") ;   // password jo bhiii change hogaa if the dependancies are called yaa kux nayaa feature pe click huaa ,,,,,, then password ussiii me store hokr .,.. screeen pe show kregaa .. and isme password continuously change hokr set hotaa rhegaa 

// use Ref Hook 

const passwordRef = useRef(null) ;



  const passwordGenerator = useCallback(() => {
    let pass = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;

    if(numAllowed)
    {
      str += "0123456789" ;
    }

    if(charAllowed)
    {
      str += "!@#$%^&*(){}[]~" ;

    }
    for (let i = 0; i <= length; i++) {
      let ch = Math.floor(Math.random()*str.length + 1);

      pass += str.charAt(ch) ;
      
    }
    setpassword(pass) ;

  } , [length , numAllowed , charAllowed , setpassword]) ;   
  
  // yahaa hmne CallBack function use kiiyaa ... 
// useCallBack me ... hmlog ko 2 chiiiz daalniii hotiii haiii ..... 
// 1. the function created .... 
// 2. the dependancies .... which whenever called yaa jb bhiii change hogaa uss function me ... then ye jo function create huaa haiii call Back me ... wo fiiir se call ho jaaye and usme jo changes haii ... wo fiiirse update ho jaaye .. stored in cache memory 
// yahaa dependancies me .. length me changes , yaa number allowed , yaa characters allowed ... haiii ... and ek method haii ... jo dependancies me aatiii haiii ... setPassword ... jsiko hmlog put krdiye haiii usme ... iskaa bhii importance haii 

// basically ... CALLBACk ... kyaa krtaa haii ??? 

// callback aapke jitne bhii dependancies pe depend krrhaa haii ... aagr unme changes huuaa ... and jiske wajah se aapko fiiirse puuraa function chalaanaa pd rhaa haii ... unn sabhiii dependancies ko cache memory me rkhh kr .. fiiir work krtaa haii 
// for eg . sirf length ke basis pe function call huaa ... lekiiin abkii baar numbers allowed haii ... then numbers include hogaa password me ,,, and usko cache memory me store krdegaa kiii initially numbers are also present now ... agar kux bhii xhange huuaa .. let assume number ab nhii chaahiye .. then functions ko fiir se run kregaa .. and iss baar cache memory me numbers ko false krdegaa 







// yahaa hmne useEffect use kiiyaa haiii .... kyukiii jo passwordGenerator naam kaa function banaayaa haiii .... usko hmlog ko call krnaa haiii ... aise hiii call nhiii ho paayegaa function ... jisme callback used huuaa haii ... 
// yahaa bhiii 2 things kiii requirement haii .... function .... and dependancies ... 
// useEffect siiidhaa boltaa haii ... agar dependancies me kux bhiii chhed chhaad huuaa ... then function ko dobaaraa se run krdo ... cache memory kaa koii scene nhii haii yahaa 


useEffect(()=>{

  passwordGenerator() 
}, [length , numAllowed , charAllowed , passwordGenerator])



const copypasswordtoClipboard = useCallback(() =>{
 
 passwordRef.current?.select()   

 // ye bs ek effect dene ke liye haii ... to show whether the particular text is selected or not ... bs itnaa hiii kaam haii iskaa 
 // iske binaa bhiii work ho jaayegaa ... simply niiiche waale line se copy ho jaayega ... bs just to give an extra effect to it 

 
  window.navigator.clipboard.writeText(password)   // this will select and copy the text present in the password box .... 

} , [password]) ;    // yahaa copy depends on the password shown on the text box 


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

<h1 className='text-white text-center my-3'>Password Generator </h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      ref={passwordRef}
      readOnly/>


      <button onClick= {copypasswordtoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
     </div>
     
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100} 
        value={length}   // initial length given by the user or set already 
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)   // yahaa hmne ek function banaayaa ... jb bhiii ye call hogaa .. then jo event haiii .. wo setPassword ko set krdegaa to the desired length set by the user 

         }}
         />
         <label>length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {numAllowed}   // initially it is false ... when changed .. it is accordingly stored here  
        id = "numberInput" 
        onChange={()=> {setnumAllowed((prev) => !prev)   // jb ispe click hogaa .. then jo method haiii .. wo apne previous state se change hokr new state me aa jaayegaa .. and jo prev value haiii ... usko reverse krdo 

        }}/>

        <label>Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {charAllowed}   // initially it is false ... when changed .. it is accordingly stored here  
        id = "numberInput" 
        onChange={()=> {setcharAllowed((prev) => !prev)   // jb ispe click hogaa .. then jo method haiii .. wo apne previous state se change hokr new state me aa jaayegaa .. and jo prev value haiii ... usko reverse krdo 

        }}/>

        <label>Characters</label>
      </div>

      
     </div>
    </div>
    </>
  )
}

export default App

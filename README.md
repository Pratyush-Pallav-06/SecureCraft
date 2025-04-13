# React + Vite

// inside App.jsx 

yahaa sbse pehle aapko ek random password generate krnaa haiii ... jisme if we want we can add numbers , we can add characters, and even we can change the length of the passwords also according to our need and selection 

// uske liye hmlog ko different variables and functions chahiye .. jaise .. length , numAllowed , charAllowed etc ... and uske functions me hmlog accordingly change krenge according to users need 

// yahaa 4 useEffect use kiye ... length , number present or not(Boolean)  , characters present or not(Boolean)  and a password , whenever it changes , it should show on the screen with the updated functionality 


// useCallBack ????

// basically isme aapne jo function create kiyaa haii ... usko cache memory me store krdo ... and agar kux changes huuaa usme .,.. toh cache memory se uthhaa kr usme changes krke ... usko display krdenaa 

 // yahaa hmne CallBack function use kiiyaa ... 
// useCallBack me ... hmlog ko 2 chiiiz daalniii hotiii haiii ..... 
// 1. the function created .... 
// 2. the dependancies .... which whenever called yaa jb bhiii change hogaa uss function me ... then ye jo function create huaa haiii call Back me ... wo fiiir se call ho jaaye and usme jo changes haii ... wo fiiirse update ho jaaye .. stored in cache memory 
// yahaa dependancies me .. length me changes , yaa number allowed , yaa characters allowed ... haiii ... and ek method haii ... jo dependancies me aatiii haiii ... setPassword ... jsiko hmlog put krdiye haiii usme ... iskaa bhii importance haii 

// basically ... CALLBACk ... kyaa krtaa haii ??? 

// callback aapke jitne bhii dependancies pe depend krrhaa haii ... aagr unme changes huuaa ... and jiske wajah se aapko fiiirse puuraa function chalaanaa pd rhaa haii ... unn sabhiii dependancies ko cache memory me rkhh kr .. fiiir work krtaa haii 
// for eg . sirf length ke basis pe function call huaa ... lekiiin abkii baar numbers allowed haii ... then numbers include hogaa password me ,,, and usko cache memory me store krdegaa kiii initially numbers are also present now ... agar kux bhii xhange huuaa .. let assume number ab nhii chaahiye .. then functions ko fiir se run kregaa .. and iss baar cache memory me numbers ko false krdegaa 







// UseEffect ???


// yahaa hmne useEffect use kiiyaa haiii .... kyukiii jo passwordGenerator naam kaa function banaayaa haiii .... usko hmlog ko call krnaa haiii ... aise hiii call nhiii ho paayegaa function ... jisme callback used huuaa haii ... 
// yahaa bhiii 2 things kiii requirement haii .... function .... and dependancies ... 
// useEffect siiidhaa boltaa haii ... agar dependancies me kux bhiii chhed chhaad huuaa ... then function ko dobaaraa se run krdo ... cache memory kaa koii scene nhii haii yahaa 




//UseRef ??


// reference letaa haiii ye .. jahaa ke elements ko select yaa usse baat chiiit krnaa haii ..  uss element kaa references lekr uspe work krtaa haii 




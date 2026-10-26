import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc,getDoc, setDoc,collection,writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeGu79mlbKHuCEaf8tHXhqUu56fTQ6yqk",
  authDomain: "deakin-web-staff-app.firebaseapp.com",
  projectId: "deakin-web-staff-app",
  storageBucket: "deakin-web-staff-app.firebasestorage.app",
  messagingSenderId: "420543176845",
  appId: "1:420543176845:web:2be7bc087cf9a6c3dd42c4"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
    })
     export const auth = getAuth();

       export async function signinWithgoogle()
      {
           return await signInWithPopup(auth,provider)
     }

    export async function creatinguserwithsignup(email, password){
       
        if (!email||!password)
            return;
        return await createUserWithEmailAndPassword(auth,email,password)

    }

    export async function signinuser(email, password){
       
        if (!email||!password)
            return;
        return await signInWithEmailAndPassword(auth,email,password)

    }

     export const db =getFirestore();
      export async function creataUserdocfromauth(userAuth,addtionalInfo={})
     {
           const userDocRef = doc(db, 'AI-X1', userAuth.uid)
           console.log(userDocRef)
           const usersnapshot = await getDoc(userDocRef)
                      console.log("usersnap",usersnapshot)
                       console.log(usersnapshot.exists())
    if (!usersnapshot.exists())
    {
      const {displayName, email} =userAuth
     const createdAt= new Date()
    
    try{
      await setDoc(userDocRef, {
       displayName,
        email ,
        createdAt,
        ...addtionalInfo
      })
    }
    catch(error)
    {
     console.log("error in creating ", error.message);
    }
     }
    }
    export async function addcollectionanddocuments(collectionkey, objectstoadd){

      const collectionRef= collection(db,collectionkey);
      const batch =writeBatch(db)
      objectstoadd.forEach((object)=>{
                const docRef = doc(collectionRef, object.name.toLowerCase());
                batch.set(docRef,object)


      })
      await batch.commit();
      console.log("transaction is succesful")
    }

    export async function fetchstaffdata(){

      const collectionRef =collection(db, 'staff')
      const q= query(collectionRef)
      const querysnapshot= await getDocs(q)
      const staffmap = querysnapshot.docs.reduce((acc,docsnapshot)=>{
        const {name, ...items}= docsnapshot.data();
        acc[name.toLowerCase()]=items
        return acc;
      },{}
      )
      return staffmap;    }
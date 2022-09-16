// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uLReFcXNBoqFqR8zOk3zFNjCY8o_SGQ",
  authDomain: "shop-abd06.firebaseapp.com",
  projectId: "shop-abd06",
  storageBucket: "shop-abd06.appspot.com",
  messagingSenderId: "729161398560",
  appId: "1:729161398560:web:288888d1b2379e379e7f45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const uploadFunction = (file) => {
  const fileName = new Date().getTime() + file.name;
  const storage = getStorage(app);
  const storageRef = ref(storage, fileName);

  const uploadTask = uploadBytesResumable(storageRef, file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const product = { ...input, img: downloadURL, categories: cat };
        return product;
      });
    }
  );
};

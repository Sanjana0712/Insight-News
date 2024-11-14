import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import{getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBKm9IvMI7rZtpqdaXiSyNcdgMW6WMlZ_w",
  authDomain: "newsapp-da12c.firebaseapp.com",
  projectId: "newsapp-da12c",
  storageBucket: "newsapp-da12c.firebasestorage.app",
  messagingSenderId: "66872382438",
  appId: "1:66872382438:web:f0014e175f7cdfc2b2fc27",
  measurementId: "G-RR529XHEVE"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  const signInWithGoogle = () => signInWithPopup(auth, provider);
  const logOut = () => signOut(auth);

export { auth, getAnalytics, signInWithGoogle, logOut };


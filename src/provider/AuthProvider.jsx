import { createContext } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../public/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  return (<>
    <AuthContext.Provider value={loginWithGoogle}>
      {children}
    </AuthContext.Provider>
  </>)
}
export default AuthProvider
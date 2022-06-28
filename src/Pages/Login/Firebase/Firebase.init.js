import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initilatizeAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}
export default initilatizeAuthentication;

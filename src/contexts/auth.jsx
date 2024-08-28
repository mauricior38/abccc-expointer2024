import { useState, useEffect, createContext } from "react";
import { auth, db } from "@/services/firebasConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@cavaloCrioulo");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  async function signIn(email, password) {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        const uid = value.user.uid;

        const docRef = doc(db, "users", uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }

        let data = {
          uid: uid,
          nome: docSnap.data()?.nome,
          email: value.user.email,
          avatarUrl: docSnap.data()?.avatarUrl,
          phone: docSnap.data()?.phone,
        };

        console.log(data);
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success("Bem vindo(a) ao Lance Rural", {
          position: "bottom-center",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
        toast.error("Usuário ou senha errados, confira seus dados!", {
          position: "bottom-center",
          className: "text-gray900-500",
        });
      });
  }

  //Cadastrar novo usuário
  async function signUp(data) {
    setLoadingAuth(true);

    console.log(data);

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          local: {
            pais: data.local.paisEscolhido,
            estado: data.local.estadoEscolhido,
            cidade: data.local.cidadeEscolhida,
          },
          avatarUrl: null,
        }).then(() => {
          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
          signIn(data.email, data.password);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Este email já esta sendo utilizado por outro usuário.", {
            position: "bottom-center",
            className: "text-gray900-500",
          });
        }

        if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toast.error("A senha precisa conter no mínimo seis caracteres.", {
            position: "bottom-center",
            className: "text-gray900-500",
          });
        }
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem("@cavaloCrioulo", JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem("@cavaloCrioulo");
    setUser(null);
  }

  async function restorePassword(email) {
    setLoadingAuth(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Email de recuperação enviado com sucesso");
        navigate("/");
        setLoadingAuth(false);
      })
      .catch((error) => {
        toast.error("Algo deu errado, por favor, verifique o email digitado");
        setLoadingAuth(false);
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, //boolean
        user,
        signIn,
        signUp,
        loadingAuth,
        loading,
        logout,
        storageUser,
        setUser,
        restorePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

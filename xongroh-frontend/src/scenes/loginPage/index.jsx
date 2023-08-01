import LoginForm from "./LoginForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const LoginPage = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
  return (
    <>
        <h1 className="text-center p-10 text-orange-400 font-medium text-xl">Welcome back</h1>
        <div className="text-center">
            {userIcon}
        </div>
        <LoginForm/>   
    </>
  )
}

export default LoginPage
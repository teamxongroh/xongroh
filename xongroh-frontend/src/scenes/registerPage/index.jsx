import RegisterForm from './RegisterForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const RegisterPage = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
  return (
    <>
        <h1 className="text-center p-10 text-orange-400 font-medium text-xl">Xongroh</h1>
        <div className="text-center">
            {userIcon}
        </div>
        <RegisterForm/>   
    </>
  )
}

export default RegisterPage
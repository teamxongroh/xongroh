import {Link} from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form, ErrorMessage, Field } from "formik"


const LoginForm = () => {

    const loginSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required')
    })
    
    const initialValuesLogin = {
        email: "",
        password: "",
    }

    const onSubmit = (values) => {
        console.log("onSubmit", values);
    };

    return (
        <Formik
            initialValues={initialValuesLogin}
            onSubmit={onSubmit}
            validationSchema={loginSchema}
        >
            {() => (
                <Form className='flex flex-col items-center'>
                    <div className='py-4'>
                        <Field name="email" type="email" placeholder="Email" className='border border-gray-400 rounded px-3 py-2' />
                        <div className="error text-gray-400">
                            <ErrorMessage name="email" component="span" />
                        </div>
                    </div>
                    
                    <div  className='pb-10'>
                        <Field name="password" type="password" placeholder="password" className='border border-gray-400 rounded px-3 py-2'/>
                        <div className="error text-gray-400">
                            <ErrorMessage name="password" component="span" />
                        </div>
                    </div>
                    <button className='bg-orange-400 rounded-lg py-2 px-10 text-white font-medium' type="submit">Sign in</button>

                    <div className="text-center py-4">
                        <span className='text-gray-500'>Don't have an account? <Link className='text-orange-400 font-medium' to="/register">Create an account</Link></span>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default LoginForm;
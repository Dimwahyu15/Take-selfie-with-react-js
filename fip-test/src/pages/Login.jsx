import React, {useState} from 'react'
import validation from './validation'

const Login = () => {

const [values, setValues] = useState({
    name :'',
    password :''
})

const [errors, setError] = useState({})

function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value})
}


function  handleSubmit (e) {
    e.preventDefault();
    setError(validation(values));
}

return (
<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
<div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
        Sign in
    </h1>
    <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
            <label
                className="block text-sm font-semibold text-gray-800"
            >
                Username
            </label>
            <input
                onChange={handleChange}
                value={values.name}
                name='name'
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="mb-2">
            <label
                className="block text-sm font-semibold text-gray-800"
            >
                Password
            </label>
            <input
                onChange={handleChange}
                value = {values.password}
                name='password'
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <a
            href="#"
            className="text-xs text-purple-600 hover:underline"
        >
            Forget Password?
        </a>
        <div className="mt-6">
            <button 
            type='submit'
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
            </button>
        </div>
    </form>

    <p className="mt-8 text-xs font-light text-center text-gray-700">
        {" "}
        Don't have an account?{" "}
        <a
            href="#"
            className="font-medium text-purple-600 hover:underline"
        >
            Sign up
        </a>
    </p>
</div>
</div>
)
}

export default Login;
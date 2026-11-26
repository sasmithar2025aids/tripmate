import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../components/formschema/registerschema'

function Register() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    function onSubmit(data) {
        console.log(data)
        alert("Registration Successful")
        navigate("/")
    }

    return (
        <>
            <h1>TripMate - Travel Planning & Group Trip Management</h1>

            <h2>User Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name:</label>
                <input
                    placeholder="Enter your name"
                    type="text"
                    {...register("name")}
                />
                <p>{errors.name?.message}</p>

                <label>Email:</label>
                <input
                    placeholder="Enter your email"
                    type="email"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label>Password:</label>
                <input
                    placeholder="Enter password"
                    type="password"
                    {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <label>Confirm Password:</label>
                <input
                    placeholder="Confirm your password"
                    type="password"
                    {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>

                <button type="submit">Register</button>

            </form>
        </>
    )
}

export default Register
import { useState } from 'react'

function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function print(e) {
    e.preventDefault()

    console.log("Email: ", email)
    console.log("Password: ", password)
}

return (
    <>

    <h1>TripMate - Travel Planning & Group Trip Management</h1>

    <br />

    <div>

    <form onSubmit={print}>

    <label>Email :</label>

    <input
        placeholder="Enter your email"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

    <br /><br />

    <label>Password :</label>

    <input
        placeholder="Enter your password"
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

    <br /><br />

    <button type="submit">Login</button>

    </form>

    </div>

    </>

)

}

export default Login
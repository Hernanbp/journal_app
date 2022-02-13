import { Link } from "react-router-dom"

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form action="">

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="mt-1 auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="mt-1 auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password2"
                    className="mt-1 auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password"
                    className="mt-1 auth__input"
                />

                <button
                    className="mt-1 mb-5 btn btn-primary btn-block"
                    type="submit"
                >
                    Register
                </button>

                <Link className="mt-5 link" to='/auth/login'>
                    Already registered?
                </Link>
            </form>
        </>
    )
}

import { Link } from "react-router-dom"

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Sign In</h3>

            <form action="">
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
                    name="password"
                    className="mt-1 auth__input"
                />

                <button
                    className="mt-5 btn btn-primary btn-block"
                    type="submit"
                >
                    Sign In
                </button>

                <div className="auth__social-networks">
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                                alt="ico" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to='/auth/register'>
                    Create new account
                </Link>
            </form>
        </>
    )
}

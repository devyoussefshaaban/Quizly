import { CheckCircle, Loader2, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function WelcomeUser({ user, logoutHandler, isLoading }: {
    user: User, logoutHandler: () => void, isLoading: boolean
}) {
    const navigate = useNavigate()

    return (
        <div className="register-form__wrapper">
            <div className="register-form__container register-form__container--logged-in">
                <div className="register-form__header">
                    <div className="register-form__avatar">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <h2>Welcome, {user.name}!</h2>
                    <p className="register-form__user-email">{user.email}</p>
                </div>

                <div className="register-form__success-card">
                    <CheckCircle size={48} className="success-icon" />
                    <h3>You're already logged in</h3>
                    <p>Would you like to continue to the quiz or logout?</p>

                    <div className="register-form__action-buttons">
                        <button
                            className="btn btn--primary"
                            onClick={() => navigate("/quiz")}
                        >
                            Continue to Quiz
                        </button>
                        <button
                            className="btn btn--outline"
                            onClick={logoutHandler}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="spinner" size={20} />
                            ) : (
                                <>
                                    <LogOut size={20} />
                                    Logout
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
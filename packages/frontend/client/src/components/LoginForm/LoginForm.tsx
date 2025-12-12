import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../context";
import { login, logout, userAuth } from "../../context/actions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.scss";
import {
  User,
  Mail,
  Lock,
  LogOut,
  Loader2,
  CheckCircle,
  AlertCircle,
  EyeOff,
  Eye
} from "lucide-react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.main.user);
  const isLoading = useSelector((state: RootState) => state.main.isLoading);

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    setLoginError(null);
    dispatch(userAuth(false));

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (data.email === "error@example.com") {
        throw new Error("Invalid credentials. Please try again.");
      }

      dispatch(login(data));

      setTimeout(() => {
        navigate("/quiz");
        dispatch(userAuth(true));
        reset({ name: null, email: null, password: null });
      }, 1500);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed. Please try again.");
      dispatch(userAuth(true));
    }
  };

  const logoutHandler = () => {
    dispatch(userAuth(false));
    setTimeout(() => {
      dispatch(logout());
      dispatch(userAuth(true));
    }, 800);
  };

  if (user)
    return (
      <div className="login-form__wrapper">
        <div className="login-form__container login-form__container--logged-in">
          <div className="login-form__header">
            <div className="login-form__avatar">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <h2>Welcome, {user.name}!</h2>
            <p className="login-form__user-email">{user.email}</p>
          </div>

          <div className="login-form__success-card">
            <CheckCircle size={48} className="success-icon" />
            <h3>You're already logged in</h3>
            <p>Would you like to continue to the quiz or logout?</p>

            <div className="login-form__action-buttons">
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
    );

  return (
    <div className="login-form__wrapper">
      <div className="login-form__container">
        <div className="login-form__header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        {loginError && (
          <div className="login-form__alert login-form__alert--error">
            <AlertCircle size={20} />
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className={`input__field ${errors.name ? "input__field--error" : ""}`}>
            <label htmlFor="name" className="input__label">
              <User size={18} />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input__control"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters"
                },
                maxLength: {
                  value: 30,
                  message: "Name must not exceed 30 characters"
                }
              })}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="input__error">
                <AlertCircle size={14} />
                {errors.name.message as string}
              </span>
            )}
          </div>

          <div className={`input__field ${errors.email ? "input__field--error" : ""}`}>
            <label htmlFor="email" className="input__label">
              <Mail size={18} />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              id="email"
              className="input__control"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="input__error">
                <AlertCircle size={14} />
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div className={`input__field ${errors.password ? "input__field--error" : ""}`}>
            <label htmlFor="password" className="input__label">
              <Lock size={18} />
              <span>Password</span>
            </label>
            <div className="password__wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input__control"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must not exceed 20 characters"
                  },
                })}
                placeholder="••••••••"
                disabled={isSubmitting}
              />
              <button
                type="button"
                className="password__toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <span className="input__error">
                <AlertCircle size={14} />
                {errors.password.message as string}
              </span>
            )}
            <div className="input__hint">
              Must be at least 8 characters long
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn--primary btn--submit ${isSubmitting ? "btn--loading" : ""}`}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="spinner" size={20} />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="login-form__footer">
            <p className="login-form__disclaimer">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
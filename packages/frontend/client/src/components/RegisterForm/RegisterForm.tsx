import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../context";
import { logout, userAuth, register as registerUser } from "../../context/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { WelcomeUser } from "../shared";



const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setregisterError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.main.user);
  const isLoading = useSelector((state: RootState) => state.main.isLoading);

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    setregisterError(null);
    dispatch(userAuth(false));

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (data.email === "error@example.com") {
        throw new Error("Invalid credentials. Please try again.");
      }

      dispatch(registerUser(data));

      setTimeout(() => {
        navigate("/quiz");
        dispatch(userAuth(true));
        reset({ name: null, email: null, password: null });
      }, 1500);
    } catch (error) {
      setregisterError(error instanceof Error ? error.message : "register failed. Please try again.");
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

  if (user) return <WelcomeUser user={user} logoutHandler={logoutHandler} isLoading={isLoading} />

  return (
    <div className="register-form__wrapper">
      <div className="register-form__container">
        <div className="register-form__header">
          <h2>Create Account</h2>
          <p>Choose your account type and start your journey with us</p>

          <div className="account__type__options">
            <div className="option student">
              <img src="/icons/student-icon.svg" alt="Student icon" />
              <h6>Student</h6>
              <p>Take quizzes and track your progress</p>
            </div>

            <div className="option teacher">
              <img src="/icons/teacher-icon.svg" alt="Teacher icon" />
              <h6>Teacher</h6>
              <p>Create quizzes and manage students</p>
            </div>
          </div>
        </div>

        {/* <div className="register-form__social">
          <p>or sign up with</p>
          <div className="register-form__social__icons">
            <img src="/icons/google-icon.svg" alt="Google icon" />
            <img src="/icons/facebook-icon.svg" alt="Facebook icon" />
          </div>
        </div> */}

        {registerError && (
          <div className="register-form__alert register-form__alert--error">
            <AlertCircle size={20} />
            <span>{registerError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="grid">
            <div className={`grid-item input__field ${errors.name ? "input__field--error" : ""}`}>
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
            <div className={`grid-item input__field ${errors.name ? "input__field--error" : ""}`}>
              <label htmlFor="name" className="input__label">
                <User size={18} />
                <span>Username</span>
              </label>
              <input
                type="text"
                id="name"
                className="input__control"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters"
                  },
                  maxLength: {
                    value: 30,
                    message: "Username must not exceed 30 characters"
                  }
                })}
                placeholder="Enter your username"
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="input__error">
                  <AlertCircle size={14} />
                  {errors.name.message as string}
                </span>
              )}
            </div>
          </div>

          <div className="grid">
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
          </div>

          <button
            type="submit"
            className={`btn btn--primary btn--submit ${isSubmitting ? "btn--loading" : ""}`}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="spinner" size={20} />
                Signing up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          <div className="register-form__register">
            Already have an account? <a href="#" onClick={() => navigate("/auth?type=login")}>Sign In</a>
          </div>

          <div className="register-form__footer">
            <p className="register-form__disclaimer">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
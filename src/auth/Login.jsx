import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    

    const loginForm = async (data) => {
        
        Swal.fire({
            title: "Bienvenido a Kodigo Music App",
            text: `Bienvenido ${data.email}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Siguiente"
          }).then((result) => {
            if(result.isConfirmed){
                localStorage.setItem("correo", data.email)
                navigate('/index')
            }
          });
    };

    return (
        <div className="login-container">
            <div className="card login-card shadow-lg">
                <h2 className="text-center mb-4"><i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión</h2>
                <p className="text-center text-muted">Ingresa tus credenciales para acceder al sistema</p>
                <form onSubmit={handleSubmit(loginForm)}>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="correo@ejemplo.com"
                                {...register('email', {
                                    required: 'El correo es obligatorio',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Formato de correo no válido'
                                    }
                                })}
                            />
                        </div>
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="••••••••"
                                {...register('password', {
                                    required: 'La contraseña es obligatoria',
                                    minLength: {
                                        value: 6,
                                        message: 'La contraseña debe tener al menos 6 caracteres'
                                    }
                                })}
                            />
                        </div>
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                        <div className="d-flex justify-content-end">
                            <a href="#" className="link-primary small mt-1">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Mantener sesión iniciada</label>
                    </div>
                    <div className="d-grid mb-4">
                        <button type="submit" className="btn btn-dark btn-lg">
                            <i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión
                        </button>
                    </div>
                </form>               
            </div>
        </div>
    );
}

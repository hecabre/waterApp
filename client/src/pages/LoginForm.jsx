import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      await signin(data);
      navigate("/app");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="bg-deep-sapphire-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-deep-sapphire-700 md:text-2xl">
              Inicia sesión en tu cuenta
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-deep-sapphire-700"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "El correo electrónico es obligatorio",
                  })}
                  className={`bg-deep-sapphire-50 border ${
                    errors.email ? "border-red-500" : "border-deep-sapphire-200"
                  } text-deep-sapphire-700 sm:text-sm rounded-lg focus:ring-deep-sapphire-300 focus:border-deep-sapphire-300 block w-full p-2.5`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-deep-sapphire-700"
                >
                  Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                  })}
                  placeholder="••••••••"
                  className={`bg-deep-sapphire-50 border ${
                    errors.password
                      ? "border-red-500"
                      : "border-deep-sapphire-200"
                  } text-deep-sapphire-700 sm:text-sm rounded-lg focus:ring-deep-sapphire-300 focus:border-deep-sapphire-300 block w-full p-2.5`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-deep-sapphire-500 hover:bg-deep-sapphire-600 focus:ring-4 focus:outline-none focus:ring-deep-sapphire-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

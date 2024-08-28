import { TextInput } from "@tremor/react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@/hooks/useAuth";

import logo from "@/assets/lanceRural.svg";

const signInSchema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail.")
    .email("É necessário um email válido."),
});

export default function ResetPassword() {
  const { restorePassword } = useAuth();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  function handleResetPassword() {
    restorePassword(getValues("email"));
  }

  return (
    <>
      <div className="dark:bg-gray-950 flex flex-1 h-screen flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center space-x-2.5">
            <img className="mx-auto h-10" src={logo} alt="Lance Rural" />
          </div>
          <h3 className="mt-6 text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Digite seu email
          </h3>
          <p className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Um email com um token será encaminhado a sua caixa posta.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={handleSubmit(handleResetPassword)}
          >
            <div>
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="usuario@canalrural.com.br"
                className="mt-2"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className="text-sm leading-6 text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Enviar
            </button>
          </form>
          <p className="mt-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Clique aqui e volte para a página de{" "}
            <Link
              to="/"
              className="font-medium text-tremor-brand hover:text-tremor-brand-emphasis dark:text-dark-tremor-brand hover:dark:text-dark-tremor-brand-emphasis"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function UserCreate(props) {
    const { user } = props;

    const initialState = {
        name: "",
        email: "",
        password: "",
        role_id: "",
    };

    const { data, setData, post, processing, errors, reset } = useForm(
        user
            ? { ...user}
            : {
                  ...initialState,
              }
    );

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("users.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Operación exitosa",
                    text: `${user ? "Usuario modificado." : "Usuario creado."}`,
                    icon: "success",
                }).then(() => {
                    window.location.href = `/users`;
                });
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Usuario
                </h2>
            }
        >
            <Head title="Usuario (registro y creación)" />
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <p className="mt-5 text-sm leading-6 text-gray-600">
                                    {user
                                        ? "Editando usuario"
                                        : "Creando usuario"}
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nombre completo
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                autoComplete="name"
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={data.email}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    {!user && (
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    required
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={handleOnChange}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label
                                            htmlFor="role_id"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Rol
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                required
                                                id="role_id"
                                                name="role_id"
                                                value={data.role_id}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="" disabled>
                                                    Selecciona un rol
                                                </option>
                                                <option value={1}>
                                                    Administrador
                                                </option>
                                                <option value={2}>
                                                    Usuario
                                                </option>
                                            </select>
                                            <InputError
                                                message={errors.role_id}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

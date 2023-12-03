import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function MemberCreate(props) {
    const { project } = props;

    const initialState = {
        full_name: "",
        type: "",
        email: "",
        phone_number: "",
        mobile_number: "",
        address: "",
        project_id: project.id,
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        ...initialState,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register-section.project.member.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Registro realizado",
                    text: "Personal registrado",
                    icon: "success",
                }).then(() => {
                    window.location.href = `/projects/${project.id}/members`;
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
                    {project.title}
                </h2>
            }
        >
            <Head title="Registrar proyectos" />
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <p className="mt-5 text-sm leading-6 text-gray-600">
                                    Registrando personal
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="full_name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nombres y Apellidos
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="full_name"
                                                name="full_name"
                                                value={data.full_name}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="type"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Tipo de cargo
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                required
                                                id="type"
                                                name="type"
                                                value={data.type}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                            >
                                                <option value="" disabled>
                                                    Selecciona un cargo
                                                </option>
                                                <option value="Investigador Principal">
                                                    Investigador Principal
                                                </option>
                                                <option value="Co investigador">
                                                    Co investigador
                                                </option>
                                                <option value="Investigador invitado">
                                                    Investigador invitado
                                                </option>
                                                <option value="Asistente técnico">
                                                    Asistente técnico
                                                </option>
                                                <option value="Tesista">
                                                    Tesista
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Dirección
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={data.address}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                <div>
                                        <label
                                            htmlFor="phone_number"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Telefono fijo
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="phone_number"
                                                name="phone_number"
                                                value={data.phone_number}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                <div>
                                        <label
                                            htmlFor="mobile_number"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Telefono móvil
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="mobile_number"
                                                name="mobile_number"
                                                value={data.mobile_number}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

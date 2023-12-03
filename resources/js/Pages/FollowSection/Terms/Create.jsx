import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function TermCreate(props) {
    const { project } = props;

    const initialState = {
        presentation_date: "",
        start_tdr_date: "",
        end_tdr_date: "",
        situation: "",
        description: "",
        requested_amount: "",
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

        post(route("follow-section.project.term.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Registro realizado",
                    text: "Término registrado",
                    icon: "success",
                }).then(() => {
                    window.location.href = `/follow/projects/${project.id}/terms`;
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
            <Head title="Seguimiendo y Monitoreo" />
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <p className="mt-5 text-sm leading-6 text-gray-600">
                                    Registrando término de referencia
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="presentation_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Presentación
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="presentation_date"
                                                name="presentation_date"
                                                value={data.presentation_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Descripción
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                required
                                                id="description"
                                                name="description"
                                                value={data.description}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="start_tdr_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Inicio de TdR
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="start_tdr_date"
                                                name="start_tdr_date"
                                                value={data.start_tdr_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="end_tdr_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Fin de TdR
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="end_tdr_date"
                                                name="end_tdr_date"
                                                value={data.end_tdr_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="requested_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto Solicitado
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                min={0}
                                                type="number"
                                                id="requested_amount"
                                                name="requested_amount"
                                                value={data.requested_amount}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="situation"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Situación del Proveedor
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="situation"
                                                name="situation"
                                                value={data.situation}
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

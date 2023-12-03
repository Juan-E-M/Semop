import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function TechnicalActivityCreate(props) {
    const { project, deliverable } = props;

    const initialState = {
        how: "",
        in_charge: "",
        start_date: "",
        end_date: "",
        observation: "",
        deliverable_id: deliverable.id,
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        ...initialState,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("situation-section.project.technical.activity.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Registro realizado",
                    text: "Actividad registrada",
                    icon: "success",
                }).then(() => {
                    window.location.href = `/situation/projects/${project.id}/technical/${deliverable.id}/activity`;
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
                                    Registrando actividad para - {deliverable.denomination}
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="in_charge"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Responsable de la actividad
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="in_charge"
                                                name="in_charge"
                                                value={data.in_charge}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                    <label
                                            htmlFor="how"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            ¿Cómo hacer la actividad?
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                required
                                                id="how"
                                                name="how"
                                                value={data.how}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="start_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Inicio
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="start_date"
                                                name="start_date"
                                                value={data.start_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="end_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Fin
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="end_date"
                                                name="end_date"
                                                value={data.end_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                <div>
                                    <label
                                            htmlFor="observation"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Observación
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                required
                                                id="observation"
                                                name="observation"
                                                value={data.observation}
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

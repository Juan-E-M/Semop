import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function DeliverableCreate(props) {
    const { project, milestones } = props;
    const initialState = {
        denomination: "",
        description: "",
        milestone_id: "",
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

        post(route("register-section.project.deliverable.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Registro realizado",
                    text: "Entregable registrado",
                    icon: "success",
                }).then(() => {
                    window.location.href = `/projects/${project.id}/deliverables`;
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
                                    Registrando entregable
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="denomination"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Denominación
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="denomination"
                                                name="denomination"
                                                value={data.denomination}
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
                                            htmlFor="milestone_id"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Hito
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                required
                                                id="milestone_id"
                                                name="milestone_id"
                                                value={data.milestone_id}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="" disabled>
                                                    Selecciona un hito
                                                </option>
                                                {milestones &&
                                                milestones.map(
                                                    (milestone, i) => (
                                                        <option key={milestone.id} value={milestone.id}>
                                                            Hito {i+1}: {milestone.date}
                                                        </option>
                                                    )
                                                )}
                                            </select>
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

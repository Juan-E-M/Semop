import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function RegisterCreate(props) {
    const { project } = props;
    const initialState = {
        tdr_amount: "",
        paid_tdr_amount: "",
        et_amount: "",
        paid_et_amount: "",
        requested_amount: "",
        project_plan: null,
        project_id: project.id,
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        ...initialState,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData('project_plan', file);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("follow-section.project.store"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Registro realizado",
                    text: "Registro financiero y plan de proyecto registrado",
                    icon: "success",
                }).then(() => {
                    window.location.href = `/follow/projects/${project_id}`;
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
            <Head title="Seguimiento y Monitoreo" />
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <p className="mt-5 text-sm leading-6 text-gray-600">
                                    Registro de información financiera y plan de
                                    proyecto
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="tdr_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto de TdR solicitados
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                min={0}
                                                type="number"
                                                id="tdr_amount"
                                                name="tdr_amount"
                                                value={data.tdr_amount}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="paid_tdr_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto de TdR pagados
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                min={0}
                                                type="number"
                                                id="paid_tdr_amount"
                                                name="paid_tdr_amount"
                                                value={data.paid_tdr_amount}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="et_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto de ET solicitados
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                min={0}
                                                type="number"
                                                id="et_amount"
                                                name="et_amount"
                                                value={data.et_amount}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="paid_et_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto de ET pagados
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                min={0}
                                                type="number"
                                                id="paid_et_amount"
                                                name="paid_et_amount"
                                                value={data.paid_et_amount}
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
                                            htmlFor="project_plan"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Plan operativo del proyecto
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="file"
                                                id="project_plan"
                                                name="project_plan"
                                                onChange={handleFileChange}
                                                accept=".pdf, .docx, .xlsx, .pptx"
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

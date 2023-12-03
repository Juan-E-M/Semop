import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import TechnicalPdfReport from "./TechnicalReport";

export default function Form(props) {
    const { project } = props;
    const [date, setDate] = useState("");

    const submit = (e) => {
        e.preventDefault();
        TechnicalPdfReport(date, project)
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
                                    Ingrese la fecha para generar el reporte
                                    técnico
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="date"
                                                name="date"
                                                value={date}
                                                onChange={(e)=>setDate(e.target.value)}
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
                                className="rounded-md bg-rose-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                            >
                                PDF
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

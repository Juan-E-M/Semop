import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FinancialStatusSelect = (
    {project_id,
    completed,
    deliverable_id,
    deliverable_financial_situation}
) => {
    const [selectOption, setSelectOption] = useState(deliverable_financial_situation);
    const handleChange = (e) => {
        const financial_situation = e.target.value
        Swal.fire({
            title: "¿Cambiar porcentaje de completado?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {         
                router.patch(
                    `/situation/projects/financial/store`,
                    { financial_situation: financial_situation, id: deliverable_id },
                    {
                        onSuccess:()=>{
                             Swal.fire({
                                title: "Éxito",
                                text: "Porcentaje actualizado.",
                                icon: "success",
                            })
                            setSelectOption(financial_situation)
                        }
                    }
                );
            }
        });
    };

    return (
        <select
            id="type"
            value={selectOption}
            onChange={handleChange}
            className={`block w-30 rounded-md border-1 text-gray-900 shadow-sm sm:text-sm ${completed == 1
                ? "text-sky-700 "
                : "text-orange-700 "}`}
        >
            <option value="0%">0%</option>
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%">100%</option>
        </select>
    );
};

export default function Index(props) {
    const { data: deliverables, links } = usePage().props.deliverables;
    const { auth, project, completed } = props;

    const handleSelecteChange = (e) => {
        if (e.target.value == "1") {
            router.visit(`/situation/projects/${project.id}/financial/1`);
        } else {
            router.visit(`/situation/projects/${project.id}/financial/0`);
        }
    };

    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-blue-200 hover:text-blue-700 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

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
            <Head title="Entregables" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto rounded-lg">
                    <h3 className="font-bold text-gray-600">
                        Estado Financiero de los entregables
                    </h3>

                    <div className="sm:w-40 p-1 my-3">
                        {auth.user.role_id == 1 ? (
                            <select
                                required
                                id="type"
                                value={completed == 1 ? "1" : "0"}
                                onChange={handleSelecteChange}
                                name="type"
                                className={`font-semibold block w-full rounded-md border-0 shadow-sm ring-2 ring-indigo-600 sm:text-sm ${
                                    completed == 1
                                        ? "text-sky-600 "
                                        : "text-orange-600 "
                                }`}
                            >
                                <option
                                    value="0"
                                    className="text-orange-600 font-semibold"
                                >
                                    INCOMPLETOS
                                </option>
                                <option
                                    value="1"
                                    className="text-sky-600 font-semibold"
                                >
                                    COMPLETOS
                                </option>
                            </select>
                        ) : (
                            <p className="font-semibold sm:text-sm text-orange-600">
                                INCOMPLETOS
                            </p>
                        )}
                    </div>
                    {deliverables == 0 ? (
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay Entregables
                            </div>
                        </div>
                    ) : (
                        <>
                        <div className="sm:overflow-hidden overflow-x-scroll">
                            <table className="w-full shadow border border-gray-300">
                                <thead>
                                    <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            N°
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Denominación
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            %Situación Financiera
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                            Fecha del Hito
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Más
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deliverables.map((deliverable, i) => (
                                        <tr
                                            key={deliverable.id}
                                            className="text-gray-700"
                                        >
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {i + 1}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {deliverable.denomination}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-1 text-sm">
                                                <FinancialStatusSelect project_id={project.id} deliverable_id={deliverable.id} deliverable_financial_situation={deliverable.financial_situation} completed={completed} />
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {new Date(
                                                        deliverable.milestone?.date
                                                    ).toLocaleString("es-ES", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </p>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <Link href={route("situation-section.project.financial.activity.index",{
                                                    project_id:project.id,
                                                    deliverable_id:deliverable.id
                                                })} className="text-blue-600 underline whitespace-no-wrap hover:text-purple-600">
                                                    Actividades
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            
                        </div>
                        <div className="flex flex-wrap justify-end mt-4 text-sm">
                        {links.map((link, key) =>
                            link.url == null ? (
                                <div
                                    key={key}
                                    className="mr-1 mb-1 px-2 py-2 text-sm leading-4 text-gray-400 border rounded"
                                >
                                    {link.label == "Next &raquo;"
                                        ? ">>"
                                        : link.label ==
                                          "&laquo; Previous"
                                        ? "<<"
                                        : link.label}
                                </div>
                            ) : (
                                <Link
                                    key={key}
                                    className={getClassName(
                                        link.active
                                    )}
                                    href={link.url}
                                >
                                    {link.label == "Next &raquo;"
                                        ? ">>"
                                        : link.label ==
                                          "&laquo; Previous"
                                        ? "<<"
                                        : link.label}
                                </Link>
                            )
                        )}
                    </div>
                   
                    </>
                    )}
                </div>
            </div>
            <style>{`
                
            `}</style>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";

export default function Index(props) {
    const { data: activities, links } = usePage().props.activities;
    const { auth, project, deliverable } = props;

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
            <Head title="Personal" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <h3 className="font-bold text-gray-600">
                        Actividades del Entregable - {deliverable.denomination}
                    </h3>
                    <Link
                        href= {route('situation-section.project.financial.activity.create',{
                            project_id: project.id,
                            deliverable_id:deliverable.id
                        })}
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 hover:underline focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white my-4"
                    >
                        Agregar Actividad
                    </Link>
                    {activities == 0 ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay actividades para este entregable
                            </div>
                        </div>
                    ) : (
                        <>
                            <table className="w-full shadow border border-gray-300">
                                <thead>
                                    <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            N°
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Responsable
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                            Fecha de Inicio
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                            Fecha de Fin
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Más
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities.map((activity, i) => (
                                        <tr
                                            key={activity.id}
                                            className="text-gray-700"
                                        >
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {i + 1}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {activity.in_charge}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {activity.start_date}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                                <p className="text-gray-900 whitespace-no-wrap ">
                                                    {activity.end_date}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                            <Link href={route("situation-section.project.financial.activity.view",{
                                                    project_id:project.id,
                                                    deliverable_id:deliverable.id,
                                                    activity_id:activity.id
                                                })} className="text-blue-600 underline whitespace-no-wrap hover:text-purple-600">
                                                    Más info.
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

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

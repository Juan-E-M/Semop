import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";

export default function Index(props) {
    const { data: milestones, links } = usePage().props.milestones;
    const { auth, project } = props;

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
            <Head title="Hitos" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <h3 className="font-bold text-gray-600">
                        Hitos del proyecto
                    </h3>
                    <Link
                        href= {route('register-section.project.milestone.create',{
                            project_id: project.id
                        })}
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 hover:underline focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white my-4"
                    >
                        Agregar Hito
                    </Link>
                    {milestones == 0 ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay Hitos
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
                                            Contingencias
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                            Fecha de hito
                                        </th>
                                        <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                            Más
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {milestones.map((milestone, i) => (
                                        <tr
                                            key={milestone.id}
                                            className="text-gray-700"
                                        >
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {i + 1}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {milestone.contingencies}
                                                </p>
                                            </td>
                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {new Date(
                                                        milestone.date
                                                    ).toLocaleString("es-ES", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </p>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                            <Link href={route("register-section.project.milestone.view",{
                                                    project_id:project.id,
                                                    milestone_id:milestone.id
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

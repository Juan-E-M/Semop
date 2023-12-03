import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import Projects from "../Projects";



export default function Index(props) {
    const { data: projects, links } = usePage().props.projects;
    const route_link = "register-section.project.info"
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Proyectos
                </h2>
            }
        >
            <Head title="Proyectos" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <Link
                        href={route("register-section.project.create")}
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 hover:underline focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white mb-4"
                    >
                        Agregar proyecto
                    </Link>
                    {projects == 0 ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay proyectos
                            </div>
                        </div>
                    ) : (
                       <Projects projects={projects} links={links} route_link={route_link}/>
                    )}
                </div>
            </div>
            <style>{`
                
            `}</style>
        </AuthenticatedLayout>
    );
}

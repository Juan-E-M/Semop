import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Projects from "../Projects";

export default function Index(props) {
    const { data: projects, links } = usePage().props.projects;
    const route_link = "situation-section.project.info"
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Situación del Proyecto
                </h2>
            }
        >
            <Head title="Situación" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
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

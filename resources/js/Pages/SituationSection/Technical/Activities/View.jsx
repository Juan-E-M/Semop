import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TechnicalActivityView(props) {
    const { activity, project, deliverable } = props;

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
                    <div className="bg-white rounded-md p-4 mt-3 shadow-md">
                        <h4 className=" font-bold mb-4">
                            Información de la actividad - {deliverable.denomination}
                        </h4>
                        <p>
                            <strong>Persona a cargo:</strong> {activity.in_charge}
                        </p>
                        <p>
                            <strong>Fecha de Inicio:</strong> {activity.start_date}
                        </p>
                        <p>
                            <strong>Fecha de Fin:</strong> {activity.end_date}
                        </p>
                        <p>
                            <strong>Como hacer la actividad:</strong> {activity.how}
                        </p>
                        <p>
                            <strong>Observación:</strong> {activity.observation}
                        </p>
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

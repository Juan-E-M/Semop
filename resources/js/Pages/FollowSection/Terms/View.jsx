import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TermView(props) {
    const { term, project } = props;

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
                            Información del término de referencia
                        </h4>
                        <p>
                            <strong>Fecha de presentación:</strong> {term.presentation_date}
                        </p>
                        <p>
                            <strong>Descripción:</strong> {term.description}
                        </p>
                        <p>
                            <strong>Fecha de Inicio TdR:</strong> {term.start_tdr_date}
                        </p>
                        <p>
                            <strong>Fecha de Fin TdR:</strong> {term.end_tdr_date}
                        </p>
                        <p>
                            <strong>Monto solicitado:</strong> {term.requested_amount}
                        </p>
                        <p>
                            <strong>Situación del proveedor:</strong> {term.situation}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

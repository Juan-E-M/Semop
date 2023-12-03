import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function SpecificationView(props) {
    const { specification, project } = props;

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
                            Información del la especificación
                        </h4>
                        <p>
                            <strong>Fecha de presentación:</strong> {specification.presentation_date}
                        </p>
                        <p>
                            <strong>Descripción:</strong> {specification.description}
                        </p>
                        <p>
                            <strong>Fecha de Inicio ET:</strong> {specification.start_et_date}
                        </p>
                        <p>
                            <strong>Fecha de Fin ET:</strong> {specification.end_et_date}
                        </p>
                        <p>
                            <strong>Monto solicitado:</strong> {specification.requested_amount}
                        </p>
                        <p>
                            <strong>Situación del proveedor:</strong> {specification.situation}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

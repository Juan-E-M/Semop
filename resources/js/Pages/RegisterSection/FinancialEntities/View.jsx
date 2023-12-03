import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

export default function FinancialEntityView(props) {
    const { financial_entity, project } = props;

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
                            Información de la entidad financiera
                        </h4>
                        <p>
                            <strong>Nombre:</strong> {financial_entity.name}
                        </p>
                        <p>
                            <strong>Monto del financiamiento:</strong> {financial_entity.financing_amount}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

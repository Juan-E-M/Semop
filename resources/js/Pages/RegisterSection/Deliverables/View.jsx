import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

export default function DeliverableView(props) {
    const { deliverable, project } = props;

    function formatDate(date) {
        const fecha = new Date(date);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear() % 100; 
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        return fechaFormateada;
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
            <Head title="Seguimiento y Monitoreo" />
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <div className="bg-white rounded-md p-4 mt-3 shadow-md">
                        <h4 className=" font-bold mb-4">
                            Información del Entregable
                        </h4>
                        <p>
                            <strong>Denominación:</strong> {deliverable.denomination}
                        </p>
                        <p>
                            <strong>Descripción:</strong> {deliverable.description}
                        </p>
                        <p>
                            <strong>Situación Técnica:</strong> {deliverable.technical_situation}
                        </p>
                        <p>
                            <strong>Situación Financiera:</strong> {deliverable.financial_situation}
                        </p>
                        <p>
                            <strong>Fecha de hito:</strong> {deliverable.milestone.date}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

export default function MilestoneView(props) {
    const { milestone, project } = props;
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
                            Información del Hito
                        </h4>
                        <p>
                            <strong>Fecha del hito:</strong> {milestone.date}
                        </p>
                        <p>
                            <strong>Contingencias:</strong>{" "}
                            {milestone.contingencies}
                        </p>
                        <p>
                            <strong>Entregables del hito:</strong>
                        </p>
                        {milestone.deliverables.length == 0 ? (
                            <>No hay entregables del hito</>
                        ) : (
                            milestone.deliverables.map((deliverable) => (
                                <p key={deliverable.id}>
                                    {deliverable.denomination}
                                </p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

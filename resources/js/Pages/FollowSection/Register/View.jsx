import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

export default function RegisterView(props) {
    const { project } = props;



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
                            Información financiera y plan de proyecto
                        </h4>
                        <p>
                            <strong>Monto TdR solicitados:</strong>{" "}
                            {project.follow_section.tdr_amount}
                        </p>
                        <p>
                            <strong>Monto TdR pagados:</strong>{" "}
                            {project.follow_section.paid_tdr_amount}
                        </p>
                        <p>
                            <strong>Monto ET pagados:</strong>{" "}
                            {project.follow_section.et_amount}
                        </p>
                        <p>
                            <strong>Monto ET pagados:</strong>{" "}
                            {project.follow_section.paid_et_amount}
                        </p>
                        <p>
                            <strong>Monto Solicitado:</strong>{" "}
                            {project.follow_section.requested_amount}
                        </p>
                        <p>
                            <strong>Plan Operativo:</strong>
                        </p>
                            <a
                                href={`/follow/projects/plan/download/${project.follow_section.project_plan}`}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Download
                            </a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

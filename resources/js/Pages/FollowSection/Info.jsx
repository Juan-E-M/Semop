import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    AddchartOutlined,
    FactCheckOutlined,
    BallotOutlined,
} from "@mui/icons-material";
import Swal from "sweetalert2";

export default function ProjectInfo(props) {
    const { project } = props;
    // Lista de opciones
    const opciones = [
        {
            icon: <AddchartOutlined className="text-amber-500 mr-2" />,
            title: project.follow_section
            ? "VER INFORMACIÓN"
            : "REGISTRAR INFORMACIÓN",
            quote: "Plan Operativo y Ejecución Financiera ",
            route: route(
                project.follow_section
                    ? "follow-section.project.view"
                    : "follow-section.project.create",
                { project_id: project?.id }
            ),
        },
        {
            icon: <FactCheckOutlined className="text-amber-500 mr-2" />,
            title: "TERMINOS DE REFERENCIA",
            quote: "Gestión de términos",
            route: route('follow-section.project.term.index',
                { project_id: project?.id }
            ),
        },
        {
            icon: <BallotOutlined className="text-amber-500 mr-2" />,
            title: "ESPECIFICACIÓN TÉCNICA",
            quote: "Gestión de especificaciones",
            route: route('follow-section.project.specification.index',
                { project_id: project?.id }
            ),
        },
    ];

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
            <Head title="Opciones del proyecto" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <div className="flex flex-col space-y-2">
                        {opciones.map((opcion, index) => (
                            <Link
                                key={index}
                                href={opcion.route}
                                className="bg-white p-4 rounded-md shadow-sm border-2 sm:w-60 flex items-center"
                            >
                                {opcion.icon}
                                <div>
                                    <h3 className="text-sm font-semibold">
                                        {opcion.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {opcion.quote}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FlagCircleOutlined,
    EventOutlined,
    MarkunreadMailboxOutlined,
    FaceOutlined,
    MonetizationOnOutlined,
} from "@mui/icons-material";
import Swal from "sweetalert2";

export default function ProjectInfo(props) {
    const { project } = props;

    // Lista de opciones
    const opciones = [
        {
            icon: <FlagCircleOutlined className="text-teal-500 mr-2" />,
            title: "OBJETIVOS",
            quote: "Gestión de objetivos",
            route: route('register-section.project.objective.index', { project_id: project?.id })
        },
        {
            icon: <EventOutlined className="text-teal-500 mr-2" />,
            title: "HITOS",
            quote: "Gestión de hitos",
            route: route('register-section.project.milestone.index', { project_id: project?.id })
        },
        {
            icon: <MarkunreadMailboxOutlined className="text-teal-500 mr-2" />,
            title: "ENTREGABLES",
            quote: "Gestión de Entregables",
            route: route('register-section.project.deliverable.index', { project_id: project?.id })
        },
        {
            icon: <FaceOutlined className="text-teal-500 mr-2" />,
            title: "MIEMBROS",
            quote: "Gestión de miembros",
            route: route('register-section.project.member.index', { project_id: project?.id })
        },
        {
            icon: <MonetizationOnOutlined className="text-teal-500 mr-2" />,
            title: "FINANCIERO",
            quote: "Gestión de entidades",
            route:  route('register-section.project.financial-entity.index', { project_id: project?.id })
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

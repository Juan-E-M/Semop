import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    HandymanOutlined,
    CreditScoreOutlined
} from "@mui/icons-material";

export default function ProjectInfo(props) {
    const { project } = props;

    // Lista de opciones
    const opciones = [
        {
            icon: <HandymanOutlined className="text-lime-700 mr-2" />,
            title: "TÉCNICA",
            quote: "Estado del Entregable(%)",
            route: route('situation-section.project.technical',{project_id:project.id, completed:0})
        },
        {
            icon: <CreditScoreOutlined className="text-lime-700 mr-2" />,
            title: "FINANCIERA",
            quote: "Estado del entregable(%)",
            route: route('situation-section.project.financial',{project_id:project.id, completed:0})
        }
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

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { EditNoteOutlined, DeleteForeverOutlined } from "@mui/icons-material";
import { Head, router, Link } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index(props) {
    const { auth } = props;
    const { data: users, links } = props.users;

    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-blue-200 hover:text-blue-700 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);
        const año = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");
        const dia = String(fecha.getDate()).padStart(2, "0");
        const hora = String(fecha.getHours()).padStart(2, "0");
        const minuto = String(fecha.getMinutes()).padStart(2, "0");
        const segundo = String(fecha.getSeconds()).padStart(2, "0");
        const fechaFormateada = `${año}-${mes}-${dia}, ${hora}:${minuto}:${segundo}`;
        return fechaFormateada;
    }

    function deleteUser(id) {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "La acción será irreversible",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/users/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Eliminado",
                            text: "El usuario fue eliminado",
                            icon: "success",
                        });
                    },
                });
            }
        });
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Usuarios
                </h2>
            }
        >
            <Head title="Proyectos" />

            <div className="max-w-7xl px-4 mt-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <Link
                        href={route("users.create")}
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 hover:underline focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white mb-4"
                    >
                        Agregar Usuario
                    </Link>
                    <table className="w-full shadow">
                        <thead>
                            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Nombre
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Email
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                    Fecha de creación
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:table-cell">
                                    Rol
                                </th>
                                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Más
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="text-gray-700">
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {user.name}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {user.email}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {formatearFecha(user.created_at)}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm hidden sm:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {user.role.id == 1
                                                ? "Administrador"
                                                : "Usuario"}
                                        </p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        {auth.user.id === user.id ? (
                                            <Link
                                                href={route("profile.edit")} 
                                                className="text-blue-600 underline whitespace-no-wrap hover:text-purple-600"
                                            >
                                                Mi perfil
                                            </Link>
                                        ) : (
                                            <div className="flex gap-3">
                                                <Link
                                                    href={route(
                                                        "users.create",
                                                        {
                                                            user_id: user.id,
                                                        }
                                                    )}
                                                >
                                                    <EditNoteOutlined
                                                        style={{
                                                            color: "#00C48C",
                                                        }}
                                                    />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteUser(user.id)
                                                    }
                                                >
                                                    <DeleteForeverOutlined
                                                        style={{
                                                            color: "#E94420",
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex flex-wrap justify-end mt-4 text-sm">
                                {links.map((link, key) =>
                                    link.url == null ? (
                                        <div
                                            key={key}
                                            className="mr-1 mb-1 px-2 py-2 text-sm leading-4 text-gray-400 border rounded"
                                        >
                                            {link.label == "Next &raquo;"
                                                ? ">>"
                                                : link.label ==
                                                  "&laquo; Previous"
                                                ? "<<"
                                                : link.label}
                                        </div>
                                    ) : (
                                        <Link
                                            key={key}
                                            className={getClassName(
                                                link.active
                                            )}
                                            href={link.url}
                                        >
                                            {link.label == "Next &raquo;"
                                                ? ">>"
                                                : link.label ==
                                                  "&laquo; Previous"
                                                ? "<<"
                                                : link.label}
                                        </Link>
                                    )
                                )}
                            </div>
                </div>
            </div>
            <style>{`
                
            `}</style>
        </AuthenticatedLayout>
    );
}

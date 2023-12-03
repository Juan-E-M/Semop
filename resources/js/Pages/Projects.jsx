import { Link } from "@inertiajs/react";
import { AccountBalanceOutlined } from "@mui/icons-material";

const CardProject = ({ project, route_link }) => {
    return (
        <Link
            href={route(route_link, {
                project_id: project.id,
            })}
        >
            <div className="bg-white p-3 rounded-md shadow-sm border border-gray-300 flex items-center">
                <div className="grid grid-cols-4 gap-4 ">
                    {/* Icono centrado */}
                    <div className="text-center col-span-1 flex items-center justify-center">
                        <AccountBalanceOutlined
                            fontSize="large"
                            style={{ color: "#3f51b5" }}
                        />
                    </div>
                    <div className="col-span-3 grid grid-rows-5">
                        <h4
                            className="text-lg font-semibold line-clamp-2"
                            style={{ gridRow: "span 3" }}
                        >
                            {project.title}
                        </h4>
                        <div
                            className="text-gray-500 text-sm"
                            style={{ gridRow: "span 2" }}
                        >
                            <p>Inicio: {project.start_date}</p>
                            <p>Fin: {project.end_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function Projects({ projects, links, route_link }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-blue-200 hover:text-blue-700 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Card 1 */}
                {projects.map((project) => (
                    <CardProject key={project.id} project={project} route_link={route_link}/>
                ))}
            </div>
            <div className="flex flex-wrap justify-end mt-4 text-sm">
                {links.map((link, key) =>
                    link.url == null ? (
                        <div
                            key={key}
                            className="mr-1 mb-1 px-2 py-2 text-sm leading-4 text-gray-400 border rounded"
                        >
                            {link.label == "Next &raquo;"
                                ? ">>"
                                : link.label == "&laquo; Previous"
                                ? "<<"
                                : link.label}
                        </div>
                    ) : (
                        <Link
                            key={key}
                            className={getClassName(link.active)}
                            href={link.url}
                        >
                            {link.label == "Next &raquo;"
                                ? ">>"
                                : link.label == "&laquo; Previous"
                                ? "<<"
                                : link.label}
                        </Link>
                    )
                )}
            </div>
        </>
    );
}

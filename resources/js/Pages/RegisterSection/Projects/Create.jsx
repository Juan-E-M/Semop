import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function ProyectCreate(props) {

    const initialState = {
        title:'',
        days:'',
        start_date:'',
        end_date:'',
        extension:'',
        ceplan_register:'',
        total_amount:'',
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        ...initialState
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
      
        post(route('register-section.project.store'), {
          onSuccess: () => {
            Swal.fire({
              title: 'Registro realizado',
              text: 'Proyecto registrado',
              icon: 'success',
            }).then(() => {
                window.location.href = `/projects`;
            });
          },
        });
      };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Proyectos
                </h2>
            }
        >
            <Head title="Registrar proyectos" />

            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto overflow-hidden rounded-lg">
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                               
                                <p className="mt-5 text-sm leading-6 text-gray-600">
                                    Registrando un nuevo proyecto
                                </p>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="title"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Título
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="title"
                                                name="title"
                                                value={data.title}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="days"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Número de días
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="number"
                                                min="0"
                                                id="days"
                                                name="days"
                                                value={data.days}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="start_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Inicio
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="start_date"
                                                name="start_date"
                                                value={data.start_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="end_date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de Fin
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="date"
                                                id="end_date"
                                                name="end_date"
                                                value={data.end_date}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="extension"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Ampliación
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="extension"
                                                name="extension"
                                                value={data.extension}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="ceplan_register"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Registro de ceplan
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                id="ceplan_register"
                                                name="ceplan_register"
                                                value={data.ceplan_register}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="total_amount"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Monto total
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="number"
                                                min="0"
                                                id="total_amount"
                                                name="total_amount"
                                                value={data.total_amount}
                                                onChange={handleOnChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                               
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

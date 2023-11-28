import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
          <Head title="SEMOP" />
          <div className="relative flex flex-col justify-center items-center h-screen bg-dots-darker bg-center bg-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <div className="container mx-auto py-8 px-4 text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">SEMOP</h1>
              <h6 className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                Developed by Ocean
              </h6>
              <div className="flex items-center justify-center space-x-4 mt-auto">
                {props.auth.user ? (
                  <Link
                    href={route("dashboard")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                  >
                    INGRESAR A SEMOP
                  </Link>
                ) : (
                  <>
                    <Link
                      href={route("login")}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      href={route("register")}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 hover:text-white active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
              <br/>
              <br/>
              <div className="flex items-center justify-center">
                <img
                  className="w-full md:max-w-2xl h-auto"
                  src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/sites/19/2016/08/los-procesos-del-project-management.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
 );
}


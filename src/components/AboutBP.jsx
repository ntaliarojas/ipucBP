import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export const AboutBP = () => {
  return (
    <div
      id="contacto"
      className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Iglesia pentecostal unida de colombia
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              ¡Te damos la más cálida bienvenida a la Iglesia Pentecostal Unida
              de Colombia - Bravo Páez!
            </p>

            <br />
            <p className="text-gray-400">
              Explora nuestras actividades, únete a nuestras reuniones y
              descubre un ambiente acogedor, hay un lugar especial para ti en
              nuestra familia.
            </p>
            <br />
            <p className="text-gray-400">
              Puedes contactarnos directamente por medio de:
              <li className="text-blue-500 cursor-pointer">
                telefono: 3219271787
              </li>
              <li className="text-blue-500 cursor-pointer">
                correo: decomipucbravopaez@gmail.com
              </li>
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Horarios de cultos
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                <ul>
                  <li>Martes, Jueves y Sabados</li>
                  <li>7:00 pm a 8:30 pm</li>
                  <br />
                  <li>Domingos</li>
                  <li>9:00 am a 12:30 pm</li>
                </ul>
              </dd>

             
              <dd className="mt-2 leading-7 text-gray-400">
                <ul>

                  <li className="text-yellow-500">
                    Clase de adolescetes: sabados 5:00 pm
                  </li>
                </ul>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">más información</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Si deseas obtener más información acerca de nuestra iglesia,
                eventos o cualquier otra consulta, no dudes en comunicarte con
                nosotros a través de nuestras plataformas en{" "}
                <a
                  href="https://www.instagram.com/ipucbravopaez/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>{" "}
                y{" "}
                <a
                  href="https://www.facebook.com/ipuc.bravopaez.7"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                . ¡Esperamos tu mensaje y ansiosos por conectarnos contigo!
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <br />
    </div>
  );
};

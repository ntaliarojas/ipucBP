import React from "react";
import img1 from "../assets/images/img1.jpg";
import oracion from "../assets/images/oracion.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/niños.jpg";
import img4 from "../assets/images/ayuno.jpg";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const people = [
  {
    name: "Oración por meet",
    role: "miercoles 9:00 pm",
    imageUrl: oracion,
  },

  {
    name: "Vigilia presencial",
    role: "viernes / 6:00 am - 9:00 am",
    imageUrl: img2,
  },

  {
    name: "Clases KIDS",
    role: "Domingos /  9:00 am",
    imageUrl: img3,
  },
  {
    name: "Ayuno presencial",
    role: " Jueves / apartir de las 7:00 am",
    imageUrl: img4,
  },

  // More people...
];

export const Nosotros = () => {
  return (
    <div>
      <div id="eventos" className="sm:flex text-center pt-12">
        <div className="flex-1 py-16">
          <h2 className="text-[40px] font-bold sm:text-[48px] leading-none ">
            ESTA CASA ES MEJOR <br /> CONTIGO
          </h2>
          <br />
          <p className="text-[13px]  sm:text-[19px] py-2 ">
            Un Señor, una fe, un bautismo. un Dios y Padre de todos,
            <br /> el cual es sobre todos, y por todos, y en todos.
          </p>
        </div>
      </div>
      <div className="sm:flex">
        <div className="sm:w-1/2">
          {/* Contenido del primer elemento (imagen, por ejemplo) */}
          <img className="h-full w-full object-cover" src={img1} alt="img1" />
        </div>

        <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#111827] to-[#3a304d] text-white py-16 sm:py-40 px-4 text-center sm:h-full">
          {/* Contenido del segundo elemento */}
          <div className="h-full flex flex-col justify-between">
            <div>
              <h1 className="font-bold sm:py-6 text-[25px] sm:text-[45px] leading-none">
                Bienvenidos a nuestra <br /> iglesia
              </h1>
              <p className="pt-6 px-4 text-gray-300">
                Si estás considerando visitar nuestra comunidad por primera vez
                y buscas recibir inspiración espiritual o algún consejo, te
                extendemos una cordial invitación a ponerte en contacto con
                nosotros. Uno de nuestros líderes estará encantado de ofrecerte
                la asistencia necesaria
              </p>
            </div>
            <div className="pt-6">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Más información
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Importante!</h3>
                  <p className="py-4">
                    Si requieres información adicional o asistencia, no dudes en
                    ponerte en contacto con nuestra línea directa marcando el
                    número 32912827. También puedes visitarnos personalmente en
                    nuestra sede ubicada en el Barrio Bravo Páez, Bogotá,
                    Distrito Capital,
                    <samp className="text-blue-500">
                      {" "}
                      ᴄʟʟ 35ʙ sᴜʀ # 25 ᴀ 20 ʙᴏɢᴏᴛá, ᴄᴏʟᴏᴍʙɪᴀ.
                    </samp>
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Cerrar</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sm:flex text-center justify-center">
          <div className=" py-16">
            <h2 className="text-[40px] font-bold sm:text-[58px] leading-none ">
              Reuniones BP
            </h2>
            <br />
            <p className="px-8">
              Te invitamos a participar en nuestras reuniones y eventos, donde
              encontrarás un mensaje <br />
              especial que enriquecerá tu experiencia espiritual. ¡Esperamos
              contar contigo <br />y compartir juntos momentos significativos!
            </p>
          </div>
        </div>

        <div className="bg-white py-2">
          <div className="mx-auto flex items-center justify-center">
            <ul role="list" className="sm:flex gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="sm:flex sm:flex-col items-center py-2">
                    <img
                      className="h-86 w-60 mb-4" // Agregamos margen inferior
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="text-center">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        id="contacto"
        className="relative isolate overflow-hidden bg-gray-900  sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Iglesia pentecostal unida de colombia
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                ¡Te damos la más cálida bienvenida a la Iglesia Pentecostal
                Unida de Colombia - Bravo Páez!
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
                <dt className="mt-4 font-semibold text-white">
                  más información
                </dt>
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
    </div>
  );
};

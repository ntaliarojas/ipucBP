import React from "react";
import familiaPastoral from "../assets/images/familiaPastoral.jpg";

import img1 from "../assets/images/oracion.jpg";
import img2 from "../assets/images/img8.jpg";
import img3 from "../assets/images/niños.jpg";

import img4 from "../assets/images/fotoGrupo.jpeg";
import img5 from "../assets/images/img3.jpg";
import img6 from "../assets/images/copia.jpg";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    imageUrl: img1,
  },
  {
    id: 2,
    imageUrl: img2,
  },
  {
    id: 3,
    imageUrl: img3,
  },
  {
    id: 3,
    imageUrl: img4,
  },
  {
    id: 3,
    imageUrl: img5,
  },
  {
    id: 3,
    imageUrl: img6,
  },
];

export const Gallery = () => {
  return (
    <>
      <div>
        <div>
          <div id="familia" className="sm:flex text-center pt-6">
            <div className="flex-1 py-12">
              <h2 className="text-[40px] font-bold sm:text-[48px] leading-none ">
                Nuestros Pastores
              </h2>
              <br />
              <p className="text-[13px]  sm:text-[19px] py-2 ">
                Y os daré pastores según mi corazón, que os apacienten con{" "}
                <br />
                conocimiento y con inteligencia. <br /> Jeremías 3:15
              </p>
            </div>
          </div>
          <div className="sm:flex">
            <div className="sm:w-1/2">
              {/* Contenido del primer elemento (imagen, por ejemplo) */}
              <img
                className="h-full w-full object-cover"
                src={familiaPastoral}
                alt="img1"
              />
            </div>

            <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#111827] to-[#3a304d] text-white py-16 sm:py-40 px-4 text-center sm:h-full">
              {/* Contenido del segundo elemento */}
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className=" px-14 text-justify text-gray-300">
                    Un hombre llamado Luis Hernán Osorio Núñez y su amada esposa
                    Nelly Arboleda Trujillo. Juntos, emprendieron un viaje
                    extraordinario dedicado al servicio en el ministerio,
                    compartiendo las buenas nuevas con aquellos que cruzaban su
                    camino. Su historia en el ministerio abarcaba más de 35
                    años, un tiempo lleno de devoción, integridad y esfuerzo
                    incansable. <br />
                    <br />
                    Desde los primeros días de su llamado, el Pastor Luis Hernán
                    y su esposa Nelly sintieron el peso de la responsabilidad
                    pastoral. Se embarcaron en una misión de amor y compasión,
                    llevando consigo el mensaje de esperanza y salvación a cada
                    rincón de la comunidad que servían. <br />
                    <br />A lo largo de los años, la integridad del Pastor Luis
                    Hernán y la dedicación de Nelly Arboleda brillaron como un
                    faro. Su amor por las personas y su firmeza en la fe se
                    convirtieron en un testimonio vivo. En tiempos de alegría,
                    estaban allí para celebrar, y en momentos de dificultad,
                    extendían una mano compasiva para consolar y guiar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div id="galeria">
          <h2 className="text-[40px] text-center py-16 font-bold sm:text-[48px] leading-none ">
            Galeria BP
          </h2>
          <div className="gallery">
            {data.map((item, index) => {
              return (
                <div className="pics" key={index}>
                  <img
                    className="img"
                    src={item.imageUrl}
                    alt={`Imagen ${item.id}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="pt-6"></div>
          <div className=" py-6 text-center">
            <a href="https://www.facebook.com/ipuc.bravopaez.7/photos">
              <button className="btn ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
                Ver galeria BP
              </button>
            </a>
          </div>
          <br />
        </div>

        <div id="contacto" className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
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
                  descubre un ambiente acogedor, hay un lugar especial para ti
                  en nuestra familia.
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
                    eventos o cualquier otra consulta, no dudes en comunicarte
                    con nosotros a través de nuestras plataformas en{" "}
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
    </>
  );
};

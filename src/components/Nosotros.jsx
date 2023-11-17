import React from "react";
import img1 from "../assets/images/img1.jpg";
import oracion from "../assets/images/oracion.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/niños.jpg";
import img4 from "../assets/images/ayuno.jpg";

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
      <div className="sm:flex text-center pt-12">
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
        <div id="eventos" className="sm:flex text-center justify-center">
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
     
    </div>
  );
};

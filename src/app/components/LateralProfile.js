"use client";
import Image from "next/image";
import { useState } from "react";
import { useCustomContext } from "../context/utilsContext";

const LateralProfile = () => {
  const { handleChangePointerColor } = useCustomContext();
  const [successCopy, setSuccessCopy] = useState();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("matirodriguez120401@gmail.com");
      setSuccessCopy(true);
    } catch (error) {
      setSuccessCopy(false);
    }
  };

  return (
    <section className="w-full pb-8 lg:w-1/4 z-10">
      <div className="flex items-center lg:items-start lg:flex-col">
        <Image
          src="/foto_perfil.jpeg"
          width={300}
          height={300}
          priority={true}
          alt="Foto de perfil"
          className="rounded-full		"
          onLoad={(image) => image.target.classList.remove("opacity-0")}
        />
        <div className="pl-4 lg:pl-0 lg:pt-4">
          <h2 className="text-2xl font-extrabold">Matias Rodriguez</h2>
        </div>
      </div>
      <article>
        <p className="py-3" style={{ fontSize: ".92rem" }}>
          Liderazgo | Proactivo | Empático | Trabajo en equipo | Rápido
          aprendizaje | Adaptabilidad | Gestión del tiempo | Resolución de
          problemas | Autodidacta | Responsable |
          Flexibilidad | Escucha activa |
        </p>
        <div className="flex justify-center">
          <hr className="w-3/4 opacity-20" />
        </div>
        <div className="pt-3">
          <ul className="text-sm">
            <li
              className="pb-2 flex justify-start items-center gap-x-2"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="mailto:matirodriguez120401@gmail.com"
                className="flex items-center gap-x-2 cursor-none hover:text-green-600"
              >
                <span
                  className="icon-[bi--envelope]"
                  role="img"
                  aria-hidden="true"
                ></span>
                matirodriguez120401@gmail.com
              </a>
              {
                successCopy ? (
                  <span className="icon-[icon-park-solid--correct] w-4 h-4 text-green-600" role="img" aria-hidden="true" />
                ) : (
                  <span
                    className="icon-[bi--copy] w-5 h-5 hover:text-green-600 cursor-none"
                    role="button"
                    aria-hidden="true"
                    aria-label="Copiar email"
                    onClick={handleCopy}
                  ></span>
                )
              }
              
              {successCopy && (
                <span className="text-green-600 text-xs opacity-70">
                  {successCopy}
                </span>
              )}
            </li>
            <li
              className="pb-2 hover:text-green-600"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="https://www.linkedin.com/in/matirodriguez23/"
                target="_blank"
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[bi--linkedin]"
                  role="img"
                  aria-hidden="true"
                ></span>
                in/matirodriguez23
              </a>
            </li>
            <li
              className="pb-2 hover:text-green-600"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="https://github.com/MatiasRodriguez21"
                target="_blank"
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[uiw--github]"
                  role="img"
                  aria-hidden="true"
                ></span>
                github/MatiasRodriguez21
              </a>
            </li>
            <li
              className="hover:text-green-600"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="/Rodriguez_Matias.pdf"
                download
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[hugeicons--google-sheet]"
                  role="img"
                  aria-hidden="true"
                ></span>
                Descargar Curriculum
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default LateralProfile;

import { useState } from "react";
import Project from "../components/Project";
import Nav from "../components/Nav";
/**
 * Skills:
 * composant pour afficher les competences,
 * Il s'agit du contenu d'une page complete
 * située sur la route : "/skills"
 */

export default function Skills() {
    //On déclare une constant pour le choix du type de projet
    const [choice, setChoice] = useState("All");
    
    const listSkills = [
        {
            name: "Symfony",
            image: "https://api.iconify.design/logos:symfony.svg",
            desc: "Framework PHP for modern and robust web applications",
        },
        {
            name: "React",
            image: "https://api.iconify.design/logos:react.svg",
            desc: "JS Library for building UI web applications",
        },
        {
            name: "MySQL",
            image: "https://api.iconify.design/logos:mysql-icon.svg",
            desc: "MySQL is a relational database management system.",
        },
     
        {
            name: "NodeJS",
            image: "https://api.iconify.design/logos:nodejs-icon.svg",
            desc: "CI/CD with GitHub Action, VPS mounting and administration",
        },
        // {
        //     name: "Figma",
        //     image: "https://api.iconify.design/logos:figma-icon.svg",
        //     desc: "CI/CD with GitHub Action, VPS mounting and administration",
        // },
        // {
        //     name: "Javascript",
        //     image: "https://api.iconify.design/logos:javascript-icon.svg",
        //     desc: "CI/CD with GitHub Action, VPS mounting and administration",
        // },
    ]
    return (
        <main> 
            <Nav /> 
        <section className="flex gap-5 px-5 py-10">
            <div className="w-1/3">
                <h1 className="mb-5 text-3xl font-bold text-white ">Skillset</h1>
                <p className="leading-relaxed text-slate-300">Compétences en JavaScript, React, Node.js, PHP, SQL, et Symfony. Mon expertise en développement est complétée par un titre RNCP de Web Designer, me permettant d'apporter une approche créative et visuelle au développement d'applications.</p>
            </div>
            <ul className="grid w-2/3 grid-cols-2"> 
                {
                    listSkills.map((skill) => (
                        <li className="cursor-pointer"
                        key={ skill.name }
                        date-choice={skill.name}
                        onClick={() => setChoice(skill.name)}>
                            <img className="transition ease-in-out hover:scale-125"
                            src={ skill.image } 
                            alt={ skill.name + " logo "}
                            width={ 32 } 
                        />
                            <h3 className="text-lg font-semibold text-white">{ skill.name }</h3>
                            <p className="text-slate-500">{ skill.desc }</p>
                        </li>
                    ))
                }
            </ul>
        </section>
        <section>
            <Project prop = {choice} />
        </section>
        </main>
    )
}
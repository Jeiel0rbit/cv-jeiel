const educationData = [
  {
    institution: "T&T Informática",
    course: "Informática",
    year: "2018",
  },
  {
    institution: "ByLearn",
    course: "Linguagem de Programação Python Básico",
    year: "2020",
  },
  {
    institution: "Fundação Bradesco",
    course: "Segurança da Informação",
    year: "2020",
  },
  {
    institution: "Fundação Bradesco",
    course: "Segurança em Tecnologia da Informação",
    year: "2021",
  },
  {
    institution: "Escola Virtual GOV",
    course: "Segurança e Privacidade do Computador",
    year: "2021",
  },
  {
    institution: "EAD",
    course: "Proteção e Combate a Incêndio",
    year: "2021",
  },
  {
    institution: "Fundação Bradesco",
    course: "Fundamentos de TI: Hardware e Software",
    year: "2021",
  },
  {
    institution: "Fundação Bradesco",
    course: "HTML, CSS e Javascript - Básico",
    year: "2021",
  },
  {
    institution: "TDI (Técnicas de Invasão)",
    course: "Hacker Ético - Segurança da Informação",
    year: "2022",
  },
  {
    institution: "SEPP Cursos",
    course: "Bombeiro Civil",
    year: "2022",
  },
  {
    institution: "SEPP Cursos",
    course: "Proteção e Combate a Incêndio (EAD)",
    year: "2022",
  },
  {
    institution: "UNAMA",
    course: "Graduado em Segurança Digital",
    year: "2023",
  },
  {
    institution: "UNAMA",
    course: "Pós-graduado em Segurança Digital",
    year: "2024",
  },
    {
    institution: "Hackers do Bem",
    course: "Nivelamento",
    year: "2024",
  },
  {
    institution: "Hackers do Bem",
    course: "Curso Básico",
    year: "2024",
  },
  {
    institution: "Alura",
    course: "Front-End",
    year: "2024",
  },
  {
    institution: "Alura",
    course: "Back-End Google Gemini (IA)",
    year: "2024",
  },
  {
    institution: "LinkedIn Learning",
    course: "DevOps",
    year: "2025",
  },
];

export const Education = () => {
  const half = Math.ceil(educationData.length / 2);
  const leftColumn = educationData.slice(0, half);
  const rightColumn = educationData.slice(half);

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Formação Acadêmica</h2>
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 space-y-4 pr-4">
          {leftColumn.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold">Instituição: {item.institution}</h3>
              <h4 className="italic">Curso: {item.course}</h4>
            </div>
          ))}
        </div>
        <div className="w-1/2 space-y-4 pl-4">
          {rightColumn.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold">Instituição: {item.institution}</h3>
              <h4 className="italic">Curso: {item.course}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

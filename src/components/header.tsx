import { Avatar } from "@heroui/react";

export const Header = () => {
  return (
    <header className="flex flex-col items-center mb-8">
      <Avatar
        src="perfil.jpg"
        className="w-32 h-32 mb-4"
        isBordered
      />
      <h1 className="text-4xl font-bold">Jeiel Lima Miranda</h1>
      <h2 className="text-2xl text-default-500">
        Especializado em Segurança Digital
      </h2>
    </header>
  );
};
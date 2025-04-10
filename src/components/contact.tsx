import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contact = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <ul className="space-y-3">
        <li>
          <Link href="https://wa.me/5591988544585?text=CV%20Jeiel" className="flex items-center gap-2">
            <Icon icon="lucide:phone" className="text-success" />
            <span>(91) 9 8854-4585</span>
          </Link>
        </li>
        <li>
          <Link
            href="mailto:jeiel.lima.miranda@gmail.com"
            className="flex items-center gap-2"
          >
            <Icon icon="lucide:mail" className="text-danger" />
            <span>jeiel.lima.miranda@gmail.com</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Icon icon="lucide:user" className="text-default-500" />
          <span>Idade: 21 anos</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon icon="lucide:globe" className="text-default-500" />
          <span>Nacionalidade: Brasileira.</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon icon="lucide:map-pin" className="text-default-500" />
          <span> 
            Estado: Pará.
            <br/>
            Cidade: Aananindeua.
            <br/>
            Bairro: Centro.
            </span>
        </li>
      </ul>
    </section>
  );
};
import { useListaEnderecosContext } from "@/context/ListaEnderecosContext";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export type CardEnderecoType = {
  id: string;
  label: string;
  name: string;
  mobile: string;
  planet: string;
  lote?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  zip?: string;
};

const CardEndereco = ({
  endereco,
  selected,
  onClick,
}: {
  endereco: CardEnderecoType;
  selected: boolean;
  onClick: () => void;
}) => {
  const {
    id,
    label,
    name,
    mobile,
    planet,
    lote,
    address,
    country,
    state,
    city,
    zip,
  } = endereco;

  const { removeEnderecoLista } = useListaEnderecosContext();
  const router = useRouter();

  return (
    <div
      className={classNames(
        "relative border-2 p-10 rounded-lg border-gray-200 cursor-pointer hover:border-purple-600 transition ease-in-out delay-150",
        {
          "border-purple-600": selected,
        }
      )}
      onClick={() => onClick()}
      
    >
      <div
        className={
          "absolute rounded-full right-10 p-1 border-2 border-purple-600"
        }
      >
        <div
          className={classNames("rounded-full p-2", {
            "bg-purple-600 transition ease-in-out delay-150": selected,
          })}
        ></div>
      </div>
      <span
        className={classNames("text-xs font-semibold p-1 rounded-lg", {
          "bg-blue-200": label === "Main house",
          "bg-amber-200": label === "Office",
          "bg-green-200": label === "Storage",
          "bg-fuchsia-200": label === "Factory",
        })}
      >
        {label}
      </span>
      <h3 className="text-xl font-semibold mb-4 mt-1">{name}</h3>
      <p className="font-semibold">{mobile}</p>
      {address && (
        <p className="text-gray-400 mb-4">
          {address}, {city}, {state},{zip}, {country}, {planet}
        </p>
      )}
      {lote && (
        <p className="text-gray-400 mb-4">
          {lote}, {planet}
        </p>
      )}
      <div className="flex gap-4">
        <button
          className={classNames("py-2 px-4 border-2 rounded-lg font-semibold", {
            "bg-white cursor-not-allowed": !selected,
            "bg-purple-100 hover:bg-purple-200 transition ease-in-out delay-150": selected,
            "border-purple-400 transition ease-in-out delay-150": selected,
          })}
          onClick={() => router.push("/cadastro/" + id)}
          disabled={!selected}
        >
          Edit address
        </button>
        <button
          className={classNames("py-2 px-4 border-2 rounded-lg font-semibold", {
            "bg-white cursor-not-allowed": !selected,
            "bg-purple-100 hover:bg-purple-200 transition ease-in-out delay-150": selected,
            "border-purple-400 transition ease-in-out delay-150": selected,
          })}
          onClick={() => removeEnderecoLista(id)}
          disabled={!selected}
        >
          Delete address
        </button>
      </div>
    </div>
  );
};

export default CardEndereco;

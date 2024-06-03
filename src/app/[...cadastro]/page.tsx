"use client";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import "./style.css";
import { useRef, useState } from "react";
import Map from "@/components/Map/Map";
import { Inter } from "next/font/google";
import { useListaEnderecosContext } from "@/context/ListaEnderecosContext";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Cadastro({params}: any) {
  const { addEnderecoLista, editEnderecoLista, listaEnderecos } = useListaEnderecosContext();
  const enderecoParaEditar = listaEnderecos.find((endereco) => endereco.id === params.cadastro[1])
  const [planeta, setPlaneta] = useState<string>(enderecoParaEditar?.planet || "");
  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const cadastraEndereco = () => {
    const formData = new FormData(formRef.current!);

    if (!params.cadastro[1]) {
      addEnderecoLista({
        id: uuidv4(),
        label: formData.get("label") as string,
        name: formData.get("name") as string,
        mobile: formData.get("mobile") as string,
        planet: formData.get("planet") as string,
        lote: formData.get("lote") as string,
        address: formData.get("address") as string,
        country: formData.get("country") as string,
        state: formData.get("state") as string,
        city: formData.get("city") as string,
        zip: formData.get("zip") as string,
      });
    } else {
      editEnderecoLista({
        id: params.cadastro[1],
        label: formData.get("label") as string,
        name: formData.get("name") as string,
        mobile: formData.get("mobile") as string,
        planet: formData.get("planet") as string,
        lote: formData.get("lote") as string,
        address: formData.get("address") as string,
        country: formData.get("country") as string,
        state: formData.get("state") as string,
        city: formData.get("city") as string,
        zip: formData.get("zip") as string,
      });
    }

    router.push("/");
  };

  return (
    <div className={inter.className}>
      <main className="flex flex-col">
        <header className="flex gap-3 p-8 border-b-2">
          <button onClick={() => router.push("/")}>
            <Image src={arrow} width={30} height={30} alt="Left arrow" />
          </button>
          <h1 className="text-3xl font-semibold">Shipping address</h1>
        </header>

        <form className="flex flex-col p-8 gap-6 font-semibold" ref={formRef} onSubmit={cadastraEndereco} id="cadastro-form">
          <fieldset className="flex flex-col">
            <label htmlFor="label">Address label:</label>
            <select
              id="label"
              name="label"
              required
              className="border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-50 focus:border-gray-400"
              defaultValue={enderecoParaEditar?.label || ""}
            >
              <option disabled value=""></option>
              <option value="Factory">Factory</option>
              <option value="Storage">Storage</option>
              <option value="Office">Office</option>
              <option value="Main house">Main house</option>
            </select>
            <Map />
          </fieldset>
          <fieldset className="flex gap-6">
            <div className="flex flex-col grow">
              <label htmlFor="name">Full name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.name || ""}
              />
            </div>
            <div className="flex flex-col grow">
              <label htmlFor="mobile">Mobile phone *</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                className="border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.mobile || ""}
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-6">
            <label htmlFor="planet">Planet *</label>
            <select
              id="planet"
              name="planet"
              required
              onChange={(e) => setPlaneta(e.target.value)}
              className="border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-50 focus:border-gray-400"
              defaultValue={enderecoParaEditar?.planet || ""}
            >
              <option disabled value=""></option>
              <option value="Earth">Earth</option>
              <option value="Mars">Mars</option>
            </select>
            {planeta === "Earth" && <label htmlFor="country">Addreess line *</label>}
            {planeta === "Earth" && (
              <input
                type="text"
                id="address"
                name="address"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.address || ""}
              ></input>
            )}
            {planeta === "Earth" && <label htmlFor="country">Country *</label>}
            {planeta === "Earth" && (
              <input
                type="text"
                id="country"
                name="country"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.country || ""}
              ></input>
            )}
            {planeta === "Earth" && <label htmlFor="state">State *</label>}
            {planeta === "Earth" && (
              <input
                type="text"
                id="state"
                name="state"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.state || ""}
              ></input>
            )}
            {planeta === "Earth" && <label htmlFor="city">City *</label>}
            {planeta === "Earth" && (
              <input
                type="text"
                id="city"
                name="city"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.city || ""}
              ></input>
            )}
            {planeta === "Earth" && <label htmlFor="zip">Zip code *</label>}
            {planeta === "Earth" && (
              <input
                type="text"
                id="zip"
                name="zip"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                defaultValue={enderecoParaEditar?.zip || ""}
              ></input>
            )}
            {planeta === "Mars" && <label htmlFor="lote">Lote code *</label>}
            {planeta === "Mars" && (
              <input
                type="text"
                id="lote"
                name="lote"
                required
                className="flex border-2 rounded-lg grow py-2 p-4 focus:outline-none transition ease-in-out delay-100 focus:border-gray-400"
                maxLength={4}
                minLength={4}
                defaultValue={enderecoParaEditar?.lote || ""}
              ></input>
            )}
          </fieldset>
        </form>

        <footer className="flex bg-gray-100 p-10 justify-end gap-4 p-8">
          <button className="py-2 px-4 border-2 bg-white rounded-lg font-bold transition ease-in-out delay-150 hover:bg-gray-200" onClick={() => router.push("/")}>
            Cancel
          </button>
          <button
            className="py-2 px-4 border-2 border-indigo-600 bg-indigo-500 rounded-lg text-white transition ease-in-out delay-150 hover:bg-indigo-600"
            form="cadastro-form"
          >
            Save changes
          </button>
        </footer>
      </main>
    </div>
  );
}

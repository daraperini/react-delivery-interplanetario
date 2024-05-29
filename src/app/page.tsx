"use client";
import arrow from "../../public/arrow.svg";
import Image from "next/image";
import { useListaEnderecosContext } from "../context/ListaEnderecosContext";
import CardEndereco from "@/components/CardEndereco/CardEndereco";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnderecosCadastrados() {
  const router = useRouter();
  const [busca, setBusca] = useState("");
  const [enderecoSelecionado, setEnderecoSelecionado] = useState<string>();
  const { listaEnderecos } = useListaEnderecosContext();

  return (
    <main className="flex flex-col ">
      <header className="flex gap-3 p-8 border-b-2">
        <button>
          <Image src={arrow} width={30} height={30} alt="Left arrow" onClick={() => router.back()}/>
        </button>
        <h1 className="text-3xl font-semibold">Address</h1>
      </header>
      <section>
        <div className="flex m-8 border-2 rounded-lg bg-gray-200">
          <button className="grow py-2 border-2 bg-white rounded-lg font-bold">
            Shipping address
          </button>
          <button className="grow cursor-not-allowed" disabled>Billing adress</button>
        </div>
        <div className="flex m-8 gap-4">
          <input
            type="search"
            placeholder="Search the address name here"
            className="flex border-2 rounded-lg grow py-2 pl-4 focus:outline-none transition ease-in-out delay-150 focus:border-gray-400"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          ></input>
          <button
            className="grow-0 text-purple-600 font-semibold border-2 border-purple-600 px-10 rounded-lg transition ease-in-out delay-150 hover:bg-purple-100"
            onClick={() => router.push("/cadastro")}
          >
            Add adress
          </button>
        </div>
      </section>
      <section className="flex flex-col m-8 mt-0 gap-4">
        <h2 className="font-semibold">Address list</h2>
        {listaEnderecos.length === 0 && <p>No address found</p>}
        {listaEnderecos.length > 0 &&
          busca &&
          listaEnderecos.every((endereco) =>
            !endereco.name.toLowerCase().includes(busca.toLowerCase())
          ) && <p>No address found with: <strong>{busca}</strong></p>}
        {listaEnderecos.map((endereco) => {
          if (
            busca &&
            !endereco.name.toLowerCase().includes(busca.toLowerCase())
          ) {
            return null;
          }
          return (
            <CardEndereco
              key={endereco.id}
              endereco={endereco}
              selected={enderecoSelecionado === endereco.id}
              onClick={() => setEnderecoSelecionado(endereco.id)}
            />
          );
        })}
      </section>
      <footer className="flex bg-gray-100 p-10 justify-end gap-4 p-10">
        <p className="text-gray-400">Interplanetary Delivery</p>
      </footer>
    </main>
  );
}

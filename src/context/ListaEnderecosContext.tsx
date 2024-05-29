"use client";

import { createContext, useContext, useState } from "react";
import { CardEnderecoType } from "@/components/CardEndereco/CardEndereco";

const ListaEnderecosContext = createContext<{
  listaEnderecos: CardEnderecoType[];
  addEnderecoLista: (endereco: CardEnderecoType) => void;
  removeEnderecoLista: (enderecoParaRemover: CardEnderecoType["id"]) => void;
  editEnderecoLista: (endereco: CardEnderecoType) => void;
}>({
  listaEnderecos: [],
  addEnderecoLista: () => null,
  removeEnderecoLista: () => null,
  editEnderecoLista: () => null,
});

export const ListaEnderecosProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const armazenamentoLocal = localStorage.getItem("listaEnderecos");
  const [listaEnderecos, setListaEnderecos] = useState<CardEnderecoType[]>(
    armazenamentoLocal !== null ? JSON.parse(armazenamentoLocal) : []
  );

  const addEnderecoLista = (endereco: CardEnderecoType) => {
    const novaListaEndereco = [...listaEnderecos, endereco];
    setListaEnderecos(novaListaEndereco);
    localStorage.setItem("listaEnderecos", JSON.stringify(novaListaEndereco));
  };

  const removeEnderecoLista = (enderecoId: CardEnderecoType["id"]) => {
    const novaListaEndereco = listaEnderecos.filter(
      (endereco) => endereco.id !== enderecoId
    );
    setListaEnderecos(novaListaEndereco);
    localStorage.setItem("listaEnderecos", JSON.stringify(novaListaEndereco));
  };

  const editEnderecoLista = (enderecoParaEditar: CardEnderecoType) => {
    const novaListaEndereco = [
      ...listaEnderecos.filter(
        (endereco) => endereco.id !== enderecoParaEditar.id
      ),
      enderecoParaEditar,
    ];
    setListaEnderecos(novaListaEndereco);
    localStorage.setItem("listaEnderecos", JSON.stringify(novaListaEndereco));
  };

  const value = {
    listaEnderecos,
    addEnderecoLista,
    removeEnderecoLista,
    editEnderecoLista,
  };

  return (
    <ListaEnderecosContext.Provider value={value}>
      {children}
    </ListaEnderecosContext.Provider>
  );
};

export function useListaEnderecosContext() {
  return useContext(ListaEnderecosContext);
}

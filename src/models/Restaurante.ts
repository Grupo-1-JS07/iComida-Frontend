import type { ReactNode } from "react";

export default interface Restaurante {
        avaliacao: ReactNode;
        categoria: ReactNode;
        imagem: string | undefined; 
        id: number;
        nome: string;   
        endereco: string;
        cnpj: string;
        telefone: string;
}
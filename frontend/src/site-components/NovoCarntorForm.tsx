"use client";

import { useForm } from "react-hook-form";

// Importe os componentes do shadcn/ui conforme sua estrutura de pastas
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Definição dos campos do formulário
interface FormData {
  name: string;
  email: string;
  video: string;
  telefone: number;
}

export default function NovoCantorForm() {
  // Inicializando o hook do React Hook Form
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // Função executada ao enviar o formulário
  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    // Aqui você pode adicionar a lógica de envio (por exemplo, uma requisição API)
  };

  return (
    // O componente Form é opcional e pode ajudar na organização do código.
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo "Nome" */}
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Nome é obrigatório" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo "Email" */}
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email é obrigatório",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Digite um email válido",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Campo "Vídeo" */}
        <FormField 
        control={form.control}
        name="name"
        rules={{ required: "Vídeo é obrigatório",
        pattern: {
          value: /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)$/,
          message: "Digite um link válido",
            },
         }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vídeo</FormLabel>
            <FormControl>
              <Input placeholder="Digite o link do vídeo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        {/* Botão de envio */}
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().min(1, "El correo es requerido").email("Correo no válido"),
  message: z.string().min(1, "El mensaje es requerido"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ContactFormValues) {
    // #region agent log
    fetch("http://127.0.0.1:7243/ingest/12024982-cf91-4132-a1d6-51e43b028997", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: "components/contact-form.tsx:onSubmit",
        message: "form submit started",
        data: { hasName: !!values.name, hasEmail: !!values.email, hasMessage: !!values.message },
        timestamp: Date.now(),
        hypothesisId: "A",
      }),
    }).catch(() => {});
    // #endregion
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      // #region agent log
      fetch("http://127.0.0.1:7243/ingest/12024982-cf91-4132-a1d6-51e43b028997", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: "components/contact-form.tsx:onSubmit",
          message: "api response",
          data: { status: res.status, ok: res.ok, error: data.error },
          timestamp: Date.now(),
          hypothesisId: "B",
        }),
      }).catch(() => {});
      // #endregion

      if (!res.ok) {
        toast({
          title: "Error",
          description: data.error ?? "Error al enviar el mensaje",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Mensaje enviado",
        description: "Te responderemos pronto.",
      });
      form.reset();
    } catch (err) {
      // #region agent log
      fetch("http://127.0.0.1:7243/ingest/12024982-cf91-4132-a1d6-51e43b028997", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: "components/contact-form.tsx:onSubmit",
          message: "form submit catch",
          data: { errMsg: err instanceof Error ? err.message : String(err) },
          timestamp: Date.now(),
          hypothesisId: "E",
        }),
      }).catch(() => {});
      // #endregion
      toast({
        title: "Error",
        description: "Error al enviar el mensaje",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="tu@correo.com"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje..."
                  className="min-h-[120px]"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </Form>
  );
}

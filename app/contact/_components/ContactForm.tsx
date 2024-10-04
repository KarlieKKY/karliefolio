"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

emailjs.init({
  blockHeadless: true,
});

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address.").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message should be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (formRef.current) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: data.username,
            from_email: data.email,
            message: `${data.email}\n ${data.message}`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        form.reset();
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
      } catch (error) {
        console.error("FAILED...", error);
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-10">
      <div className="flex justify-center w-full">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-white"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-white"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-primary bg-white"
                      placeholder="Type your message here."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="font-roboto text-md text-white hover:bg-secondary"
            >
              Send{" "}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

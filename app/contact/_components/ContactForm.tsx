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
    <div className="my-14 rounded-2xl md:rounded-[1.5rem] p-2 md:p-4 lg:p-5 bg-[#424242]">
      <div className="w-full h-full rounded-xl md:rounded-[0.75rem] bg-[#1d1d1d] ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-12 card-particle-gradient">
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-3/4 space-y-4 md:order-1 order-2"
            >
              <FormField
                name="username"
                render={({ field }) => (
                  <FormItem className="space-y-4 w-3/4">
                    <FormLabel className="text-xl">Name:</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#303030] border-[#9DFF85]"
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
                  <FormItem className="space-y-4 w-3/4">
                    <FormLabel className="text-xl">Email:</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#303030] border-[#7ACCFF]"
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
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xl">Message:</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-[#303030] border-[#FFF587] h-60"
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
                className="font-semibold"
                variant="destructive"
              >
                Send
              </Button>
            </form>
          </Form>
          <div className="md:order-2 order-1">
            <h1 className="uppercase font-kanit font-bold text-3xl md:text-5xl lg:text-6xl">
              Contact Me
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

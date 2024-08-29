"use client";

import {Heading2} from "@/components/ui/typography";
import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "../ui/use-toast";
import {SentMailSchema, SentMailType} from "@/lib/formSchema/mail";

const ContactMe = () => {
  const form = useForm<SentMailType>({
    resolver: zodResolver(SentMailSchema),
    defaultValues: {
      from: "",
      title: "",
      message: "",
      to: "sueksit@redbiiddsun.com",
    },
  });

  const {toast} = useToast();

  // Define a submit handler.
  const onSubmit = async (values: SentMailType) => {
    const submitToast = toast({
      title: "Sending...",
      description: "Please wait a moment while the email is being sent.",
      duration: 100 * 100,
    });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        submitToast.update({
          ...submitToast,
          title: "Email Sent",
          description: "Your message has been sent successfully.",
          duration: 1000,
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      submitToast.update({
        ...submitToast,
        variant: "destructive",
        title: "Send Failed",
        description:
          "There was an issue sending your email. Please try again later.",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <section className="bg-muted p-8 lg:p-16 lg:px-[15rem]">
        <div className="max-w-[60rem] mx-auto grid gap-4">
          <Heading2>Contact Me</Heading2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="from"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>From</FormLabel>
                      <FormControl>
                        <Input placeholder="xxx@xxx.xxx" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="to"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>To</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="sueksit@redbiiddsun.com"
                          disabled
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mail content" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the content of your message here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="text-xl" size={"lg"} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ContactMe;

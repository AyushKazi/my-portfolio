"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./common/section-header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Loading from "./ui/loading";
import { Textarea } from "./ui/textarea";
import { FaPaperPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";
import Link from "next/link";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormSchema = z.infer<typeof formSchema>;

const Contact = () => {
  const { inView, ref } = useInView({ threshold: 0.4 });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormSchema) => {
    toast.dismiss();
    setIsSubmitting(true);

    // console.log(data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      const response = await sendEmail(formData);

      console.log(response, "from the form");

      if (response.status === "success") {
        toast.success("Email sent successfully!", { duration: 6000 });
        form.reset({
          email: "",

          message: "",
        });
        setIsSubmitting(false);
      } else {
        toast.error("Failed to send email, please try again.", {
          duration: 6000,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error("Error sending email:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      className="  pb-10 lg:pb-14 mt-4 scroll-mt-[6rem]"
      id="contact"
    >
      <div className=" flex flex-col items-center justify-center">
        <SectionHeader>Contact 📞</SectionHeader>

        <motion.h2
          className="text-center text-sm -mt-5 pb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          You can contact me directly at{" "}
          <Link
            className="text-black underline hover:text-blue-500 transition-all "
            href="mailto:ayushkazishrestha@gmail.com"
            target="_blank"
          >
            ayushkazishrestha@gmail.com
          </Link>
          &nbsp; or via this contact form.
        </motion.h2>

        <motion.div
          className="  w-[min(100%,38rem)]  p-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="shadow focus:none outline-none placeholder:text-sm md:text-base"
                        placeholder="Your Email"
                        {...field}
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
                    <FormControl>
                      <Textarea
                        className="h-[8rem] shadow placeholder:text-sm md:text-base"
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" text-center">
                <Button
                  type="submit"
                  className=" group hover:scale-105 bg-gray-900 text-center cursor-pointer  font-medium rounded-full hover:bg-black text-white w-[8rem]  "
                >
                  Submit &nbsp;{" "}
                  {isSubmitting ? (
                    <Loading />
                  ) : (
                    <FaPaperPlane className="text-white scale-80 text-xs group-hover:translate-x-1 transition-all group-hover:-translate-y-1" />
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

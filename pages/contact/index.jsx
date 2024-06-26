import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../../public/assets/contact.jpg";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Mustafa | Contact</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div
        id="contact"
        className="w-full lg:h-screen"
        style={{ paddingTop: "40px" }}
      >
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">Mustafa Tantawy</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/in/mustafa-tantawi12/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/motantawi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <Link href="https://drive.google.com/file/d/1m8t1YboAQOJnzHBabtmjr_gSizvn7C5S/view">
                      <a>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <BsFillPersonLinesFill />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/720f149c-8996-431f-be44-030d45bf930e"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="6"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

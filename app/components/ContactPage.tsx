import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
	// const [submitState, setSubmitState] = useState<"idle" | "loading" | "sent">(
	// 	"idle"
	// );
    const [submitState, setSubmitState] = useState<boolean>(false);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
    const buttonText = "";

	useEffect(() => {
		console.log("Submit button state: ", submitState);
        console.log("Btn: ", buttonText);
	}, [submitState, buttonText]);
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // prevents a default page reload
        setSubmitState(pv => !pv);

		// Your EmailJS serviceID, templateID, and Public Key
		const serviceId = process.env.SERVICE_ID!;//"service_xkq63ku"; //process.env.SERVICE_ID!;
		const templateId = "template_komxyxp"; //process.env.TEMPLATE_ID!;
		const publicKey = "Vkv-o4KqVzdyKd4QI"; //process.env.PUBLIC_KEY!;

		console.log("service id: ", serviceId);
		console.log("template id: ", templateId);
		console.log("pub key: ", publicKey);

		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "Leul Mesfin",
			message: message,
		};

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent!", response);
				setTimeout(() => {
                    setSubmitState(pv => !pv);
                }, 1000);

                // setSubmitState("idle");
			})
			.catch((error) => {
				console.log("Error sending email: ", error);
			});
	};
    
    // switch(submitState) {
    //     case "idle":
    //         buttonText = "Submit";
    //         break;
    //     case "loading":
    //         buttonText = "Loading...";
    //         break;
    //     case "sent": 
    //         buttonText = "Sent!"
    //         break;
    // };

	return (
		<div className="flex flex-col border justify-center items-center rounded-3xl border-white w-[95%] h-[450px] gap-4 font-main">
			<form
				onSubmit={handleSubmit}
				className="mt-4 flex flex-col items-center justify-center"
			>
				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="name" className="text-white text-left">
						Name
					</label>
					<input
						type="input"
						id="name"
						className="border-white border rounded w-80 h-10 text-white"
						onChange={(e) => setName(e.target.value)}
						required
					></input>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="email" className="text-white text-left">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="border-white border rounded w-80 h-10 text-white"
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="message" className="text-white text-left">
						Message
					</label>
					<textarea
						id="message"
						className="border-white border rounded w-80 h-40 text-white"
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>

				<button
					type="submit"
					className="border border-white rounded text-black bg-white w-16 h-8 cursor-pointer"
				>
					{submitState ? <LoadingSpinner /> : 'Submit'}
				</button>
			</form>
		</div>
	);
};

export default ContactPage;

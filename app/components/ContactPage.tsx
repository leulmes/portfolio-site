import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "sonner";

const ContactPage = () => {
	const [submitState, setSubmitState] = useState<boolean>(false);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const buttonText = "";

	useEffect(() => {
		console.log("Submit button state: ", submitState);
		console.log("Btn: ", buttonText);
	}, [submitState, buttonText]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // prevents a default page reload
		setSubmitState((pv) => !pv);

		// data to send to emailJS
		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "Leul Mesfin",
			message: message,
		};

		try {
			const resp = await fetch("/api", {
				method: "POST",
				body: JSON.stringify(templateParams),
			});
			if (resp.ok) {
				console.log("Email sent!", resp);
				setSubmitState((pv) => !pv);
				toast.success("Message sent!");
			} else {
				console.log("Message failed to send", resp);
			}
			console.log("status: ", resp);
		} catch (error) {
			return error;
		}
	};

	return (
		<div className="flex flex-col justify-center items-center rounded-2xl w-[90%] h-[450px] gap-4 font-main bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
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
						className="border-white border rounded w-80 h-10 text-white pl-2"
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
						className="border-white border rounded w-80 h-10 text-white pl-2"
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
						className="border-white border rounded w-80 h-40 text-white pl-2 pt-2"
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>

				<button
					type="submit"
					className="border border-white rounded text-black bg-white w-16 h-8 cursor-pointer"
				>
					{submitState ? <LoadingSpinner /> : "Send"}
				</button>
			</form>
		</div>
	);
};

export default ContactPage;

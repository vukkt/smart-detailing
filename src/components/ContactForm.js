import React, { useState } from "react";

export default function ContactForm() {
	const [status, setStatus] = useState("idle");

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("sending");
		const formData = new FormData(e.target);

		const res = await fetch("https://formspree.io/f/mrblpkrb", {
			method: "POST",
			body: formData,
			headers: { Accept: "application/json" },
		});

		setStatus(res.ok ? "sent" : "idle");
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label>
				Name
				<input type="text" name="name" required />
			</label>
			<label>
				Email
				<input type="email" name="email" required />
			</label>
			<label>
				Message
				<textarea name="message" rows="4" />
			</label>
			<button type="submit" disabled={status === "sending"}>
				{status === "sending" ? "Sending…" : "Send Message"}
			</button>
			{status === "sent" && (
				<p className="success">Thank you! We’ll be in touch.</p>
			)}
		</form>
	);
}

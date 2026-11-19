//
"use client";
import { type FormEvent, useState } from "react";
import { anton } from "../utils/font";
import { sendingEmail } from "../lib/contact";
import "./writeMe.css";

type Status = "sended" | "sending" | "error" | "idle";

//
export default function WriteMe() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  //
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
    setStatus("sending");
    setError("");

    //
    // getting formDATA
    const form = e.currentTarget;
    const sending = await sendingEmail(new FormData(form));
    if (!sending.ok) {
      setStatus("error");
      setError(sending.error);
    } else {
      setStatus("sended");
      form.reset();
    }
  };
  return (
    <div className="ContainerBody flex-column ">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-10 col-12">
          {/* Titolo */}
          <h1 className={`${anton.className} display-4 mb-4 Slide-in-bottom`}>
            CONTATTAMI
          </h1>

          <div className="row g-4 align-items-start">
            {/* Colonna Sinistra: Testo breve */}
            <div className="col-lg-5 col-12 d-flex flex-column gap-3">
              <p
                className="Slide-in-bottom m-0"
                style={{ animationDelay: "0.15s" }}
              >
                Pronto a mettermi in gioco su nuovi progetti e a crescere
                all'interno di un team di sviluppo. Per proposte di lavoro o un
                colloquio conoscitivo, compila il form qui accanto.
              </p>

              <p
                className="Slide-in-bottom m-0"
                style={{ animationDelay: "0.3s" }}
              >
                Oppure scrivimi direttamente a{" "}
                <a
                  href="mailto:manuelavoro0623@gmail.com"
                  className="text-decoration-underline fw-semibold"
                  style={{ color: "var(--textcolor)" }}
                >
                  manuelavoro0623@gmail.com
                </a>
              </p>
            </div>

            {/* Colonna Destra: Form */}
            <div className="col-lg-7 col-12">
              <form
                className="d-flex flex-column gap-3"
                onSubmit={handleSubmit}
              >
                {/* Campo Name */}
                <div
                  className="Slide-in-bottom"
                  style={{ animationDelay: "0.2s" }}
                >
                  <label htmlFor="name" className="form-label fw-semibold mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control rounded-3 py-2"
                    placeholder="Il tuo nome"
                  />
                </div>

                {/* Campo Email */}
                <div
                  className="Slide-in-bottom"
                  style={{ animationDelay: "0.35s" }}
                >
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control rounded-3 py-2"
                    placeholder="nome@esempio.com"
                  />
                </div>

                {/* Campo Message */}
                <div
                  className="Slide-in-bottom"
                  style={{ animationDelay: "0.5s" }}
                >
                  <label
                    htmlFor="message"
                    className="form-label fw-semibold mb-1"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-control rounded-3 py-2"
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>

                {/* Bottone Invio */}
                <div
                  className="Slide-in-bottom mt-1"
                  style={{ animationDelay: "0.65s" }}
                >
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className=" btn buttonMain px-4 py-2 text-uppercase fw-semibold"
                  >
                    {status === "sending" ? "Inviando..." : "Invia Messaggio"}
                  </button>

                  {status === "error" && (
                    <div className="MessageContainer errorMessage">{error}</div>
                  )}
                  {status === "sended" && (
                    <div className="MessageContainer SuccessMessage">
                      Messaggio Inviato!
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

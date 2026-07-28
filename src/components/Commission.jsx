import React, { useState } from "react";
import CommissionCSS from "../css/Commission.module.css";
import data from "../Data";
import { SplitChars, SplitWords, FadeUp } from "./AnimatedText";

function Commission() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "buy",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const typeLabel =
      form.type === "commission"
        ? data.CommissionTypeCommission
        : data.CommissionTypeBuy;

    const subject = `${data.CommissionEmailSubject} (${typeLabel})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Request type: ${typeLabel}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${data.CommissionEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="commission"
      className={CommissionCSS.section}
      aria-label="Commission"
    >
      <div className={CommissionCSS.inner}>
        <SplitChars
          text={data.CommissionHeading}
          as="h2"
          className={CommissionCSS.heading}
          stagger={0.03}
        />
        <SplitWords
          text={data.CommissionText}
          as="p"
          className={CommissionCSS.text}
          delay={0.12}
          stagger={0.03}
        />
        <FadeUp delay={0.2}>
          <form className={CommissionCSS.form} onSubmit={handleSubmit}>
            <div className={CommissionCSS.field}>
              <label htmlFor="commission-name">{data.CommissionNameLabel}</label>
              <input
                id="commission-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className={CommissionCSS.field}>
              <label htmlFor="commission-email">{data.CommissionEmailLabel}</label>
              <input
                id="commission-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className={CommissionCSS.field}>
              <label htmlFor="commission-type">{data.CommissionTypeLabel}</label>
              <select
                id="commission-type"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="buy">{data.CommissionTypeBuy}</option>
                <option value="commission">{data.CommissionTypeCommission}</option>
              </select>
            </div>
            <div className={CommissionCSS.field}>
              <label htmlFor="commission-message">
                {data.CommissionMessageLabel}
              </label>
              <textarea
                id="commission-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder={data.CommissionMessagePlaceholder}
              />
            </div>
            <button type="submit" className={CommissionCSS.submit}>
              {data.CommissionSubmitText}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

export default Commission;

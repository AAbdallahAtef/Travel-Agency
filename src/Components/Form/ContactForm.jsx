import React from "react";
import { TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [t,i18n] = useTranslation();
  return (
    <form className="row my-5 "  >
      <div dir={`${i18n.language}`==='en'?"ltr":"rtl"} className="col-xs-12 col-md-6 mb-4">
        <TextField
          id="outlined-basic"
          label={t("First Name")}
          fullWidth
          variant="outlined"
        />
      </div>
      <div className="col-xs-12 col-md-6 mb-4">
        <TextField
          fullWidth
          id="outlined-basic"
          label={t("Last Name")}
          variant="outlined"
        />
      </div>
      <div className="col-xs-12 col-md-6 mb-4">
        <TextField
          id="outlined-basic"
          label={t("Email")}
          fullWidth
          variant="outlined"
        />
      </div>
      <div className="col-xs-12 col-md-6 mb-4">
        <TextField
          fullWidth
          id="outlined-basic"
          label={t("Subject")}
          variant="outlined"
        />
      </div>
      <div className="col-xs-12 mb-4">
        <TextField
          id="outlined-multiline-static"
          fullWidth
          label={t("Message")}
          multiline
          rows={5}
          placeholder={t("Please write your message")}
        />
      </div>
      <div className="col-xs-12 mb-4">
        <Button
          sx={{ backgroundColor: "#589abb", padding: "8px 40px" }}
          variant="contained"
        >
          {t("Submit")}
        </Button>
      </div>
    </form>
  );
}

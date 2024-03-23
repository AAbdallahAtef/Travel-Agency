import React from "react";
import { Typography, Rating, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FeedbackForm() {
  const [t,i18n] = useTranslation();
  return (
    <div className="container"  dir={`${i18n.language}`==='en'?"ltr":"rtl"}>
      <div className="row">
        <div className="col-12 my-4">
          <Typography
            sx={{
              fontSize: "38px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            component="legend"
          >
            {t("Rating Us")}
          </Typography>
          <Rating
            sx={{ fontSize: "55px" }}
            name="half-rating"
            defaultValue={0}
            precision={0.5}
          />
        </div>
        <div className="col-sx-12 col-md-6 mb-4">
          <TextField
            fullWidth
            id="outlined-basic"
            label={t("Your Name")}
            variant="outlined"
          />
        </div>
        <div className="col-sx-12 col-md-6 mb-4">
          <TextField
            fullWidth
            id="outlined-basic"
            label={t("Email")}
            variant="outlined"
          />
        </div>
        <div className="col-12 mb-4">
          <TextField
            id="outlined-multiline-static"
            fullWidth
            label={t("Feedback")}
            multiline
            rows={5}
            placeholder={t("Please write your Feedback")}
          />
          <Button
            sx={{
              width:"200px",
              backgroundColor: "#589abb",
              padding: "5px 30px",
              marginTop: "2rem",
            }}
            variant="contained" onClick={()=>(alert("Thank You For FeedBack"))}
          >
            {t("Send Feedback")}
          </Button>
        </div>
      </div>
    </div>
  );
}

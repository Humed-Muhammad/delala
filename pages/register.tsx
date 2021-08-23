import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "next/link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import CountrySelector from "../Components/CountrySelector.jsx";
import { PrismaClient } from "@prisma/client";
// import DatePicker from "../Components/DatePicker.jsx";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { useForm, ValidationRule } from "react-hook-form";

// const prisma = new PrismaClient();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#296cff",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "60%",
    backgroundColor: "#296cff",
    color: "white",
  },
}));

type Profile = {
  firstName: string;
  lastName: string;
  password: string;
  email: string | ValidationRule;
  number: number;
  country: string;
};

export default function SignUp() {
  let [userData, setUserData] = useState({
    id: uuid4(),
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: Number(),
    country: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const classes = useStyles();

  const formSubmit = (data) => {
    // e.preventDefault();
    // return await axios
    //   .post("/api/register", userData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
    console.log(JSON.stringify(data));
  };

  return (
    <div className="h-screen bg-gray-50 w-full">
      <Container className={classes.paper} component="main">
        <CssBaseline />
        <div className="w-full my-2 sm:w-4/5 md:w-3/5  flex flex-col justify-center items-center bg-white md:py-3 px-5 ">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={handleSubmit((data) => formSubmit(data))}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: "First Name is Required!",
                  })}
                />
                <div className="text-red-500 text-sm">
                  {errors.firstName && errors.firstName.message}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  {...register("lastName", {
                    required: "Last Name is Required!",
                  })}
                />
                <div className="text-red-500 text-sm">
                  {errors.lastName && errors.lastName.message}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: "Email is Required" })}
                />
                <div className="text-red-500 text-sm">
                  {errors.email && errors.email.message}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is Required!",
                  })}
                />
                <div className="text-red-500 text-sm">
                  {errors.password && errors.password.message}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) =>
                    setUserData({ ...userData, phone: Number(e.target.value) })
                  }
                  variant="outlined"
                  required
                  fullWidth
                  name="number"
                  label="Mobile Number"
                  type="tel"
                  id="phone"
                  autoComplete="current-phone"
                  {...register("number", {
                    required: "Phone Number is Required!",
                  })}
                />
                <div className="text-red-500 text-sm">
                  {errors.number && errors.number.message}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CountrySelector
                  userData={userData}
                  setUserData={setUserData}
                  name="country"
                  {...register("country", { required: "Country Is Required!" })}
                />
                <div className="text-red-500 text-sm">
                  {errors.country && errors.country.message}
                </div>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <DatePicker userData={userData} setUserData={setUserData} />
            </Grid> */}
            </Grid>
            <Grid item className="flex justify-center items-center">
              <Button
                onClick={() => setUserData({ ...userData, id: uuid4() })}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

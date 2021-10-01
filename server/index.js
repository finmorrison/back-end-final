const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie! test",
					 "Cool shirt! test",
					 "Your Javascript skills are stellar. test",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune1", (req, res) => {
  const fortune = ["You are about to walk into a large fortune.",
                  "You will start a great journey tomrrow at 3.",
                  "you will have the oppurtunity to showcase one of your talents.",
                  "you will recieve a reward for your efforts.",
                  "you will find the love that you have been searching for",
                ];

      let randomIndex = Math.floor(Math.random() * fortune.length);
      let randomFortune = fortunes[randomIndex];

      res.status(200).send(randomFortune);
});

app.get("/api/randomNumber", (req, res) => {
  const number = ["12",
                  "3",
                  "6",
                  "39",
                  "78",
                  "5",
                ];

      let randomIndex = Math.floor(Math.random() * number.length);
      let randomNumber = fortune[randomIndex];

      res.status(200).send(randomNumber)
});

app.get("/api/favoriteState", (req, res) => {
  const state = ["utah",
"colorado",
"texas",
"florida",
"kentucky",
  ];
  let randomIndex = Math.floor(Math.random() * state.length);
  let randomState = state[randomIndex];

  res.status(200).send(randomState);
});


app.get("/api/favoriteColor", (req, res) => {
  const color = ["red",
"green",
"purple",
"blue",
"yellow",
  ];
  let randomIndex = Math.floor(Math.random() * color.length);
  let randomColor = color[randomIndex];

  res.status(200).send(randomColor);
});


app.listen(4000, () => console.log("Server running on 4000"));

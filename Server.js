import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
  try {
    // Fetch cat fact
    const { data } = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    // Build response
    const response = {
      status: "success",
      user: {
        email: "abodundepaul2022@gmail.com",
        name: "Paul Abodunde",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: data.fact || "Cats are awesome!",
    };

    res.status(200).json(response);
  } catch (error) {
    // Handle failed API call gracefully
    res.status(200).json({
      status: "success",
      user: {
        email: "abodundepaul2022@gmail.com",
        name: "Paul Abodunde",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact right now. Try again later!",
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import expenseRoutes from "./routes/expenses.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Add this route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api/expenses", expenseRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
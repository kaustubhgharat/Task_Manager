import "dotenv/config";
import express from "express";
import connectDB from "./db/connectDatabase.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;
const secret = process.env.COOKIE_SECRET;
const frontendBaseURL = process.env.FRONTEND_BASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(secret));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello, Welocome To Vooshfoods" });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on PORT: ${PORT}`);
});



// 🔹 1. EC2 pe connect ho (tu already ho)
// ssh -i your-key.pem ec2-user@your-ip

// - MOST COMMON ISSUE → Security Group
// AWS me ja:
// 👉 EC2 → Security Groups → Inbound Rules
// Ensure ye ports open hain:
// Type
// Port
// HTTP
// 80
// Custom TCP
// 3000
// Custom TCP
// 5000
// Custom TCP
// 5173
// 👉 Source: 0.0.0.0/0

// 🔹 2. System update + Node install
// sudo dnf update -y
// curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
// sudo dnf install -y nodejs git
// Check:
// node -v
// npm -v


// 🔹 3. GitHub repo clone kar
// git clone https://github.com/kaustubhgharat/Student_Record_Management.git
// cd Student_Record_Management

// ⚙️ BACKEND SETUP
// 🔹 4. Backend install + run
// cd backend
// npm install

// 🔹 5. Backend run kar
// node server.js

// 🔹 6. Frontend install ( terminal 2 me frontend run kro)
// cd frontend
// npm install
// npm run dev / npm start
// npm run dev -- --host(Task_Manager)

// 🔹 8. .env fix kar (VERY IMPORTANT)
// Nano .env
// Frontend me:
// VITE_BACKEND_BASE_URL=http://<EC2_PUBLIC_IP>:5000


// 🌍 FINAL ACCESS
// Browser me open:
// http://<EC2_PUBLIC_IP>:3000


// npm run dev -- --host
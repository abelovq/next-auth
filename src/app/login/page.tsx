"use client"; // this is a client component

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}

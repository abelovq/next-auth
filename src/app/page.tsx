"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import axios from "axios";
import { IItem } from "./api/data/route";
import { getFromLocalStorage } from "@/utils";
import { use, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  console.log("CALL");
  // try {
  // const accessToken = getFromLocalStorage();

  const res = await fetch(
    "http://localhost:3000/api/data"

    // {
    //   headers: {
    //     "access-token": accessToken,
    //   },
    // }
  );
  return await res.json();
  // } catch (err) {
  //   console.log("err", err);
  //   throw new Error("Failed to fetch data");
  // }
}

async function fetchTodo() {
  return { contents: [1, 2, 3] };
}

export default function Home() {
  const data = use(getData());
  // console.log("data", data);

  return (
    <main className={styles.main}>
      main
      <ul className="list-disc">
        {/* {data.map((item) => (
          <li key={item.id}>
            {
              <div>
                <p>{item.item}</p>
                <p>{item.description}</p>
              </div>
            }
          </li>
        ))} */}
      </ul>
    </main>
  );
}

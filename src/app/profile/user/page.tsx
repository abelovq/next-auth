import LoginForm from "@/components/LoginForm";
import { NextPage } from "next";
import React from "react";

const UserPage: NextPage = ({ data }: any) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

const getStaticProps = () => {
  return { props: { data: "" } };
};

export default UserPage;

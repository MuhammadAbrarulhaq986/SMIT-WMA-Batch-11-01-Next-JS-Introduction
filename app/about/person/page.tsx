import Link from "next/link";
import React from "react";

const Person = () => {
  return (
    <>
      <div>Person</div>
      <button className="btn btn-warning">
        <Link href={"/"}>Home</Link>
      </button>
    </>
  );
};

export default Person;

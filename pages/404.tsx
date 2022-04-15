import Link from "next/link";
import React from "react";



const Custom404: React.VFC = () => {

  return (
    <>

      <div className="py-10">
        <header className="mb-4">
          <div className="max-w-7xl mx-auto px-8">Page not found</div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto px-8">
            <Link href={"/"}>
              <a>Go back home</a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Custom404;

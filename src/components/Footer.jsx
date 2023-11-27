import React from "react";

function Footer() {
    return (
        <div className=" overflow-hidden text-grey-500 text-xs font-medium absolute h-5 flex justify-center items-center bottom-0 w-screen right-0 ">
            ©2023 Calculator by{" "}
            <a
                href="https://github.com/sh1baruuu/"
                target="blank"
                className="hover:underline pl-1 cursor-pointer hover:font-bold"
            >
                {" "}
                shibaruuu
            </a>
            . All rights reserved.
        </div>
    );
}

export default Footer;

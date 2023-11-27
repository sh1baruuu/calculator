import React, { useState } from "react";
import BackspaceIcon from "./components/BackspaceIcon";
import Github from "./components/Github";
import Sun from "./components/Sun";
import { buttons } from "./utils/buttons";
import Moon from "./components/Moon";
import Footer from "./components/Footer";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleInput = (value) => {
        setInput((prevInput) => prevInput + value);
        if (result) {
            setInput(result)
            setInput((prevInput) => prevInput + value);
            setResult("")

        };
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    const calculate = () => {
        try {
            const calculatedResult = eval(input);
            setResult(calculatedResult);
        } catch (error) {
            setResult("Syntax Error");
        }
    };

    const backspace = () => {
        try {   
            setInput((x) => x.slice(0, -1))
        } catch (error) {
            return
        }
    }

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div
            className={`flex flex-col select-none overflow-hidden w-screen h-screen justify-center items-center bg-gradient-to-t from-gray-400 to-gray-500 ${
                isDarkMode ? "dark" : ""
            }`}
        >
            <div className="bg-black w-screen h-screen flex md:p-[5px] relative md:rounded-[33px] justify-center shadow-lg items-center md:w-[71.5mm] md:h-[147.5mm] ">
                <div className="absolute hidden md:block bg-black top-3 rounded-r-full rounded-l-full w-[30%] h-5"></div>
                <div className="bg-gradient-to-t from-slate-100 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:bg-slate-900  p-3 overflow-hidden flex flex-col justify-end md:rounded-[30px] w-full h-full ">
                    <div className="flex flex-col px-3">
                        <input
                            type="text"
                            className={`focus:outline-none dark:text-white cursor-default ${
                                result
                                    ? "order-2 dark:text-slate-500 text-slate-400"
                                    : "h-12 text-xl translate-y-[-27px]"
                            } bg-transparent text-right `}
                            value={input}
                            readOnly
                        />
                        <input
                            type="text"
                            className={`focus:outline-none transition-all duration-200 ease-in-out cursor-default ${
                                result
                                    ? "h-10 text-2xl translate-y-[-30px] font-semibold"
                                    : ""
                            } bg-transparent  dark:text-slate-50 text-right `}
                            value={result}
                            readOnly
                        />
                    </div>
                    <div className="px-4 border-b dark:border-slate-700 mb-5 gap-3 dark:text-slate-600 text-slate-500 w-full h-10 flex items-center justify-end">
                        <button onClick={toggleDarkMode} >
                                {isDarkMode ? <Sun /> : <Moon /> }
                        </button>
                        <Github />
                        <BackspaceIcon
                            disabled={result}
                            onClick={backspace}
                        />
                    </div>
                    <div className="w-full grid gap-2 dark:text-white grid-cols-4 h-[60%]">
                        <button
                            className="bg-slate-200 dark:bg-gray-800/40 text-red-600 font-semibold text-xl aspect-square rounded-full"
                            onClick={clearInput}
                        >
                            C
                        </button>
                        {buttons.map(({ label, input, operator, i }) => {
                            return (
                                <button
                                    key={i}
                                    className={`bg-slate-200  ${
                                        operator
                                            ? "text-lime-500 font-bold"
                                            : "font-semibold"
                                    } text-xl active:text-sm dark:bg-gray-800/40 aspect-square rounded-full`}
                                    onClick={() => handleInput(input)}
                                >
                                    {label}
                                </button>
                            );
                        })}
                        <button
                            className="bg-slate-200 dark:bg-gray-800/40 col-span-2 font-semibold text-xl aspect-auto rounded-full"
                            onClick={() => handleInput("0")}
                        >
                            0
                        </button>
                        <button
                            className="bg-slate-200 dark:bg-gray-800/40 font-semibold text-lg aspect-square rounded-full"
                            onClick={() => handleInput(".")}
                        >
                            .
                        </button>
                        <button
                            className="bg-lime-500 text-white font-semibold text-2xl aspect-square rounded-full"
                            onClick={calculate}
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;

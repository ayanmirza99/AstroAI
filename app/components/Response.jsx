import React from "react";
import { useGlobalContext } from "../context/context";
import { AtomIcon, TriangleAlert, UserCircle } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Response = () => {
    const { recentPrompt, loading, resultData, error, mobileScreen } =
        useGlobalContext();
    return (
        <div className="w-full flex flex-col gap-8 text-black dark:text-gray-200 text-[1rem] md:text-[1.2rem]">
            <div className="flex flex-col items-start gap-4 md:flex-row md:gap-6">
                <div
                    className="w-max p-1 rounded-full"
                    style={{ background: "linear-gradient(32deg, #4b90ff, #ff5506)" }}
                >
                    <UserCircle size={mobileScreen ? 24 : 30} />
                </div>
                <h1>{recentPrompt}</h1>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:gap-6">
                {error ? (
                    ""
                ) : (
                    <div
                        className="w-max p-1 rounded-full text-white"
                        style={{ background: "linear-gradient(32deg, #4b90ff, #ff5506)" }}
                    >
                        <AtomIcon size={mobileScreen ? 24 : 30} />
                    </div>
                )}
                <div className="w-full">
                    {loading ? (
                        <div className="linear-bg">
                            <Skeleton
                                count={3}
                                width={"100%"}
                                height={12}
                                baseColor="#94789a"
                                highlightColor="#7483c7"
                            />
                        </div>
                    ) : (
                        resultData.map((i, k) => {
                            return (
                                <h1 key={k}>
                                    {i}
                                    <br />
                                </h1>
                            );
                        })
                    )}
                </div>
            </div>
            {error && (
                <div className="flex items-center gap-4">
                    <TriangleAlert color="#ff7070" size={38} />
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-[#ff7070] text-lg">
                            Unable to load response
                        </h1>
                        <h1 className="font-semibold text-[#ff7070] text-lg">
                            Something wrong occurred
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Response;

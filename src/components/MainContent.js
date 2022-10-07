import React from "react";
import travels from "../data";
import Post from "./Trip";


export default function MainContent() {
    return (
        <div>
            {travels.map((travel, index) => {
                return (
                    <Post 
                        key={index}
                        travel={travel}
                        />
                    );
                }
            )}
        </div>
        )
}
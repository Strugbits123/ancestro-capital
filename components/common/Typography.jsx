"use client"
import React from "react";

export const Typography = {
    H1: ({ children, className = "" }) => (
        <h1 className={`text-4xl  ${className}`}>{children}</h1>
    ),
    H2: ({ children, className = "" }) => (
        <h2 className={`text-3xl  ${className}`}>{children}</h2>
    ),
    H3: ({ children, className = "" }) => (
        <h3 className={`text-2xl ${className}`}>{children}</h3>
    ),
    H4: ({ children, className = "" }) => (
        <h4 className={`text-xl ${className}`}>{children}</h4>
    ),
    H5: ({ children, className = "" }) => (
        <h5 className={`text-lg  ${className}`}>{children}</h5>
    ),
    H6: ({ children, className = "" }) => (
        <h6 className={`text-base  ${className}`}>{children}</h6>
    ),
    P: ({ children, className = "" }) => (
        <p className={`text-base text-white font-haas font-normal ${className}`}>{children}</p>
    ),
    Small: ({ children, className = "" }) => (
        <span className={`text-sm text-gray-500 ${className}`}>{children}</span>
    ),
    Muted: ({ children, className = "" }) => (
        <span className={`text-gray-400 italic ${className}`}>{children}</span>
    ),
    Highlight: ({ children, className = "" }) => (
        <span className={`bg-yellow-200 px-1 ${className}`}>{children}</span>
    ),
    Label: ({ children, className = "" }) => (
        <span className={`uppercase tracking-wide font-semibold ${className}`}>
            {children}
        </span>
    ),
};

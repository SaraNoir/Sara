import React, { useState, useEffect } from "react";
import { Skills } from "../skills/Skills";
import { BackToTop } from "../back.to.top/BackToTop";
import { Hero } from "../hero/Hero";
import '../home/home.css';
import '../../style/reset.css';
import { Projects } from "../projects/Projects";


export function Home() {

    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <BackToTop />
        </>
    )

}
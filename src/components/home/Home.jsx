import React, { useState, useEffect } from "react";
import { Header } from "../header/Header";
import { Skills } from "../skills/Skills";
import { Game } from "../game/Game";
import { BackToTop } from "../back.to.top/BackToTop";
import { Footer } from "../footer/Footer";
import { Hero } from "../hero/Hero";
import '../home/home.css';
import '../../style/reset.css';


export function Home() {

    return (
        <>
            <Header />
            <Hero />
            <Skills />
            {/*  <Game /> */}
            <BackToTop />
            <Footer />
        </>
    )

}
import React from 'react';
import './style.css'

export const Aboutme = () => {
    return(
    <>
    <aside>
        <p class="text">HI! I'm a computer science graduate from Coventry university</p>
        <h2 class="header">Things about me</h2>
    </aside>
    <main>
        <article class="flexP">
            <section>
                <p>Plays alot of games favourite being nier automata</p>
            </section>
            <section>
                <p>Collects trading cards, favourite being pokemon</p>
            </section>
            <section>
                <p>Watches alot anime and Kdrama's in my free time</p>
            </section>
        </article>
        <h2 class="header">Things that I have learned so far</h2>
        <article>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT Commands</li>
            </ul>
        </article>
    </main>
    <section>
        <p class="text">More coming soon</p>
    </section>
    </>
    )
}
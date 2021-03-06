import React, { useContext } from 'react'
import styled from 'styled-components'

import arrow from '../assets/images/arrow-down.svg'
import { ThemeContext } from '../context/Context'

const StyledMain = styled.section`
    display: flex;
    height: 750px;
    background: #fdfffc;
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    background: #235789;
`

const StyledSecondSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
`

const StyledLinkSecondPart = styled.div`
    position: absolute;
    left: -35px;
    bottom: 55px;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f46036;
`

const StyledLinkArrowDown = styled.a`
    height: 55px;
    color: white !important;
    margin: auto;
`

export default function Bio() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <StyledMain>
            <StyledFirstSubContainer>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    Je suis ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Je suis un développeur web, plutôt orienté front-end. Avant,
                    j'étais régisseur lumière dans le spectacle. Concrètement,
                    je peux recoder facebook (je ne vous cache pas que ça va
                    prendre un peu de temps), mais je suis plutôt orienté
                    "visuel", UI / UX, algorithmique... #pointilleux
                </p>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    J'ai déjà fait quoi ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    J'ai travaillé pour des négociants en vins dans la région
                    bordelaise, des professionnels de la santé, un restaurant,
                    des vendeurs de mobiliers...
                </p>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    Vous avez un projet web ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Contactez-moi :) On va analyser ensemble votre projet pour
                    déterminer si je suis le professionnel adéquat (en terme de
                    technologies) pour vous accompagner dans son développement.
                </p>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer
                style={{
                    background: theme === 'light' ? '#fdfffc' : '#020100',
                }}
            >
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#F1D302',
                    }}
                ></div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#020100',
                    }}
                ></div>
                {/* <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#F46036',
                    }}
                ></div> */}
                <StyledLinkSecondPart>
                    <StyledLinkArrowDown href="/#down">
                        <img
                            style={{ height: '60px' }}
                            src={arrow}
                            alt="arrow down"
                        />
                    </StyledLinkArrowDown>
                </StyledLinkSecondPart>
            </StyledSecondSubContainer>
            <div id="bio"></div>
        </StyledMain>
    )
}

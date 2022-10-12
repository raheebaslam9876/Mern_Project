import React from 'react'
import logo from '../assets/images/undraw_logic_re_nyb4.svg'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import main from "../assets/images/undraw_learning_sketching_nd4f.svg"
import styled from "styled-components"

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobify" className='logo' height={100} width={100} />
            </nav>
            <div className="container page" style={{ display: 'flex' }}>
                <div className="info">
                    <h1>
                        job <span>Tracking</span> App
                    </h1>
                    <p>
                        Topic sentences are similar to mini thesis statements. Like a thesis statement,<br></br> a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, <br></br>the topic sentence is the main point of the paragraph. Like the thesis statement, <br></br>a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity.<br></br> An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences<br></br> relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing <br></br>paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.
                    </p>
                    <p>
                        <button className="btn btn-success">
                            Login/Register
                        </button>
                    </p>
                </div>
                <img src={main} alt="main img" className="img main-img" height={400} width={400} />
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.main`
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin:0;
    height: var(--nav-height);
    display: flex;
    align-items: center;
}
.page{
    display: grid;
    align-items: center;
    min-height: calc(50vh);
}
.main-img{
    display: none;
}
@media(min-width: 992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{
        display: block
        ;
    }
}
`
export default Landing;
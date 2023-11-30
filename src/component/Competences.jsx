import React from 'react';
import logo from '../img/logo.png';
import figma from '../img/figma.png';
import c from '../img/c++.png';
import node from '../img/node.png';
import css from '../img/css.png';
import kotlin from '../img/kotlin.png';
import html from '../img/html.png';
import java from '../img/java.png';
import python from '../img/py.png';
import git from '../img/git.png';
import sql from '../img/sql.png';
import spring from '../img/spring.png';
import react from '../img/reat.png';
import mongodb from '../img/mongo.png';
export default function Competences() {
  return (
    <div className="page c" id="competences Competences">
      
      <h3 className="presentatione">En tant qu'autodidacte, je répertorie ici certaines capacités et compétences que j'ai acquises en tant que développeur full stack web et mobile, ainsi qu'en tant qu'intégrateur de modèles intelligents.</h3>

      <div id="objets">
        <div id="txt2" className="pre"></div>

        <div id="logos">
          <div className="colun" id="ligne1">
            <div className="rond" id="rond1"></div>
            <div className="rond" id="rond2"></div>
            <div className="rond" id="rond3"></div>
            <div className="rond" id="rond4"></div>
            <div className="rond" id="rond5"></div>
            <div className="rond" id="rond6"></div>
            <div className="rond" id="rond7"></div>
          </div>
          <div className="colun" id="ligne2">
            <div className="rond" id="rond8"></div>
            <div className="rond" id="rond9"></div>
            <div className="rond" id="rond10"></div>
            <div className="rond" id="rond11"></div>
            <div className="rond" id="rond12"></div>
            <div className="rond" id="rond13"></div>
          </div>
        </div>
        <div id="tiges">
          <div className="tige" id="tige1"></div>
          <div className="tige" id="tige2"></div>
          <div className="tige" id="tige3"></div>
          <div className="tige" id="tige4"></div>
          <div className="tige" id="tige5"></div>
          <div className="tige" id="tige6"></div>
        </div>
        <div id="cercle">
          <div className="cercle1" id="cercle1">
            <div className="cercle1" id="cercle2">
              <div className="cercle1" id="cercle3">
                <div className="cercle" id="deg">
                  <div className="cercle1" id="cercle4">
                    <div className="cercle1" id="cercle5">
                      <div className="cercle1" id="deg2">
                        <div id="lumiere">
                          <div id="logo2">
                            <img src={logo} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="skills-container">
          <div className="skill">
            <img src={figma} alt="Figma Logo" />
            <div className="skill-name">Figma</div>
          </div>
          <div className="skill">
            <img src={c} alt="C++ Logo" />
            <div className="skill-name">C++</div>
          </div>
          <div className="skill">
            <img src={node} alt="Node.js Logo" />
            <div className="skill-name">Node.js</div>
          </div>
          <div className="skill">
            <img src={css} alt="CSS Logo" />
            <div className="skill-name">CSS</div>
          </div>
          <div className="skill">
            <img src={kotlin} alt="Kotlin Logo" />
            <div className="skill-name">Kotlin</div>
          </div>
          <div className="skill">
            <img src={html} alt="HTML Logo" />
            <div className="skill-name">HTML</div>
          </div>
          <div className="skill">
            <img src={java} alt="Java Logo" />
            <div className="skill-name">Java</div>
          </div>
          <div className="skill">
            <img src={git} alt="Git Logo" />
            <div className="skill-name">Git</div>
          </div>
          <div className="skill">
            <img src={python} alt="Python Logo" />
            <div className="skill-name">Python</div>
          </div>
          <div className="skill">
            <img src={sql} alt="SQL Logo" />
            <div className="skill-name">SQL</div>
          </div>
          <div className="skill">
            <img src={spring} alt="Spring Boot Logo" />
            <div className="skill-name">Spring Boot</div>
          </div>
          <div className="skill">
            <img src={react} alt="React Logo" />
            <div className="skill-name">React</div>
          </div>
          <div className="skill">
            <img src={mongodb} alt="MongoDB Logo" />
            <div className="skill-name">MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

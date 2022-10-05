import React from "react";
import './App.css';

function App() {

  return (

      <div>

          {/* Navbars */}

          <nav className={"navbar"}>
              <ul className={"nav-list"}>
                  <li>Home</li>
                  <li>Blog</li>
                  <li>Events</li>
                  <li>Gallery</li>
              </ul>
          </nav>

          <nav className="mobileNavbar">
              <div className="nav-list-mobile">
                  <img className={"hamburgerButton"} src={process.env.PUBLIC_URL + '/img/hamburger.svg'} alt={"Menu"} />
                  <h3>Menu</h3>
                  <ul className={"nav-list-mobile"} id={"nav-list-mobile"}>
                      <li>Home</li>
                      <li>Blog</li>
                      <li>Events</li>
                      <li>Gallery</li>
                  </ul>
              </div>
          </nav>

          {/*Main content*/}

          <div className={"flex-container"}>

              {/* left column*/}

              <div className={"columnLeft"}>

                  <div className={"searchBox"}>
                          <input type="text" name="search"/>
                          <button type="submit"><img className={"buttonIcon"} src={process.env.PUBLIC_URL + '/img/Vector.svg'} alt={"Search"}/></button>
                  </div>

                  <div className={"mainContent"}>

                      <img src={process.env.PUBLIC_URL + '/img/cover_2048.png'} alt={"A work environment"}/>

                      <div className={"textArea"}>

                          <h1 className={"postHeading"}>Practical Functional Programming</h1>

                          <p className={"published grey"}>Published by Steven Heidel on Apr 29, 2017</p>

                          <p className={"mainText"}>The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how thinking about composition can make you a better programmer, regardless of what language you use.</p>

                          <p className={"tags"}>#events #programming</p>

                          <hr/>

                          <ul className={"verticalList grey"}>
                              <li>1 like</li>
                              <li>&#x2022;</li>
                              <li>2 comments</li>
                              <li>&#x2022;</li>
                              <li>3 views</li>
                          </ul>
                      </div>
                  </div>

                  <div className={"mainContent"}>

                      <img src={process.env.PUBLIC_URL + '/img/cover_2048.png'} alt={"A work environment"}/>

                      <div className={"textArea"}>

                          <h1 className={"postHeading"}>Practical Functional Programming</h1>

                          <p className={"published grey"}>Published by Steven Heidel on Apr 29, 2017</p>

                          <p className={"mainText"}>The following is reformatted from a presentation I gave at LinkedIn
                              last year. The presentation attempted to explain functional programming without using
                              concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how
                              thinking about composition can make you a better programmer, regardless of what language
                              you use.</p>

                          <p className={"tags grey"}>#events #programming</p>

                          <hr/>

                          <ul className={"verticalList grey"}>
                              <li>1 like</li>
                              <li>&#x2022;</li>
                              <li>2 comments</li>
                              <li>&#x2022;</li>
                              <li>3 views</li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* right column */}

              <div className={"columnRight"}>

                  {/* events */}

                  <section>
                  <h1 className={"rightColumnHeadings"}>EVENTS</h1>

                  <hr/>

                  <div className={"rowContainer"}>
                      <div className={"circle babyBlue"}>
                          <div className={"circleText"}>
                              <h4>11</h4>
                              <h4>Dets</h4>
                          </div>
                      </div>
                      <div className={"sideText"}>
                          <h3>UX Tartu</h3>
                          <ul className={"verticalList grey"}>
                              <li>SPARK</li>
                              <li>&#x2022;</li>
                              <li>Tartu</li>
                              <li>&#x2022;</li>
                              <li className={"red"}>Tomorrow</li>
                          </ul>
                      </div>
                  </div>

                  <div className={"rowContainer"}>
                      <div className={"circle babyPink"}>
                          <div className={"circleText"}>
                              <h4>20</h4>
                              <h4>Dets</h4>
                          </div>
                      </div>
                      <div className={"sideText"}>
                          <h3>Christmas Party</h3>
                          <ul className={"verticalList grey"}>
                              <li>SPARK</li>
                              <li>&#x2022;</li>
                              <li>Tartu</li>
                              <li>&#x2022;</li>
                              <li className={"green"}>Going</li>
                          </ul>
                      </div>
                  </div>

                  <div className={"rowContainer"}>
                      <div className={"circle babyBlue"}>
                          <div className={"circleText"}>
                              <h4>9</h4>
                              <h4>Sept</h4>
                          </div>
                      </div>
                      <div className={"sideText"}>
                          <h3>Refresh 2021</h3>
                          <ul className={"verticalList grey"}>
                              <li>SPARK</li>
                              <li>&#x2022;</li>
                              <li>Tartu</li>
                          </ul>
                      </div>
                    </div>
                  </section>

                  {/* birthdays*/}

                  <section>
                      <h2 className={"rightColumnHeadings marginTop"}>BIRTHDAYS</h2>

                      <hr/>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/52.png'} alt={"Steven Heidel"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Steve Heidel</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Nov 12</li>
                                  <li>&#x2022;</li>
                                  <li className={"red"}>Tomorrow</li>
                              </ul>
                          </div>
                      </div>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/87.png'} alt={"Eva Salomon"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Eva Salomon</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Nov 18</li>
                                  <li>&#x2022;</li>
                                  <li className={"green"}>Going</li>
                              </ul>
                          </div>
                      </div>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/32.png'} alt={"Sarah Goldstein"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Sarah Goldstein</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Nov 29</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  {/* newcomers */}

                  <section>
                      <h2 className={"rightColumnHeadings marginTop"}>NEWCOMERS</h2>

                      <hr/>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/52.png'} alt={"Steven Heidel"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Steve Heidel</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Nov 11</li>
                              </ul>
                          </div>
                      </div>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/87.png'} alt={"Eva Salomon"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Eva Salomon</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Nov 10</li>
                              </ul>
                          </div>
                      </div>

                      <div className={"rowContainer"}>
                          <div>
                              <img className={"circleImage"} src={process.env.PUBLIC_URL + '/img/32.png'} alt={"Sarah Goldstein"}/>
                          </div>
                          <div className={"sideText"}>
                              <h3>Sarah Goldstein</h3>
                              <ul className={"verticalList grey"}>
                                  <li>Sept 11</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  {/* comments */}

                  <section>
                      <h2 className={"rightColumnHeadings marginTop"}>LATEST COMMENTS</h2>

                      <hr/>

                      <p className={"commentsParagraph"}>Practical Functional Programming</p>
                      <div className={"rowContainer"}>
                          <div className={"verticalRule"}>
                          </div>
                          <div className={"sideText"}>
                              <p>Instead it focuses on how thinking about composition can make you a better programmer.</p>
                              <p className={"commentAuthor grey"}>Nov 3 by Steven Heidel</p>
                          </div>
                      </div>

                      <p className={"commentsParagraph"}>Practical Functional Programming</p>
                      <div className={"rowContainer"}>
                          <div className={"verticalRule"}>
                          </div>
                          <div className={"sideText"}>
                              <p>Instead it focuses on how thinking about composition can make you a better
                                  programmer.</p>
                              <p className={"commentAuthor grey"}>Nov 3 by Steven Heidel</p>
                          </div>
                      </div>

                      <p className={"commentsParagraph"}>Practical Functional Programming</p>
                      <div className={"rowContainer"}>
                          <div className={"verticalRule"}>
                          </div>
                          <div className={"sideText"}>
                              <p>Instead it focuses on how thinking about composition can make you a better
                                  programmer.</p>
                              <p className={"commentAuthor grey"} >Nov 3 by Steven Heidel</p>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
      </div>
  );
}

export default App;

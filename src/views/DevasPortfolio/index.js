/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// sections for this page/views";
import WhatWeDo from "views/WhatWeDo";
import WhoWeAre from "views/WhoWeAre";
import Projects from "views/Projects";
import Contact from "views/Contact";

export default function DevasPortfolio() {
  return (
    <>
        <div id="whatwedo">
            <WhatWeDo id="whatwedo"/>
        </div>
        <div id="whoweare">
            <WhoWeAre/>
        </div>
        <div id="projects">
            <Projects />
        </div>
        <div id="contact">
            <Contact />
        </div>
    </>
  );
}

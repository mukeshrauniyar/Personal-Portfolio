import Image from "next/image";

export const metadata = {
  // title: "Mukesh's Dev Portfolio",
  description: "hey this is Mukesh's Dev Portfolio",
}

export default function Home() {
  return (
   <>
       <header>
      <nav>
        <div className="left">Mukesh's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <section className="firstSection">
        <div className="leftSection">
          <div>Hey, My name is <span className="purple">Mukesh</span></div>
          <div>and I am a passionate</div>
          <span id="element"></span>
          <div className="buttons">
            <button className="btn">Download Resume</button>
            <button className="btn">Visit Github</button>
          </div>
        </div>

        <div className="rightSection">
          <img src="/bg.png" alt="bg" />
        </div>
      </section>

      <hr/>

       <section className="secondSection">
        <span className="text-gray">What I have done so far</span>
        <h1>Work Exprences</h1>
        <div className="box">
            <div className="vertical">
                <img className="image-top" src="/htmllogo.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2010-2012)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro rerum. Nisi id corrupti, exercitationem fugiat cum atque explicabo placeat omnis architecto quis.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/csslogo.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2010-2012)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro rerum. Nisi id corrupti, exercitationem fugiat cum atque explicabo placeat omnis architecto quis.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/js.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2010-2012)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro rerum. Nisi id corrupti, exercitationem fugiat cum atque explicabo placeat omnis architecto quis.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/nodejslogo.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2010-2012)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro rerum. Nisi id corrupti, exercitationem fugiat cum atque explicabo placeat omnis architecto quis.
                </div>
            </div>
            <div className="vertical">
                <img className="image-top" src="/react.png" alt=""/>
                <div className="vertical-title">
                    HTML Developer (2010-2012)
                </div>
                <div className="vertical-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro rerum. Nisi id corrupti, exercitationem fugiat cum atque explicabo placeat omnis architecto quis.
                </div>
            </div>
        </div>
       </section>
    </main>
    
    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Mukesh's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-forth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="footer-rights">
           Copyright &copy; mukeshsportfolio.com | All rights reserved
        </div>
    </footer>

    
   </>
  );
}
